import AnswerModel from "../../model/answer";
import { Container } from "./styles";

interface AnswerProps {
    value: AnswerModel;
    index: number;
    letter: string;
    letterBGColor: string;
    answerProvided: (index: number) => void;
}

export default function Answer(props: AnswerProps) {
    return (
        <Container onClick={() => props.answerProvided(props.index)}>
            <div className="answerContent">
                {!props.value.revealed ? (
                    <div className="frontCard">
                        <div className="letter" style={{ backgroundColor: props.letterBGColor }}>
                            {props.letter}
                        </div>
                        <div className="value">{props.value.value}</div>
                    </div>
                ) : (
                    <div className="backCard">
                        {props.value.correct ? (
                            <div className="correct">
                                <div>A resposta certa é...</div>
                                <div className="value">{props.value.value}</div>
                            </div>
                        ) : (
                            <div className="wrong">
                                <div>A resposta informada está errada...</div>
                                <div className="value">{props.value.value}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Container>
    );
}
