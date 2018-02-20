<script>
import BoxScaleGrid from './box-scale-grid.component';

export default {
  name: 'shadow-section',
  components: {
    BoxScaleGrid,
  },
  props: {
    shadowScale: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="box-shadow">
      <h3 class="f3 mv0 navy">Shadow Scale</h3>
    </src-link>
    <box-scale-grid class="mb12"
      :scale="shadowScale" />
  </section>
</template>
