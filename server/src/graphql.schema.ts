
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateProductInput {
    title: string;
    price: number;
    score?: Nullable<number>;
    description?: Nullable<string>;
    image?: Nullable<string>;
}

export class Product {
    _id: string;
    title: string;
    price: number;
    score?: Nullable<number>;
    description?: Nullable<string>;
    image?: Nullable<string>;
}

export abstract class IQuery {
    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract product(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
    abstract createProduct(createProductInput?: Nullable<CreateProductInput>): Nullable<Product> | Promise<Nullable<Product>>;

    abstract removeProduct(id?: Nullable<string>): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
