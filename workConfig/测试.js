log("模块路径： " + "workConfig/测试.js");

let service = require("../service/service");
let 一个小时 = 1 * 60 * 60 * 1000;

module.exports = {
  动作一: {
    name: "动作一",
    limitTime: 5000,
    action: function () {
      service.动作一();
    },
  },

  动作二: {
    name: "动作二",
    limitTime: 5000,
    action: function () {
      service.动作二();
    },
  },

  动作三: {
    name: "动作三",
    limitTime: 5000,
    action: function () {
      service.动作三();
    },
  },
};
