<template>
  <tiny-tooltip effect="light" :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom">
    <button class="tiny-button tiny-button--primary" @click="disabled = !disabled">
      点击{{ disabled ? '开启' : '关闭' }} tooltip 功能
    </button>
  </tiny-tooltip>
</template>

<script lang="jsx">
import { Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTooltip: Tooltip
  },
  data() {
    return {
      disabled: false
    }
  }
}
</script>
