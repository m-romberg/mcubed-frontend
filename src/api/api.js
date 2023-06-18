import axios from "axios";

const BASE_URL = "https://us-central1-aiot-fit-xlab.cloudfunctions.net/mcubed";

/**
 * API class
 *
 * Make calls to request
 */
class MccubedApi {

  //generic request to the api
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data.result;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

}

export default MccubedApi;