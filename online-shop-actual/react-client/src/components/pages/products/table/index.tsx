import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IProduct } from '../api';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from "primereact/rating"
import { Tag } from "primereact/tag"


import { useState } from 'react';


export default function ProductsTable(props: { products: Array<IProduct>, addToCart: Function }) {
    if (!props.products[0]) return null;
    const itemTemplate = (product: IProduct) => {
        const [quantity, setQuantity] = useState(1)
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <Rating value={product.price} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                                <Tag value={product.name} ></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-row align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <Button icon={"pi pi-plus"} className="p-button-rounded" onClick={() => {
                                setQuantity(quantity + 1)
                            }} ></Button>
                            <Button icon={"pi pi-fan"} className="p-button-rounded">{quantity}</Button>
                            <Button icon={"pi pi-minus"} className="p-button-rounded" onClick={() => {
                                setQuantity(quantity - 1)
                            }} ></Button>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" onClick={() => {
                                props.addToCart({ productId: product.id, productPrice: product.price, quantity })
                            }} ></Button>
                        </div>
                    </div>
                </div>
            </div >
        );
    };


    return <div>
        <div >
            <DataView value={props.products} itemTemplate={itemTemplate} />
        </div>
    </div>
}

