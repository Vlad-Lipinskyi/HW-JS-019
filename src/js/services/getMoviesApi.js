import { createMarkup } from "../Layout/moviesLayout";
import { openEditModal } from "../modal/editModal";
import { openEditPartModal } from "../modal/editPartModal";
import { deleteMovie } from "../deleteMovie";

export const getMoviesAPI = async () => {
  try {
    const response = await fetch("http://localhost:3000/movies");
    const data = await response.json();
    createMarkup(data);
    openEditModal();
    openEditPartModal();
    deleteMovie();
  } catch (error) {
    console.log(error);
  }
};
