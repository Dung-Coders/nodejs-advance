"use server"
import axios from "axios"

const PRODUCT_DOMAIN = 'http://localhost:8080'

export const searchProductAPI = async (name:string) =>{
    let {data} = await axios.get(`${PRODUCT_DOMAIN}/product/search?name=${name}`)

    return data;
}

