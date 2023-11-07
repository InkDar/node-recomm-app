export default interface IMovie {
  plot: string;
  genres: Array<string>;
  runtime: number;
  cast: Array<string>;
  num_mflix_comments?: number;
  title: string;
  fullplot?: string;
  countries: Array<string>;
  released: Date;
  directors: Array<string>;
  rated?: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  type: string;
  
}
