import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ANSWERS_LENGTH, MAX_NUMBER_OF_PARTICIPANTS, MIN_NUMBER_OF_PARTICIPANTS, UUID_LENGTH } from '../constants';

const validator = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;
    const { error } = schema.validate(payload, { abortEarly: false });

    if (error) {
      return res.status(400).json({ error: error.details.map((detail) => detail.message) });
    }

    next();
  };
};

const getQuizAnswersSchema = Joi.object({
  participantId: Joi.string().hex().length(UUID_LENGTH).required(),
  quizId: Joi.string().hex().length(UUID_LENGTH).required(),
});

const generateQuizSchema = Joi.object({
  numberOfParticipants: Joi.number().integer()
    .min(MIN_NUMBER_OF_PARTICIPANTS).max(MAX_NUMBER_OF_PARTICIPANTS)
    .required(),
});

const answerQuestionSchema = Joi.object({
  participantId: Joi.string().hex().length(UUID_LENGTH).required(),
  quizId: Joi.string().hex().length(UUID_LENGTH).required(),
  answer: Joi.number().integer().min(0).max(ANSWERS_LENGTH - 1).required(),
});

const getNextQuestionSchema = Joi.object({
  participantId: Joi.string().hex().length(UUID_LENGTH).required(),
  quizId: Joi.string().hex().length(UUID_LENGTH).required(),
});

export const validateGetQuizAnswers = validator(getQuizAnswersSchema);
export const validateGenerateQuiz = validator(generateQuizSchema);
export const validateAnswerQuestion = validator(answerQuestionSchema);
export const validateGetNextQuestion = validator(getNextQuestionSchema);
