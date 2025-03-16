"use client"
import { Button } from "@/components/ui/button"
import { Github, DiscIcon as DiscordIcon, Copy, Check } from "lucide-react"
import { useState } from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a051d] to-[#150a36] text-white">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="font-bold text-white">M</span>
            </div>
            <span className="font-bold text-xl">MistySync</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#documentation" className="text-white/80 hover:text-white transition-colors">
              Documentação
            </a>
            <a href="#examples" className="text-white/80 hover:text-white transition-colors">
              Exemplos
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://discord.gg/your-server"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a051d]/80 to-[#150a36]/90"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-purple-900/50 rounded-full text-purple-300 text-sm mb-6 border border-purple-700/50">
              API Poderosa de Dados do Discord
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
              API Misty Sync
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Acesse dados completos de usuários e guildas do Discord com nossa API poderosa e confiável. Construída por
              desenvolvedores, para desenvolvedores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-xl">Começar</Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 px-8 py-6 rounded-xl"
              >
                Ver Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recursos da API</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nossa API fornece acesso completo aos dados do Discord com alta performance e confiabilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dados do Usuário</h3>
              <p className="text-white/70">
                Acesse perfis de usuários, statuses, atividades e contas conectadas.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Dados da Guilda</h3>
              <p className="text-white/70">
                Obtenha informações detalhadas sobre servidores, membros, canais e cargos do Discord.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Atualizações em Tempo Real</h3>
              <p className="text-white/70">Receba atualizações de status em tempo real, mudanças de atividades e informações de presença.</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Testing Section */}
      <section id="examples" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Teste Nossa API</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Experimente nossa API agora mesmo inserindo um ID de usuário do Discord abaixo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ApiTester />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white/70">Tempo de Atividade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50ms</div>
              <div className="text-white/70">Tempo Médio de Resposta</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10M+</div>
              <div className="text-white/70">Chamadas de API Diárias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">5K+</div>
              <div className="text-white/70">Desenvolvedores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500">
                <img src="/placeholder.svg?height=96&width=96" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">misss_aubrey</h3>
                <p className="text-white/70 mb-4">Desenvolvedora de API e Entusiasta do Discord</p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Contate-me</Button>
                  <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/30">
                    Ver Projetos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="font-bold text-white">M</span>
                </div>
                <span className="font-bold text-xl">MistySync</span>
              </div>
              <p className="text-white/70 mb-4">API poderosa de dados do Discord para desenvolvedores.</p>
              <div className="flex gap-4">
                <a
                  href="https://discord.gg/your-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <DiscordIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">API</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Endpoints
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Limites de Taxa
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Começando
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tutoriais
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Exemplos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>© {new Date().getFullYear()} MistySync API. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ApiTester() {
  const [userId, setUserId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!userId.trim()) {
      setError("Por favor, insira um ID de usuário do Discord válido")
      return
    }

    setIsLoading(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch(`https://nexussapi-production.up.railway.app/user/${userId.trim()}`)

      if (!response.ok) {
        throw new Error(`Erro: ${response.status} - ${response.statusText || "Falha ao buscar dados do usuário"}`)
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err.message || "Falha ao buscar dados do usuário")
    } finally {
      setIsLoading(false)
    }
  }

  const copyResult = () => {
    if (result) {
      navigator.clipboard.writeText(JSON.stringify(result, null, 2))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden">
      <div className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Insira o ID do usuário do Discord (ex: 500383265836892161)"
              className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white" disabled={isLoading}>
            {isLoading ? "Carregando..." : "Testar API"}
          </Button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-200">{error}</div>
        )}

        {result && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">Resposta da API</h3>
              <button
                onClick={copyResult}
                className="text-gray-400 hover:text-white p-1 rounded flex items-center gap-1 text-sm"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copiado!" : "Copiar JSON"}
              </button>
            </div>
            <div className="rounded-lg overflow-hidden border border-[#1e1e1e]">
              <div className="bg-[#1e1e1e] border-b border-[#333] px-4 py-2 text-white">Resposta</div>
              <div className="p-0 bg-[#0D1117] text-white relative">
                <pre className="p-6 font-mono text-sm overflow-x-auto">
                  <code>
                    {JSON.stringify(result, null, 2)}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
