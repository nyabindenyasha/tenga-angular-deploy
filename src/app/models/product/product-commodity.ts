import { Shops } from "../shops/shop";
import { CartMock } from "../cart/cart-mock";

export class ProductCommodity {

    id: number;
    name: string;
    description: string;
    shopId?: number;
    shopName?: Shops;
    categoryId: number;
    categoryName?: string;
    price: number; 
    cartMork?: CartMock;

  }