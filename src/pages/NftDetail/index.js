import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import { useMoralisWeb3Api } from "react-moralis";
import { address } from "../../contract/address";
import axios from "axios";
import { Detail } from "../../components";

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

    console.log(tokenIdMetadata);
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
    <div className="container-fluid">
      <Detail
        image={ensNft.image}
        name={ensNft.name}
        tokenId={ensNft.tokenId}
        description={ensNft.description}
        owner={ensNft.owner}
      />
    </div>
  );
};

export default NftDetail;
