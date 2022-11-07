import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(
        306,
        "Which animal transmits Chagas disease? ",
        [AnswerModel.wrong("Bee"), AnswerModel.wrong("Cockroach"), AnswerModel.wrong("Flea"), AnswerModel.correct("Kissing Bug")],
        false
    ),
    new QuestionModel(
        202,
        "Which animal transmits Chagas disease? ",
        [AnswerModel.wrong("Bee"), AnswerModel.wrong("Cockroach"), AnswerModel.wrong("Flea"), AnswerModel.correct("Kissing Bug")],
        false
    ),
];

export default questions;
