import ReactSimpleChatbot from "react-simple-chatbot";
import "./Chatbot.css";

export const Chatbot = () => {
  return (
    <ReactSimpleChatbot
      steps={[
        {
          id: "greet",
          message: "Hello! What's your name?",
          trigger: "ask-name",
        },
        {
          id: "ask-name",
          user: true,  // This allows the user to input their name
          trigger: "name-response",
          placeholder: "Enter your question...",  // Custom placeholder text
        },
        {
          id: "name-response",
          message: "Nice to meet you, {previousValue}!",
          end: true,
        },
      ]}
      floating={true}
      floatingIcon={<img src="Img/chatbot-icon.png" alt="Chat Icon" />}
      headerTitle="Chat with Cypher"
      bubbleStyle = {{background: "#3F3F46", color: "#FFFFFF"}}
    />
  );
};
