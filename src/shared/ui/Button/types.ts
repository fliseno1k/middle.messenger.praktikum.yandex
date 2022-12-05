import { Props } from "../../../core/mvc";

export type ButtonProps = {
    text?: string;
    href?: string;
    icon?: string;
    style?: "reqular" | "square";
    variant?: "contained" | "text";
    type?: "button" | "submit";
} & Props;
