import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 70px;
    margin: 10px;
    min-width: 500px;
    width: 80%;
    perspective: 1000px;

    .answerContent {
        position: relative;
        display: flex;
        flex: 1;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .answerRevealed.answerContent {
        transform: rotateY(180deg);
    }

    .frontCard,
    .backCard {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .frontCard {
        align-items: center;
        border-radius: 10px;
        padding: 15px;
        background-color: #fff;
        color: #000;

        .letter {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-size: 1.3rem;
            width: 40px;
            height: 40px;
            font-weight: 700;
            margin-right: 20px;
            color: #fff;
        }

        .value {
            font-size: 1.3rem;
            font-weight: 700;
        }
    }

    .backCard > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
        border-radius: 12px;
    }

    .backCard {
        transform: rotateY(180deg);

        .correct {
            background-color: #2baa6d;
        }

        .wrong {
            background-color: #e44a4c;
        }

        .correct .value,
        .wrong .value {
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
`;
