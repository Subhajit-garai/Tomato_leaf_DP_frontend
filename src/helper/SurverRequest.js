export const SurverRequest = async (Method, url, data) => {

  if (Method === "GET" || Method === "DELETE") {
    try {
      const response = await fetch(url,{
        method: `${Method}`,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${process.env.REACT_APP_SURVER_DOMAIN}`,
        },
      })
     
        return response.json();
    
    } catch (error) {
      console.error("Error:", error);
      
    }
  }
  else{
  try {
    const response = await fetch(url, {
      method: `${Method}`,
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `${process.env.REACT_APP_SURVER_DOMAIN}`,

      },
      body: JSON.stringify(data),
    })
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}
}