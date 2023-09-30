import Link from "next/link";
import ShowtimeRow from "../showtime-row";
import { ShowtimeRowProps } from "../showtime-row/showtimeRow";
import styles from "./styles.module.css";
import { Suspense } from 'react'

interface ShowtimeWrap {
    showtimeList: ShowtimeRowProps[];
    title: string;
    currentDay: number;
}

const mapFn = (row: ShowtimeRowProps, idx: number) => <ShowtimeRow key={idx} {...row} />

const getPrevBtn = (currentDay: number, prevLink: string) => {
    if (currentDay === 0) return <div></div>;

    return (
        <Link href={prevLink}>
            <button> &#8592; </button>
        </Link>
    );
}

const getDate = (currentDay: number) => {
    const base = new Date();

    const day = new Date(base.getFullYear(), base.getMonth(), base.getDate() + currentDay)
    const local = 'es-CL';
    return new Intl.DateTimeFormat(local, {
        month: 'long',
        day: 'numeric',
    }).format(day);
}

export const ShowtimeWrap = ({
    showtimeList,
    title,
    currentDay,
}: ShowtimeWrap) => {
    const today = getDate(currentDay);
    const prevLink = `/movie/${title}/showtime/${currentDay -1}`;
    const nextLink = `/movie/${title}/showtime/${currentDay +1}`;

    return (
    <div className="flex flex-col grow overflow-x-auto flex gap-4 m-4">
        <div className="flex justify-between mb-4 sm:mx-3 md:m-auto md:w-96">
            { getPrevBtn(currentDay, prevLink) }
            <h2 className="text-lg text-center"> {today} </h2>
            <Link href={nextLink}>
                <button> &#8594; </button>
            </Link>
        </div>
        <div className={`flex gap-x-5 overflow-x-auto overflow-y-auto ${styles.maxHeigth}`}>
            {showtimeList.map(mapFn)}
        </div>
    </div>
    );
};
