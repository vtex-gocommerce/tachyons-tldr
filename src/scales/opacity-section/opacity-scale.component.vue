<script>
export default {
  name: 'spacing-scale',
  props: {
    scale: Object,
  },
};
</script>

<template>
  <div class="flex flex-wrap">

    <div v-for="(value, selector) in scale"
      class="w14 h14 mr3 mb3 relative ba b--red-light code f3 bg-checkered">
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-red-light"
        :class="selector">
      </div>
      <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center navy">
        .{{ selector }}
      </div>
    </div>

  </div>
</template>
