import Movie from "./movie.js";
import mongoose from "mongoose";

const findOne = async (id: string) => {
  const _id = new mongoose.Types.ObjectId(id);
  const movie = await Movie.findOne({ _id });
  return movie;
};

const findAll = async (i: number) => {
  const movies = await Movie.find()
    .skip((i - 1) * 10)
    .limit(10);
  return movies;
};

export { findOne, findAll };
