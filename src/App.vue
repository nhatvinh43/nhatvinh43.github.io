<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: $type-font-body;
  font-size: $type-size-body;
  line-height: $line-height-body;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: $space-md;
}
</style>
