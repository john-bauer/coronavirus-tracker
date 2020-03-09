<template>
  <div class="tile is-ancestor">
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile notification is-child is-primary">
        <TotalConfirmed />
      </div>
      <div class="notification tile is-child">
        <TotalRecovered />
      </div>
      <div class="tile notification is-child">
        <TotalDeaths />
      </div>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child notification">
        <p class="title">Three</p>
        <WorldwideTotals />
      </div>
    </div>
  </div>
</template>

<script>
import TotalConfirmed from "@/components/ui/snapshots/TotalConfirmed";
import TotalDeaths from "@/components/ui/snapshots/TotalDeaths";
import TotalRecovered from "@/components/ui/snapshots/TotalRecovered";
import WorldwideTotals from "@/components/ui/charts/WorldwideTotals";
// import TotalsByCountry from "@/components/ui/charts/TotalsByCountry";
import { mapActions } from "vuex";

export default {
  name: "ChartsList",
  methods: {
    ...mapActions("coronavirus", ["getAllCoronavirusData"])
  },
  mounted() {
    this.getAllCoronavirusData();
  },
  components: {
    WorldwideTotals,
    // TotalsByCountry,
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths
  }
};
</script>

<style scoped lang="scss"></style>
