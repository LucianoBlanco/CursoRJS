
import React, { useState } from 'react'
    export  const Contador = ({stock, initial}) => {
        const[counter, setCounter]= useState(initial);

        const add=() =>{
            if(counter<stock){
                setCounter(counter+1)
            }
        }
        const remove=()=>{
            if(counter>0){
                setCounter(counter-1)
            }
        }
      return (
        <div>
            <div className='itemCounter'>
                <div className='totalCounter'>
                    <span>hice:{counter} clicks</span>
                    <button onClick={(add)}>+</button>
                    <button onClick={(remove)}>-</button>
                </div>
            </div>
            
        </div>
      )
    }
export default Contador