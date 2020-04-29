log("模块路径： " + "lib.js");
function stopOtherScript() {
  (function () {
    log('stopOtherScript----------------------------------')
    var enginesAll = engines.all();
    var len = enginesAll.length;
    for (var i = 0; i < len; i++) {
      let ScriptEngine = enginesAll[i];
      if (engines.myEngine().toString() == ScriptEngine.toString()) {
      } else {
        ScriptEngine.forceStop();
      }
    }
  })();
}
function gameOverAlert(scriptName) {
  home();
  sleep(1000);
  home();
  sleep(1000);
  app.launchApp("设置");

  for (var i = 0; i < 3; i++) {
    toastLog("任务执行完成");
    sleep(2000);
  }
  let gameOverScriptContent =
    '"ui";\n' +
    'var storage = storages.create("scriptName");' +
    'var scriptName = storage.get("scriptName");' +
    "activity.getWindow().setFlags(-1, -1);" +
    "dialogs.build({" +
    '  title: "任务执行完成",' +
    '  content: "任务名字: " + scriptName,' +
    '}).on("cancel", () => {' +
    "  ui.finish();" +
    "}).show();";

  var storage = storages.create("scriptName");
  storage.put("scriptName", scriptName);
  engines.execScript("gameOverAlert", gameOverScriptContent);
}

let lib = {
  stopOtherScript: stopOtherScript,
  downloadFile: function (url, path) {
    var r = http.get(url);
    r = r.body.bytes();
    files.writeBytes(path, r);
    return path;
  },
  getAppVersion(appName) {
    function getPackageVersion(packageName) {
      importPackage(android.content);
      var pckMan = context.getPackageManager();
      var packageInfo = pckMan.getPackageInfo(packageName, 0);
      return packageInfo.versionName;
    }
    var packageName = getPackageName(appName);
    return getPackageVersion(packageName);
  },
  toastAndAlert(info) {
    toastLog(info);
    alert(info);
  },
  stopSelf() {
    log("停止自己 开始");
    engines.myEngine().forceStop();
    log("停止自己 结束");
  },
  任务完成提示(scriptName, flag) {
    console.log("任务完成提示 函数的参数");
    console.log("scriptName = " + scriptName);
    console.log("flag = " + flag);
    log("任务完成提示 (scriptName, flag) {");
    log("scriptName = ");
    log(scriptName);
    if (flag) {
      log("flag 为 true, 执行弹框提示");
      gameOverAlert(scriptName);
      return;
    } else {
      log("flag 为 false, 不执行弹框提示");
    }
    for (var i = 0; i < 2; i++) {
      toastLog("任务执行完成: " + scriptName);
      sleep(2000);
    }
  },
};
module.exports = lib;
