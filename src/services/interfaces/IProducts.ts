import { cartState } from "../redux/reducers/cartReducer";

export interface IProduct {
    id: number;
    color: string;
    vehicle: string;
    manufacturer: string;
    model: string;
    price: string;
    type: string;
}
