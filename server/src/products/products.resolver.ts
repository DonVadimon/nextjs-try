import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/graphql.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsGuard } from './products.guard';
import { ProductsService } from './products.service';

@Resolver('Product')
export class ProductsResolver {
    constructor(private readonly productsService: ProductsService) {}

    @Query('products')
    @UseGuards(ProductsGuard)
    async products() {
        return this.productsService.getAll();
    }

    @Query('product')
    async product(
        @Args('id')
        id: string,
    ): Promise<Product> {
        return this.productsService.getById(id);
    }

    @Mutation('createProduct')
    async createProduct(@Args('createProductInput') args: CreateProductDto): Promise<Product> {
        const createdProduct = await this.productsService.create(args);
        return createdProduct;
    }

    @Mutation('removeProduct')
    async removeProduct(@Args('id') args: string): Promise<Product> {
        const removedProduct = await this.productsService.remove(args);
        return removedProduct;
    }
}
