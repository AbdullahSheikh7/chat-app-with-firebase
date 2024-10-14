"use client"

import "@/css/chats.scss"
import "@/css/responsive/chats.scss"
import MessageForm from "@/component/MessageForm"
import ChatHeader from "@/component/ChatHeader"
import Message from "@/component/Message"
import { useEffect, useRef, useState } from "react"
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
  const dummy = useRef<HTMLDivElement>(null)

  onSnapshot(query(collection(db, "messages"), orderBy("timestamp", "desc")), (snapshot) => {
    const data: Message[] = []

    snapshot.forEach(message => {
      const { content, sender, name, timestamp } = message.data()
      data.push({ content, sender, name, timestamp })
    })

    setDocs(data.reverse())
  })

  const scrollFunction = () => {
    dummy.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    setTimeout(() => scrollFunction(), 150);
    scrollFunction()
  },[])

  return (
    <div className="chat-container">
      <div className="chat-area">
        <ChatHeader />

        <div className="chat-messages">
          {docs.map((doc, index) => (
            <Message key={index} displayName={index !== 0 ? doc.sender === docs[index-1].sender ? false : true : true} message={doc.content} name={doc.sender === auth.currentUser?.uid ? "You" : doc.name} type={doc.sender === auth.currentUser?.uid ? "outgoing" : "incoming"} />
          ))}
          <div ref={dummy}></div>
        </div>

        <MessageForm scrollToBottom={scrollFunction} />
      </div>
    </div>
  )
}

export default Chats