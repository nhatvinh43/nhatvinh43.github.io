<template>
  <div class="wallet-card">
    <div class="wallet-card__top">
      <div>
        <span class="wallet-card__top__title">{{ title }}</span>
        <span class="wallet-card__top__number">{{ `(${number})` }}</span>
      </div>

      <img class="wallet-card__top__icon" :src="icons.copy" />
    </div>

    <hr class="wallet-card__divider" />

    <div class="wallet-card__bottom">
      <div>
        <div class="wallet-card__bottom__primary">
          {{ `${primaryAmount} ${primaryCurrency}` }}
        </div>

        <div class="wallet-card__bottom__secondary">
          {{ `${secondaryAmount} ${secondaryCurrency}` }}
        </div>
      </div>

      <img class="wallet-card__bottom__logo" :src="icons.logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WalletCard",
  props: {
    title: {
      type: String,
      default: "My Wallet",
    },
    number: {
      type: String,
      default: null,
    },
    primaryAmount: {
      type: String,
      default: null,
    },
    primaryCurrency: {
      type: String,
      default: null,
    },
    secondaryAmount: {
      type: String,
      default: null,
    },
    secondaryCurrency: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      icons: {
        copy: "src/assets/icons/copy.svg",
        logo: "src/assets/icons/ronin-reversed.svg",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.wallet-card {
  border-radius: $radius-md;
  background: $color-gradient-blue;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  &__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      color: $color-white;
      font-weight: $type-font-bold;
    }

    &__number {
      padding-left: $space-xs;
      color: $color-blue-light;
    }

    &__icon {
      width: 16px;
      height: 16px;
    }
  }

  &__divider {
    margin: $space-xs + $space-xxs;
    width: 100%;
    opacity: 50%;
    border: 0;
    height: 1px;
    background-color: $color-blue-light;
  }

  &__bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &__primary {
      color: $color-white;
      font-size: $type-size-large;
      font-weight: $type-font-extra-bold;
      line-height: 2 * $line-height-body;
    }

    &__secondary {
      padding-top: $space-xs;
      color: $color-blue-light;
      font-weight: $type-font-bold;
    }
  }
}
</style>
