import React from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { ENSName } from "react-ens-name";
import { formatEther } from "@ethersproject/units";
import { useBalanceOf } from "../../hooks";

const Navbar = () => {
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const balance = useEtherBalance(account);
  const userEthBalance = balance ? balance.toString() : "0";
  const ensBalance = useBalanceOf(account);
  const formattedEnsBalance = ensBalance ? ensBalance : 0;

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            ENS Manager
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile" class="nav-link">
                  Profile
                </Link>
              </li>
            </ul>

            {account ? (
              <div>
                <span
                  style={{ marginRight: "20px" }}
                  class="badge text-bg-primary"
                >
                  <ENSName address={account} />
                </span>

                <span
                  style={{ marginRight: "20px" }}
                  class="badge text-bg-primary"
                >
                  Balance: {formatEther(userEthBalance)}
                </span>

                <span
                  style={{ marginRight: "20px" }}
                  class="badge text-bg-primary"
                >
                  ENS Available: {formattedEnsBalance.toString()}
                </span>

                <button
                  onClick={deactivate}
                  class="btn btn-danger"
                  type="submit"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={() => activateBrowserWallet()}
                class="btn btn-success"
                type="submit"
              >
                Connect
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
