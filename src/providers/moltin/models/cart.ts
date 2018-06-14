
export interface UnitPrice {
    amount: number;
    currency: string;
    includes_tax: boolean;
}

export interface Value {
    amount: number;
    currency: string;
    includes_tax: boolean;
}

export interface Links {
    product: string;
}

export interface Unit {
    amount: number;
    currency: string;
    formatted: string;
}

export interface Price {
    unit: Unit;
    value: Value;
}

export interface DisplayPrice {
    with_tax: Price;
    without_tax: Price;
}

export interface Timestamps {
    created_at: Date;
    updated_at: string;
}

export interface Meta {
    display_price: DisplayPrice;
    timestamps: Timestamps;
}

export interface MoltinCartItem {
    id: string;
    type: string;
    product_id: string;
    name: string;
    description: string;
    sku: string;
    quantity: number;
    manage_stock: boolean;
    unit_price: UnitPrice;
    value: Value;
    links: Links;
    meta: Meta;
}

export interface MoltinCartDisplayPrice {
    with_tax: Price;
    without_tax: Price;
}

export interface MoltinCartMetaDisplayPrice {
    with_tax: Unit;
    without_tax: Unit;
}

export interface MoltinCartMeta {
    display_price: MoltinCartMetaDisplayPrice;
    timestamps: Timestamps;
}

export interface MoltinCart {
    data: MoltinCartItem[];
    meta: MoltinCartMeta;
}