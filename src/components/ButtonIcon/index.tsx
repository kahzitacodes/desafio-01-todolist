import { ButtonIconStyled } from "./style";
import { IButtonIcon } from "./types";


export function ButtonIcon({ icon, title, onClick }: IButtonIcon) {
    return (
        <ButtonIconStyled title={title} onClick={onClick}>
            {icon}
        </ButtonIconStyled>
    );
}