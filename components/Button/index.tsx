import Link from "next/link";
import { ButtonComponent } from "./styles";

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: (e: any) => void;
}

export default function Button(props: ButtonProps) {
    const renderButton = () => {
        return <ButtonComponent onClick={props.onClick}>{props.text}</ButtonComponent>;
    };

    return props.href ? <Link href={props.href}>{renderButton()}</Link> : renderButton();
}
