<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-3 is-vertical is-parent">
        <div class="tile notification is-child is-warning">
          <TotalConfirmed />
        </div>
        <div class="notification tile is-child is-success">
          <TotalRecovered />
        </div>
        <div class="tile notification is-child is-danger">
          <TotalDeaths />
        </div>
      </div>
      <div class="tile is-parent">
        <div class="tile is-child has-background-white-bis notification">
          <p class="title is-spaced has-text-centered-mobile is-size-4-mobile">
            Worldwide Totals
          </p>
          <WorldwideTotals />
        </div>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-7 is-vertical is-parent">
        <div class="tile notification is-child">
          <p class="title is-spaced has-text-centered-mobile is-size-4-mobile">
            Totals By Country
          </p>
          <TotalsByCountry />
        </div>
      </div>
      <div class="tile is-5 is-parent">
        <div class="tile is-child has-background-white-bis notification">
          <p class="title is-spaced has-text-centered-mobile is-size-4-mobile">
            Map View <b-tag type="is-warning">In Progress</b-tag>
          </p>
          <MapTile />
        </div>
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
import MapTile from "@/components/pages/home/MapTile.vue";
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
    MapTile,
    TotalDeaths
  }
};
</script>

<style scoped lang="scss"></style>
