import React from 'react'

const ProductCard = ({ Producto, descripcion, photo, id, getDetail, P_millar, addProduct }) => {

    return (
        <div className="w-64 rounded-lg overflow-hidden shadow-xl bg-blue-200  m-2 flex flex-col">
            <div className="flex justify-center items-center h-64 bg-white">
                <img src={photo} alt="producto-1" className="" />
            </div>
            <h2 className="text-center">{Producto}</h2>
            <p className="text-justify mx-2">
                {descripcion}
            </p>
            <p className="text-right text-2xl mb-2 mx-2">
                S/ {P_millar?.toFixed(2)}
            </p>
            <div className="flex flex-row justify-around items-end mb-2 flex-1">
                <button onClick={() => getDetail(id)} type="button"
                    className="focus:outline-none text-base uppercase bg-red-600 hover:bg-red-700 text-gray-200 border border-gray-200 rounded-full px-3 py-1">
                    Vista previa
                </button>
                <button type="button" onClick={()=>addProduct(id)}
                    className="focus:outline-none inline-block bg-blue-500 hover:bg-blue-600 border border-red-500 rounded-full px-3 py-1 text-base font-semibold text-gray-200 ">
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ProductCard
