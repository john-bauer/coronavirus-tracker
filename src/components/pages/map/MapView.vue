<template>
  <div>
    <pre>
      {{ coronavirusData }}
    </pre>
    <MglMap
      @load="onMapLoaded"
      container="map"
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      class="-map"
    >
      <MglMarker :coordinates="coordinates" :color="color">
        <MglPopup>
          <VCard>
            <div>Hello, I'm popup!</div>
          </VCard>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";
import { mapState } from "vuex";

export default {
  name: "MapSandbox",
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOXACCESSTOKEN,
      mapStyle: "mapbox://styles/mapbox/dark-v9",
      coordinates: [-111.549668, 39.014],
      color: "red"
    };
  },
  computed: {
    ...mapState("coronavirus", ["coronavirusData"])
  },
  methods: {
    onMapLoaded(e) {
      this.map = e.map;
    }
  },
  created() {
    this.map = null;
  },
  components: {
    MglMap,
    MglMarker,
    MglPopup
  }
};
</script>

<style lang="scss">
.-map {
  width: 100%;
  height: 800px;
}
</style>
