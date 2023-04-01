export interface iButton {
    label: string,
    icon?: JSX.Element,
    type?: string;
    onClick?: () => void;
}