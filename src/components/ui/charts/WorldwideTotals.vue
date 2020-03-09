<template>
  <div>
    <bar-chart
      v-if="loaded"
      :chartdata="chartData"
      :options="chartOptions"
    ></bar-chart>
    <div v-if="loaded === false">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from "vue-simple-spinner";
import { mapState } from "vuex";
import BarChart from "@/components/ui/chart-templates/static/BarChart.js";

export default {
  name: "WorldwideTotals",
  data() {
    return {
      loaded: false,
      chartData: {
        labels: ["CONFIRMED", "RECOVERED", "DEATHS"],
        datasets: [
          {
            backgroundColor: ["#FFE57F", "#B9F6CA", "#FF8A80"],
            data: []
          }
        ]
      },
      chartOptions: {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var value = data.datasets[0].data[tooltipItem.index];
              value = value.toString();
              value = value.split(/(?=(?:...)*$)/);
              value = value.join(",");
              return value;
            }
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    };
  },
  computed: {
    ...mapState("coronavirus", ["coronavirusData"])
  },
  methods: {
    populateData() {
      this.chartData.datasets[0].data.push(
        this.coronavirusData.confirmed.latest
      );
      this.chartData.datasets[0].data.push(
        this.coronavirusData.recovered.latest
      );
      this.chartData.datasets[0].data.push(this.coronavirusData.deaths.latest);
      this.loaded = true;
    }
  },
  watch: {
    coronavirusData: function() {
      this.populateData();
    }
  },
  components: {
    Spinner,
    BarChart
  }
};
</script>

<style scoped lang="scss"></style>
