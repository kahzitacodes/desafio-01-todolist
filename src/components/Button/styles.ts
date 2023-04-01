import styled from "styled-components";

export const ButtonStyled = styled.button`
   align-items: center;
    background-color: var(--blueDark);
    border: 0;
    border-radius: 8px;
    color: var(--gray-100);
    cursor: pointer;
    display: flex;
    font-size: 0.875rem;
    font-weight: 700;
    gap: 0.5rem;
    padding: 1rem;
    transition: all 0.2s ease;

    &:hover {
        background-color: var(--blue);
    }
`;