import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XMarkIcon,
  PaperAirplaneIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

import "./ChatWidget.css"; // Import your custom styles

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [visitorId, setVisitorId] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const initialized = useRef(false); // Our guard ref



  // Generate unique visitor ID
  const generateVisitorId = () => {
    return 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  // Generate unique session ID
  const generateSessionId = () => {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  // Load visitor data from localStorage
  const loadVisitorData = () => {
    try {
      const savedVisitorId = localStorage.getItem('chat_visitor_id');
      
      if (savedVisitorId) {
        console.log('Returning visitor detected:', savedVisitorId);
        setVisitorId(savedVisitorId);
        
         const welcomeBackMsg = {
                text: "Welcome back! We can pick up right where we left off. What's on your mind?",
                sender: "ai",
                timestamp: new Date()
            };
            setMessages([welcomeBackMsg]);
        
        // Update last visit timestamp
        localStorage.setItem('chat_last_visit', new Date().toISOString());
      } else {
        // New visitor
        console.log('New visitor detected, generating new visitor ID');
        const newVisitorId = generateVisitorId();
        setVisitorId(newVisitorId);
        localStorage.setItem('chat_visitor_id', newVisitorId);
        localStorage.setItem('chat_last_visit', new Date().toISOString());
        
        // Set initial welcome message for new visitors
        const welcomeMessage = {
          text: "Hi there! How can I help you today?",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages([welcomeMessage]);
        localStorage.setItem('chat_messages', JSON.stringify([welcomeMessage]));
      }
    } catch (loadError) {
      console.error('Error loading visitor data:', loadError);
      // Fallback for new visitor
      const newVisitorId = generateVisitorId();
      setVisitorId(newVisitorId);
      const welcomeMessage = {
        text: "Hi there! How can I help you today?",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  // Save messages to localStorage
  const saveMessages = (newMessages) => {
    try {
      localStorage.setItem('chat_messages', JSON.stringify(newMessages));
    } catch (error) {
      console.error('Error saving messages:', error);
    }
  };

  // Clear chat history (for testing/reset purposes)
  const clearChatHistory = () => {
    try {
      localStorage.removeItem('chat_messages');
      localStorage.removeItem('chat_visitor_id');
      localStorage.removeItem('chat_last_visit');
      
      // Reset to new visitor state
      const newVisitorId = generateVisitorId();
      setVisitorId(newVisitorId);
      localStorage.setItem('chat_visitor_id', newVisitorId);
      localStorage.setItem('chat_last_visit', new Date().toISOString());
      
      // Set initial welcome message
      const welcomeMessage = {
        text: "Hi there! How can I help you today?",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
      localStorage.setItem('chat_messages', JSON.stringify([welcomeMessage]));
    } catch (error) {
      console.error('Error clearing chat history:', error);
    }
  };

  // Expose clearChatHistory to window for testing (development only)
  useEffect(() => {
    if (import.meta.env.DEV) {
      window.clearChatHistory = clearChatHistory;
    }
  }, [clearChatHistory]);

  // Initialize visitor data on component mount
  useEffect(() => {
     // If the effect has already run, don't run it again.
    if (initialized.current) {
      return;
    }
    initialized.current = true; // Mark as initialized

    console.log('Initializing chat widget...');
    loadVisitorData();
    // Generate a new session ID for this chat session
    const newSessionId = generateSessionId();
    setSessionId(newSessionId);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const formatMessage = (text) => {
    return text.split("\n").map((paragraph, i) => (
      <p key={i} className="mb-2 last:mb-0">
        {paragraph.split("*").map((segment, j) => {
          if (j % 2 === 1) {
            // Odd segments are between * markers
            return (
              <span key={j} className="font-semibold text-primary-600">
                {segment}
              </span>
            );
          }
          return segment;
        })}
      </p>
    ));
  };


const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
        text: input,
        sender: "user",
        timestamp: new Date(),
    };
    
    const updatedMessagesWithUser = [...messages, userMessage];
    setMessages(updatedMessagesWithUser);
    saveMessages(updatedMessagesWithUser);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
        const response = await fetch(`${import.meta.env.NGROK_URL} + /chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "a-secure-static-api-key-for-my-portfolio",
                "ngrok-skip-browser-warning": true 
            },
            body: JSON.stringify({
                message: currentInput,
                visitorId: visitorId,
                sessionId: sessionId
            }),
        });

        if (response.status === 401) {
             alert("Authentication error. The API key is missing or invalid.");
             setIsTyping(false);
             return;
        }

        if (!response.body) {
            throw new Error("Streaming not supported");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let aiMessage = {
            text: "",
            sender: "ai",
            timestamp: new Date()
        };
        
        let finalMessages = [...updatedMessagesWithUser, aiMessage];
        setMessages(finalMessages);

        // Read the raw text stream
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            const chunk = decoder.decode(value, { stream: true });
            aiMessage.text += chunk;
            setMessages([...finalMessages]);
        }
        
        saveMessages(finalMessages);

    } catch (fetchError) {
        console.error('Error sending message:', fetchError);
        const errorMessage = {
            text: "Sorry, I'm having trouble connecting.",
            sender: "ai",
            timestamp: new Date()
        };
        const finalMessages = [...updatedMessagesWithUser, errorMessage];
        setMessages(finalMessages);
        saveMessages(finalMessages);
    } finally {
        setIsTyping(false);
    }
};



  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-20 right-0 w-80 md:w-96 h-[calc(100vh-12rem)] max-h-[40rem] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white flex justify-between items-center shadow-md flex-shrink-0">
              <div>
                <h2 className="font-bold text-md">Maya - Virtual assistant</h2>
                <p className="text-xs opacity-90">
                  {isTyping ? "Typing..." : "Typically replies instantly"}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/20 transition-colors focus:outline-none"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-end gap-2.5 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "ai" && (
                    <div className="w-7 h-7 rounded-full bg-blue-500 flex-shrink-0"></div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 shadow-sm ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white rounded-br-lg"
                        : "bg-white text-gray-800 rounded-bl-lg border border-gray-200"
                    }`}
                  >
                    <div className="text-sm leading-relaxed">{formatMessage(message.text)}</div>
                    <p className="text-xs mt-1.5 opacity-70 text-right">
                      {message.timestamp
                        ? new Date(message.timestamp).toLocaleTimeString([], {
                            hour: "numeric",
                            minute: "2-digit",
                          })
                        : ""}
                    </p>
                  </div>
                   {message.sender === "user" && (
                    <div className="w-7 h-7 rounded-full bg-gray-300 flex-shrink-0"></div>
                  )}
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-end gap-2.5"
                >
                   <div className="w-7 h-7 rounded-full bg-blue-500 flex-shrink-0"></div>
                  <div className="bg-white border border-gray-200 rounded-xl rounded-bl-lg px-4 py-3 shadow-sm">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-gray-200 p-3 bg-white shadow-inner flex-shrink-0"
            >
              <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent border-none rounded-full px-3 py-1.5 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-0"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 rounded-full bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <PaperAirplaneIcon className="w-5 h-5 transform -rotate-45" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
          !isOpen ? "animate-pulse-subtle" : ""
        }`}
        aria-label="Open chat"
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <XMarkIcon className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <ChatBubbleBottomCenterTextIcon className="w-7 h-7" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default ChatWidget;
