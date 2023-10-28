'use client';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import { LANGUAGE_OPTIONS, SELECT_STYLES, TEATHER_OPTIONS } from './constants';
import { Teather } from '@/@custom-types/teather';
// import Image from 'next/image'

interface ShowtimeFilterProps {
    title: string,
    duration: number;
    image: string;
    locationList: Record<string, Omit<Teather, 'name'>>;
}

export const ShowTimeFilter = ({
    title,
    duration,
    image,
    locationList,
}: ShowtimeFilterProps) => {
    const router = useRouter();
    console.log(locationList)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const formDataObject = {} as Record<string, string>;
        formData.forEach((value, key) => {
            if(value === '') return;

            const hasValue = formDataObject[key] ? true : false;
            const valueStr = value as string;
            formDataObject[key] = hasValue ? formDataObject[key].concat(',', valueStr) : valueStr;
        });

        const query = new URLSearchParams(formDataObject).toString();
        router.push(`?${query}`);
      };


    return (
        <div className="flex border-2 border-white md:flex-col">
            <div className="w-1/2 md:w-full">
                <img
                    src={image}
                    alt='caratula de la pelicula'
                    height="318"
                    width="218"
                    className='m-auto'
                />
            </div>
            <div className="w-1/2  md:w-full p-4 flex flex-col justify-between">
                <form name="filter" onSubmit={handleSubmit}>
                <div className='mb-8'>
                    <p className="text-center mb-4 text-lg">{title}</p>
                    <div className="flex justify-between mb-4">
                        <div>Duracion:</div>
                        <div>{duration} min.</div>
                    </div>
                    <div className="mb-4 flex flex-col gap-y-2">
                        <label htmlFor="cinema" className="block">Cine</label>
                        <Select
                            isMulti
                            name="cinema"
                            className='bg-black w-full'
                            options={TEATHER_OPTIONS}
                            placeholder="Todos"
                            styles={SELECT_STYLES}
                        />
                    </div>
                    {/* <div className="flex justify-between mb-4">
                        <label htmlFor="teather" className="block">Tipo</label>
                        <select name="teather" id="teather" className="block w-full text-black">
                            <option value="todos">todos</option>
                            <option value="doblada">normal</option>
                            <option value="original">premium</option>
                        </select>
                    </div> */}
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="language">Idioma</label>
                        <Select
                            isClearable={true}
                            name="language"
                            className='bg-black w-full'
                            options={LANGUAGE_OPTIONS}
                            placeholder="Todos"
                            styles={SELECT_STYLES}
                        />
                    </div>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Filtrar"
                        className="border-2 border-red-900 rounded-md w-full"
                    />
                </div>
                </form>
            </div>
        </div>
    );
};
