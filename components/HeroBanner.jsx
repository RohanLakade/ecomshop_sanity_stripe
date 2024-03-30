import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ bannerData }) => {
  return (
    <div className="hero-banner-container">
      <div className="top">
        <div>
          <p className="beats-solo">{bannerData.smallText}</p>
          <h3>{bannerData.midText}</h3>
          <h1>{bannerData.largeText1}</h1>
          <Link href={"/product/" + bannerData.product}>
            <button type="button">{bannerData.buttonText}</button>
          </Link>
        </div>
        <div>
          <img
            src={urlFor(bannerData.image)}
            alt="headphones"
            className="hero-banner-image"
          ></img>
        </div>
      </div>
      <div className="bottom">
        <div className="desc">
          <h5>Description</h5>
          <p>{bannerData.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
