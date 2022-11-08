import { Container } from "./styles";

interface StatementProps {
    text: string;
}

export default function Statement(props: StatementProps) {
    return (
        <Container>
            <div className="text">{props.text}</div>
        </Container>
    );
}
