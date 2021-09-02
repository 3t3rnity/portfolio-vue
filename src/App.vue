<template>
  <main-layout></main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
export default {
  components: {
    MainLayout,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Montserrat-regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Montserrat-regular'), url('./assets/fonts/Montserrat-Regular.ttf');
}

* {
  font-family: 'Montserrat-regular';
  margin: 0;
  padding: 0;
}
</style>
