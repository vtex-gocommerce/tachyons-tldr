<script>
import OpacityScale from './opacity-scale.component';

export default {
  name: 'opacity-section',
  components: {
    OpacityScale,
  },
  props: {
    opacityScale: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="opacity">
      <h3 class="f3 mv0 navy">Opacity Scale</h3>
    </src-link>
    <opacity-scale class="mb12"
      :scale="opacityScale" />
  </section>
</template>
