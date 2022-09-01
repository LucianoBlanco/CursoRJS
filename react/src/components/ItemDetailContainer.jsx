import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { data } from '../mocks/mockData';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});

  useEffect(() => {
    data
      .then((res) => setDetalle(res.find((prod) => prod.id === '01')))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;