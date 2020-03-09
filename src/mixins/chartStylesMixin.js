import chartjs from "chart.js";

export default {
  mounted() {
    chartjs.Chart.defaults.global.defaultFontColor = "#212121";
    chartjs.Chart.defaults.global.defaultFontFamily =
      "'acumin-pro-condensed','Avenir','Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
  }
};
