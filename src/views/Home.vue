<template>
  <section class="section">
    <AppDashboard />
    <ChartsList />
  </section>
</template>

<script>
import AppDashboard from "@/components/pages/home/AppDashboard.vue";
import ChartsList from "@/components/pages/home/ChartsList.vue";

export default {
  name: "Home",
  components: {
    AppDashboard,
    ChartsList
  }
};
</script>
