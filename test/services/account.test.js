const { expect } = require("chai");
const Account = require("../../src/services/accounts");
let accountObj = new Account();

describe("Account", () => {
  describe("#getBalance", () => {
    it("balance is zero", function () {
      expect(accountObj.getBalance()).to.be.lessThanOrEqual(0);
    });
  });

  describe("#addCash", () => {
    describe("check invalid amount add to balance", () => {
      it("check negative value", () => {
        expect(accountObj.addCash(-0)).to.be.contains(
          "Please enter a valid amount."
        );
      });

      it("check empty value", () => {
        expect(accountObj.addCash()).to.be.contains(
          "Please enter a valid amount."
        );
      });

      it("check zero", () => {
        expect(accountObj.addCash(0)).to.be.contains(
          "Please enter a valid amount."
        );
      });

      it("check string value", () => {
        expect(accountObj.addCash("test")).to.be.contains(
          "Please enter a valid amount"
        );
      });

      it("check valid amount", () => {
        expect(accountObj.addCash(50)).to.be.contains(
          "50 amount added successfully, your balance is"
        );
      });
    });
  });
});
