import { useEffect, RefObject } from 'react';

type Event = MouseEvent;

const FocusOut = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    setBoolean: (e: boolean) => void,
) => {
    const handleClick = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setBoolean(false);
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [])
};

export default FocusOut;