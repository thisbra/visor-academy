import Joi from 'joi';
import { ANSWERS_LENGTH, MAX_NUMBER_OF_PARTICIPANTS, MIN_NUMBER_OF_PARTICIPANTS, UUID_LENGTH } from '../constants';

const validator = (schema: Joi.ObjectSchema<any>) => (payload: any) =>
  schema.validate(payload, { abortEarly: false });

const getQuizAnswersSchema = Joi.object({
  // {
  //   "participantId": "6509cac55abd0f18a14f5cd4",
  //   "quizId": "650b128aa08350ca695266c3"
  // }
  participantId: Joi.string().hex().length(UUID_LENGTH).required(),
  quizId: Joi.string().hex().length(UUID_LENGTH).required(),
});

export const validateGetQuizAnswers = validator(getQuizAnswersSchema);


const generateQuizSchema = Joi.object({
  // {
  //   "numberOfParticipants": 3
  // }
  numberOfParticipants: Joi.number().integer()
    .min(MIN_NUMBER_OF_PARTICIPANTS).max(MAX_NUMBER_OF_PARTICIPANTS)
    .required(),
});

export const validateGenerateQuiz = validator(generateQuizSchema);


const answerQuestionSchema = Joi.object({
  // {
  //   "participantId": "6509cac55abd0f18a14f5cd4",
  //   "quizId": "650b128aa08350ca695266c3",
  //   "answer": 2
  // }
  participantId: Joi.string().hex().length(UUID_LENGTH).required(),
  quizId: Joi.string().hex().length(UUID_LENGTH).required(),
  answer: Joi.number().integer().min(0).max(ANSWERS_LENGTH - 1).required(),
});

export const validateAnswerQuestion = validator(answerQuestionSchema);


const getNextQuestionSchema = Joi.object({
  // {
  //   "participantId": "6509cac55abd0f18a14f5cd4",
  //   "quizId": "650b128aa08350ca695266c3"
  // }
  participantId: Joi.string().hex().length(UUID_LENGTH).required(),
  quizId: Joi.string().hex().length(UUID_LENGTH).required(),
});

export const validateGetNextQuestion = validator(getNextQuestionSchema);