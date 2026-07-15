App({
  globalData: {
    userInfo: null,
    appName: '柬税笔记',
    version: '1.0.0',
    // 云开发环境 ID：在微信开发者工具开通「云开发」后获取，替换下方占位符。
    // 未配置（仍为占位符）时不会初始化云能力，小程序自动使用本地静态数据。
    cloudEnv: 'your-cloud-env-id'
  },

  onLaunch() {
    if (!wx.cloud) {
      console.error('当前基础库不支持云开发，请升级到 2.2.3 或以上版本')
      return
    }
    const env = this.globalData.cloudEnv
    if (env && env !== 'your-cloud-env-id') {
      wx.cloud.init({
        env,
        traceUser: true
      })
    }
  }
})
