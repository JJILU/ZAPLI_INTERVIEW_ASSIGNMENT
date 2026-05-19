import { useState } from "react"
import { Search } from "lucide-react"

export default function Chat() {
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState([])

  const handleSearch = async () => {
    if (!query) return

    const userMessage = {
      role: "user",
      text: query,
    }

    setMessages((prev) => [...prev, userMessage])

    try {
      const response = await fetch(
        "https://api.tavily.com/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: import.meta.env.VITE_TAVILY_API_KEY,
            query: query,
            search_depth: "basic",
            max_results: 5,
          }),
        }
      )

      const data = await response.json()

      const results = data.results || []

      const aiMessage = {
        role: "assistant",
        results,
      }

      setMessages((prev) => [...prev, aiMessage])
    } catch (error) {
      console.log(error)
    }

    setQuery("")
  }

  return (
    <section className="min-h-screen bg-zinc-950 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-5xl font-bold mb-10">
          AI Search Chat
        </h2>

        {/* messages */}
        <div className="space-y-6 mb-10">
          {messages.map((message, index) => (
            <div key={index}>
              
              {/* user */}
              {message.role === "user" && (
                <div className="bg-cyan-500 text-black p-4 rounded-2xl w-fit ml-auto max-w-xl">
                  {message.text}
                </div>
              )}

              {/* assistant */}
              {message.role === "assistant" && (
                <div className="bg-zinc-900 p-6 rounded-2xl">
                  <div className="space-y-4">
                    {message.results.map((result, i) => (
                      <a
                        key={i}
                        href={result.url}
                        target="_blank"
                        className="block border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800"
                      >
                        <h3 className="font-bold text-cyan-400">
                          {result.title}
                        </h3>

                        <p className="text-gray-400 mt-2">
                          {result.content}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* input */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Ask anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-cyan-500 hover:bg-cyan-400 px-6 rounded-2xl text-black"
          >
            <Search />
          </button>
        </div>
      </div>
    </section>
  )
}