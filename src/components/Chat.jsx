import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { searchWeb } from "../services/searchApi.js"

export default function Chat() {
  const [query, setQuery] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return

    const userMessage = {
      role: "user",
      text: query,
    }

    setMessages((prev) => [...prev, userMessage])
    setQuery("")
    setLoading(true)

    try {
      const results = await searchWeb(query)

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          results,
        },
      ])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          results: [
            {
              title: "Error",
              content: "Something went wrong. Try again.",
              url: "#",
            },
          ],
        },
      ])
    }

    setLoading(false)
  }

  return (
    <section className="relative min-h-screen bg-black px-4 md:px-6 py-24 overflow-hidden">

      {/* ===== BACKGROUND GLOW (MATCH HERO) ===== */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[120px] opacity-30"
      />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative max-w-4xl mx-auto z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-white text-center mb-12"
        >
          AI Search Interface
        </motion.h2>

        {/* MESSAGES */}
        <div className="space-y-6 mb-10">

          {messages.map((msg, index) => (
            <div key={index}>

              {/* USER MESSAGE */}
              {msg.role === "user" && (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-cyan-500 text-black p-4 rounded-2xl w-fit ml-auto max-w-[80%]"
                >
                  {msg.text}
                </motion.div>
              )}

              {/* ASSISTANT MESSAGE */}
              {msg.role === "assistant" && (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-zinc-900/80 border border-zinc-800 p-5 rounded-2xl backdrop-blur"
                >

                  <p className="text-xs text-gray-400 mb-3">
                    LIVE SEARCH RESULTS
                  </p>

                  <div className="space-y-4">
                    {msg.results.map((result, i) => (
                      <a
                        key={i}
                        href={result.url}
                        target="_blank"
                        className="block p-4 rounded-xl border border-zinc-800 hover:border-cyan-500 transition hover:scale-[1.01]"
                      >
                        <h3 className="text-cyan-400 font-bold">
                          {result.title}
                        </h3>

                        <p className="text-gray-400 text-sm mt-2">
                          {result.content}
                        </p>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>
          ))}

          {/* LOADING STATE */}
          {loading && (
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-cyan-400 text-center"
            >
              Searching the web...
            </motion.div>
          )}

        </div>

        {/* INPUT BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3"
        >

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-zinc-900 border border-zinc-700 focus:border-cyan-500 rounded-2xl px-5 py-4 text-white outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 rounded-2xl transition flex items-center justify-center"
          >
            <Search size={18} />
          </button>

        </motion.div>

      </div>
    </section>
  )
}