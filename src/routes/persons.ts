import { Router } from 'express';
import {
  GET_PERSON_BY_ID,
  DELETE_PERSON_BY_ID,
  GET_ALL_PERSONS,
  CREATE_PERSON,
} from '../controllers/persons';

const router = Router();

router.route('/').get(GET_ALL_PERSONS).post(CREATE_PERSON);

router.route('/:id').get(GET_PERSON_BY_ID).delete(DELETE_PERSON_BY_ID);

export default router;
