var thermostat = new Thermostat;
getFromServer();

$(document).ready(function() {

  $("#city-dropdown").change(function() {
    getWeather(this.value)
  });

  updateTemp();
  updatePS();
  updatePU();
  getWeather("londonuk")

  $("#UP").on('click', function() {
    thermostat.up();
    updateTemp();
    updatePU();
  });

  $("#DOWN").on('click', function() {
    thermostat.down();
    updateTemp();
    updatePU();
  });

  $("#RESET").on('click', function() {
    thermostat.reset();
    updateTemp();
    updatePU();
  });

  $("#PSAVE").on('click', function() {
    thermostat.togglePowerSaving();
    updatePS();
    updateTemp();
  });
});

function updateTemp() {
  $("#temp-display").text(thermostat.currentTemp);

};

function updatePS() {
  $("#ps-display").attr("class", thermostat.powerSaving)
  $("#ps-display").text(thermostat.powerSaving);
};

function updatePU() {
  $("#pu-display").attr("class", thermostat.returnUsage())
  $("#pu-display").text(thermostat.returnUsage());
};

function getWeather(city) {
  var urlString = "https://api.weatherbit.io/v2.0/current?key=396a74755ade41ecb83d23bb3011222e&city=" + city
  $.get(urlString, function(data) {
    outputString = data.data[0].weather.description + ", ";
    outputString += data.data[0].temp + "°C";
    $("#weather-display").text(outputString)
  }, "json");
};

function getFromServer() {
  $.get("localhost:9292/get", function(data) {
    let temp = data.data[0].temp;
    let ps = data.data[0].ps;
    let city = data.data[0].city.trim();
    thermostat.currentTemp = temp;
    if (ps == true) {
      thermostat.powerSaving = "ON ";
    } else {
      thermostat.powerSaving = "OFF";
    };
    getWeather(city);
    updateTemp();
    updatePS();
    updatePU();
  }, "json");
}
