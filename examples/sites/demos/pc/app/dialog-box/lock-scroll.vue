<template>
  <div>
    <tiny-button @click="box1 = true">允许滚动背景</tiny-button>
    <tiny-dialog-box :lock-scroll="false" v-model:visible="box1" title="消息" width="30%">
      <span>不锁定被遮罩内容的滚动</span>
      <template #footer>
        <tiny-button type="primary" @click="box1 = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>

    <tiny-button @click="box2 = true">不允许滚动背景</tiny-button>
    <tiny-dialog-box :lock-scroll="true" v-model:visible="box2" title="消息" width="30%">
      <span>锁定被遮罩内容的滚动</span>
      <template #footer>
        <tiny-button type="primary" @click="box2 = false">确 定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { Button, DialogBox } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      box1: false,
      box2: false
    }
  }
}
</script>
