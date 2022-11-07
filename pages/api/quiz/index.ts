import { shuffle } from "../../../functions/arrays";
import questions from "../data";

export default function quiz(req: any, res: any) {
    const ids = questions.map((question) => question.id);

    return res.status(200).json(shuffle(ids));
}
