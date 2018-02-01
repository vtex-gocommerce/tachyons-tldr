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
  <div class="br2 ba b--ash-blue bg-white animated-shadow"
    :class="{ active: isActive }">
    <div class="code flex items-center ph5">

      <span class="b pv5 pr3 near-black" aria-hidden="true">
        $ <span style="color: #00847a;">{{ command }}</span>
      </span>

      <label is="field-label"
        for="query"
        hide>
        {{ command }}
      </label>

      <text-field
        ref="input"
        class="flex-auto code pv3 ml3"
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
