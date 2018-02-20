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
      <h3 class="f3 mv0 navy">Type Scale</h3>
    </src-link>
    <type-scale-grid class="b mb12 mt6"
      :scale="typeScale"
      show-grid />

    <src-link to="font-weight">
      <h3 class="f3 mv0 navy">Font Weights</h3>
    </src-link>
    <type-scale-grid class="f9"
      :scale="fontWeight" />
  </section>
</template>
