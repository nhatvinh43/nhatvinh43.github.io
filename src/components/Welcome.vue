<template>
  <div class="welcome">
    <img class="welcome__logo" :src="imgSrc" />

    <div class="welcome__heading">{{ labels.title }}</div>
    <p class="welcome__subtitle">{{ labels.subtitle }}</p>

    <Input class="welcome__input" :label="labels.inputLabel" type="password" />

    <Button @click="goToHome">{{ labels.buttonLabel }}</Button>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      labels: {
        title: "Ronin Wallet",
        subtitle: "Your digital passport",
        inputLabel: "ENTER PASSWORD",
        buttonLabel: "Unlock",
      },
      imgSrc: "src/assets/icons/ronin.svg",
    };
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "homepage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: $line-height-body;

  &__logo,
  &__subtitle,
  &__input {
    margin-bottom: 3 * $space-xs;
  }

  &__subtitle {
    color: $color-body;
  }

  &__input {
    width: 100%;
  }

  &__heading {
    font-weight: $type-font-bold;
    font-size: $type-size-large;
    margin-bottom: $space-xs;
  }
}
</style>
