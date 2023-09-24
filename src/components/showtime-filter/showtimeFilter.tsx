import Image from 'next/image';

export const ShowTimeFilter = () => {
    return (
        <div className="flex border-2 border-white md:flex-col">
            <div className="w-1/2 md:w-full">
                {/* <img src="./images/dracula.jpeg" alt="" /> */}
                <Image
                    src={'/images/dracula.jpeg'}
                    alt='dracula cover'
                    width={280}
                    height={0}
                    sizes="100vw"
                />
            </div>
            <div className="w-1/2  md:w-full p-4 flex flex-col justify-between">
                <div>
                    <p className="text-center mb-4 text-lg">Dracula</p>
                    <div className="flex justify-between mb-4">
                        <div>Duracion:</div>
                        <div>117 min.</div>
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="cine" className="block">Cine</label>
                        <select name="Cine" id="cine" className="block w-full text-black">
                            <option value="todos">todos</option>
                            <option value="aaa">cinehoyts</option>
                            <option value="sss">cinemark</option>
                            <option value="ddd">cineplanet</option>
                        </select>
                    </div>
                    {/* <div>
                        <label for="idioma">Idioma</label>
                        <select name="idioma" id="idioma">
                            <option value="todos">todos</option>
                            <option value="doblada">doblada</option>
                            <option value="original">original</option>
                        </select>
                    </div> */}
                    <div className=" mb-4">
                        <label htmlFor="tipo" className="block">Tipo</label>
                        <select name="tipo" id="tipo" className="block w-full text-black">
                            <option value="todos">todos</option>
                            <option value="doblada">normal</option>
                            <option value="original">premium</option>
                        </select>
                    </div>
                </div>
                <div>
                    <input
                        type="button"
                        value="Filtrar"
                        className="border-2 border-red-900 rounded-md w-full"
                    />
                </div>
            </div>
        </div>
    );
};
