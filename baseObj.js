log("模块路径： " + "baseObj.js");

let { JInit, JFlow, JWork, JConfig } = require("./jia/main");
let config = require("./config");
let lib = require("./lib");

let storage = config.storage;

let appVersion = lib.getAppVersion(config.appName);
log("appVersion = " + appVersion);

let baseObj = {
  JInit: JInit,
  JFlow: JFlow,
  JWork: JWork,
  JConfig: JConfig,
  config: config,
  storage: storage,
  lib: lib,
};

module.exports = baseObj;
