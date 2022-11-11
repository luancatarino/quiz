import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Container } from "./styles";

interface CountdownProps {
    duration: number;
    outOfTime: () => void;
}

export default function Countdown(props: CountdownProps) {
    return (
        <Container>
            <CountdownCircleTimer
                duration={props.duration}
                size={120}
                isPlaying
                onComplete={props.outOfTime}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7, 5, 2, 0]}
            >{({remainingTime}) => remainingTime}</CountdownCircleTimer>
        </Container>
    );
}
