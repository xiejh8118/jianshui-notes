App({
  onLaunch(options) {
    // 小程序初始化
    console.log('柬税笔记 小程序启动', options)
  },
  onShow(options) {
    // 小程序显示
  },
  onHide() {
    // 小程序隐藏
  },
  globalData: {
    userInfo: null,
    appName: '柬税笔记',
    version: '1.0.0'
  }
})
