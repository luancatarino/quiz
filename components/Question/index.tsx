import QuestionModel from "../../model/question";
import { Container } from "./styles";

interface QuestionProps {
    value: QuestionModel
}


export default function Question(props: QuestionProps) {

    const question = props.value

    return <Container><h1>Question</h1></Container>
}