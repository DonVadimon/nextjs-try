import { ProductsService } from './products.service';
import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
