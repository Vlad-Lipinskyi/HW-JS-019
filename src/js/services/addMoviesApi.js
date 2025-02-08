export const addMovie = async (addData) => {
  const options = {
    method: "POST",
    body: JSON.stringify(addData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch("http://localhost:3000/movies", options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
