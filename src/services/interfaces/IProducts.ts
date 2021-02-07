export interface IProduct {
    vehicle: string
    manufacturer: string
    model: string
    type: string
    color: string
    price: string
    handleClick: (data: IProduct) => void
}