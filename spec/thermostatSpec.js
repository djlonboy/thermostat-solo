describe("thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("new instance", function() {

    it("should have default temp of 20", function() {
      expect(thermostat.currentTemp).toEqual(20);
    });

    it("should have powersave enabled by default", function() {
      expect(thermostat.powerSaving).toBeTrue();
    });
  });

  describe("up function", function() {

    it("should increase temp by 1 degree", function() {
      thermostat.up();
      expect(thermostat.currentTemp).toEqual(21);
    });

    it("if temp is 25 and powersave is on, temp should remain 25", function() {
      thermostat.currentTemp = 25;
      thermostat.powerSaving = true;
      thermostat.up();
      expect(thermostat.currentTemp).toEqual(25);
    });

    it("if temp is 32 and powersave is off, temp should remain 32", function() {
      thermostat.currentTemp = 32;
      thermostat.powerSaving = false;
      thermostat.up();
      expect(thermostat.currentTemp).toEqual(32);
    });

    it("if temp is > 25 and powerSave is on, temp should return to 25", function() {
      thermostat.currentTemp = 32;
      thermostat.powerSaving = true;
      thermostat.up();
      expect(thermostat.currentTemp).toEqual(25);
    });
  });

  describe("down function", function() {

    it("should decrese temp by 1 degree", function() {
      thermostat.down();
      expect(thermostat.currentTemp).toEqual(19);
    });

    it("if temp is 10, temp should remain 10", function() {
      thermostat.currentTemp = 10;
      thermostat.down();
      expect(thermostat.currentTemp).toEqual(10);
    });

    it("if temp is < 10, temp should return to 10", function() {
      thermostat.currentTemp = 6;
      thermostat.down();
      expect(thermostat.currentTemp).toEqual(10);
    });
  });

  describe("reset function", function() {

    it("should reset the temp to the default", function() {
      thermostat.currentTemp = 28;
      thermostat.reset();
      expect(thermostat.currentTemp).toEqual(20);
      thermostat.currentTemp = 12;
      thermostat.reset();
      expect(thermostat.currentTemp).toEqual(20);
    });
  });

  describe("energy usage", function() {

    it("should return 'low usage' if temp is < 18", function () {
      thermostat.currentTemp = 15
      expect(thermostat.returnUsage()).toEqual("low usage")
    });

    it("should return 'medium usage' if temp is < 25 and >= 18", function () {
      thermostat.currentTemp = 23
      expect(thermostat.returnUsage()).toEqual("medium usage")
      thermostat.currentTemp = 18
      expect(thermostat.returnUsage()).toEqual("medium usage")
    });

    it("should return 'medium usage' if temp is >= 25", function () {
      thermostat.currentTemp = 29
      expect(thermostat.returnUsage()).toEqual("high usage")
      thermostat.currentTemp = 25
      expect(thermostat.returnUsage()).toEqual("high usage")
    });
  });
});
