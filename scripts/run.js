const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFTv3');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);


  for (let i = 0; i < 151; i++){
      // Call the function. Intentionally Try to Mint more than allotted
      if (i === 150) {
        try {
           let txn = await nftContract.makeAnEpicNFT()
        } catch (error) {
           console.log("Mint Limit Preserved!")
        }
      }
      let txn = await nftContract.makeAnEpicNFT()
      // Wait for it to be mined.
      await txn.wait()

      let numMinted = await nftContract.numMinted()
      numMinted = numMinted.toNumber()
      console.log("Num minted", numMinted)
  }

  /*
  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()

  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT()
  // Wait for it to be mined.
  await txn.wait()
  */
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();