import React, { useState, useEffect } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useEthers } from "@usedapp/core";
import { address } from "../../contract/address";
import { Card } from "../../components";
import axios from "axios";

const Profile = () => {
  const { account } = useEthers();

  const [ensNfts, setEnsNfts] = useState([]);
  const Web3Api = useMoralisWeb3Api();

  useEffect(() => {
    if (account) {
      // fetchNFTsForContract();
      getAllEns();
    }
  }, []);

  const getAllEns = async () => {
    const options = {
      chain: "mainnet",
      address: account,
      token_address: address,
    };
    const ensNfts = await Web3Api.account.getNFTsForContract(options);

    const items = await Promise.all(
      ensNfts.result.map(async (nft) => {
        const metadata = await axios.get(nft.token_uri);
        // console.log(metadata.data);

        const item = {
          name: metadata.data.name,
          tokenId: nft.token_id,
          image: metadata.data.image,
        };
        return item;
      })
    );

    setEnsNfts(items);
  };

  console.log(ensNfts);
  console.log(getAllEns());

  return (
    <div>
      <div>
        {ensNfts.map((nft, i) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              key={i}
            >
              <Card image={nft.image} name={nft.name} tokenId={nft.tokenId} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
