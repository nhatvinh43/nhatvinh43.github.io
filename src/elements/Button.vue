<template>
  <button @click="handleClick" :class="['button', type]">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: (value) => {
        return value.match(/(primary|secondary)/);
      },
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  font-family: $type-font-body;
  border-radius: $radius-sm;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: $type-font-bold;

  &.primary {
    background: $color-gradient-blue;
    color: $color-white;
  }

  &.secondary {
    background-color: $color-light;
    color: $color-blue;
  }
}
</style>
