<template>
  <div>
    <div class="label" v-if="label">{{ label }}</div>
    <input
      :disabled="disabled"
      class="input"
      :type="type"
      :min="min"
      :max="max"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    value: {
      type: Number | String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  font-size: $type-size-caption;
  font-weight: $type-font-bold;
  color: $color-dark;
  padding-left: $space-xs;
}

.input {
  box-sizing: border-box;
  width: 100%;
  font-family: $type-font-body;
  font-size: $type-size-body;
  border-radius: $radius-sm;
  padding: $space-xs 2 * $space-xs;
  border: 1px solid $color-grey;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: $color-light-grey;
    color: $color-disabled;
  }
}
</style>
