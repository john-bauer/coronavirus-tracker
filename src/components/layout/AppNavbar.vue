<template>
  <b-navbar fixed-top>
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
        class="has-text-weight-bold has-text-black"
      >
        🦠 Covid-19 Tracker
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ name: 'About' }">
        About
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Resources' }">
        Resources
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "AppNavbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
