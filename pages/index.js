import React from "react";
import { client } from "../lib/client";
import { Product, HeroBanner, FooterBanner } from "../components";

function Home({ product, bannerData }) {

  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {product?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner bannerData={bannerData.length && bannerData[0]}/>
    </>
  );
}

export default Home;

export async function getServerSideProps() {
  const query = "*[_type == 'product']";
  const product = await client.fetch(query);

  const bannerQuery = "*[_type == 'banner']";
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      product,
      bannerData,
    },
  };
}
