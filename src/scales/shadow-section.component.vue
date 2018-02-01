<script>
import BoxScaleGrid from './box-scale-grid.component'

export default {
  name: 'shadow-section',
  components: {
    BoxScaleGrid
  },
  props: {
    shadowScale: Object
  }
}
</script>

<template>
  <section>
    <src-link to="box-shadow">
      <h3 class="f5 mv0 near-black">Shadow Scale</h3>
    </src-link>
    <box-scale-grid
      :scale="shadowScale" />
  </section>
</template>
