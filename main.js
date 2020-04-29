log("模块路径： " + "main.js");

let baseObj = require("./baseObj");
let lib = baseObj.lib;
let controller = require("./controller");

// 全局变量就在main.js中设置, 因为不做点什么, 好像这个文件就没必要存在
// =========================单例toast 开始===============================================================
let singleton;
var storageSingleton = storages.create("singleton");
toast = (function () {
  function TOAST(msg) {
    storageSingleton.put("msg", msg.toString());
    ui.run(function () {
      let msg = storageSingleton.get("msg");
      if (!singleton) {
        // log('创建新的toast实例')
        singleton = android.widget.Toast.makeText(context, msg, android.widget.Toast.LENGTH_SHORT);
      } else {
        singleton.setText(msg);
      }
      singleton.show();
      log(msg);
    });
  }
  return TOAST;
})();

toastLog = toast;
// =========================单例toast 结束===============================================================

// // 执行主脚本之前, 要做的一些事情, 比如验证账号什么的, 虽然很好破解, 聊胜于无
// let middlewareList = [
//   require('./middleware/1'),
//   require('./middleware/2'),
//   require('./middleware/3'),
// ]
// middlewareList.map((item) => {
//   item()
// })

let _log = log;
let 养号日志所在文件 = files.join(files.getSdcardPath(), "养号日志.txt");
files.createWithDirs(养号日志所在文件);
files.write(养号日志所在文件, "");
log = function (msg) {
  _log(msg);
  files.append(养号日志所在文件, msg + "\n");
};

lib.stopOtherScript();
controller.run();

// 完成后的操作
toastLog("完成");
lib.stopSelf();
