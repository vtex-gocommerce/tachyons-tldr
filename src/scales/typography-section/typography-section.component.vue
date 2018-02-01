<script>
import TypeScaleGrid from './type-scale-grid.component';

export default {
  name: 'typography-section',
  components: {
    TypeScaleGrid,
  },
  props: {
    typeScale: Object,
    fontWeight: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="type-scale">
      <h3 class="f5 mv0 near-black">Type Scale</h3>
    </src-link>
    <type-scale-grid class="b mb9"
      :scale="typeScale"
      show-grid />

    <src-link to="font-weight">
      <h3 class="f5 mv0 near-black">Font Weights</h3>
    </src-link>
    <type-scale-grid class="f1"
      :scale="fontWeight" />
  </section>
</template>
