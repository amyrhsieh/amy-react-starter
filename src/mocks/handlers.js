import { rest } from 'msw';
import { mockApiResp } from './mockApi';

export const handlers = [
  rest.get('https://dog.ceo/api/breeds/image/random', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockApiResp),
    );
  }),
];
