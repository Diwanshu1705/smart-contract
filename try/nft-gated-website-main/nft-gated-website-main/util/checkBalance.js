import { contractAddress } from "../const/yourDetails";

export default async function checkBalance(sdk, address) {
  const NFTDrop = await sdk.getNFTDrop(
    contractAddress // replace this with your contract address
  );

  const balance = await NFTDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
