<template>
  <div>
    <div v-if="loaded === true" class="has-text-centered">
      <p class="title">{{ numberWithCommas(totalRecovered) }}</p>
      <p class="subtitle is-size-7 is-uppercase">Recovered</p>
    </div>
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
      totalConfirmed: null
    };
  },
  computed: {
    ...mapState("coronavirus", ["coronavirusData"])
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    populateData() {
      this.totalRecovered = this.coronavirusData.recovered.latest;
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
