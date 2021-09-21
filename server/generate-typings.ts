import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();

const forClient = !!process.argv[2];
const distName = 'graphql.schema.ts';

definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: forClient ? join(process.cwd(), `../client/src/${distName}`) : join(process.cwd(), `src/${distName}`),
    outputAs: forClient ? 'interface' : 'class',
});
