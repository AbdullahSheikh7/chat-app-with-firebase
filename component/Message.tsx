import { motion } from "framer-motion"

const Message = ({ type, name, displayName, message }: { type: "incoming" | "outgoing", name: string, displayName: boolean, message: string | "You"  }) => {
  return (
    <motion.div transition={{ duration: 0.15 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className={`${type} message-container`}>
      {displayName && <p className="sender">{name}</p>}
      <p className="message">{message}</p>
    </motion.div>
  )
}

export default Message