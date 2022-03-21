<template>
  <div class="asset-item">
    <img class="asset-item__icon" :src="iconSrc" />

    <div>
      <div class="asset-item__title">{{ title }}</div>
      <div class="asset-item__subtitle">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssetItem",
  props: {
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
  computed: {
    iconSrc() {
      return `src/assets/icons/${this.icon}.svg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.asset-item {
  border-radius: $radius-sm;
  padding: $space-sm;
  background-color: $color-light;
  display: flex;
  align-items: center;
  gap: 2 * $space-xs;

  &__icon {
    width: 32px;
    height: 32px;
  }

  &__title {
    font-weight: $type-font-bold;
    line-height: $line-height-body;
  }

  &__subtitle {
    padding-top: $space-xxs;
    color: #8f9bb3;
  }
}
</style>
