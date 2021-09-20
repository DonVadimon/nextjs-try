import type { NextApiHandler } from 'next';

type Data = { data: number };

const countHandler: NextApiHandler<Data> = async (request, response) => {
    const { data = 1 } = request.body as Data;

    // simulate IO latency
    await new Promise((resolve) => setTimeout(resolve, 500));

    response.json({ data });
};

export default countHandler;
