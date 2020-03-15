<template>
  <div>
    <div id="map" class="-map"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import GeoJSON from "geojson";
import { mapState } from "vuex";

export default {
  name: "MapViewVanilla",
  data: function() {
    return {
      map: null,
      locations: null,
      loaded: false
    };
  },
  computed: {
    ...mapState("coronavirus", ["coronavirusData"])
  },
  methods: {
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
    },
    populateData() {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOXACCESSTOKEN;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v9",
        zoom: 0
      });
      this.map.on("load", () => {
        var map = this.map;
        map.addControl(new mapboxgl.FullscreenControl());
        let myData = GeoJSON.parse(this.convertCoronavirusData(), {
          Point: ["lat", "lng"]
        });
        map.dragRotate.disable();
        map.touchZoomRotate.disableRotation();
        map.addSource("point", {
          type: "geojson",
          data: myData
        });
        map.addLayer({
          id: "point",
          type: "circle",
          source: "point",
          paint: {
            "circle-radius": {
              property: "latest",
              stops: [
                [{ zoom: 0, value: 0 }, 0],
                [{ zoom: 0, value: 1 }, 3],
                [{ zoom: 0, value: 70000 }, 10],

                [{ zoom: 10, value: 0 }, 0],
                [{ zoom: 10, value: 1 }, 9],
                [{ zoom: 10, value: 70000 }, 100],

                [{ zoom: 22, value: 0 }, 0],
                [{ zoom: 22, value: 1 }, 9],
                [{ zoom: 22, value: 70000 }, 100]
              ]
              // stops: [
              //   [0, 3],
              //   [10000, 15]
              // ]
            },

            "circle-color": {
              property: "latest",
              stops: [
                [0, "hsl(48,  100%, 67%)"],
                [200, "hsl(14,  100%, 53%)"],
                [2000, "hsl(348, 100%, 61%)"]
              ]
            },
            "circle-opacity": 0.25
          }
        });
      });
    }
  },
  watch: {
    coronavirusData: function() {
      this.loaded = true;
      this.populateData();
    }
  }
};
</script>

<style lang="scss">
.-map {
  width: 100%;
  height: 450px;
}
</style>
