<script>
import anime from 'animejs';
import R from 'ramda';

export default {
  name: 'spacing-scale',
  props: {
    scale: Object,
  },
  computed: {
    steps() {
      return R.compose(R.replace(/,(?=[^,]*$)/, ' &'), R.join(', '), R.values)(this.scale);
    },
  },
  methods: {
    enter(el, done) {
      anime({
        targets: el,
        easing: 'easeOutCubic',
        scaleX: {
          value: [0, 1],
          duration: 600,
          delay: 1200,
        },
        onComplete: done,
      });
    },
  },
};
</script>

<template>
  <div>
    <div class="f2 lh-copy navy fw5 code mb4">
      {{ steps }}
    </div>

    <transition-group appear
      tag="div"
      v-bind:css="false"
      @enter="enter"
      class="flex debug-grid-green">
      <div v-for="(value, index) in scale"
        :key="index"
        class="h14 bg-navy white mr4 origin-0-0"
        :style="{ width: value }">
      </div>
    </transition-group>
  </div>
</template>
