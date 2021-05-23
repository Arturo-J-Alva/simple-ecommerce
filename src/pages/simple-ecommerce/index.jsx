import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import CartModal from '../../components/inicio/cartModal ';
//import { useDispatch, useSelector } from 'react-redux';
import DetailProductModal from '../../components/inicio/detailProductModal';
import ProductCard from '../../components/inicio/productCard';
import HeaderNagivation from '../../g_components/headerNagivation';
import Layout from '../../g_components/layout'
import Swal from 'sweetalert2'


const Inicio = ({ data, success }) => {
    //const dispatch = useDispatch();
    //const { Tipo } = useSelector(reducers => reducers.loginReducer);
    const [openProd, setOpenProd] = useState(false)
    const [dataDetail, setDataDetail] = useState(null)
    const [cartProducts, setCartProducts] = useState([])
    const [openCart, setOpenCart] = useState(false)
    //console.log("cartProducts:", cartProducts)

    useEffect(() => {
        !success && alert("ERROR: No se pudo obtener data de la API")
        const persistenData = localStorage.getItem("cart")
        if (persistenData) {
            const dataJson = JSON.parse(persistenData)
            console.log("dataJson:", dataJson)
            setCartProducts(dataJson)
        }
    }, [])

    useEffect(() => {
        const data = JSON.stringify(cartProducts)
        localStorage.setItem("cart", data)
    }, [cartProducts])

    function getDetail(id) {
        const productSelect = data.find(e => e.id === id)
        setDataDetail(productSelect)
        setOpenProd(true)
    }
    function addProduct(id) {
        const productSelect = data.find(e => e.id === id)

        const isProductExist = cartProducts.find(e => e.id === productSelect?.id)

        if (isProductExist) {

            Swal.fire(
                'Información',
                'El producto solo se puede agregar una vez.',
                'info'
            )
        } else {
            setCartProducts(x => [...x, productSelect])
            Swal.fire(
                {
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto agregado',
                    showConfirmButton: false,
                    timer: 1500
                }
            )
        }
    }


    return (
        <Layout title="Ecommerce">
            <HeaderNagivation nItems={cartProducts.length} setOpenCart={setOpenCart} />
            <h1 className="text-2xl font-bold uppercase underline text-center text-blue-700">Catálogo de productos</h1>
            <div className="flex flex-row justify-around flex-wrap">
                {
                    data?.map((e, ind) => (
                        <ProductCard key={ind} {...e}
                            getDetail={(id) => getDetail(id)}
                            addProduct={(id) => addProduct(id)} />
                    ))
                }
            </div>
            <DetailProductModal open={openProd} setOpen={setOpenProd} data={dataDetail} addProduct={(id) => addProduct(id)} />
            <CartModal open={openCart} setOpen={setOpenCart} data={cartProducts} setCartProducts={setCartProducts} />
        </Layout>
    )
}

export async function getStaticProps() {
    try {
        const res = await Axios.get("https://corpoalva.hortalizasgaia-pe.com/consulta/general")
        const data = res.data
        return { props: { data, success: true }, revalidate: 2 }
    } catch (e) {
        console.log(e)
        return { props: { data: null, success: false } }
    }

}

export default Inicio
