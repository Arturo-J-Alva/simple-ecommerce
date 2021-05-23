import React, { forwardRef, useEffect } from 'react'
import ItemCard from './itemCard'

const CartCard = forwardRef((props, ref) => {
    const { setOpen, data, setCartProducts } = props
    let total = 0
    data.forEach(e => {
        total += e.P_millar
    })
    //const total = data.reduce((a, b) => a.P_millar + b.P_millar)
    function deleteItem(id) {
        setCartProducts(
            x => x.filter(e => e.id !== id)
        )
    }
    function emptyCart() {
        setCartProducts([])
    }
    return (
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ">
            <div className="w-64 p-2 flex flex-col">
                <h2 className="text-center mb-2 font-bold text-xl">CESTA</h2>
                <ul>
                    {
                        data.map(e => <ItemCard key={e.id} {...e} deleteItem={(id) => deleteItem(id)} />)
                    }
                </ul>
                {
                    !!data.length ? (
                        <>
                            <p>Precio total: {total.P_millar || total}</p>
                            <p onClick={emptyCart}
                                className="text-center underline cursor-pointer my-2">
                                Vacíar cesta
                        </p>
                        </>
                    ) : (
                        <p className="text-center mb-2">No hay productos en tu cesta</p>
                    )
                }
                <button ref={ref}
                    onClick={() => setOpen(false)}
                    className="focus:outline-none text-base uppercase bg-red-600 hover:bg-red-700 text-gray-200 border border-gray-200 rounded-full px-3 py-1 self-center">
                    Cerrar
                </button>
            </div>
        </div>
    )
})

export default CartCard
