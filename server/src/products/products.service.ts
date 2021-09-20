/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Product } from 'src/graphql.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [{ id: 'firstprod', title: 'My Soul', price: 90000 }];

    getAll(): Product[] {
        return this.products;
    }

    getById(id: string): Product {
        return this.products.find(({ id: prodId }) => id === prodId);
    }

    createProduct(product: CreateProductDto): Product {
        const createdProduct: Product = { id: Date.now().toString(), ...product };
        this.products.push(createdProduct);
        return createdProduct;
    }
}
