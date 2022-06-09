import { ethers } from "ethers";
import abi from "../contract/abi.json";
import { useCall } from "@usedapp/core";
import { address as tokenAddress } from "../contract/address";
import { formatUnits } from "ethers/lib/utils";

const nftInterface = new ethers.utils.Interface(abi);

export function useBalanceOf(address) {
  const { value, error } =
    useCall(
      address &&
        tokenAddress && {
          contract: new ethers.Contract(tokenAddress, nftInterface),
          method: "balanceOf",
          args: [address],
        }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}
