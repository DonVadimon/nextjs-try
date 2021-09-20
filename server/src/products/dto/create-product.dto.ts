import { Min } from 'class-validator';
import { CreateProductInput } from 'src/graphql.schema';

export class CreateProductDto extends CreateProductInput {
    @Min(0)
    price: number;
}
