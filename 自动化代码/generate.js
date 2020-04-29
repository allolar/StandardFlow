const process = require("process");
const fs = require("fs");
let workList = ["动作一", "动作二", "动作三"];
let workDetailList = [];

var len = workList.length;
for (var i = 0; i < len; i++) {
  let workName = workList[i];
  console.log(workName);
  let result = `
  ${workName}: {
    name: "${workName}",
    limitTime: 5000,
    action: function() {
      service.${workName}();
    }
  }`;
  console.log(result);
  workDetailList.push(result);
}
let result = workDetailList.join(",\n");
console.log(result);

let callback = err => {
  if (err) throw err;
  console.log("文件已被保存");
};

fs.writeFile("自动生成的workList.json", result, "utf8", callback);

let serverList = [];
len = workList.length;
for (let i = 0; i < len; i++) {
  let workName = workList[i];
  console.log(workName);
  let result = `  ${workName}: ${workName}`;
  console.log(result);
  serverList.push(result);
}
result = serverList.join(",\n");
console.log(result);
fs.writeFile("自动生成的service.json", result, "utf8", callback);

let fnList = [];
len = workList.length;
for (let i = 0; i < len; i++) {
  let workName = workList[i];
  console.log(workName);
  let result = `let ${workName} = function() {
  log("${workName}");
};`;
  console.log(result);
  fnList.push(result);
}
result = fnList.join("\n\n");
console.log(result);
fs.writeFile("自动生成的函数定义.json", result, "utf8", callback);
