export interface IMouldeCache {
  [index: string]: ICache;
}

export interface ICache {
  code: string;
  fn?: any;
}

export interface IConfig {
  modules: {
    [index: string]: string;
  };
  // eval执行顺序，如果A依赖B，那么B必须位于A前面，即['B', 'A']
  order?: string[];
  threadNum?: number;
}

class Kurumi {
  // cache
  moduleCache: IMouldeCache = {};
  config: IConfig;

  // 是否处于预加载状态
  isPrefetch = false;
  prefetchQueue: string[] = []; // svg预加载队列

  threadNum = 5;

  constructor(config: IConfig) {
    this.config = config;
  }

  private downloadSourceCode = async (url: string) => {
    return await new Promise<string>((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.onreadystatechange =  () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(xhr.responseText);
        } else if (xhr.readyState == 4 && xhr.status !== 200) {
          throw(new Error(`dowload failed: ${url}！！！`));
        }
      }
    })
  };

  private umd = (name: string, sourceCode: string) => {
    const umd = `(function(){
      var exports = {};
      var module = {};
      module.exports = {};
      var require = function (name) {
        const npmModule = that.moduleCache[name].fn;
        if (npmModule) {
          return npmModule;
        } else {
          throw(new Error('${name} depend on ' + name + ', please first load ${name}' ));
        }
      };
    ` + sourceCode + `
    return module.exports || exports.default;
    })()`;
    return umd;
  };

  private injectModule = async (name: string) => {
    const url = this.config.modules[name];
    const sourceCode = await this.downloadSourceCode(url);
    const umdCode = this.umd(name, sourceCode);
    this.moduleCache[name] = {code: umdCode};
  }

  private eval = (name: string) => {
    const that = this;
    const fn = eval(this.moduleCache[name].code);
    this.moduleCache[name].fn = fn
    // 释放内存
    this.moduleCache[name].code = '';
    return fn;
  }

  private getOrder = () => {
    return this.config.order || Object.keys(this.config.modules);
  }

  // 开始安装  一般配置在onload后
  install = async () => {
    if (this.isPrefetch) {
      throw(new Error('prefetching!'));
    }
    this.isPrefetch = true;
    const keys = Object.keys(this.config.modules);

    // 没有需要预加载的内容
    if (keys.length === 0) {
      this.isPrefetch = false;
    } else {
      this.prefetchQueue = keys;
      await this.popQueue();
    }

    // source code -> fn
    this.getOrder().forEach(this.eval);
    return this;
  }

  // 出队
  private popQueue = async () => {
    if (this.prefetchQueue.length === 0) {
      this.isPrefetch = false;
      return;
    }
    const temp = this.prefetchQueue.splice(0, this.threadNum);
    await Promise.all(temp.map(this.injectModule));
    await this.popQueue();
    return true;
  }

  get = (name: string) => {
    if (!this.moduleCache[name]) {
      throw(new Error(`no ${name} module! please install firstly!`))
    }
    const fn = this.moduleCache[name].fn;
    if (fn) {
      return fn;
    }
    this.injectModule(name);
    return this.eval(name);
  };

  // 修改最大并发下载数
  setThreadNum = (num: number) => {
    this.threadNum = num;
  };
}
export default Kurumi;