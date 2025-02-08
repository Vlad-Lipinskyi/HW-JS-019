export const deleteMovieApi = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/movies/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
