<!-- eslint-disable no-unused-vars -->
<template>
  <NavbarComponent />
  <router-view/>
</template>

<script>

import NavbarComponent from './components/navbar-component.vue'

export default {
  components: { NavbarComponent }
}
</script>

<style>
@import "./styles.css";
</style>
