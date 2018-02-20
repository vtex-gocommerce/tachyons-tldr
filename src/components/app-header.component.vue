<script>
import AnimatedLine from './animated-line.component';
import Navigation from './navigation.component';
import NavLink from './nav-link.component';

export default {
  name: 'app-header',
  components: { AnimatedLine, Navigation, NavLink },
  props: {
    version: String,
  },
  computed: {
    navIndicatorLocation() {
      const index = this.$store.state.route.meta.index;
      return `${(80 + 20) * index}px`;
    },
  },
};
</script>

<template>
  <header class="flex mv12">
    <h1 class="tc f4 mv0">
      <a class="blue link dim"
        href="https://github.com/vtex-gocommerce/tachyons-tldr"
        target="blank">
        GoCommerce Tachyons
      </a>
      <small class="fw2 navy">{{ version }}</small>
    </h1>

    <div class="flex-auto"></div>

    <div>
      <navigation>
        <nav-link class="mr5"
          to="/">
          Classes
        </nav-link>
        <nav-link class="mr5"
          to="/scales">
          Scales
        </nav-link>
        <nav-link class="mr5"
          to="/palette">
          Palette
        </nav-link>
      </navigation>
      <animated-line class="blue"
        :size="80"
        :location="navIndicatorLocation" />
    </div>
  </header>
</template>
