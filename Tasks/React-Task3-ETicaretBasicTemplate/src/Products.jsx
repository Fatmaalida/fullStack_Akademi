import React from "react";
import {
  CardGroup,
  Col,
  Card,
  Button,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
} from "reactstrap";

export default function Products(props) {
  return (
    <>
      <h2>{props.currentCategory}</h2>
      <CardGroup>
        {props.products.map((product) => (
          <Col xs="4" key={product.id}>
            <Card style={{ marginLeft: "10px", marginRight: "10px", paddingBottom: "25px"}}>
              <CardImg
                top
                width="100%"
                src={product.image}
                alt={product.productName}
              />
              <CardBody>
                <CardTitle>{product.productName}</CardTitle>
                <CardText>{product.desc}</CardText>
                <Button onClick={() => props.addtocart(product)}>
                  Add To Cart
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </CardGroup>
    </>
  );
}
