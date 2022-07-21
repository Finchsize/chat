import './App.css';
import { Message } from './components';

function App() {
  return (
    <div className="App">
      <Message
        authorNick="Some Author"
        createdAt={new Date()}
        content='Pierwsza wiadomość'
        key={'someKey'}
      />
    </div>
  );
}

export default App;
