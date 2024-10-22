async function main() {
    const DocumentVerification = await ethers.getContractFactory("DocumentVerification");
    const contract = await DocumentVerification.deploy();
    await contract.deployed();
    console.log("Contract deployed at:", contract.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
  