<script>
import R from 'ramda';
import { mapGetters, mapState, mapMutations } from 'vuex';
import BorderSection from './border-section.component';
import SpacingSection from './spacing-section';
import TypographySection from './typography-section';
import WidthsSection from './widths-section';
import HeightsSection from './heights-section.component';
import ShadowSection from './shadow-section.component';
import OpacitySection from './opacity-section';

let lastKnownScrollPosition = 0;
let ticking = false;

export default {
  name: 'scales-view',
  components: {
    SpacingSection,
    TypographySection,
    WidthsSection,
    HeightsSection,
    BorderSection,
    ShadowSection,
    OpacitySection,
  },
  mounted() {
    const locations = R.compose(R.map(n => n.$el.getBoundingClientRect().top), R.values)(this.$refs);
    const threshold = window.innerHeight * 0.25;

    window.addEventListener('scroll', () => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          this.updateScrollSpy(locations, threshold, lastKnownScrollPosition);
          ticking = false;
        });
      }

      ticking = true;
    });
  },
  destroyed() {
    window.removeEventListener('scroll', () => {});
  },
  computed: {
    ...mapState('scales', ['categories', 'activeCategoryIndex']),
    ...mapGetters('tachyons', [
      'typeScale',
      'fontWeight',
      'widths',
      'maxWidths',
      'borderRadius',
      'borderWidths',
      'heights',
      'spacingScale',
      'opacityScale',
      'shadowScale',
    ]),
  },
  methods: {
    ...mapMutations('scales', ['selectScaleCategory']),
    updateScrollSpy(locations, threshold, scrollY) {
      const idx = R.findIndex(location => Math.abs(location - scrollY) < threshold, locations);
      if (idx > -1) this.selectScaleCategory(idx);
    },
    goTo(category) {
      if (this.$refs[category]) {
        this.$refs[category].$el.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="mw8 center flex">

      <section-menu class="dn db-l db-xl mr9"
        :active-index="activeCategoryIndex">
        <section-menu-item
          v-for="category in categories"
          :to="'#' + category"
          :key="category"
          @click.native="goTo(category)">
          {{ category }}
        </section-menu-item>
      </section-menu>

      <div class="w-100 w-90-l">
        <spacing-section data-section-index="0" ref="Spacing"
          class="pt2 mb10"
          :spacingScale="spacingScale" />
        <TypographySection data-section-index="1" ref="Typography"
          class="pt2 mb10"
          :typeScale="typeScale"
          :fontWeight="fontWeight" />
        <widths-section data-section-index="2" ref="Widths"
          class="pt2 mb10"
          :widths="widths"
          :maxWidths="maxWidths" />
        <heights-section data-section-index="3" ref="Heights"
          class="pt2 mb10"
          :heights="heights" />
        <border-section data-section-index="4" ref="Border"
          class="pt2 mb10"
          :borderRadius="borderRadius"
          :borderWidths="borderWidths" />
        <shadow-section data-section-index="5" ref="Shadow"
          class="pt2 mb10"
          :shadowScale="shadowScale" />
        <opacity-section data-section-index="6" ref="Opacity"
          class="pt2 mb10"
          :opacityScale="opacityScale" />
      </div>
    </div>
  </div>
</template>
