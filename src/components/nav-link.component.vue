<script>
export default {
  name: 'nav-link',
  props: {
    to: String,
  },
};
</script>

<template>
  <router-link class="link dim serious-black f5 mb2 dib w3"
    :to="to">
    <slot />
  </router-link>
</template>
