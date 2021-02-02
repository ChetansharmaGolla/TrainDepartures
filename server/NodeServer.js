/**
 * I had to make use of this Server file to handle CORS issue.
 * While accesing the API from the front end, i got a CORS issue, so to allow cross domain requests,
 * had to implement this server file so that the getStations API call will go through this server,
 * and sends back the response to frontend
 */

var express = require("express");
var axios = require("axios");
var app = express();
let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(express.json());
app.use(allowCrossDomain);
app.use(express.urlencoded({ extended: true }));
app.get("/v1/getstations", (req, res) => {
  console.log("request", req);
  console.log("response", res);
  var data = axios
    .get("https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations", {
      headers: {
        "Ocp-Apim-Subscription-Key": "9501613007cd41398976a63b0a5bd925",
      },
    })
    .then((resp) => {
      res.send({ status: 200, data: resp.data.payload });
    })
    .catch((error) =>
      res.send({
        status: 500,
        data: "Error occured while calling the backend systems",
      })
    );
});
app.listen(8083);
