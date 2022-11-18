import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    .text {
        font-size: 2.5rem;
        font-weight: 600;

        @media (min-width: 1280px) {
            font-size: 1.8rem;
        }
    }
`;
