import { useRouter } from "next/router";
import Button from "../../components/Button";
import Statistic from "../../components/Statistic";
import { Container } from "../../styles/styles";

export default function Result() {
    const router = useRouter();

    const total = +router.query.total!;
    const corrects = +router.query.correct!;
    const percentage = Math.round((corrects / total) * 100);

    const bgColorPercentageCorrect = () => {
        if (percentage <= 30) {
            return "#de6a33";
        } else if (percentage > 30 && percentage <= 70) {
            return "#ffa500 ";
        } else if (percentage > 70 && percentage < 100) {
            return "#6aa8de";
        } else {
            return "#01ff27";
        }
    };

    return (
        <Container>
            <h1>Resultado</h1>
            <div className="content">
                <Statistic text="Perguntas" value={total} />
                <Statistic text="Certas" value={corrects} bgColor="#9Cd2A4" />
                <Statistic text="Percentual" value={percentage} bgColor={bgColorPercentageCorrect()} />
            </div>
            <Button href="/" text="Tentar Novamente" />
        </Container>
    );
}
