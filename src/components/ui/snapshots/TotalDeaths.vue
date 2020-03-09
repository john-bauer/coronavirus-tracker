<template>
  <div>
    <div v-if="loaded === true">total deaths: {{ totalDeaths }}</div>
    <div v-if="loaded === false"><Spinner /></div>
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import { mapState } from "vuex";

export default {
  name: "WorldwideTotals",
  data() {
    return {
      loaded: false,
      totalDeaths: null
    };
  },
  computed: {
    ...mapState("coronavirus", ["coronavirusData"])
  },
  methods: {
    populateData() {
      this.totalDeaths = this.coronavirusData.deaths.latest;
      this.loaded = true;
    }
  },
  watch: {
    coronavirusData: function() {
      this.populateData();
    }
  },
  components: {
    Spinner
  }
};
</script>

<style scoped lang="scss"></style>
