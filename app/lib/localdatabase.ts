import { AiFillAccountBook, AiFillBell, AiFillBook, AiFillFileAdd, AiFillIdcard, AiFillRest, AiOutlineBook, AiOutlineSelect, AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FcFile, FcGoogle, FcGraduationCap, FcSignature } from "react-icons/fc";
import Personal from "../applicationprocess/start/steps/personalinfo";
import Education from "../applicationprocess/start/steps/education";
import Guardian from "../applicationprocess/start/steps/guardian";
import Declaration from "../applicationprocess/start/steps/declaration";
import Final from "../applicationprocess/start/steps/final";
import Identification from "../applicationprocess/start/steps/identification";
import Programme from "../applicationprocess/start/steps/programme";
import Exam from "../applicationprocess/start/steps/exam";


export const packages = [
    {
        description: 'Ease Tertiary',
        icon: AiFillBell

    },
    {
        description: 'Ease High School',
        icon: FcGoogle

    },
    {
        description: 'Ease Elementary',
        icon: AiFillBell

    },
    {
        description: 'Ease Church',
        icon: AiFillBell

    },
    {
        description: 'EveryEase',
        icon: AiFillBell













































    }
]

export const resources = [
    {
        description: 'Commnunity',
        icon: AiFillBell

    },
    {
        description: 'Help Center',
        icon: AiFillBell

    },
    {
        description: 'Manual',
        icon: AiFillBell

    },
    {
        description: 'Learn',
        icon: AiFillBell

    }
]

export const messages = [

    {
        name: 'Michael Belist',
        location: 'Mexico',
        message: `I must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. Thanks`,
        image: '/images/logo.jpg'
    },
    {
        name: 'Michael Belist',
        location: 'Mexico',
        message: `I must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. ThanksI must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. Thanks...I must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. Thanks...`,
        image: '/images/logo.jpg'
    },
    {
        name: 'Michael Belist',
        location: 'Mexico',
        message: `I must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. Thanks`,
        image: '/images/logo.jpg'
    },
    {
        name: 'Michael Belist',
        location: 'Mexico',
        message: `I must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. ThanksI must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. Thanks...`,
        image: '/images/logo.jpg'
    },
    {
        name: 'Michael Belist',
        location: 'Mexico',
        message: `I must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. Thanks`,
        image: '/images/logo.jpg'
    },
    {
        name: 'Michael Belist',
        location: 'Mexico',
        message: `I must really say EaseMS is your best bet if you want
         to seamlessly manage a very big data for example a school. EaseMS has helped
         a lot. Thanks...`,
        image: '/images/logo.jpg'
    },

]

export const modules =
    [{
        name: 'Personal Information',
        icon: AiOutlineUserAdd
    },
    {
        name: 'Guardian Information',
        icon: AiOutlineUsergroupAdd
    },
    {
        name: 'Educational Background',
        icon: FcSignature
    },
    {
        name: 'Exam Results',
        icon: AiOutlineBook
    },
      {
        name: 'Applicant Declaration',
        icon: FcSignature
    },
    {
        name: 'Programme Choice',
        icon: AiOutlineSelect
    },
    {
        name: 'Identification Document',
        icon: AiFillIdcard
    },
    {
        name: 'Completed',
        icon: AiFillRest
    }
    ]

export const personalInfo = [
    'Surname(Lastname)',
    'Firstname', 'Othername/Mid,dlename', 'Gender',
    'Date of Birth','Marital Status','Nationality',
    'Country of Residence','Home Region','Hometown',
    'Religion',
]

export const steps = [
    Personal, Guardian, Education, Exam, Declaration, Programme, Identification, Final
]