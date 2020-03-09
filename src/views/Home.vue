<template>
  <section class="section">
    <div class="container">
      <ChartsList />
    </div>
  </section>
</template>

<script>
import ChartsList from "@/components/pages/home/ChartsList.vue";

export default {
  name: "Home",
  components: {
    ChartsList
  }
};
</script>
