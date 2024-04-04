import { createContext } from "react"
import { IProduct } from "../../interface/product"

type ProductContextType = {
    product: IProduct,
    setProduct: React.Dispatch<React.SetStateAction<IProduct>>
}

export const productContext = createContext<ProductContextType>({
    product: {
        image: "",
        price: "",
        title: ""
    },
    setProduct: () => { }
})