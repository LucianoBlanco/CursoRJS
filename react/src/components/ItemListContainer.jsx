import React, { useEffect } from 'react';
import { useState } from 'react';
import { data } from '../mocks/mockData';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    data
      .then((response) => setLista(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>{loading ? <p>Cargando data...</p> : <ItemList lista={lista} />}</div>
  );
};

export default ItemListContainer;