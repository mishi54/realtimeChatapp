// import React from "react";
// import Conversation from "./Conversation";
// import useGetConversations from "../../hooks/useGetConversation.js";

// const Conversations = () => {
//   const { loading, conversations } = useGetConversations();
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       {conversations.map((conversation, index) => (
//         <Conversation
//           key={conversation._id}
//           conversation={conversation}
//           lastIndex={index === conversations.length - 1}
//         />
//       ))}
//        {loading ?
//           <span className='loading loading-spinner'></span>  
//          :null}
//     </div>
//   );
// };

// export default Conversations;

import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversation.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  // Ensure conversations is an array or fallback to an empty array
  const conversationList = Array.isArray(conversations) ? conversations : [];

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversationList.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversationList.length - 1}
        />
      ))}
      {loading && (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Conversations;
