export const SurverRequest = async (Method, url, data) => {

  if (Method === "GET" || Method === "DELETE") {
    try {
      const response = await fetch(url,{
        method: `${Method}`,
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `/api/v1/`,
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
        "Access-Control-Allow-Origin": `/api/v1/`,

      },
      body: JSON.stringify(data),
    })
    return response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}
}