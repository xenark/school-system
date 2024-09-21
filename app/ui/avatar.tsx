'use client';
import Image from "next/image";
import { HTMLAttributes } from "react";

interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
    src?: string | null | undefined,
    width: number,
    height: number,
}
const Avatar: React.FC<AvatarProps> = ({src, width, height, className}) => {
    return (
       <Image
       alt='avatar'
       className={className}
       width={width}
       height={height}
       src={src || '/images/logo.jpg'} />
    );
};

export default Avatar;