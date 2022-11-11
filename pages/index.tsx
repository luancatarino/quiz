import { useState } from "react";
import Button from "../components/Button";
import Question from "../components/Question";
import AnswerModel from "../model/answer";
import QuestionModel from "../model/question";

const questionMock = new QuestionModel(1, "Qual é a melhor cor?", [
    AnswerModel.wrong("Verde"),
    AnswerModel.wrong("Azul"),
    AnswerModel.wrong("Vermelha"),
    AnswerModel.correct("Preta"),
]);

export default function Home() {
    const [question, setQuestion] = useState(questionMock);

    const onResponse = (index: number) => {
        setQuestion(question.answerWith(index));
    };

    const outOfTime = () => {
        if (question.notAnswered) {
            setQuestion(question.answerWith(-1));
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Question value={question} onResponse={onResponse} timeToAnswer={5} outOfTime={outOfTime} />
            <Button text="Próxima"/>
        </div>
    );
}
