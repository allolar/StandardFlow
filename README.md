### QQ交流群 1019208967 webpack-autojs
#### 框架思想

1. 所有脚本都是一个流程
2. 每个流程有若干工作
3. 框架定义了两个个基础类: flow, work
4. 代码应该分层 controller中写主逻辑, service中写细节

#### 框架使用

1. 入口文件是 main.js

#### 目录结构

```
1. main 入口文件
2. init 中检查版本
3. controller    flow整体逻辑
4. workConfig    work逻辑
5. service       具体业务操作逻辑
6. lib 业务无关的函数集合
7. config 配置文件
8. 文件配置 配置文件
9. app界面信息 配置文件
10. middleware 是一些独立的脚本, 用于在 main.js 之前执行, 比如验证账号之类的, 脚本尽量独立, 互不干扰
```
脚本写的差不多了, 就剩下维护的话,
一般就是改 app界面信息, 比如抖音三天两头更新脚本更换控件的id


workConfig中是写每个工作具体内容的地方,
service 是写工作中某件事的具体逻辑的地方.
``` 
one flow = work1 + work2 + work3
one work = service1 + service2 + service3
```
