import { ProductCommodity } from "../product/product-commodity";

export class CartMockRequest {

    productCommodityId: number;
    quantity: number = 1;
    id: number;
    productCommodityName?: ProductCommodity;
}
