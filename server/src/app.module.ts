import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ProductsModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.DB_URI),
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
