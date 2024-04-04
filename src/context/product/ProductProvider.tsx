import { useState } from "react";
import { IProduct } from "../../interface/product";
import { productContext } from '.'


export function ProductProvider({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const [product, setProduct] = useState<IProduct>({
        image:
            "https://res.cloudinary.com/dk0z4ums3/image/upload/v1594622096/attached_image/ini-makanan-sehat-yang-perlu-dikonsumsi-setiap-hari.jpg",
        price: "150.000.000",
        title: "Makanan sehat",
    });

    return (
        <productContext.Provider value={{ product, setProduct }}>
            {children}
        </productContext.Provider>
    )
}