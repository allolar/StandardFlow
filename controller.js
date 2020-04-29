log("模块路径： " + "controller.js");

let baseObj = require("./baseObj");
let config = baseObj.config;
let lib = baseObj.lib;
let service = require("./service/service");

let controller = {
  run() {
    let flowName = "测试";
    let workList = ["动作一", "动作二", "动作三"];
    let flow = service.createFlow(flowName);
    flow.store.共享变量 = "abc";
    flow.setWorkList(workList);
    log("flow run 开始");
    flow.run();
    log("flow run 结束");
    log(flowName + "完成");
  },
};

module.exports = controller;
