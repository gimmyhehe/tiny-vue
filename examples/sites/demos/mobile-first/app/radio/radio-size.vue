<template>
  <div>
    <tiny-radio-group v-model="value" size="medium">
      <tiny-radio-button label="1"> 日度 </tiny-radio-button>
      <tiny-radio-button label="2"> 月度 </tiny-radio-button>
      <tiny-radio-button label="3"> 年度 </tiny-radio-button>
    </tiny-radio-group>
    <div style="margin-top: 20px">
      <tiny-radio-group v-model="value" size="small">
        <tiny-radio-button label="1"> 日度 </tiny-radio-button>
        <tiny-radio-button label="2"> 月度 </tiny-radio-button>
        <tiny-radio-button label="3"> 年度 </tiny-radio-button>
      </tiny-radio-group>
    </div>
    <div style="margin-top: 20px">
      <tiny-radio-group v-model="value" size="mini">
        <tiny-radio-button label="1"> 日度 </tiny-radio-button>
        <tiny-radio-button label="2"> 月度 </tiny-radio-button>
        <tiny-radio-button label="3"> 年度 </tiny-radio-button>
      </tiny-radio-group>
    </div>
  </div>
</template>

<script>
import { RadioButton, RadioGroup } from '@opentiny/vue'

export default {
  components: {
    TinyRadioButton: RadioButton,
    TinyRadioGroup: RadioGroup
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>
