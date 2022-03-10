const main = async () => {
  const Txns = await hre.ethers.getContractFactory("Txns");
  const transactions = await Txns.deploy();
  //deploy txns contract
  await transactions.deployed();
  console.log("Transactions deployed to:", transactions.address);

  const Cly = await hre.ethers.getContractFactory("CLY");
  const cly = await Cly.deploy();
  //deploy txns contract
  await cly.deployed();
  console.log("Transactions deployed to:", cly.address);

  //Yield farm
  const YFarm = await hre.ethers.getContractFactory("YFarm");
  const yfarm = await YFarm.deploy(cly.address);
  //deploy txns contract
  await cly.deployed();
  console.log("Transactions deployed to:", cly.address);
};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

runMain();
