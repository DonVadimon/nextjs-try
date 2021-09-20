import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/graphql.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductDocument, ProductSchemaBase } from './schemas/products.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(ProductSchemaBase.name) private productModel: Model<ProductDocument>) {}

    async getAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }

    async getById(id: string): Promise<Product> {
        return this.productModel.findById(id);
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto);
        return createdProduct.save();
    }

    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndRemove(id);
    }
}
