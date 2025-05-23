const main = async() => {
  // const [deployer] = await ethers.getSigners();
  // console.log("Deploying contracts with the account:", deployer.address);
  // console.log("Account balance:", (await deployer.getBalance()).toString());

  const contractFactory = await ethers.getContractFactory('TwitterContract');
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log("Contract deployed to: ", contract.address);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();
