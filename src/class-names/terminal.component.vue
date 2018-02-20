<script>
export default {
  name: 'terminal',
  props: {
    command: String,
    value: String,
    isActive: Boolean,
  },
  mounted() {
    setTimeout(() => {
      this.$refs.input.$el.focus();
    }, 800);
  },
  methods: {
    onActivate(e) {
      this.$emit('activate', e);
    },
    onDeactivate(e) {
      this.$emit('deactivate', e);
    },
    onExecute(e) {
      this.$emit('execute', e);
    },
  },
};
</script>

<template>
  <div class="mt12 br3 ba b--navy-60 bg-white"
    :class="{ active: isActive }">
    <div class="code flex items-center ph4">

      <span class="b pv4 pr3 blue" aria-hidden="true">
        $ {{ command }}
      </span>

      <label is="field-label"
        for="query"
        hide>
        {{ command }}
      </label>

      <text-field
        ref="input"
        class="flex-auto code pv3 ml3 gc-navy"
        placeholder="search for a CSS property name or class name"
        type="search"
        id="query"
        :value="value"
        @change="onExecute({ query: $event })"
        @blur.native="onDeactivate"
        @click.native="onActivate"
        @focus.native="onActivate" />

      <slot name="flag" />
    </div>
  </div>
</template>
