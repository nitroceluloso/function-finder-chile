interface ShowtimeLinkProps {
    language: string;
    time: string;
    cinema: string;
    teather: any;
    link: string;
}

export const ShowtimeLink = ({
    language,
    link,
    teather,
    time,
}: ShowtimeLinkProps) => (
    <div className={`border-2 border-white rounded-md text-center md:p-2`}>
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
        <p className="hidden md:block text-sm mb-1">
            {teather}
        </p>
        <p className="hidden md:block text-xs">
            ({language.toLowerCase()})
        </p>
    </div>
);
