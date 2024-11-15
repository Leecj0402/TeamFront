/** @format */

import React, { useState, useEffect } from 'react';
import { db } from '../Firebase/firebase.js'; // Firebase 설정 파일 경로
import './Messages.css';

export default function Message() {
  const [contacts, setContacts] = useState([]); // 연락처 목록
  const [selectedUser, setSelectedUser] = useState(null); // 선택된 사용자
  const [messages, setMessages] = useState([]); // 메시지 목록
  const [newMessage, setNewMessage] = useState(''); // 입력 중인 메시지

  // 연락처 목록 가져오기
  useEffect(() => {
    db.collection('users')
      .get()
      .then((snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(users);
      });
  }, []);

  // 메시지 가져오기
  useEffect(() => {
    if (selectedUser) {
      db.collection('messages')
        .where('receiver', '==', selectedUser.id)
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          const fetchedMessages = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMessages(fetchedMessages);
        });
    }
  }, [selectedUser]);

  // 메시지 전송
  const sendMessage = () => {
    if (newMessage.trim()) {
      db.collection('messages').add({
        sender: 'currentUserId', // 현재 사용자 ID (로그인된 사용자)
        receiver: selectedUser.id,
        content: newMessage,
        timestamp: new Date(),
      });
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
