import { useRouter } from "next/router";
import { Container } from "./styles";

export default function Result() {
    const router = useRouter();

    const total = +router.query.total;
    const corrects = +router.query.correct;
    const percentage = Math.round((corrects / total) * 100);

    return (
        <Container>
            <h1>Result</h1>
            <div>{total}</div>
            <div>{corrects}</div>
            <div>{`${percentage}%`}</div>
        </Container>
    );
}
