<template>
  <div>
    <div v-if="loaded === true" class="has-text-centered">
      <p
        class="title has-margin-bottom-30 has-margin-top-15 is-size-2-desktop has-text-weight-light"
      >
        {{ numberWithCommas(totalConfirmed) }}
      </p>
      <p
        class="subtitle is-size-7 is-uppercase is-family-condensed has-text-weight-semibold"
      >
        Confirmed Cases
      </p>
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
      this.totalConfirmed = this.coronavirusData.confirmed.latest;
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
