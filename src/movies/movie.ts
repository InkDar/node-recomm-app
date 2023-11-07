import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
