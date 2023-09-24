import ShowtimeRow from "../showtime-row";
import { ShowtimeRowProps } from "../showtime-row/showtimeRow";


interface ShowtimeWrap {
    showtimeList: ShowtimeRowProps[];
}

const mapFn = (row: ShowtimeRowProps, idx: number) => <ShowtimeRow key={idx} {...row} />

export const ShowtimeWrap = ({
    showtimeList,
}: ShowtimeWrap) => {
    const today = new Date();
    const local = 'es-CL';
    const todayIntl = new Intl.DateTimeFormat(local, {
        month: 'long',
        day: 'numeric',
    }).format(today);

    return (
    <div className="flex flex-col grow overflow-x-auto flex gap-4 m-4">
        <div className="flex justify-between mb-4 sm:mx-3 md:m-auto md:w-96">
                {/* <button> L </button> */}
                <div></div>
                <h2 className="text-lg text-center"> {todayIntl} </h2>
                <button> R </button>
            </div>
        <div className="flex gap-x-5 overflow-x-auto">
            {showtimeList.map(mapFn)}
        </div>
    </div>
    );
};
