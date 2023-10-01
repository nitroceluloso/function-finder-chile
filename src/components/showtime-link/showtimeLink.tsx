interface ShowtimeLinkProps {
    time: string;
    cinema: string;
    teather: any;
    link: string;
    minutes: number;
}

const getIsAvailable = (time: string, limit: number): boolean => {
    const minutes = parseInt(time.split(':').at(1) as string);
    return minutes > limit;
}

export const ShowtimeLink = ({
    teather,
    time,
    link,
    minutes,
}: ShowtimeLinkProps) => {
    const isAvailable = getIsAvailable(time, minutes) ? '' : 'hidden';

    return (
    <div className={`border-2 border-white rounded-md text-center md:p-2 ${isAvailable}`}>
        <p className="font-semibold mb:mb-1 mb:text-lg md:hidden">
            <a href={link} target="_blank">
                {time}
            </a>
        </p>
        <p className="font-semibold mb:mb-1 mb:text-lg hidden md:block">
            <a href={link} target="_blank">
                {time}
            </a>
        </p>
        {/* <p className="hidden md:block text-sm">
            {cinema}
        </p> */}
        <p className="hidden md:block text-sm">
            {teather}
        </p>
    </div>
    );
};
