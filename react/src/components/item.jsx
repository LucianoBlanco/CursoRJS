import React from "react";
import Card from "react-bootstrap/Card";
import "./ItemList.css";

const Item = ({ producto }) => {
  return (
    <div className="cards">
      <Card>
        <Card.Header>{producto.nombre}</Card.Header>
        <Card.Body>
          <Card.Title>Precio : ${producto.precio}</Card.Title>
          <Card.Title>{producto.detail}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Item;