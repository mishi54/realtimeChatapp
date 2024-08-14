import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/audio/note.mp3" 

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (newMessage) => {
        const sound = new Audio(notificationSound)
        sound.play()
        setMessages([...messages, newMessage]);
      });
    }

    return () => {
      if (socket) {
        socket.off("newMessage");
      }
    };
  }, [socket, messages, setMessages]);


};

export default useListenMessages;