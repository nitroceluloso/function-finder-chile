interface ShowtimeLinkProps {
    time: string;
    endTime: string;
    cinema: string;
    teather: any;
}

export const ShowtimeLink = ({
    cinema,
    endTime,
    teather,
    time,
}: ShowtimeLinkProps) => (
    <div className="border-2 border-white rounded-md text-center md:p-2">
        <p className="font-semibold mb:mb-1 mb:text-lg md:hidden">
            {time}
        </p>
        <p className="font-semibold mb:mb-1 mb:text-lg hidden md:block">
            {time} ~ {endTime}
        </p>
        {/* <p className="hidden md:block text-sm">
            {cinema}
        </p> */}
        <p className="hidden md:block text-sm">
            {teather}
        </p>
    </div>
);
