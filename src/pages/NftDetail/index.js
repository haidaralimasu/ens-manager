import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import { useMoralisWeb3Api } from "react-moralis";
import { address } from "../../contract/address";
import axios from "axios";

const NftDetail = () => {
  const { id } = useParams();
  const [ensNft, setEnsNft] = useState({});
  const Web3Api = useMoralisWeb3Api();

  console.log(id);

  useEffect(() => {
    fetchIndividualEns();
  }, []);

  // const getEns = async () => {

  //   const items = await Promise.all(
  //     const metadata = fetchIndividualEns()
  //   )

  // }

  const fetchIndividualEns = async () => {
    const options = {
      address: address,
      token_id: id,
      chain: "eth",
    };
    const tokenIdMetadata = await Web3Api.token.getTokenIdMetadata(options);
    const metadata = JSON.parse(tokenIdMetadata.metadata);

    console.log();
    const item = {
      name: metadata.name,
      metadataItem: metadata,
      description: metadata.description,
      tokenId: tokenIdMetadata.token_id,
      image: metadata.image_url,
      owner: tokenIdMetadata.owner_of,
    };
    setEnsNft(item);
    return item;
  };

  // console.log(fetchIndividualEns());
  console.log(ensNft);

  return (
    <div>
      <h1>{ensNft.name}</h1>
      <h2>{JSON.stringify(ensNft)}</h2>
      <img src={ensNft.image} />
    </div>
  );
};

export default NftDetail;
