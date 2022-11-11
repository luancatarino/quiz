import { shuffle } from "../functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
    #id: number;
    #statement: string;
    #answers: AnswerModel[];
    #correct: boolean;

    constructor(id: number, statement: string, answers: AnswerModel[], correct = false) {
        this.#id = id;
        this.#statement = statement;
        this.#answers = answers;
        this.#correct = correct;
    }

    get id() {
        return this.#id;
    }

    get statement() {
        return this.#statement;
    }

    get answers() {
        return this.#answers;
    }

    get correct() {
        return this.#correct;
    }

    get answered() {
        for (let answer of this.#answers) {
            if (answer.revealed) {
                return true;
            }
        }
        return false;
    }

    get notAnswered() {
       return !this.answered
    }


    answerWith(index: number): QuestionModel {
        const isCorrect = this.#answers[index]?.correct;
        const newAnswers = this.#answers.map((resp, i) => {
            const selectedAnswer = index === i;
            const shouldReveal = selectedAnswer || resp.correct;
            return shouldReveal ? resp.revealAnswer() : resp;
        });

        return new QuestionModel(this.id, this.statement, newAnswers, isCorrect);
    }

    shuffleAnswers(): QuestionModel {
        let answersShuffled = shuffle(this.#answers);
        return new QuestionModel(this.#id, this.#statement, answersShuffled, this.#correct);
    }

    convertToObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answered: this.answered,
            correct: this.#correct,
            answers: this.#answers.map((resp) => resp.convertToObject()),
        };
    }
}
