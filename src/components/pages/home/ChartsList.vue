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
    <div class="column is-6">
      <div class="box">Charts</div>
    </div>
  </div>
</template>

<script>
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
    TotalsByCountry
  }
};
</script>

<style scoped lang="scss"></style>
