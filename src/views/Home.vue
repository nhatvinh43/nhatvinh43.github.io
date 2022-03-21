<template>
  <div class="home">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  width: 375px;
  height: 600px;
  border: 1px solid $color-grey;
  padding: $space-md;
  border-radius: $radius-md;
}
</style>
