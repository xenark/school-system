import { useRouter } from "next/navigation";
import Avatar from "./avatar";

interface Authprops {
    actionLabel: string,
    disabled: boolean,
    onSubmit: () => void;
    body?: React.ReactElement;
}

const AuthPage: React.FC<Authprops> = ({
    actionLabel,
    disabled,
    onSubmit,
    body,
}) => {

    const router = useRouter();

    const bgstyle = {
        backgroundImage: `url('/images/bg')`,
        
      }
    return (
        <div className="
        flex
        w-full
        h-full
          ">
            <div className="
            md:w-max
            sm:w-9/12
            w-full
        bg-white
            p-7
            ">
                <div
                onClick={()=> router.push('/') } className="flex cursor-default justify-start items-center my-6">
                <Avatar
                width={40}
                height={40} />
                <span className="font-bold text-2xl ml-3 text-blue-900">{'EaseMS'}</span>
                </div>
                <div>
                    {body}
                </div>
            </div>
            <div className="
            h-full
            hidden
            md:block
            col-span-2
            grow
            " style={bgstyle}>
                
            </div>

        </div>
    );
};

export default AuthPage;