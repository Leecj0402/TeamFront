/** @format */

import React, { useState, useEffect } from 'react';
import './Messages.css';

export default function Message() {
  const [contacts, setContacts] = useState([]); // 연락처 목록
  const [selectedUser, setSelectedUser] = useState(null); // 선택된 사용자
  const [messages, setMessages] = useState([]); // 메시지 목록
  const [newMessage, setNewMessage] = useState(''); // 입력 중인 메시지

  // 연락처 목록 설정 (더미 데이터)
  useEffect(() => {
    const mockContacts = [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Bob' },
      { id: '3', name: 'Charlie' },
    ];
    setContacts(mockContacts);
  }, []);

  // 메시지 설정 (더미 데이터)
  useEffect(() => {
    if (selectedUser) {
      const mockMessages = [
        { id: '1', sender: 'currentUserId', receiver: selectedUser.id, content: 'Hello!' },
        { id: '2', sender: selectedUser.id, receiver: 'currentUserId', content: 'Hi there!' },
      ];
      setMessages(mockMessages);
    }
  }, [selectedUser]);

  // 메시지 전송
  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: `${Date.now()}`, // 임시 ID
        sender: 'currentUserId', // 현재 사용자
        receiver: selectedUser.id,
        content: newMessage,
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, newMsg]); // 로컬 상태에 추가
      setNewMessage(''); // 입력창 초기화
    }
  };

  return (
    <div className="message">
      {/* 사이드바: 연락처 목록 */}
      <div className="message_sidebar">
        <h3>Contacts</h3>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`contact ${selectedUser?.id === contact.id ? 'active' : ''}`}
            onClick={() => setSelectedUser(contact)}
          >
            {contact.name}
          </div>
        ))}
      </div>

      {/* 채팅 창 */}
      <div className="message_chat">
        {selectedUser ? (
          <>
            <div className="chat_header">
              <h3>Chat with {selectedUser.name}</h3>
            </div>
            <div className="chat_messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`message_bubble ${
                    message.sender === 'currentUserId' ? 'outgoing' : 'incoming'
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
            <div className="chat_input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </>
        ) : (
          <div className="no_chat">Select a contact to start chatting</div>
        )}
      </div>
    </div>
  );
}
