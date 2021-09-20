import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        ProductsModule,
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
