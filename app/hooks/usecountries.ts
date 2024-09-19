import countries from "world-countries";
export const countryProps = countries.map((val) => ({

    value: val.cca2,
    flag: val.flag,
    name: val.name.common,
    demonyms: val.demonym,

}))

export const useCountries = () => {
    const myinfo = countryProps.map(val => val);
    const getByValue = (value: string) => countryProps.filter((val: any) => val.value === value)
    return {
        getByValue, myinfo
    }
}