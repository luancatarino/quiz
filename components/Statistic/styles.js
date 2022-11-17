import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    .value {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 130px;
        width: 130px;
        border-radius: 50%;
        font-size: 4rem;
    }

    .text {
        color: #ddd;
        font-size: 1.7rem;
        font-weight: 200;
    }
`;
