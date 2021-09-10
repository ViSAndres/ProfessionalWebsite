import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header>
        </Header>
      </header>
      <body className = 'Body-Header'>
      <Body>
      </Body>
      </body>
    </div>
  );
}

export default App;
