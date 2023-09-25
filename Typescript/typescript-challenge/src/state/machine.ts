import { assign, createMachine } from 'xstate';
import IQuiz from '../interfaces/IQuiz';
import { QUIZ_STATE } from '../constants';

const schema = {
  context: {} as { Quiz: IQuiz },
  events: {} as
    | { type: 'GENERATED',
        value: IQuiz }
    | { type: 'ANSWERED',
        value: IQuiz }
    | { type: 'ANSWERS_REQUESTED',
        value: IQuiz },
};

export const quizMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEcCuBLAXgOnRANmAMQDiAogHJkBKAggCpkAiA2gAwC6ioADgPax0AF3R8AdtxAAPRAFoAzPOzyAjABZ5AJhUB2HQE4dbAKxa1AGhABPROoAc2fWx1q7xtnZ1vD8gL6-LNCxscSg+dDEoIloKAGUAdRpmdi4kEH5BEXFJGQQVOyUdTUNNDzU1NgA2TT1LGwRVY2V3NjVNCr1jFXljf0CMHAAzCPRYAAtIaLjE6liAfWoyAEUAVTJYxlZOSQzhUQk03NldSuxKyoq2FWuizzrECs1sO31NYp0VfTt1fTV-AJAYj4EDgkiCmB2Aj22UOcjeajOFzYVxumju1lsKmwmmqyMUdlcbF++T6IHBuAIYEhmX2OTkKmMTScKiuGl++l0XnuCH0+mwnORxh01T0mmMfwB5NC4Ui1OhB1AuVezxMbBqlSc7XkOmM3JxTyKDLRak+8iuOlJ5OGYlGEwgcqyCukiFUSjNakMbmuF3k+m5bSa5TcakqXg8NV6-yAA */
  predictableActionArguments: true,
  id: 'quiz',
  initial: QUIZ_STATE.IDLE,
  schema,
  context: {
    Quiz: {} as IQuiz,
  },
  states: {
    idle: {
      on: {
        GENERATED: {
          target: QUIZ_STATE.ONGOING,
          actions: ['updateQuizContext'],
        }
      }
    },
    ongoing: {
      on: {
        ANSWERED: {
          target: QUIZ_STATE.FINISHED,
          actions: ['updateQuizContext'],
        }
      }
    },
    finished: {
      on: {
        ANSWERS_REQUESTED: {
          target: QUIZ_STATE.IDLE,
          actions: ['updateQuizContext'],
        }
      }
    }
  },
},
{
  actions: {
    updateQuizContext: assign({
      Quiz: (_context, event) => event.value,
    }),
  },
});

export default quizMachine;
