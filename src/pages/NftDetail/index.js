import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import { useMoralisWeb3Api } from "react-moralis";
import { address } from "../../contract/address";

const NftDetail = () => {
  const { id } = useParams();
  const [nfts, setNfts] = useState([]);
  const [ensNfts, setEnsNfts] = useState([]);
  const Web3Api = useMoralisWeb3Api();

  console.log(id);

  useEffect(() => {
    fetchNFTsForContract();
  }, []);

  const fetchNFTsForContract = async () => {
    const options = {
      address: address,
      token_id: id,
      chain: "eth",
    };
    const ensNfts = await Web3Api.token.getTokenIdMetadata(options);
    setNfts(ensNfts);
    return ensNfts;
  };

  console.log(fetchNFTsForContract());

  return <div>NftDetail</div>;
};

export default NftDetail;
