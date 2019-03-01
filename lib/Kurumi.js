var _this = this;
import * as tslib_1 from "tslib";
var downloadScript = function (url) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new Promise(function (resolve) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', url);
                    xhr.send();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                            resolve(xhr.responseText);
                        }
                        else if (xhr.readyState == 4 && xhr.status !== 200) {
                            throw (new Error("dowload failed: " + url + "\uFF01\uFF01\uFF01"));
                        }
                    };
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var Kurumi = function (url) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    var moduleContent, script;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, downloadScript(url)];
            case 1:
                moduleContent = _a.sent();
                script = "(function(){\n    var exports = {};\n    var module = {};\n    module.exports = {};\n  " + moduleContent + "\n  return module.exports || exports.default;\n  })()";
                return [2 /*return*/, eval(script)];
        }
    });
}); };
export default Kurumi;
//# sourceMappingURL=Kurumi.js.map