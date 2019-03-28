import { Meta } from "./cart";
import { MoltinProductMeta } from "./product";

export interface MoltinOrder {
    id: string;
    meta: MoltinProductMeta;
    
}