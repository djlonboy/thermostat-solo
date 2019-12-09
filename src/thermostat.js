// Thermostat starts at 20 degrees
// Power saving on/off - on by default

function Thermostat() {
  this.defaultTemp = 20;
  this.powerSavingDefault = "ON ";
  this.powerSaveMax = 25;
  this.noPowerSaveMax = 32;
  this.minTemp = 10;

  this.powerSaving = this.powerSavingDefault;
  this.currentTemp = this.defaultTemp;
};

// Increase temp using up function
  // Max temp:
    // If power saving off: 25 degrees
    // If power saving on: 32 degrees
Thermostat.prototype.up = function() {
  if (this.powerSaving == "ON ") {
    if (this.currentTemp >= this.powerSaveMax) {
      this.currentTemp = this.powerSaveMax;
    } else {
      this.currentTemp += 1;
    }
  } else {
    if (this.currentTemp >= this.noPowerSaveMax) {
      this.currentTemp = this.noPowerSaveMax;
    } else {
      this.currentTemp += 1;
    }
  }
};

// Decrease temp using down function
  // Min temp 10 degrees
Thermostat.prototype.down = function() {
  if (this.currentTemp <= this.minTemp) {
    this.currentTemp = this.minTemp;
  } else {
    this.currentTemp -= 1;
  }
};

// Reset: resets temp to 20 degrees
Thermostat.prototype.reset = function() {
  this.currentTemp = this.defaultTemp;
};

//Toggle powersave mode
Thermostat.prototype.togglePowerSaving = function() {
  if (this.powerSaving == "ON ") {
    this.powerSaving = "OFF";
    return "powersaving off";
  } else if (this.powerSaving == "OFF" ) {
    this.powerSaving = "ON ";
    if (this.currentTemp > this.powerSaveMax) {
      this.currentTemp = this.powerSaveMax;
    };
    return "powersaving on";
  };
};

// Return energy usage:
Thermostat.prototype.returnUsage = function() {

  // less than 18: low usage (green)
  if (this.currentTemp < 18) {
    return "LOW";

      // less than 25: medium usage (black)
  } else if (this.currentTemp < 25 && this.currentTemp >= 18) {
    return "MEDIUM";

    // 25 or more: high usage (red)
  } else if (this.currentTemp >= 25) {
    return "HIGH";
  } else {
    throw "Temperature Error"
  };
};
