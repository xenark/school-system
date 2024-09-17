import Container from '../container';
import { useRouter } from 'next/navigation';
import LinkStyle from '../link';
import Avatar from '../ui/avatar';
import { packages, resources } from '../lib/localdatabase';
import { dropdown } from '../dropdown';



const Navbar = () => {

    const router = useRouter();

    return (
        <Container className='flex
        max-width-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
        text-white
        mt-8
        '>
            <div className='flex cursor-default items-center mr-8'
                onClick={() => router.push('/')}>
                <Avatar
                    src={'/images/logo.jpg'}
                    width={30}
                    height={30}
                    className='rounded mr-2'
                />
                {'EaseMS'}

            </div>
            {dropdown('Products', packages, 1)}
            {dropdown('Pricing')}
            {dropdown('Resources', resources, 2)}
            {dropdown('Blog')}

            <div className='flex ml-auto items-center'>
                <LinkStyle
                    value='Login'
                    className='text-blue-100 px-9 outline rounded h-9 font-light outline-2 outline-green-500 '
                    link={'/landingpage/login'}
                />
                <LinkStyle
                    value='Get Started'
                    className={'ml-8 p-2 rounded-lg text-white bg-rose-500'}
                    link={'/landingpage/register'}
                />
            </div>

        </Container>
    );
};

export default Navbar;