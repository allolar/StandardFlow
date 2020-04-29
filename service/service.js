// eslint-disable-next-line no-unused-vars

let baseObj = require("../baseObj");
let JFlow = baseObj.JFlow;
let config = baseObj.config;
let lib = baseObj.lib;

let flowConfig = require("../flowConfig");

let storage = config.storage;

var 求差集 = function (a, b) {
  return a.filter(function (v) {
    return !(b.indexOf(v) > -1);
  });
};
function getTime(time, rule) {
  var rule = rule || "yyyy-MM-dd HH:mm:ss";
  if (time) {
    return new java.text.SimpleDateFormat(rule).format(new Date(time));
  } else {
    return new java.text.SimpleDateFormat(rule).format(new Date());
  }
}

let 动作一 = function () {
  log("动作一");
};

let 动作二 = function () {
  log("动作二");
};

let 动作三 = function () {
  log("动作三");
};
module.exports = {
  createFlow(flowName) {
    if (!flowConfig.flow[flowName]) {
      throw new Error("flowConfig中没有该属性: " + flowName);
    }
    let workConfig = flowConfig.flow[flowName].importConfiguration();
    workConfig = Object.assign(config, workConfig);
    // throw new Error('请传入 name, workList, workConfig 三个参数, 类型分别为,': 字符串, 数组, 对象')
    let workList = flowConfig.flow[flowName].workList;
    let flow = new JFlow(flowName, workList, workConfig);
    return flow;
  },
  toastAndAlert(msg) {
    lib.toastAndAlert(msg);
  },
  stopSelf() {
    lib.stopSelf();
  },
  动作一: 动作一,
  动作二: 动作二,
  动作三: 动作三,
};
