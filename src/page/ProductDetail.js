import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>{product?.title}</div>

    // <Container>
    //   <Row>
    //     <Col className="product-img">
    //       <img src={product?.img} />
    //     </Col>
    //     <Col>
    //       <div>{product?.title}</div>
    //       <div>{product?.price}</div>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default ProductDetail;