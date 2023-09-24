export const parseMovieTitle = (title: string) => title.replaceAll(' ', '-');

export const readMovieTitle = (title: string) => title.replaceAll('-', ' ');