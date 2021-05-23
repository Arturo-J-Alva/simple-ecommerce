import React, { forwardRef } from 'react'

const ProductCardDetail = forwardRef((props, ref) => {
    const { Producto, descripcion, photo, setOpen, P_millar, Tipo, Stock, Subtipo, Unidad, addProduct, id } = props
    return (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ">
            <div className=" rounded-lg overflow-hidden shadow-xl bg-blue-200  m-2 flex flex-col" style={{ width: "400px" }}>
                <div className="flex justify-center items-center h-64 bg-white">
                    <img src={photo} alt="producto-1" className="h-full" />
                </div>
                <h2 className="text-center">{Producto}</h2>
                <p className="text-justify mx-2">
                    {descripcion}
                </p>
                <p className=" text-base mb-2 mx-2">
                    Tipo: {Tipo}
                </p>
                <p className=" text-base mb-2 mx-2">
                    Subtipo: {Subtipo}
                </p>
                <p className=" text-base mb-2 mx-2">
                    Precio por millar: S/ {P_millar?.toFixed(2)}
                </p>
                <p className=" text-base mb-2 mx-2">
                    Stock: {Stock} {Unidad}
                </p>
                <div className="flex flex-row justify-around items-end mb-2 flex-1">
                    <button ref={ref}
                        onClick={() => setOpen(false)}
                        className="focus:outline-none text-base uppercase bg-red-600 hover:bg-red-700 text-gray-200 border border-gray-200 rounded-full px-3 py-1">
                        Cerrar
                </button>
                    <button onClick={() => addProduct(id)}
                        className="focus:outline-none inline-block bg-blue-500 hover:bg-blue-600 border border-red-500 rounded-full px-3 py-1 text-base font-semibold text-gray-200 ">
                        Agregar
                </button>
                </div>
            </div>
        </div>
    )
})

export default ProductCardDetail
