<template>
  <tiny-grid ref="tinyTable" height="300">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
    <tiny-grid-column field="city" title="地址"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script lang="jsx">
import { Grid, GridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid: Grid,
    TinyGridColumn: GridColumn
  },
  data() {
    return {}
  },
  created() {
    this.mockData()
  },
  methods: {
    // 生成 1000 条模拟数据
    mockData() {
      setTimeout(() => {
        const randomAlphabets = () => {
          return Array.from({ length: Math.ceil(Math.random() * 10) })
            .map(() => String.fromCharCode(65 + Math.floor(26 * Math.random())))
            .join('')
        }

        const data = Array.from({ length: 1000 }).map((item, i) => {
          return {
            id: randomAlphabets() + i + 1,
            name: randomAlphabets() + '科技YX公司',
            city: ['福州', '深圳', '中山', '龙岩', '韶关', '黄冈', '赤壁', '厦门'][Math.floor(Math.random() * 8)],
            employees: Math.ceil(Math.random() * 10000),
            createdDate: '2011-11-11 11:11:11'
          }
        })

        this.$refs.tinyTable.loadData(data)
      }, 200)
    }
  }
}
</script>
