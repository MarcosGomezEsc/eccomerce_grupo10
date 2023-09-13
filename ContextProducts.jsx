import { createContext } from "react";
import { useState, useEffect } from "react"
import { ObtenerDataProd } from './obtenerDataProd'
import {ProdInicial} from './ProdInicial'

export const ContextProduct = createContext(ProdInicial)
export const ProvedorContextProd = ({children}) =>{

    const[productos, setProductos]=useState([])
    const[isLoading, setIsLoading]=useState(true)
    const[error, setError]=useState(null)

    const fetchdata = async()=>{
        try {
            setError(null)
            setIsLoading(true)
            const data = await ObtenerDataProd()
            setProductos(data)
        }
        catch(error){
            setError.error(error)
            console.log(error.message)
        }
        finally{
            setIsLoading(false)
        }
        useEffect(()=>{
            fetchdata()
        },[])
        return (
            <ContextProduct.Provider
            value = {{productos, isLoading, error}}>
            {children}
        </ContextProduct.Provider>
     )
    }
}