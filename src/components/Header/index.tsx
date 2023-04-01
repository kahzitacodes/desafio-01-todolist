import { HeaderStyle } from "./styles";
import logo from "../../assets/logo.png";

export function Header() {
    return (
        <HeaderStyle>
            <img src={logo} className="logo" />
        </HeaderStyle>
    );
}