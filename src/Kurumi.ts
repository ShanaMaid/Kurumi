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

const Kurumi = async (url: string) => {
  const moduleContent = await downloadScript(url);
  const script = `(function(){
    var exports = {};
    var module = {};
    module.exports = {};
  ` + moduleContent + `
  return module.exports || exports.default;
  })()`;
  return eval(script);
};
export default Kurumi;