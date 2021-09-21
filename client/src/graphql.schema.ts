/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */


export interface CreateProductInput {
    title: string;
    price: number;
    score?: Nullable<number>;
    description?: Nullable<string>;
    image?: Nullable<string>;
}

export interface Product {
    _id: string;
    title: string;
    price: number;
    score?: Nullable<number>;
    description?: Nullable<string>;
    image?: Nullable<string>;
}

export interface IQuery {
    products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;
    product(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export interface IMutation {
    createProduct(createProductInput?: Nullable<CreateProductInput>): Nullable<Product> | Promise<Nullable<Product>>;
    removeProduct(id?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
