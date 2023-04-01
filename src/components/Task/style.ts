import styled from "styled-components";
import iconCheck from "../../assets/icon-check.svg";

export const TaskStyled = styled.div`
    align-items: center;
    background-color: var(--gray-500);
    border: 1px solid var(--gray-400);
    border-radius: 8px;
    display: flex;
    padding: 1rem;
    margin-bottom: 0.75rem;
    justify-content: space-between;

    & .taskDescription {
        align-items: center;
        display: flex;
        gap: 1rem;
    }

    &.done {
        label {
            text-decoration-line: line-through;
            color: var(--gray-300);
        }
    }

    label {
        color: var(--gray-100);
        font-size: 0.875rem;
    }

    & input[type="radio"] {
        -webkit-appearance: none;
        appearance: none;
        background-color: var(--gray-500);
        width: 1.5em;
        height: 1.5em;
        border: 2px solid var(--blue);
        border-radius: 50%;
        cursor: pointer;

        display: grid;
        place-content: center;
        transform: translateY(-0.075em);

        &:hover {
            border-color: var(--blueDark);
            background-color: rgba(30, 111, 159, .2) ;
        }

        &::before {
            content: "";
            width: 1.5em;
            height: 1.5em;
            background: url(${iconCheck}) no-repeat center center;
            transform: scale(0);
            transition: 120ms transform ease-in-out;
        }

        &:checked {
            background-color: var(--purpleDark);
            border: 0;

            &:hover {
                background-color: var(--purple);
            }

            &::before {
                transform: scale(1);
            }
        }
    }


`;