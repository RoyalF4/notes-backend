import { Request, Response } from 'express-serve-static-core';
import persons from '../data/persons';
import { CreateRequestBody } from '../types';
import { generateID } from '../utils/generateID';

export function GET_ALL_PERSONS(req: Request, res: Response) {
  res.status(200).json({
    status: 'success',
    data: persons,
  });
}

export function GET_PERSON_BY_ID(req: Request, res: Response) {
  const id = req.params.id;

  const person = persons.find((person) => person.id === Number(id));

  if (person) {
    return res.status(200).json({
      status: 'success',
      data: person,
    });
  } else {
    return res.status(400).json({
      status: 'fail',
      message: 'Bad request, person does not exist!',
    });
  }
}

export function CREATE_PERSON(
  req: Request<{}, any, CreateRequestBody>,
  res: Response
) {
  const { name, number } = req.body;

  if (!name) {
    return res.status(400).json({
      status: 'fail',
      message: 'A person needs a name!',
    });
  } else if (!number) {
    return res.status(400).json({
      status: 'fail',
      message: 'A person needs a number!',
    });
  }

  // check if name already exist
  const personIndex = persons.findIndex((person) => person.name === name);

  if (personIndex !== -1) {
    return res.status(400).json({
      status: 'fail',
      message: 'A person with that name already exist!',
    });
  }

  const newPerson = {
    id: generateID(),
    name,
    number,
  };

  persons.push(newPerson);

  res.status(201).json({
    status: 'success',
    data: newPerson,
  });
}

export function DELETE_PERSON_BY_ID(req: Request, res: Response) {
  const id = Number(req.params.id);

  const personIndex = persons.findIndex((person) => person.id === id);

  if (personIndex !== -1) {
    persons.splice(personIndex, 1);
    return res.status(204).json({
      status: 'success',
      message: 'person deleted successfully',
    });
  } else {
    return res.status(400).json({
      status: 'fail',
      message: 'Bad request, person does not exist!',
    });
  }
}
