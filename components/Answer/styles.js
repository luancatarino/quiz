import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100px;
    margin: 10px;
    min-width: 500px;
    width: 80%;

    .answerContent {
        position: relative;
        display: flex;
        flex: 1;
    }

    .frontCard,
    .backCard {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
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
`;
