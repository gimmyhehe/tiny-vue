<template>
  <tiny-grid :data="tableData" :edit-config="{ trigger: 'click', mode: 'cell', showStatus: true }">
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column
      field="id"
      title="名称（Popeditor）"
      :editor="{ component: Popeditor, attrs: getPopEditorOp }"
      :format-config="{
        type: 'enum',
        async: true,
        data: popeditOptions,
        label: 'name',
        value: 'id'
      }"
    ></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建时间"></tiny-grid-column>
    <tiny-grid-column field="employees" title="人数"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, Popeditor } from '@opentiny/vue'

const popeditOptions = ref([])
const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 800,
    createdDate: '2014-04-30 00:56:00'
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 300,
    createdDate: '2016-07-08 12:36:22'
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 1300,
    createdDate: '2014-02-14 14:14:14'
  },
  {
    id: '4',
    name: 'TGB科技YX公司',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 360,
    createdDate: '2013-01-13 13:13:13'
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。',
    employees: 810,
    createdDate: '2012-12-12 12:12:12'
  }
])

onMounted(() => {
  getOptions().then((data) => {
    popeditOptions.value = data
  })
})

function getPopEditorOp() {
  return {
    valueField: 'id',
    textField: 'name',
    gridOp: {
      columns: [
        {
          field: 'id',
          title: 'ID',
          width: 40
        },
        {
          field: 'name',
          title: '名称'
        },
        {
          field: 'province',
          title: '省份',
          width: 80
        },
        {
          field: 'city',
          title: '城市',
          width: 80
        }
      ],
      data: popeditOptions.value
    }
  }
}

function getOptions() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          name: 'GFD科技YX公司',
          city: '福州',
          province: '福建省'
        },
        {
          id: '2',
          name: 'WWW科技YX公司',
          city: '深圳',
          province: '广东省'
        },
        {
          id: '3',
          name: 'RFV有限责任公司',
          city: '中山',
          province: '广东省'
        },
        {
          id: '4',
          name: 'TGB科技YX公司',
          city: '龙岩',
          province: '福建省'
        },
        {
          id: '5',
          name: 'YHN科技YX公司',
          city: '韶关',
          province: '广东省'
        }
      ])
    }, 200)
  })
}
</script>
