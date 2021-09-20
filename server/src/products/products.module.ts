import { ProductsService } from './products.service';
import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, ProductSchemaBase } from './schemas/products.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ProductSchemaBase.name,
                schema: ProductSchema,
            },
        ]),
    ],
    controllers: [],
    providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
