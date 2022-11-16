import questions from "../data";

export default function handler(req: any, res: any) {
    const selectedId = +req.query.id;

    const uniqueQuestion = questions.filter((question) => question.id === selectedId);

    if (uniqueQuestion.length === 1) {
        const selectedQuestion = uniqueQuestion[0].shuffleAnswers();
        res.status(200).json(selectedQuestion.convertToObject());
    } else {
        res.status(204).send();
    }
}
