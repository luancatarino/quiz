import QuestionModel from "../../model/question";
import Button from "../Button";
import Question from "../Question";
import { Container } from "./styles";

interface QuizProps {
    question: QuestionModel;
    last: boolean;
    questionAnswered: (question: QuestionModel) => void;
    goToNextStep: () => void;
}

export default function Quiz(props: QuizProps) {
    const answerProvided = (index: number) => {
        if (props.question.notAnswered) {
            props.questionAnswered(props.question.answerWith(index));
        }
    };

    return (
        <Container>
            {props.question && (
                <Question value={props.question} timeToAnswer={6} answerProvided={answerProvided} outOfTime={props.goToNextStep} />
            )}
            <Button onClick={props.goToNextStep} text={props.last ? "Finalizar" : "Próxima"} />
        </Container>
    );
}
