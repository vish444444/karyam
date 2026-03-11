import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi';

export default function ChatWidget() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: t('chat.greeting') }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { from: 'user', text: input },
      { from: 'bot', text: '🤖 Thanks for your message! Our team will get back to you shortly.' }
    ]);
    setInput('');
  };

  return (
    <>
      <button
        className="chat-fab"
        onClick={() => setOpen(!open)}
        id="chat-toggle"
        aria-label="Toggle chat"
      >
        {open ? <FiX /> : <FiMessageCircle />}
      </button>

      {open && (
        <div className="chat-panel glass-strong" id="chat-panel">
          <div className="chat-header">
            <span>{t('chat.title')}</span>
            <button
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
              onClick={() => setOpen(false)}
            >
              <FiX />
            </button>
          </div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              className="glass-input"
              placeholder={t('chat.placeholder')}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
            />
            <button className="btn-primary btn-small" onClick={send}>
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
