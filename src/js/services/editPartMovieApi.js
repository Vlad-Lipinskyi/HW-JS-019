export const editPartMovie = async (data, editedProductId) => {
  console.log(data);
  const options = {
    method: "PATCH",
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
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};
