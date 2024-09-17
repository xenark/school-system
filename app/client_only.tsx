'use client';

import { useState, useEffect } from 'react';

interface ClienOnlyProps {
    children: React.ReactNode
}

const ClienOnly: React.FC<ClienOnlyProps> = ({ children }) => {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, [])

    if (!hasMounted) {
        return null;
    }
    return (
        <>
            {children}
        </>
    );
};

export default ClienOnly;