
import MovieCover from '../movie-cover';
import { MovieCoverProps } from '../movie-cover/movieCover';
import styles from './movieCatalog.module.css';

type MovieCatalogProps = {
    movieList: MovieCoverProps[];
}

const mapFn = (el: MovieCoverProps, idx: number) => (
    <MovieCover
        key={idx}
        id={el.id}
        title={el.title}
        image={el.image}
    />
);

const sectionClass = `grid grid-cols-2 md:grid-cols-5 md:gap-4 m-auto ${styles.movieCatalog}`;

export const MovieCatalog = ({
    movieList,
}: MovieCatalogProps) => (
    <section className={sectionClass}>
        {
            movieList.map(mapFn)
        }
    </section>
);