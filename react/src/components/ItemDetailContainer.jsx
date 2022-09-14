
import React, { useState } from 'react'
import { useEffect } from 'react'
import { data } from '../mocks/mockData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailCointener = () => {

const [productDetail, setProductDetail]= useState({});
const [loading, setLoading]= useState(true);
const {id} = useParams();

useEffect (()=>{

data
.then((res)=> setProductDetail(res.find((item)=>item.id === id)))
.catch ((error)=> console.log(error))
.finally(()=> setLoading(false))
console.log ('detalle', productDetail)
},[])

return (
    <div>
       {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailCointener