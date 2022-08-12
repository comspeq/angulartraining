import { productdetails } from "./details";

export interface CartItems{
    id :number,
    productId :number,
    product ?:productdetails,
    quantity:number
}