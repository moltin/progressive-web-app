export interface MoltinLink {
    href: string;
}

export interface MoltinFile {
    link: MoltinLink;
}

export interface MoltinProduct {
    id: string;
    name: string;
    slug: string;
    sku: string;
    description: string;
    main_image: MoltinFile;

    price: MoltinProductPrice[]
    meta: MoltinProductMeta
    categories: MoltinCategory[]
}

export interface MoltinProducts {
    //product array
    data: MoltinProduct[];
    meta: MoltinProductMeta;
}

export interface MoltinCategory {
    id: string;
    name: string;
}

export interface MoltinProductPrice {
    amount: number;
    currency: string;
    includes_tax: boolean
}

export interface MoltinProductMeta {
    timestamps: MoltinTimestamp
    display_price: MoltinMetaDisplayPrice
}

export interface MoltinTimestamp {
    created_at: string;
    updated_at: string;
}

export interface MoltinMetaDisplayPrice {
    with_tax: MoltinProductDisplayPrice
    without_tax: MoltinProductDisplayPrice
}

export interface MoltinProductDisplayPrice {
    amount: number;
    currency: string;
    formatted: string;
}
