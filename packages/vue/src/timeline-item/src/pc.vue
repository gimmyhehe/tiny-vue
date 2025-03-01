<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div
    class="tiny-timeline-item"
    :class="state.computedItemCls"
    :style="state.computedItemStyle"
  >
    <template v-if="!rootProps.vertical">
      <template v-if="rootProps.textPosition === 'right'">
        <div class="icon step-icon" @click="handleClick(node)">
          <span
            v-if="(node.index < state.current || node.error) && !rootProps.onlyNumber"
            :custom-title="node.index + rootProps.start"
            class="icon-wrap"
          >
            <icon-close v-if="node.error" class="tiny-svg-size fixicon" />
            <icon-yes v-else class="tiny-svg-size fixicon" />
          </span>
          <span v-else>{{ rootProps.showNumber ? node.index + rootProps.start : '' }}</span>
        </div>

        <div class="node-description">
          <slot name="text" :slot-scope="node">
            <div class="name" v-text="node[rootProps.nameField]" @click="handleClick(node)"></div>
          </slot>
          <div
            :class="[
              'line',
              {
                'line-done': node.index < state.current,
                'line-end': node.index === state.nodesLength - 1
              }
            ]"
            :style="{ width: state.computedLineWidth }"
          ></div>

          <div class="tiny-timeline-item__description" ref="description">
            <slot name="description" :slot-scope="node">
            {{ node.description }}
            </slot>
            <div v-show="node.index === rootProps.active">
              <slot name="active-node-desc" :slot-scope="node"></slot>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <slot name="top" :slot-scope="node">
          <div class="date-time">
            <span class="time">{{ getDate(node[rootProps.timeField]).date }} {{ getDate(node[rootProps.timeField]).time }}</span>
          </div>
        </slot>
        <div class="tiny-steps__node">
          <div class="icon" @click="handleClick(node)">
            <span v-if="(node.index < state.current || node.error) && !rootProps.onlyNumber" :custom-title="node.index + rootProps.start" class="icon-wrap">
              <icon-close v-if="node.error" class="tiny-svg-size fixicon" />
              <icon-yes v-else class="tiny-svg-size fixicon" />
            </span>
            <span v-else>{{ rootProps.showNumber ? node.index + rootProps.start : '' }}</span>
          </div>

          <!-- 引导线 -->
          <div
            :class="[
              'line',
              {
                'line-done': node.index < state.current,
                'line-end': node.index === state.nodesLength - 1
              }
            ]"
          ></div>
        </div>
        <div class="node-description">
          <slot name="bottom" :slot-scope="node">
            <div class="name" v-text="node[rootProps.nameField]" @click="handleClick(node)"></div>
            <div class="status" v-if="rootProps.showStatus">
              {{ getStatus(node.index) }}
            </div>
          </slot>
        </div>
      </template>
    </template>
    <template v-else>
        <ul>
          <slot name="left" :slot-scope="node">
            <li class="date-time">
              <span class="date">{{ getDate(node[rootProps.timeField]).date }}</span>
              <span class="time">{{ getDate(node[rootProps.timeField]).time }}</span>
            </li>
          </slot>
          <li
            :style="{
              height: node.index === state.nodesLength - 1 ? '' : state.computedSpace || '88px'
            }"
            class="line"
          >
            <div class="icon" @click="handleClick( node)">
              <icon-yes v-if="state.isReverse ? node.index > state.current : node.index < state.current" class="tiny-svg-size" />
              <span v-else>{{
                rootProps.showNumber ? (state.isReverse ? state.nodesLength - 1 - node.index + rootProps.start : node.index + rootProps.start) : ''
              }}</span>
            </div>
          </li>
          <slot name="right" :slot-scope="node">
            <li class="name" v-text="node[rootProps.nameField]"></li>
          </slot>
        </ul>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/timeline-item/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconYes, iconClose } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/steps/index.less'
import type { ITimelineItemApi } from '@opentiny/vue-renderless/types/timeline-item.type'

export default defineComponent({
  emits: ['click'],
  props: [
    ...props,
    'node',
    'space',
    'lineWidth'
  ],
  components: {
    IconYes: iconYes(),
    IconClose: iconClose()
  },
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api
    }) as unknown as ITimelineItemApi
  }
})
</script>
