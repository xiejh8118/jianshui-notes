const { travelCategories, travelSpots } = require('../../utils/data')

Page({
  data: {
    categories: travelCategories,
    allSpots: travelSpots,
    filteredSpots: travelSpots,
    activeCategory: 'all',
    detailSpot: null,
    showDetail: false
  },

  onLoad(options) {
    // 如果有传入id，直接展示对应景点详情
    if (options.id) {
      const spot = travelSpots.find(s => s.id === parseInt(options.id))
      if (spot) {
        this.setData({ detailSpot: spot, showDetail: true })
      }
    }
  },

  // 分类切换
  onCategoryChange(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ activeCategory: category })
    this.filterSpots()
  },

  // 筛选
  filterSpots() {
    const { activeCategory, allSpots } = this.data
    const filtered = activeCategory === 'all'
      ? allSpots
      : allSpots.filter(item => item.category === activeCategory)
    this.setData({ filteredSpots: filtered })
  },

  // 查看详情
  onViewDetail(e) {
    const { id } = e.currentTarget.dataset
    const spot = this.data.allSpots.find(s => s.id === id)
    this.setData({ detailSpot: spot, showDetail: true })
  },

  // 关闭详情
  onCloseDetail() {
    this.setData({ showDetail: false, detailSpot: null })
  }
})
