<script>
import { mapState, mapGetters } from 'vuex';
import ColourBlock from './colour-block.component';
import ColourChip from './colour-chip.component';

export default {
  name: 'palette-view',
  components: { ColourChip, ColourBlock },
  computed: {
    ...mapState('tachyons', ['colours']),
    ...mapGetters('tachyons', ['solidColours']),
  },
};
</script>

<template>
  <div>
    <div class="mw8 center">

      <h2 class="navy">Solid</h2>
      <div class="mb6 flex flex-wrap">
        <colour-block class="w-50 w-33-m w-20-l w-20-xl"
          v-for="(colour, name) in solidColours"
          :colour="colour"
          :key="name"
          :name="name" />
      </div>

      <h2 class="navy">Alpha</h2>
      <div class="flex flex-wrap">
        <colour-chip class="w-50 w-33-m w-20-l w-20-xl mb3 pr3"
          v-for="(colour, name, index) in colours.alpha"
          :colour="colour"
          :key="name"
          :name="name" />
      </div>
    </div>
  </div>
</template>
