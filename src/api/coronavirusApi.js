import axios from "axios";
let baseUrl = "https://coronavirus-tracker-api.herokuapp.com/v2";

const coronavirusApi = {
  getData(category) {
    return axios.get(baseUrl + "/" + category).then(response => {
      return response.data;
    });
  }
};

export default coronavirusApi;
