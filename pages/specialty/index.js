const { specialtyCategories, specialties } = require('../../utils/data')

Page({
  data: {
    categories: specialtyCategories,
    allSpecialties: specialties,
    filteredSpecialties: specialties,
    activeCategory: 'all',
    detailItem: null,
    showDetail: false
  },

  onLoad(options) {
    if (options.id) {
      const item = specialties.find(s => s.id === parseInt(options.id))
      if (item) {
        this.setData({ detailItem: item, showDetail: true })
      }
    }
  },

  // 分类切换
  onCategoryChange(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ activeCategory: category })
    this.filterSpecialties()
  },

  // 筛选
  filterSpecialties() {
    const { activeCategory, allSpecialties } = this.data
    const filtered = activeCategory === 'all'
      ? allSpecialties
      : allSpecialties.filter(item => item.category === activeCategory)
    this.setData({ filteredSpecialties: filtered })
  },

  // 查看详情
  onViewDetail(e) {
    const { id } = e.currentTarget.dataset
    const item = this.data.allSpecialties.find(s => s.id === id)
    this.setData({ detailItem: item, showDetail: true })
  },

  // 关闭详情
  onCloseDetail() {
    this.setData({ showDetail: false, detailItem: null })
  }
})
