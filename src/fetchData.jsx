import showErrorToast from "./error";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage = "something went wrong...";
    showErrorToast(errorMessage);
  }
};

export default fetchData;
