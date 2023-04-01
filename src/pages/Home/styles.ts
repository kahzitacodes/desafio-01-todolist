import styled from "styled-components";

export const Container = styled.div`
    max-width: 736px;
    margin: 0 auto;
`;

export const ListWrapper = styled.div`
`;

export const ListHeader = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    
    .col-left, .col-right{
        align-items: center;
        display: flex;
        gap: 0.5rem;
    }
    
    strong {
        font-size: 0.875rem;

        &.created {
            color: var(--blue);
        }

        &.done {
            color: var(--purple);
        }
    }
    


`;