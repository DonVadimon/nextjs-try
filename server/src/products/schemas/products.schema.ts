import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'src/graphql.schema';
import { Document } from 'mongoose';

export type ProductDocument = ProductSchemaBase & Document;

@Schema()
export class ProductSchemaBase extends Product {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    price: number;

    @Prop()
    score?: number;

    @Prop()
    description?: string;

    @Prop()
    image?: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductSchemaBase);
