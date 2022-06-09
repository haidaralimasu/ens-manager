import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div class="card mx-2 my-2" style={{ width: "20rem" }}>
        <img src={props.image} class="card-img-top" alt={props.name} />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text"></p>
          <Link to={`/nft/${props.tokenId}`} class="btn w-100 btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
