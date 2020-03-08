<template>
  <section class="section">
    <ChartsList />
    <WorldwideTotals />
  </section>
</template>

<script>
import WorldwideTotals from "@/components/ui/charts/WorldwideTotals.vue";
import ChartsList from "@/components/pages/home/ChartsList.vue";

export default {
  name: "Home",
  components: {
    ChartsList,
    WorldwideTotals
  }
};
</script>
