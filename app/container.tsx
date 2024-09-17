import { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

export default Container;