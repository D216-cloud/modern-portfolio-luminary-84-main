import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User, Trash2 } from 'lucide-react';
import { assistantSystemPrompt } from '@/data/assistantContext';

interface Msg { id: number; role: 'user' | 'assistant'; content: string }

const stripThinking = (text: string) => text.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, role: 'assistant', content: "Hi! I'm your DeepSeek assistant. Ask me anything." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [manualApiKey, setManualApiKey] = useState('');
  const [apiConnected, setApiConnected] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);
  const siteHeaders = useMemo(() => {
    const referer = (import.meta.env.VITE_SITE_URL as string) || (typeof window !== 'undefined' ? window.location.origin : '');
    const title = (import.meta.env.VITE_SITE_NAME as string) || 'Portfolio Chat';
    return { referer, title };
  }, []);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, loading]);

  const getApiKey = () => {
    if (manualApiKey.trim()) return manualApiKey.trim();
    return (import.meta.env.VITE_DEEPSEEK_API_KEY as string | undefined)
      || (import.meta.env.VITE_OPENROUTER_API_KEY as string | undefined);
  };

  const send = async () => {
    if (!input.trim() || loading) return;
    const nextUser: Msg = { id: Date.now(), role: 'user', content: input };
    setMessages(prev => [...prev, nextUser]);
    setInput('');

    const apiKey = getApiKey();
    if (!apiKey) {
      setMessages(prev => [...prev, { id: Date.now()+1, role: 'assistant', content: 'AI is not configured. Enter an API key above or add VITE_DEEPSEEK_API_KEY (or VITE_OPENROUTER_API_KEY) in .env and restart the dev server.' }]);
      setApiConnected(false);
      return;
    }

    setLoading(true);
    setApiConnected(true);
    try {
      const history = [
        { role: 'system', content: assistantSystemPrompt },
        ...[...messages, nextUser].map(m => ({ role: m.role, content: m.content }))
      ];
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
      'HTTP-Referer': siteHeaders.referer,
      'X-Title': siteHeaders.title,
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-r1-0528:free',
          messages: history,
        })
      });
      if (!res.ok) {
        const t = await res.text().catch(() => '');
        throw new Error(t || `HTTP ${res.status}`);
      }
      const data = await res.json();
      const content = stripThinking(String(data?.choices?.[0]?.message?.content ?? '')) || 'Sorry, I could not generate a response.';
      setMessages(prev => [...prev, { id: Date.now()+2, role: 'assistant', content }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Unknown error';
      setMessages(prev => [...prev, { id: Date.now()+3, role: 'assistant', content: `Error: ${msg}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 mt-24 mb-6">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4 md:p-6">
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral/10 text-coral text-xs font-medium">
                <Bot className="w-4 h-4" /> AI Assistant
              </span>
              <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">DeepSeek Chat</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center mt-2">
              <Input
                value={manualApiKey}
                onChange={e => setManualApiKey(e.target.value)}
                placeholder="Enter API Key (optional, local only)"
                className="w-full md:w-96"
                type="password"
                autoComplete="off"
              />
              <Button
                type="button"
                className={`ml-0 md:ml-2 px-4 py-2 ${apiConnected ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-coral hover:bg-coral-dark'} text-white`}
                onClick={() => setApiConnected(!!getApiKey())}
              >
                {apiConnected ? 'Connected' : 'Connect'}
              </Button>
              {manualApiKey && (
                <span className="text-xs text-gray-500 ml-2">(Manual key used, not saved)</span>
              )}
            </div>
            <div className="text-xs text-gray-400 mt-1">You can use your own API key above, or set it in the .env file for persistent use.</div>
          </div>

      <div className="h-[60vh] overflow-y-auto space-y-3 p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.role==='assistant' ? 'justify-start' : 'justify-end'}`}>
        <div className={`max-w-[80%] p-3 md:p-4 rounded-lg text-sm whitespace-pre-wrap ${m.role==='assistant' ? 'bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700' : 'bg-coral text-white'}`}>
                  <div className="flex items-center gap-2 mb-1 opacity-70 text-xs">
                    {m.role==='assistant' ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    <span>{m.role==='assistant' ? 'Assistant' : 'You'}</span>
                  </div>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg text-sm bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:0ms]"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:150ms]"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:300ms]"></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <Button variant="outline" className="text-red-500 border-red-200 dark:border-red-900" onClick={() => setMessages([{ id: 1, role: 'assistant', content: "Hi! I'm your DeepSeek assistant. Ask me anything." }])}>
              <Trash2 className="w-4 h-4 mr-2" /> Clear
            </Button>
          </div>

          <div className="mt-3 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question... (Enter to send)"
              className="flex-1"
              onKeyDown={(e) => { if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            />
            <Button onClick={send} disabled={loading || !input.trim()} className="bg-coral hover:bg-coral-dark text-white">
              <Send className="w-4 h-4 mr-2" /> Send
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
