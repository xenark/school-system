'use client';

interface HeadingProps {
    title: string;
    subtitle: string;
    align?: string;
    secondarytitle?: string;
}
const Heading: React.FC<HeadingProps> = ({ title, secondarytitle, subtitle, align = 'center'}) => {
    return (
        <div className={`text-${align}`}>
            <div className='text-2xl font-bold text-blue-900'>{title}</div>
            <div className='font-bold text-blue-900'>{secondarytitle}</div>
            <div className='font-light text-neutral-500 mt-2'>{subtitle}</div>
        </div>
    );
};

export default Heading;