import Link from "next/link";

interface DayNavitagorProps {
    currentDay: number;
    title: string;
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

const getPrevBtn = (currentDay: number, prevLink: string) => {
    if (currentDay === 0) return <div></div>;

    return (
        <Link href={prevLink}>
            <button> &#8592; </button>
        </Link>
    );
}

export const DayNavigator = ({
    title,
    currentDay,
}: DayNavitagorProps) => {
    const today = getDate(currentDay);
    const prevLink = `/movie/${title}/showtime/${currentDay -1}`;
    const nextLink = `/movie/${title}/showtime/${currentDay +1}`;

    return (
        <div className="flex justify-between mb-4 sm:mx-3 md:m-auto md:w-96">
            { getPrevBtn(currentDay, prevLink) }
            <h2 className="text-lg text-center"> {today} </h2>
            <Link href={nextLink}>
                <button> &#8594; </button>
            </Link>
        </div>
    );
}