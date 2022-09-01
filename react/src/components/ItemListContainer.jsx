import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { HashLoader } from "react-spinners";

const productosIniciales = [
  {
    id: 1,
    nombre: "Casco",
    precio: 100,
    detail: "Casco LS2,un casco para tu cabeza"
  },
  {
    id: 2,
    nombre: "Antiparras",
    precio: 200,
    detail: "Antiparras ojitos, para protejer tu vista"
  },
  {
    id: 3,
    nombre: "Defensas",
    precio: 300,
    detail:
      "Defensas, porque si te comes una piedra, tu moto te lo va a agradecer"
  },
  {
    id: 4,
    nombre: "Sunchos",
    precio: 400,
    detail: "Sunchos para atar la carpa"
  }
];
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pedido = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 5000);
    });
    pedido.then((resultado) => {
      setProductos(resultado);
      setLoading(false);
    });
    pedido.catch((error) => {
      console.log("No se pudo completar el pedido");
    });
  }, []);

  if (loading) {
    // si loading es True, mostra el Loader (spinner)
    return <HashLoader />;
  } else {
    return <ItemList productos={productos} />; // si es false, retorna el componente ItemList con
  } // los productos que guardamos en el estado
};
export default ItemListContainer;