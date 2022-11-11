import QuestionModel from "../../model/question";
import Answer from "../Answer";
import Countdown from "../Countdown";
import Statement from "../Statement";
import { Container } from "./styles";

const letters = [
    {value: "A", color: "#F2C866"},
    {value: "B", color: "#F266BA"},
    {value: "C", color: "#85D4F2"},
    {value: "D", color: "#BCE596"}
]

interface QuestionProps {
    value: QuestionModel;
    timeToAnswer?: number;
    onResponse: (index: number) => void;
    outOfTime: () => void;
}

export default function Question(props: QuestionProps) {
    const question = props.value;

    const renderAnswer = () => {
        return question.answers.map((resp, i) => {
            return <Answer value={resp} key={i} index={i} letter={letters[i].value} letterBGColor={letters[i].color} onResponse={props.onResponse}/>;
        });
    };

    return (
        <Container>
            <Statement text={question.statement} />
            <Countdown duration={props.timeToAnswer ?? 10} outOfTime={props.outOfTime}/>
            {renderAnswer()}
        </Container>
    );
}
