import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import useConversation from "../../src/zustand/useConversation";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      try {
        setLoading(true);

        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessage();
    }
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
