export const editMovieApi = async (data, editedProductId) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(
      `http://localhost:3000/movies/${editedProductId}`,
      options
    );
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
};
