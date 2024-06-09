import axios from "axios";

const generateToken = async (
  clientId,
  clientSecret,
  tokenEndpoint,
  tokenName
) => {
  try {
    const response = await axios.post(
      tokenEndpoint,
      {
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const token = response.data.access_token;

    document.cookie = `${tokenName}=${token}; path=/;`;
    
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
};

export default generateToken;
