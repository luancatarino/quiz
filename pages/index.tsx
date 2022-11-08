import Question from "../components/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

export default function Home() {
    const questionTest = new QuestionModel(1, "Melhor Cor?", [
        AnswerModel.wrong("Verde"),
        AnswerModel.wrong("Azul"),
        AnswerModel.wrong("Vermelha"),
        AnswerModel.correct("Preta"),
    ]);

    return <Question value={questionTest} />;
}
