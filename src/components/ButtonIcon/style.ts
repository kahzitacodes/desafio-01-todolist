import styled from "styled-components";

export const ButtonIconStyled = styled.button`
    align-items:center;
    background: transparent;
    border: none;
    border-radius: 8px;
    display: flex;
    color: var(--gray-300);
    cursor: pointer;
    height: 1.5rem;
    justify-content: center;
    width: 1.5rem;

    &:hover {
        background: var(--gray-400);
        color: var(--danger)
    }
`;