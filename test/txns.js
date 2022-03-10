const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return txn info once a txn is sent", async function () {
    const Txns = await ethers.getContractFactory("Txns");
    const txn = await Txns.deploy("Hello, world!");
    await txn.deployed();

    expect(await txn.getAllTxns()).to.greaterThan(1);

    const addToBlockchain = await txn.addToBlockchain("Hola, mundo!");

    // wait until the transaction is mined
    await addToBlockchain.wait();

    expect(await txn.getTxnCount()).to.greaterThanOrEqual(1);
  });
});
