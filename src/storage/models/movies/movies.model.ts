import { Schema, model, models } from 'mongoose';

const movieSchema = new Schema({
  id: Number,
  title: String,
  duration: Number,
}, {
  collection: 'movies',
});

export const MovieModel = models.Movie || model('Movie', movieSchema);
