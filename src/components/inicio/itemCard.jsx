import React from 'react'

const ItemCard = ({ photo, Producto, Unidad, P_millar, id, deleteItem }) => {
    return (
        <li className="flex flex-row justify-between items-center border-b-2">
            <div className="flex justify-center items-center w-16 h-16 bg-white">
                <img src={photo} alt="producto-1" className="h-full" />
            </div>
            <div className="flex-1">
                <p className=" ml-2 leading-4 font-bold">{Producto}</p>
                <p className=" ml-2 leading-4">S/ {P_millar}</p>
                <p className=" ml-2 leading-4"> 1000 {Unidad}</p>
            </div>
            <svg
                className="w-6 h-6 cursor-pointer"
                onClick={() => deleteItem(id)}
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
        </li>
    )
}

export default ItemCard
