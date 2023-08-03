import showErrorToast from "./error";

const fetchData = async (param) => {
  try {
    const response = await fetch(
      `/.netlify/functions/getData?param=${param}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    //console.log(data);
  } catch (error) {
    console.error(error);
    showErrorToast();
  }
};

export default fetchData;
