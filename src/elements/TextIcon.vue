<template>
  <div @click="handleClick">
    <div :class="['text-icon', size, { disabled }]">
      <img class="text-icon__icon" :src="iconSrc" />
    </div>

    <div v-if="$slots.default" :class="['text-icon__label', { disabled }]">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "TextIcon",
  props: {
    size: {
      type: String,
      default: "medium",
      validator: (value) => value.match(/(medium|large)/),
    },
    icon: {
      type: String,
      required: true,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconSrc() {
      return `src/assets/icons/${this.icon}.svg`;
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
.text-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: $radius-sm;
  user-select: none;
  cursor: pointer;
  background: $color-light;
  font-family: $type-font-body;
  font-size: $type-size-body;
  line-height: $line-height-body;

  &.medium {
    padding: $space-xs;

    .text-icon__icon {
      width: 16px;
      height: 16px;
    }
  }

  &.large {
    padding: $space-sm;

    .text-icon__icon {
      width: 24px;
      height: 24px;
    }
  }

  &__label {
    font-weight: $type-font-bold;
    padding-top: $space-xs;
    cursor: pointer;
    text-align: center;
    user-select: none;
    line-height: $line-height-body;

    &.disabled {
      opacity: 50%;
      cursor: default;
    }
  }

  &.disabled {
    cursor: default;
    user-select: none;

    .text-icon__icon {
      opacity: 0.5;
    }
  }
}
</style>
