<template>
  <div class="homepage">
    <div class="homepage__header">
      <div class="homepage__header__title">
        <img :src="images.cirlce" />
        {{ labels.title }}
      </div>

      <TextIcon icon="user" />
    </div>

    <WalletCard
      class="homepage__wallet"
      :title="walletData.title"
      :number="walletData.number"
      :primaryAmount="walletData.primaryAmount"
      :primaryCurrency="walletData.primaryCurrency"
      :secondaryAmount="walletData.secondaryAmount"
      :secondaryCurrency="walletData.secondaryCurrency"
    />

    <div class="homepage__buttons">
      <TextIcon disabled size="large" icon="credit-card">{{
        labels.deposit
      }}</TextIcon>
      <TextIcon size="large" icon="send">{{ labels.send }}</TextIcon>
      <TextIcon disabled size="large" icon="swap">{{ labels.swap }}</TextIcon>
    </div>

    <div class="homepage__assets">
      <div class="homepage__assets__title">
        {{ labels.assets }}
      </div>

      <div v-for="item in assets" :key="item.title">
        <AssetItem
          class="homepage__assets__item"
          :icon="item.icon"
          :title="item.title"
          :subtitle="item.subtitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      labels: {
        title: "Ronin Wallet",
        subtitle: "Your digital passport",
        inputLabel: "ENTER PASSWORD",
        buttonLabel: "Unlock",
        deposit: "Deposit",
        send: "Send",
        swap: "Swap",
        assets: "Assets",
      },

      images: {
        cirlce: "src/assets/icons/circle.svg",
      },

      walletData: {
        title: "My Wallet",
        number: "7300 3777 3888 3334",
        primaryAmount: "1,000",
        primaryCurrency: "USD",
        secondaryAmount: "23,046,000",
        secondaryCurrency: "VND",
      },

      assetsData: [
        {
          primaryAmount: "50",
          primaryCurrency: "EUR",
          secondaryAmount: "1,531,972",
          secondaryCurrency: "VND",
        },
        {
          primaryAmount: "10,000",
          primaryCurrency: "YEN",
          secondaryAmount: "2,103,317",
          secondaryCurrency: "VND",
        },
      ],
    };
  },
  computed: {
    assets() {
      return this.assetsData?.map((item) => ({
        icon: item.primaryCurrency?.toLowerCase() || "eur",
        title: `${item.primaryAmount} ${item.primaryCurrency}`,
        subtitle: `${item.secondaryAmount} ${item.secondaryAmount}`,
      }));
    },
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "homepage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__title {
      background-color: $color-light;
      padding: $space-xs $space-xs + $space-xxs;
      border-radius: $radius-sm;
      font-weight: $type-font-bold;

      img {
        margin-right: $space-xs;
      }
    }
  }

  &__wallet {
    margin-top: $space-sm + $space-xxs;
  }

  &__buttons {
    margin-top: 2 * $space-sm;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: $space-xs + $space-sm;
  }

  &__assets {
    &__title {
      font-weight: $type-font-extra-bold;
      font-size: $type-size-medium;
      color: $color-body;
      padding-top: $space-sm;
      padding-bottom: $space-xs;
    }

    &__item {
      margin-top: $space-xs;
    }
  }
}
</style>
