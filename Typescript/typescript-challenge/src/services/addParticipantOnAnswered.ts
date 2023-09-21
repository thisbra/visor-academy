import Quiz from "../models/quizzes";

async function addParticipantOnAnswered(quizId: string, questionId: string, participantId: string) {
  try {
    // get quiz from db and add participant id to quiz.question(id).answeredBy ans save
    await Quiz.findByIdAndUpdate(
      quizId,
      {
        $push: {
          "questions.$[question].answeredBy": participantId,
        },
      },
      {
        arrayFilters: [{ "question._id": questionId }],
        new: true,
      }
    );
    console.log(`[${new Date().toLocaleString()}] ${participantId} added to question ${questionId} on quiz ${quizId}`);
  } catch (error) {
    throw (`Error on addParticipantOnAnswered: ${error}`);
  }
}

export default addParticipantOnAnswered;