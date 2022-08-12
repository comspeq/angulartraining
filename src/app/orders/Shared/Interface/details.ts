export interface productdetails{
    id: number,
    title?: string,
    price: number,
    description?:  string,
    category?: string,
    image?: string,
    rating: {
        rate: number,
        count: number
    },
    promotion?:boolean,
    stars?:number,
    brand?:string
}