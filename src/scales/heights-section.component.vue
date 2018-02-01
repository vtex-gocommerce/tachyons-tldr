<script>
import BoxScaleGrid from './box-scale-grid.component';

export default {
  name: 'heights-section',
  components: {
    BoxScaleGrid,
  },
  props: {
    heights: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="heights">
      <h3 class="f5 mv0 near-black">Height Scale</h3>
    </src-link>
    <box-scale-grid class="mb9 items-start"
      :scale="heights.scale" showValue />

    <src-link to="heights">
      <h3 class="f5 mv0 near-black">Height – Parent Percentage</h3>
    </src-link>
    <box-scale-grid class="mb9 h5"
      :scale="heights.percent" />

    <src-link to="heights">
      <h3 class="f5 mv0 near-black">Height – Viewport Percentage</h3>
    </src-link>
    <box-scale-grid
      :scale="heights.vh" />
  </section>
</template>
