import { rest } from 'msw';
import { mockCharacters } from './characters';

export const handlers = [
  rest.get('http://localhost:3000/characters', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockCharacters),
    );
  }),
];
