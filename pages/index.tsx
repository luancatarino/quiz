import Question from "../components/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";
import {useState} from "react"

const questionMock = new QuestionModel(1, "Qual é a melhor cor?", [
    AnswerModel.wrong("Verde"),
    AnswerModel.wrong("Azul"),
    AnswerModel.wrong("Vermelha"),
    AnswerModel.correct("Preta"),
]);

export default function Home() {
  
    const [question, setQuestion] = useState(questionMock)

    const onResponse = (index: number) => {
        setQuestion(question.answerWith(index))
        console.log(index)
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Question value={question} onResponse={onResponse} />
        </div>
    );
}
