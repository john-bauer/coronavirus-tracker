<template>
  <div>
    <div v-if="loaded === true">total confirmed: {{ totalRecovered }}</div>
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
