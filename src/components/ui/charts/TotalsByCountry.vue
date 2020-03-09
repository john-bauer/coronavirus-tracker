<template>
  <div>
    <b-field class="-selectors">
      <b-select v-model="country" @input="handleSubmit">
        <option value="Afghanistan">Afghanistan</option>
        <option value="Algeria">Algeria</option>
        <option value="Argentina">Argentina</option>
        <option value="Armenia">Armenia</option>
        <option value="Andorra">Andorra</option>
        <option value="Australia">Australia</option>
        <option value="Austria">Austria</option>
        <option value="Azerbaijan">Azerbaijan</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Belgium">Belgium</option>
        <option value="Belarus">Belarus</option>
        <option value="Bhutan">Bhutan</option>
        <option value="Brazil">Brazil</option>
        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
        <option value="Cambodia">Cambodia</option>
        <option value="Cameroon">Cameroon</option>
        <option value="Canada">Canada</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
        <option value="Costa Rica">Costa Rica</option>
        <option value="Croatia">Croatia</option>
        <option value="Czech Republic">Czech Republic</option>
        <option value="Dominican Republic">Dominican Republic</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Egypt">Egypt</option>
        <option value="Faroe Islands">Faroe Islands</option>
        <option value="Finland">Finland</option>
        <option value="France">France</option>
        <option value="French Guiana">French Guiana</option>
        <option value="Germany">Germany</option>
        <option value="Georgia">Georgia</option>
        <option value="Gibraltar">Gibraltar</option>
        <option value="Greece">Greece</option>
        <option value="Hong Kong">Hong Kong</option>
        <option value="Hungary">Hungary</option>
        <option value="Iceland">Iceland</option>
        <option value="India">India</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Iran">Iran</option>
        <option value="Iraq">Iraq</option>
        <option value="Ireland">Ireland</option>
        <option value="Israel">Israel</option>
        <option value="Italy">Italy</option>
        <option value="Japan">Japan</option>
        <option value="Jordan">Jordan</option>
        <option value="Kuwait">Kuwait</option>
        <option value="Latvia">Latvia</option>
        <option value="US">Lebanon</option>
        <option value="Liechtenstein">Liechtenstein</option>
        <option value="Luxembourg">Luxembourg</option>
        <option value="Macau">Macau</option>
        <option value="Mainland China">Mainland China</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Malta">Malta</option>
        <option value="Martinique">Martinique</option>
        <option value="Mexico">Mexico</option>
        <option value="Monaco">Monaco</option>
        <option value="Morocco">Morocco</option>
        <option value="Nepal">Nepal</option>
        <option value="Netherlands">Netherlands</option>
        <option value="New Zealand">New Zealand</option>
        <option value="Nigeria">Nigeria</option>
        <option value="North Macedonia">North Macedonia</option>
        <option value="Norway">Norway</option>
        <option value="Oman">Oman</option>
        <option value="Pakistan">Pakistan</option>
        <option value="Palestine">Palestine</option>
        <option value="Peru">Peru</option>
        <option value="Philippines">Philippines</option>
        <option value="Poland">Poland</option>
        <option value="Portugal">Portugal</option>
        <option value="Qatar">Qatar</option>
        <option value="Romania">Romania</option>
        <option value="Russia">Russia</option>
        <option value="Saint Barthelemy">Saint Barthelemy</option>
        <option value="San Marino">San Marino</option>
        <option value="Saudi Arabia">Saudi Arabia</option>
        <option value="Serbia">Serbia</option>
        <option value="Slovakia">Slovakia</option>
        <option value="Slovenia">Slovenia</option>
        <option value="South Africa">South Africa</option>
        <option value="South Korea">South Korea</option>
        <option value="Spain">Spain</option>
        <option value="Sri Lanka">Sri Lanka</option>
        <option value="Sweden">Sweden</option>
        <option value="Switzerland">Switzerland</option>
        <option value="Thailand">Thailand</option>
        <option value="Togo">Togo</option>
        <option value="Tunisia">Tunisia</option>
        <option value="Ukraine">Ukraine</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="UK">United Kingdom</option>
        <option value="US">United States</option>
        <option value="Vatican City">Vatican City</option>
        <option value="Vietnam">Vietnam</option>
      </b-select>
    </b-field>
    <bar-chart :chart-data="chartData" :options="chartOptions"></bar-chart>
    <br />
  </div>
</template>

<script>
import BarChart from "@/components/ui/chart-templates/reactive/BarChart";
import { mapState } from "vuex";

export default {
  name: "TotalsByCountry",
  data() {
    return {
      country: "Mainland China",
      loaded: false,
      chartData: null,
      chartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  computed: {
    ...mapState("coronavirus", ["coronavirusData"])
  },
  methods: {
    handleSubmit() {
      this.fillData(this.country);
    },
    loadCountryNumbers(country) {
      let totalConfirmed = 0;
      let totalRecovered = 0;
      let totalDeaths = 0;
      for (
        let i = 0;
        i < this.coronavirusData.confirmed.locations.length;
        i++
      ) {
        if (this.coronavirusData.confirmed.locations[i].country === country) {
          totalConfirmed += this.coronavirusData.confirmed.locations[i].latest;
          totalRecovered += this.coronavirusData.recovered.locations[i].latest;
          totalDeaths += this.coronavirusData.deaths.locations[i].latest;
        }
      }
      return [totalConfirmed, totalRecovered, totalDeaths];
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
    fillData(country) {
      this.chartData = {
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            backgroundColor: ["#FFE57F", "#B9F6CA", "#FF8A80"],
            data: this.loadCountryNumbers(country)
          }
        ]
      };
      this.loaded = true;
    }
  },
  watch: {
    coronavirusData: function() {
      this.fillData(this.country);
    }
  },
  components: {
    BarChart
  }
};
</script>

<style scoped lang="scss"></style>
