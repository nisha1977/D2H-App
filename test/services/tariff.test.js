const { expect } = require("chai");
const conf = new (require("conf"))();
const Tariff = require("./../../src/services/tariff");
let tariffObj = new Tariff();

describe("Tariff", () => {
  describe("#getPackage", () => {
    it("return packages", () => {
      expect(tariffObj.getPackage()).to.be.an("array");
    });
  });

  describe("#showCategory", () => {
    it("return category", () => {
      expect(tariffObj.showCategory()).to.be.contain("");
    });
  });

  describe("#showChannelsByCategories", () => {
    it("check undefined value", () => {
      expect(tariffObj.showChannelsByCategories("Entertainment")).to.be
        .undefined;
    });
    it("check value", () => {
      expect(tariffObj.showChannelsByCategories(1)).to.be.an("array");
    });
  });

  describe("#showChannelOptions", () => {
    it("check null in return", () => {
      expect(tariffObj.showChannelOptions("Entertainment")).to.be.empty;
    });
    it("check return value", () => {
      expect(tariffObj.showChannelOptions(1)).to.be.an("object");
    });
  });

  describe("#addChannel", function () {
    it("check channel already exists in your tariff", function () {
      expect(tariffObj.addChannel("Sony TV")).to.be.contains("exists");
    });

    it("check channel empty value", function () {
      expect(tariffObj.addChannel()).to.be.contains("Channel name is require");
    });

  });

  describe("#removeChannel", function () {
    it("check return value", function () {
      expect(tariffObj.removeChannel("Unacademy")).to.be.contain(
        "Unacademy channel removed!"
      );
    });
  });

  describe("#resetApplication", function () {
    it("check function", function () {
      expect(tariffObj.resetApplication()).to.be.any;
    });
  });

  describe("#initChannels", function () {
    it("check function", function () {
      expect(tariffObj.initChannels()).to.be.any;
    });
  });
});
