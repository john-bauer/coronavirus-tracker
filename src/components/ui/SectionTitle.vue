<template>
  <div class="-section-title">
    <h4 class="title is-spaced is-size-4 is-5-touch">{{ title }}</h4>
    <!-- If you want to add a description etc. -->
    <slot></slot>
    <hr />
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
