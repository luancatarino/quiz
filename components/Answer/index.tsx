import AnswerModel from "../../model/answer";
import { Container } from "./styles";

interface AnswerProps {
    value: AnswerModel;
    index: number;
    letter: string;
    letterBGColor: string;
    onResponse: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
    return (
        <Container onClick={() => props.onResponse(props.index)}>
            <div className="answerContent">
                <div className="frontCard">
                    <div className="letter" style={{ backgroundColor: props.letterBGColor }}>
                        {props.letter}
                    </div>
                    <div className="value">{props.value.value}</div>
                </div>
                <div className="backCard"></div>
            </div>
        </Container>
    );
}
