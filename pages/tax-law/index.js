import { taxLawCategories, taxLaws } from '../../utils/data'

Page({
  data: {
    categories: taxLawCategories,
    allLaws: taxLaws,
    filteredLaws: taxLaws,
    activeCategory: 'all',
    searchValue: '',
    expandedId: null
  },

  onLoad() {
    // 页面加载
  },

  // 分类切换
  onCategoryChange(e) {
    const category = e.currentTarget.dataset.category
    this.setData({ activeCategory: category })
    this.filterLaws()
  },

  // 搜索
  onSearch(e) {
    this.setData({ searchValue: e.detail.value })
    this.filterLaws()
  },

  // 清空搜索
  onClearSearch() {
    this.setData({ searchValue: '' })
    this.filterLaws()
  },

  // 筛选逻辑
  filterLaws() {
    const { activeCategory, searchValue, allLaws } = this.data
    let filtered = allLaws

    // 分类筛选
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory)
    }

    // 搜索筛选
    if (searchValue.trim()) {
      const keyword = searchValue.trim().toLowerCase()
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(keyword) ||
        item.summary.toLowerCase().includes(keyword) ||
        item.tags.some(tag => tag.toLowerCase().includes(keyword))
      )
    }

    this.setData({ filteredLaws: filtered, expandedId: null })
  },

  // 展开/折叠详情
  onToggleDetail(e) {
    const id = e.currentTarget.dataset.id
    const { expandedId } = this.data
    this.setData({
      expandedId: expandedId === id ? null : id
    })
  },

  // 复制内容
  onCopyContent(e) {
    const { content } = e.currentTarget.dataset
    wx.setClipboardData({
      data: content,
      success() {
        wx.showToast({ title: '已复制', icon: 'success' })
      }
    })
  }
})
