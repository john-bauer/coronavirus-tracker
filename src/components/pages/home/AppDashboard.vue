<template>
  <div class="columns is-multiline">
    <div class="column is-12">
      <div class="box">
        <WorldwideTotals />
      </div>
    </div>
    <div class="column is-6">
      <div class="box">
        <TotalsByCountry />
      </div>
    </div>
    <div class="column is-2">
      <div class="box">
        <TotalConfirmed />
      </div>
    </div>
    <div class="column is-2">
      <div class="box">
        <TotalDeaths />
      </div>
    </div>
    <div class="column is-2">
      <div class="box">
        <TotalRecovered />
      </div>
    </div>
  </div>
</template>

<script>
import TotalConfirmed from "@/components/ui/snapshots/TotalConfirmed";
import TotalDeaths from "@/components/ui/snapshots/TotalDeaths";
import TotalRecovered from "@/components/ui/snapshots/TotalRecovered";
import WorldwideTotals from "@/components/ui/charts/WorldwideTotals";
import TotalsByCountry from "@/components/ui/charts/TotalsByCountry";
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
    TotalsByCountry,
    TotalConfirmed,
    TotalRecovered,
    TotalDeaths
  }
};
</script>

<style scoped lang="scss"></style>
