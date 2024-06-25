import { Request, Response } from 'express-serve-static-core';
import persons from '../data/persons';

export function GET_INFO(req: Request, res: Response) {
  const count = persons.length;
  const date = new Date().toString();
  res.send(`Phonebook has info for ${count} people\n\n${date}`);
}
