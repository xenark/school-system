import Input from '@/app/input';
import Label from '@/app/labels';
import { personalInfo } from '@/app/lib/localdatabase';
import React, { useCallback, useEffect, useState } from 'react';
import Dropbox from '@/app/dropdown';
import { useCountries } from '@/app/hooks/usecountries';



const Personal = () => {
    const title: string[] = ['Mr', 'Mrs', 'Miss', 'Dr'];
    const disability: string[] = ['Yes', 'No'];
    const gender: string[] = ['Male', 'Female'];
    const relationship: string[] = ['Single', 'Married', 'Divorced'];

    const { myinfo } = useCountries();

    const mycountry = myinfo.map(vals => vals.name)
    const citizen = myinfo.map(vals => vals.name)

    const [fixed, setFixed] = useState('z-10');
  
    const label = (info: string, par?: string) => {
        return <div className='w-fit'>
            <Label id={'1'} label={info} required errors={undefined} />
            <Input id={'1'} type={par} errors={undefined} />
        </div>
    }

    useEffect(()=> {

   fixed === '0'? setFixed('z-[-1px]'): setFixed('z-10')

    }, [setFixed])

    return (

        <div className='grid grid-cols-3 gap-5 mt-4 relative'>

           <Dropbox title='Title' list={title} w={2}/>
            {label('Firstname')}
            {label('Lastname/Surname')}
            {label('Othername/Middlename')}
           <div onClick={()=>setFixed('0')}>
           <Dropbox title='Gender' list={gender} w={4}  />
            </div> 
            {label('Date of Birth', 'date')}
            <Dropbox title='Marital Status' list={relationship} w={7} />
            <div onClick={()=>setFixed('z-10')} className={`${fixed} relative`} >
                <div className='fixed'>  <Dropbox  title='Nationality' list={citizen} w={11} /></div>
            </div>
            <div onClick={()=> setFixed('z-10')} className={`${fixed} relative`} >
                <div className='fixed'>  <Dropbox   title='Country of Residence' list={mycountry} w={15} /></div>
            </div>
            <Dropbox title='Disability?' list={disability} w={7} />
            {label('Home Region')}
            {label('Hometown')}
            {label('Residential Address')}
            {label('Religion')}
        </div>
    );
};

export default Personal;