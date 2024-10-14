"use client"

import "@/css/chats.scss"
import "@/css/responsive/chats.scss"
import MessageForm from "@/component/MessageForm"
import ChatHeader from "@/component/ChatHeader"
import Message from "@/component/Message"
import { useRef, useState } from "react"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { auth, db } from "@/firebase/firebase"

type Message = {
  name: string,
  content: string,
  sender: string,
  timestamp: Date
}

const Chats = () => {
  const [docs, setDocs] = useState<Message[]>([])
  const chatMessages = useRef<HTMLDivElement>(null)
  const dummy = useRef<HTMLDivElement>(null)

  onSnapshot(query(collection(db, "messages"), orderBy("timestamp", "desc")), (snapshot) => {
    const data: Message[] = []

    snapshot.forEach(message => {
      const { content, sender, name, timestamp } = message.data()
      data.push({ content, sender, name, timestamp })
    })

    setDocs(data.reverse())
    setTimeout(() => {
      chatMessages.current?.scroll(0, chatMessages.current.scrollHeight);
    }, 150);
  })

  return (
    <div className="chat-container">
      <div className="chat-area">
        <ChatHeader />

        <div className="chat-messages" ref={chatMessages}>
          {docs.map((doc, index) => (
            <Message key={index} displayName={index !== 0 ? doc.name === docs[index-1].name ? false : true : true} message={doc.content} name={doc.sender === auth.currentUser?.uid ? "You" : doc.name} type={doc.sender === auth.currentUser?.uid ? "outgoing" : "incoming"} />
          ))}
          <div ref={dummy}></div>
        </div>

        <MessageForm />
      </div>
    </div>
  )
}

export default Chats