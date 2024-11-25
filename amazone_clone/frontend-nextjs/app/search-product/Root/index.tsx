"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { searchProductAPI } from "@/app/api/productApi"

export const handleProduct = (props: any) => {
    const [products, setProducts] = useState([])
    let userSearch = useSearchParams()
    let keyword = userSearch.get("name") || ''

    useEffect(() => {
        searchProductAPI(keyword).then(result => {

            setProducts(result)
        })
    }, [keyword])

    return products.map((item: any) => {
        return (
            <div key={item.product_id}>
                <Link href={"/product-detail"} >
                    <img src={item.color_image} style={{ width: "95% ", height: "150px" }} alt="..." />
                    <div className="flex items-center my-3">
                        <span className="whitespace-normal  px-1 mr-1 text-white bg-[red]">20% off</span>
                        <span className="whitespace-normal text-[red]">Limited time deal</span>
                    </div>
                    <p>{item.product_name}</p>
                </Link>
            </div>
        )
    })
}
