<template>
  <div>
    <WorldwideTotals />
  </div>
</template>

<script>
import WorldwideTotals from "@/components/ui/charts/WorldwideTotals";
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
    WorldwideTotals
  }
};
</script>

<style scoped lang="scss"></style>
