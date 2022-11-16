import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import QuestionModel from "../model/question";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
    const router = useRouter();

    const [question, setQuestion] = useState<QuestionModel>();
    const [idQuestions, setIdQuestions] = useState<number[]>([]);
    const [correctAnswers, setCorrectAnswers] = useState<number>(0);

    async function loadIdQuestions() {
        const resp = await fetch(`${BASE_URL}/quiz`);
        const idQuestionsJson = await resp.json();
        setIdQuestions(idQuestionsJson);
    }

    async function loadQuestions(idQuestions: number) {
        const resp = await fetch(`${BASE_URL}/questions/${idQuestions}`);
        const json = await resp.json();
        const newQuestion = QuestionModel.createUsingObject(json);
        setQuestion(newQuestion);
    }

    useEffect(() => {
        loadIdQuestions();
    }, []);

    useEffect(() => {
        idQuestions.length > 0 && loadQuestions(idQuestions[0]);
    }, [idQuestions]);

    const questionAnswered = (questionAnswered: QuestionModel) => {
        setQuestion(questionAnswered);
        const correct = questionAnswered.correct;
        setCorrectAnswers(correctAnswers + (correct ? 1 : 0));
    };

    const idNextQuestion = () => {
        const nextIndex = idQuestions.indexOf(question.id) + 1;
        return idQuestions[nextIndex];
    };

    const goToNextStep = () => {
        const nextId = idNextQuestion();
        nextId ? goToNextQuestion(nextId) : conclude();
    };

    const goToNextQuestion = (nextId: number) => {
        loadQuestions(nextId);
    };

    const conclude = () => {
        router.push({
            pathname: "/result",
            query: {
                total: idQuestions.length,
                correct: correctAnswers,
            },
        });
    };

    return question ? (
        <Quiz
            question={question}
            last={idNextQuestion() === undefined}
            questionAnswered={questionAnswered}
            goToNextStep={goToNextStep}
        />
    ) : (
        false
    );
}
