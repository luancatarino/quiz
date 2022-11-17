import { Container } from "./styles";

interface StatisticProps {
    value: any;
    text: string;
    bgColor?: string;
    fontColor?: string;
}

export default function Statistic(props: StatisticProps) {
    return (
        <Container>
            <div className="value" style={{ backgroundColor: props.bgColor ?? "#FDD60F", color: props.fontColor ?? "#333" }}>
                {props.value}
            </div>
            <div className="text">{props.text}</div>
        </Container>
    );
}
