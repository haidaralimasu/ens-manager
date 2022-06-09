import React from "react";
import "./details.css";

const Detail = (props) => {
  return (
    <div>
      <div class="container" style={{ backgroundColor: "white" }}>
        <div class="card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    <img src={props.image} />
                  </div>
                </div>
              </div>
              <div class="details col-md-6">
                <h3 class="product-title">{props.name}</h3>
                <div class="rating">
                  <div class="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <span class="review-no">Token ID: {props.tokenId}</span>
                </div>
                <p class="product-description">
                  Description:
                  <br />
                  {props.description}
                </p>

                <p class="vote">
                  Owner:
                  <br />
                  {props.owner}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
