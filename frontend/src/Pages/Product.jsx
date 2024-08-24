import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductHd from '../Components/ProductHd/ProductHd';
// import ProductMd from '../Components/ProductMd';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find((e) => e._id === productId);

  if (!product) {
    return <div className="container text-4xl pt-16 pb-28 pl-20">Product not found</div>;
  }

  return (
    <>
      <section className="container sproduct my-8 pt-5 m-auto">
        {/* <ProductMd product={product} /> */}
        <ProductHd product={product} />
        {/* <ProductRelated /> */}
      </section>
    </>
  );
};

export default Product;
