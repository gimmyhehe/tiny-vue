<template>
  <div>
    <tiny-grid :data="tableData" :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="插槽自定义列编辑" :editor="{}">
        <template #edit="data">
          <tiny-autocomplete
            v-model="data.row.name"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
          ></tiny-autocomplete>
        </template>
      </tiny-grid-column>
      <tiny-grid-column field="createdDate" title="创建时间"></tiny-grid-column>
      <tiny-grid-column field="employees" title="人数"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介"></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Autocomplete as TinyAutocomplete } from '@opentiny/vue'

const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    userId: 421000103624183,
    area: '华东区',
    province: '福建省',
    city: '福州',
    contact: '许生',
    telephone: '1234567890',
    address: '福州',
    ipaddress: '192.168.111.111',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800,
    createdDate: '2014-04-30 00:56:00',
    boole: false,
    assets: '1000000',
    rate: 0.9
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    userId: 421000103624183,
    area: '华南区',
    province: '广东省',
    city: '深圳',
    contact: '朱生',
    telephone: '1234567890',
    address: '深圳福田区',
    ipaddress: '192.168.111.1',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 300,
    createdDate: '2016-07-08 12:36:22',
    boole: true,
    assets: '1500000',
    rate: 0.7
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    userId: 441047913162396,
    area: '华南区',
    province: '广东省',
    city: '中山',
    contact: '秦生',
    telephone: '1234567890',
    address: '中山市',
    ipaddress: '192.168.111.120',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 1300,
    createdDate: '2014-02-14 14:14:14',
    boole: false,
    assets: '1500000',
    rate: 0.6
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    userId: 702973890055088,
    area: '华东区',
    province: '福建省',
    city: '龙岩',
    contact: '周生',
    telephone: '1234567890',
    address: '龙岩',
    ipaddress: '192.168.11.111',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 360,
    createdDate: '2013-01-13 13:13:13',
    boole: true,
    assets: '1200000',
    rate: 0.5
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    userId: 702973890055088,
    area: '华南区',
    province: '广东省',
    city: '韶关',
    contact: '郑生',
    telephone: '1234567890',
    address: '韶关',
    ipaddress: '192.168.101.111',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 810,
    createdDate: '2012-12-12 12:12:12',
    boole: true,
    assets: '1500000',
    rate: 0.6
  }
])
const restaurants = ref([
  {
    value: 'GFD科技YX公司',
    address: '福州'
  },
  {
    value: 'WWWW科技YX公司',
    address: '深圳福田区'
  },
  {
    value: 'RFV有限责任公司',
    address: '中山市'
  },
  {
    value: 'TGBYX公司',
    address: '梅州'
  },
  {
    value: 'YHN科技YX公司',
    address: '韶关'
  },
  {
    value: '康康物业YX公司',
    address: '广州天河区'
  }
])

function querySearch(queryString, cb) {
  let list = restaurants.value

  let results = queryString
    ? list.filter((queryString) => {
        return (item) => {
          return item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        }
      })
    : list

  // 调用 callback 返回建议列表的数据
  cb(results)
}
</script>
