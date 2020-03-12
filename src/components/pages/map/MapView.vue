<template>
  <div id="map" class="-map"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import GeoJSON from "geojson";
import { mapState, mapActions } from "vuex";

export default {
  name: "MapViewVanilla",
  data: function() {
    return {
      map: null,
      locations: null
    };
  },
  computed: {
    ...mapState("coronavirus", ["coronavirusData"])
  },
  methods: {
    ...mapActions("coronavirus", ["getAllCoronavirusData"]),
    convertCoronavirusData() {
      let dataSet = [];
      for (
        let i = 0;
        i < this.coronavirusData.confirmed.locations.length;
        i++
      ) {
        dataSet.push({
          country: this.coronavirusData.confirmed.locations[i].country,
          province: this.coronavirusData.confirmed.locations[i].province,
          latest: this.coronavirusData.confirmed.locations[i].latest,
          lat: parseInt(
            this.coronavirusData.confirmed.locations[i].coordinates.lat
          ),
          lng: parseInt(
            this.coronavirusData.confirmed.locations[i].coordinates.long
          )
        });
      }
      return dataSet;
    }
  },
  beforeMount() {
    this.getAllCoronavirusData();
  },
  mounted() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOXACCESSTOKEN;
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v9",
      zoom: 2
    });
    var map = this.map;

    map.on("load", () => {
      map.addControl(new mapboxgl.FullscreenControl());
      let myData = GeoJSON.parse(this.convertCoronavirusData(), {
        Point: ["lat", "lng"]
      });
      map.addSource("point", {
        type: "geojson",
        data: myData
      });
      map.addLayer({
        id: "point",
        type: "circle",
        source: "point",
        paint: {
          "circle-radius": 10,
          "circle-color": "hsl(14,  100%, 53%)",
          "circle-opacity": 0.25
        }
      });
    });
  }
};
</script>

<style lang="scss">
.-map {
  width: 100%;
  height: 700px;
}
</style>
