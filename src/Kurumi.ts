const downloadScript = async (url: string) => {
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

const npmCache = {};

const Kurumi = async (name: string, url: string) => {
  const moduleContent = await downloadScript(url);
  const script = `(function(){
    var exports = {};
    var module = {};
    module.exports = {};
    var require = function (name) {
      const npmModule = npmCache[name];
      if (npmModule) {
        return npmModule;
      } else {
        throw(new Error('${name} depend on ' + name + ', please first load ${name}' ));
      }
    };
  ` + moduleContent + `
  npmCache[name] = module.exports || exports.default;
  return npmCache[name];
  })()`;
  npmCache;
  return eval(script);
};
export default Kurumi;