var thermostat = new Thermostat;

$(document).ready(function() {

  updateTemp();
  updatePS();
  updatePU();

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
  $("#ps-display").text(thermostat.powerSaving);
};

function updatePU() {
    $("#pu-display").text(thermostat.returnUsage());
};
