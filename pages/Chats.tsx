"use client"

import "@/css/chats.scss"
import "@/css/responsive/chats.scss"
import MessageForm from "@/component/MessageForm"
import ChatHeader from "@/component/ChatHeader"
import Message from "@/component/Message"
import { useEffect, useRef, useState } from "react"
import { collection, getDocs, limit, onSnapshot, orderBy, query, startAfter, where } from "firebase/firestore"
import { auth, db } from "@/firebase/firebase"

type Message = {
  name: string,
  content: string,
  sender: string,
  timestamp: Date
}

const Chats = () => {
  const [change, setChange] = useState<boolean>(false)
  const [docs, setDocs] = useState<Message[]>([])
  const [lastDoc, setLastDoc] = useState<any>()
  const chatMessages = useRef<HTMLDivElement>(null)
  const dummy = useRef<HTMLDivElement>(null)
  const [test, settest] = useState<string[]>([])

  onSnapshot(query(collection(db, "messages"), orderBy("timestamp", "desc")), (snapshot) => {
    const data: Message[] = []

    snapshot.forEach(message => {
      const { content, sender, name, timestamp } = message.data()
      data.push({ content, sender, name, timestamp })
    })

    setLastDoc(snapshot.docs[snapshot.docs.length - 1])
    setDocs(data.reverse())
    setChange(true)
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