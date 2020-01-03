import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + process.env.REACT_APP_AMLS_API_KEY,
  "Ocp-Apim-Subscription-Key": process.env.REACT_APP_AZURE_SUBSCRIPTION_KEY
};

export const recommendMovie = async (movieId: number, rating: number) => {
  const data = await axios.post(
    process.env.REACT_APP_AZURE_API_ENDPOINT,
    {
      Inputs: {
        input1: [
          {
            userId: 0,
            movieId: movieId,
            rating: 5 // currently fixed value of 5 is sent as user input, this can be changed by passing the value as a arugment
          }
        ]
      },
      GlobalParameters: {}
    },
    {
      headers
    }
  );

  let recommendations: Array<string> = [];

  const results = data.data.Results;
  if (results) {
    const recommendationsLS = localStorage.getItem("recommendations");
    if (recommendationsLS) {
      recommendations = JSON.parse(recommendationsLS);
    }

    Object.keys(results.output1[0]).map(key => recommendations.push(results.output1[0][key]));
    const stringifiedData = JSON.stringify(recommendations);
    recommendations = [...new Set(recommendations)]; // only unique values
    localStorage.setItem("recommendations", stringifiedData);
  } else {
    console.log("TODO: throw error ");
  }

  return recommendations;
};
