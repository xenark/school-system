import Link from "next/link";
import React, { HtmlHTMLAttributes } from "react";

interface LinkProps extends HtmlHTMLAttributes<HTMLLinkElement> {
    link: string,
    value: string,
    outline?: boolean
}

const LinkStyle: React.FC<LinkProps> = ({ link, value, className, outline }) => {
    return (
        <Link
            className={`${className} ${outline ? 'outline' : ''} 
            flex items-center justify-center`}
            href={link}>
            {value}
        </Link>

    );
};

export default LinkStyle;