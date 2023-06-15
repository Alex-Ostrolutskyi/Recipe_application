type newRecipeData = {
  title: string;
  servings: number;
  cooking_time: number;
  publisher: string;
  image_url: string;
  source_url: string;
  ingredients: string[];
};
export const sendData = async (ulr: string, newRecipe: newRecipeData) => {
  try {
    const response = await fetch(ulr, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
    const data = response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};
