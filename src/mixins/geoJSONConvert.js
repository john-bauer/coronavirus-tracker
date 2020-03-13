import GeoJSON from "geojson";

export default {
  methods: {
    convertToGeoJSON(arg) {
      let dataSet = [];
      for (let i = 0; i < arg.length; i++) {
        dataSet.push({
          country: arg[i].country,
          province: arg[i].province,
          latest: arg[i].latest,
          lat: parseInt(arg[i].coordinates.lat),
          lng: parseInt(arg[i].coordinates.long)
        });
      }
      return GeoJSON.parse(dataSet, {
        Point: ["lat", "lng"]
      });
    }
  }
};
