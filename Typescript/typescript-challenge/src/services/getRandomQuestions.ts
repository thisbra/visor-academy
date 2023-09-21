import getAllQuestions from "./getAllQuestions";

async function getRandomQuestions(numberOfQuestions: number) {
  try {
    const questions = await getAllQuestions();
    const randomQuestions = questions.sort(() => Math.random() - Math.random()).slice(0, numberOfQuestions);
    return randomQuestions;
  } catch (error: any) {
    console.error(error);
  }
}

export default getRandomQuestions;