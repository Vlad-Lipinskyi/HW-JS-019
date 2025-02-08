import { deleteMovieApi } from "./services/deleteMovieApi";

export const deleteMovie = () => {
  const deleteBtnArr = document.querySelectorAll('.delete-btn');
  deleteBtnArr.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', async () => {
      try {
        await deleteMovieApi(deleteBtn.parentElement.parentElement.id);
      } catch (error) {
        console.log(error);
      }
    });
  });
};
