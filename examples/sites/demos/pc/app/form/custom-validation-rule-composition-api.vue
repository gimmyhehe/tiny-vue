<template>
  <div class="demo-form">
    <tiny-form
      ref="ruleFormRef"
      :model="createData"
      :rules="rules"
      :validate-on-rule-change="isvalidate"
      label-width="100px"
      validate-type="text"
      :inline-message="true"
      @validate="validate"
    >
      <tiny-form-item label="用户名" prop="username">
        <tiny-input v-model="createData.username"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="密码" prop="password">
        <tiny-input v-model="createData.password" type="password" show-password></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit()"> 注册 </tiny-button>
        <tiny-button type="primary" @click="removePass"> 清除密码校验 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import {
  Form as TinyForm,
  FormItem as TinyFormItem,
  Input as TinyInput,
  Button as TinyButton,
  Modal
} from '@opentiny/vue'

const ruleFormRef = ref()
const createData = reactive({
  username: '',
  password: ''
})

let validatePass = (rule, value, callback) => {
  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
    callback(new Error('最少八个字符，至少包含一个大写字母，一个小写字母和一个数字'))
  } else {
    callback()
  }
}

const isvalidate = ref(true)
const rules = ref({
  username: [
    { required: true, message: '必填', trigger: 'blur' },
    { min: 2, max: 11, message: '长度必须不小于2', trigger: ['change', 'blur'] }
  ],
  password: [
    { required: true, message: '必填', trigger: 'blur' },
    { validator: validatePass, trigger: 'blur' }
  ]
})

function validate(val) {
  Modal.message({
    message: `表单项被校验后触发的事件,所校验字段为:${val}`,
    status: 'info'
  })
}

function handleSubmit() {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      Modal.alert('校验通过，开始注册！')
    } else {
      Modal.message({ message: '校验不通过！！', status: 'warning' })
      return false
    }
  })
}

function removePass() {
  isvalidate.value = false // 通过配置validate-on-rule-change属性,设置是否在rules属性改变后立即触发一次验证
  rules.value = {
    username: [
      { required: true, message: '必填', trigger: 'blur' },
      { min: 2, max: 11, message: '长度必须不小于2', trigger: 'change' }
    ]
  }
}
</script>

<style scoped>
.demo-form {
  width: 380px;
}
</style>
