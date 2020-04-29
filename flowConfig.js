log('模块路径： '+ "flowConfig.js")



module.exports = {
  flow: {
    测试: {
      name: '测试',
      workList: [],
      importConfiguration: function () {
        return require('./workConfig/测试')
      }
    },
  }
}