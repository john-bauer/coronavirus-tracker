<template>
  <section class="section">
    <AppDashboard />
  </section>
</template>

<script>
import AppDashboard from "@/components/pages/home/AppDashboard.vue";

export default {
  name: "Home",
  title: "Coronavirus Tracker | Home",
  components: {
    AppDashboard
  }
};
</script>
