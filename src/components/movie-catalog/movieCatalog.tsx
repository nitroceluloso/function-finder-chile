
import styles from './movieCatalog.module.css';

type MovieCatalogProps = {
    movieList: MovieCoverProps[];
}

const mapFn = (el: MovieCoverProps, idx: number) => (
    <MovieCover
        key={idx}
        id={el.id}
        title={el.title}
    />
);

export const MovieCatalog = ({
    movieList,
}: MovieCatalogProps) => {
    const sectionClass = `grid grid-cols-2 md:grid-cols-5 md:gap-4 m-auto pt-4 ${styles.movieCatalog}`;

    return (
        <section className={sectionClass}>
            {
                movieList.map(mapFn)
            }
        </section>
    );
}