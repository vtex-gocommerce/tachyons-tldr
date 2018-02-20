<script>
export default {
  name: 'colour-block',
  props: {
    colour: Object,
    name: String,
  },
  computed: {
    blockStyles() {
      return {
        backgroundColor: this.colour.value,
        color: this.colour.negative,
      };
    },
  },
};
</script>

<template>
  <div class="pv3 ph4"
    :style="blockStyles">
    <b class="db truncate f3 mb1">{{ name }}</b>
    <code class="db f3 truncate">{{ colour.value }}</code>
  </div>
</template>
