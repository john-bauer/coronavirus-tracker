<template>
  <div class="about">
    <section class="section">
      <div class="container">
        <PageCopy />
      </div>
    </section>
  </div>
</template>

<script>
import PageCopy from "@/components/pages/about/PageCopy.vue";

export default {
  name: "About",
  components: {
    PageCopy
  }
};
</script>
