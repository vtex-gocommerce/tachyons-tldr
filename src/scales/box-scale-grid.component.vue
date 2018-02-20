<script>
export default {
  name: 'box-scale-grid',
  props: {
    scale: Object,
    showValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="flex flex-wrap">
    <div class="mr5 mb4"
      v-for="(step, selector, index) in scale">
      <div class="f3 code center flex items-center justify-center mb3 bg-navy-20 b-blue navy-80 w14"
      :class="[step.classNames, selector]">
        .{{ selector }}
      </div>

      <div v-if="showValue"
        class="mr3 tc f2 navy code w-100">
        ({{ step.value }})
      </div>
    </div>
  </div>
</template>
