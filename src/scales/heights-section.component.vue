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
      <h3 class="f3 mv0 navy">Height Scale</h3>
    </src-link>
    <box-scale-grid class="mb12 mt6 items-start"
      :scale="heights.scale" showValue />

    <src-link to="heights">
      <h3 class="f3 mv0 navy">Height – Parent Percentage</h3>
    </src-link>
    <box-scale-grid class="mb12 h14"
      :scale="heights.percent" />

    <src-link to="heights">
      <h3 class="f3 mv0 navy">Height – Viewport Percentage</h3>
    </src-link>
    <box-scale-grid
      :scale="heights.vh" />
  </section>
</template>
