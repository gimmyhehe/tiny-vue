<template>
  <div class="container">
    <div>
      <tiny-popover placement="top-start" title="标题" width="200" trigger="hover" :content="content">
        <template #reference>
          <tiny-button>悬浮我触发</tiny-button>
        </template>
      </tiny-popover>
    </div>
    <div>
      <tiny-popover
        placement="top-start"
        title="标题"
        v-model="visiable"
        width="200"
        trigger="hover"
        :content="content"
      >
        <div>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</div>
        <template #reference>
          <tiny-button>悬浮我触发</tiny-button>
        </template>
      </tiny-popover>
    </div>
  </div>
</template>

<script lang="jsx">
import { Popover, Button } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinyButton: Button
  },
  data() {
    return {
      visiable: true,
      content: '这是一段内容,这是一段内容,这是一段内容,这是一段内容。'
    }
  }
}
</script>

<style scoped>
.container > div {
  display: inline-block;
  width: 300px;
}
</style>
