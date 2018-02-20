<script>
import SpacingScale from './spacing-scale.component';

export default {
  name: 'spacing-section',
  components: {
    SpacingScale,
  },
  props: {
    spacingScale: Object,
  },
};
</script>

<template>
  <section>
    <src-link to="spacing">
      <h3 class="f3 mv0 navy">Spacing Scale</h3>
    </src-link>
    <spacing-scale class="b mt2"
      :scale="spacingScale" />
  </section>
</template>
