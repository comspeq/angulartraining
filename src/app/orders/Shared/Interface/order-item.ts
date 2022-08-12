import { productdetails } from './details';

export interface orderItems{
    id: number,
    productId:number,
    product ?:productdetails,
    orderId:number,
    quantity:number
}