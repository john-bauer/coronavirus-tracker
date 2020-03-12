<template>
  <MglMap
    @load="onMapLoaded"
    container="map"
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    class="-map"
  ></MglMap>
</template>

<script>
import { MglMap } from "vue-mapbox";
import { mapState } from "vuex";

export default {
  name: "MapSandbox",
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOXACCESSTOKEN,
      mapStyle: "mapbox://styles/mapbox/streets-v9"
    };
  },
  computed: {
    ...mapState("coronavirus", ["coronavirusData"])
  },
  methods: {
    onMapLoaded(e) {
      this.map = e.map;
      console.log(this.map);
    }
  },
  created() {
    this.map = null;
  },
  components: {
    MglMap
  }
};
</script>

<style lang="scss">
.-map {
  width: 100%;
  height: 400px;
}
</style>
