export async function searchWeb(query) {
  const response = await fetch("https://api.tavily.com/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: import.meta.env.VITE_TAVILY_API_KEY,
      query,
      search_depth: "basic",
      max_results: 5,
    }),
  })

  if (!response.ok) {
    throw new Error("Search API failed")
  }

  const data = await response.json()
  return data.results || []
}