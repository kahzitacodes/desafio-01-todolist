import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --purple: #8284FA;
        --purpleDark: #5E60CE;

        --blue: #4EA8DE;
        --blueDark: #1E6F9F;

        --gray-700: #0D0D0D;
        --gray-600: #1A1A1A;
        --gray-500: #262626;
        --gray-400: #333;
        --gray-300: #808080;
        --gray-200: #D9D9D9;
        --gray-100: #FFF;

        --danger: #E25858;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        background-color: var(--gray-600);
        font-family: 'Inter', sans-serif;
        line-height: 140%;
    }

    h5 {
        font-size: 1rem;
        font-weight: 700;
    }

    .fs-xs {
        font-size: 0.75rem;
    }

    .fs-sm {
        font-size: 0.875rem;
    }

    .fs-md {
        font-size: 1rem;
    }
`;