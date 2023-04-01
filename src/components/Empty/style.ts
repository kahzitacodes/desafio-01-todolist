import styled from "styled-components";

export const EmptyContainer = styled.div`
    border-top: 1px solid var(--gray-400);
    padding: 4rem 0;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`;

export const EmptyCopy = styled.div`
    p, h5 {
        text-align: center;
        color: var(--gray-300);
    }

    p {
        font-size: 1rem;
    }
`;
