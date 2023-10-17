'use client';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation'
// import Image from 'next/image'

interface ShowtimeFilterProps {
    title: string,
    duration: number;
    image: string;
}

export const ShowTimeFilter = ({
    title,
    duration,
    image,
}: ShowtimeFilterProps) => {
    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const formDataObject = {} as Record<string, string>;
        formData.forEach((value, key) => {
            formDataObject[key] = value as string;
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
                <div>
                    <p className="text-center mb-4 text-lg">{title}</p>
                    <div className="flex justify-between mb-4">
                        <div>Duracion:</div>
                        <div>{duration} min.</div>
                    </div>
                    <div className=" mb-4">
                        {/* <label htmlFor="cine" className="block">Cine</label> */}
                        {/* <select name="cine" id="cine" className="block w-full text-black">
                            <option value="todos">todos</option>
                            <option value="aaa">cinehoyts</option>
                            <option value="sss">cinemark</option>
                            <option value="ddd">cineplanet</option>
                        </select> */}
                    </div>
                    {/* <div>
                        <label for="idioma">Idioma</label>
                        <select name="idioma" id="idioma">
                            <option value="todos">todos</option>
                            <option value="doblada">doblada</option>
                            <option value="original">original</option>
                        </select>
                    </div> */}
                    {/* <div className=" mb-4">
                        <label htmlFor="tipo" className="block">Tipo</label>
                        <select name="tipo" id="tipo" className="block w-full text-black">
                            <option value="todos">todos</option>
                            <option value="doblada">normal</option>
                            <option value="original">premium</option>
                        </select>
                    </div> */}
                </div>
                <div>
                    {/* <input
                        type="submit"
                        value="Filtrar"
                        className="border-2 border-red-900 rounded-md w-full"
                    /> */}
                </div>
                </form>
            </div>
        </div>
    );
};
