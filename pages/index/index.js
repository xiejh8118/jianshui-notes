import { banners, quickEntries, travelSpots, specialties } from '../../utils/data'

Page({
  data: {
    banners,
    quickEntries,
    featuredSpots: travelSpots.slice(0, 3),
    featuredSpecialties: specialties.slice(0, 4),
    currentBanner: 0
  },

  onLoad() {
    // 页面加载
  },

  onShow() {
    // 页面显示
  },

  // 轮播图切换
  onBannerChange(e) {
    this.setData({
      currentBanner: e.detail.current
    })
  },

  // 快捷入口点击
  onEntryTap(e) {
    const { page } = e.currentTarget.dataset
    wx.switchTab({ url: page })
  },

  // 轮播图点击
  onBannerTap(e) {
    const { page } = e.currentTarget.dataset
    if (page) {
      wx.switchTab({ url: page })
    }
  },

  // 景点点击
  onSpotTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/travel/index?id=${id}`
    })
  },

  // 特产点击
  onSpecialtyTap(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/specialty/index?id=${id}`
    })
  },

  // 查看更多旅游
  onMoreTravel() {
    wx.switchTab({ url: '/pages/travel/index' })
  },

  // 查看更多特产
  onMoreSpecialty() {
    wx.switchTab({ url: '/pages/specialty/index' })
  }
})
