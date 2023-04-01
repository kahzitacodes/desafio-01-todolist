import { EmptyContainer, EmptyCopy } from "./style";
import iconClipboard from "../../assets/icon-clipboard.png";
import { Button } from "../Button";
import { IEmptyList } from "./types";

export function EmptyList({ children }: IEmptyList) {
    return (
        <EmptyContainer>
            <img src={iconClipboard} />
            <EmptyCopy>
                {children}
            </EmptyCopy>
        </EmptyContainer>
    );
}