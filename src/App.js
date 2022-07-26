import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
        heigth="100vh"
        projectID="555646ff-8879-4f2b-b1af-13c50565e7c0"
        userName='José'
        userSecret='jesus'
        renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
