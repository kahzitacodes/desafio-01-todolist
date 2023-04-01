import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    max-width: 736px;
    margin: -1.645rem auto 4rem;
    position: relative;
    z-index: 2;

    & input {
        background-color: var(--gray-500);
        border: none;
        border-radius: 8px;
        color: var(--gray-100);
        padding: 1rem;
        border: 1px solid transparent;
        flex: 1;

        &:focus {
            border: 1px solid var(--purple);
            outline: none;
        }
    }

    button { 
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
    }    
`;