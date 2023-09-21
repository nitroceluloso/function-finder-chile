import Image from 'next/image'
import Link from 'next/link'

export type MovieCoverProps = {
    id: number,
    title: string;
}

export const MovieCover = ({
    id,
    title,
}: MovieCoverProps) => (
    <article>
        <Link href={`/movie/${id}`} aria-description='link to Barbie schedules'>
            <figure className="relative aspect-[2/3]">
                <Image
                    src={'/images/dracula.jpeg'}
                    alt='dracula cover'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
                <figcaption className='text-center p-4'>
                    {title}
                </figcaption>
            </figure>
        </Link>
    </article>
);