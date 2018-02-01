<script>
import WidthScaleGrid from './width-scale-grid.component';

export default {
  name: 'widths-section',
  components: {
    WidthScaleGrid,
  },
  props: {
    widths: Object,
    maxWidths: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="widths">
      <h3 class="f5 mv0 near-black">Width Scale</h3>
    </src-link>
    <width-scale-grid class="mb9"
      :scale="widths.scale" />

    <src-link to="widths">
      <h3 class="f5 mv0 near-black">Width – Thirds</h3>
    </src-link>
    <width-scale-grid class="mb9"
      :scale="widths.third" />

    <src-link to="widths">
      <h3 class="f5 mv0 near-black">Width – Percentage</h3>
    </src-link>
    <width-scale-grid class="mb9"
      :scale="widths.percent" />

    <src-link to="max-widths">
      <h3 class="f5 mv0 near-black">Max Widths</h3>
    </src-link>
    <width-scale-grid
      :scale="maxWidths" />
  </section>
</template>
