import { BadgeStyled } from "./styles";
import { IBadge } from "./types";

export function Badge({ quantity }: IBadge) {
    return (
        <BadgeStyled>
            <>{quantity}</>
        </BadgeStyled>
    );
}