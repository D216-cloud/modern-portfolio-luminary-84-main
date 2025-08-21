import { useMemo, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { assistantSystemPrompt } from '@/data/assistantContext';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Deepak's virtual assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  type ChatRole = 'user' | 'assistant' | 'system';
  interface ORMessage { role: ChatRole; content: string }

  const siteHeaders = useMemo(() => {
    const referer = (import.meta.env.VITE_SITE_URL as string) || (typeof window !== 'undefined' ? window.location.origin : '');
    const title = (import.meta.env.VITE_SITE_NAME as string) || 'Portfolio Chat';
    return { referer, title };
  }, []);

  const stripThinking = (text: string) => text.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

  const getAIReply = async (history: ORMessage[]): Promise<string> => {
    const apiKey = (import.meta.env.VITE_DEEPSEEK_API_KEY as string | undefined)
      || (import.meta.env.VITE_OPENROUTER_API_KEY as string | undefined);
    if (!apiKey) {
      return "AI is not configured. Add VITE_DEEPSEEK_API_KEY (or VITE_OPENROUTER_API_KEY) in your .env and restart the dev server.";
    }

    const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'HTTP-Referer': siteHeaders.referer,
        'X-Title': siteHeaders.title,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-r1-0528:free',
        messages: history,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      throw new Error(`AI request failed (${resp.status}): ${text || resp.statusText}`);
    }
    const data = await resp.json();
    const raw = data?.choices?.[0]?.message?.content ?? '';
    return stripThinking(String(raw || 'Sorry, I could not generate a response.'));
  };


  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Build chat history for the model
    const history: ORMessage[] = [
      { role: 'system', content: assistantSystemPrompt },
      ...[...messages, newMessage].map<ORMessage>((m) => ({
        role: (m.isBot ? 'assistant' : 'user') as ChatRole,
        content: m.text,
      }))
    ];

    try {
      setIsThinking(true);
      const reply = await getAIReply(history);
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: reply,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to get AI response.';
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: `Error: ${msg}`,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
    handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="bg-coral hover:bg-coral-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-glow relative"
          aria-label="Open chat"
        >
          <MessageCircle className="h-5 w-5" />
          <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 animate-pulse">
            1
          </Badge>
        </Button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-[22rem] md:w-[26rem] h-[30rem] md:h-[34rem] flex flex-col animate-fade-in-up">
          {/* Header */}
          <div className="bg-coral text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium text-sm">Deepak's Assistant</span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-5 overflow-y-auto space-y-3 bg-gray-50/50 dark:bg-gray-800/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                      : 'bg-coral text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-2 rounded-lg text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:0ms]"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:150ms]"></span>
                    <span className="inline-block w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:300ms]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies removed */}

          {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 text-sm h-10 md:h-11"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
        className="bg-coral hover:bg-coral-dark text-white h-10 w-10 md:h-11 md:w-11"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;