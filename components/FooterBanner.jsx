import { urlFor } from "../lib/client";
import Link from "next/link";
import React from "react";

const FooterBanner = ({ bannerData }) => {
  const {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  } = bannerData;
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <div>
            <img src={urlFor(image)} alt="" className="footer-banner-image" />
          </div>
          <div>
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <p>{midText}</p>
          <p>{desc}</p>
          <Link href={"/product/" + product}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
