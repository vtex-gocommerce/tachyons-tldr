<script>
export default {
  name: 'nav-link',
  props: {
    to: String,
  },
};
</script>

<template>
  <router-link class="link dim navy f3 mb1 dib w13"
    :to="to">
    <slot />
  </router-link>
</template>
