import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../g_components/layout'


const Inicio = () => {
    //const dispatch = useDispatch();
    const { Tipo } = useSelector(reducers => reducers.loginReducer);
    return (
        <Layout title="Home">
            <h1 className="text-2xl font-bold uppercase underline text-center text-blue-700">Inicio!</h1>
            <p className="">
                Tipo: {Tipo}
            </p>
            <p>
            process.env.NODE_ENV : {process.env.NODE_ENV }
            </p>
        </Layout>
    )
}

export default Inicio
