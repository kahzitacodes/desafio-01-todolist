import { ButtonStyled } from "./styles";
import { iButton } from "./types";

export function Button({ label, icon, onClick }: iButton) {
    return (
        <ButtonStyled onClick={onClick}>
            {label}
            {icon && icon}
        </ButtonStyled>
    );
}