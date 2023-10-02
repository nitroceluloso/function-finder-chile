import { parseMovieTitle } from '@/utils/url';
import Image from 'next/image'
import Link from 'next/link'

export type MovieCoverProps = {
  id: number,
  title: string;
  image: string;
}

export const MovieCover = ({
  id,
  title,
  image,
}: MovieCoverProps) => (
  <article>
    <Link
      href={`/movie/${parseMovieTitle(title)}/showtime/0`}
      aria-description='link to Barbie schedules'
    >
      <figure className="relative aspect-[2/3]">
        <img
          src={image}
          height="318"
          width="218"
          alt={`caratura de la pelicula ${title}`}
          className='w-full'
        />
        {/* <Image
                    src={'/images/dracula.jpeg'}
                    alt='dracula cover'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                /> */}
        <figcaption className='text-center p-4'>
          {title}
        </figcaption>
      </figure>
    </Link>
  </article>
);
