import { Switch, Route } from 'react-router';
import './App.css';
import NavBar from './components/navBar';
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <NavBar />
        <main>
        <Switch>

        <Route exact path="/" component={Home} />
        
        </Switch>
      </main>
    </div>
  );
}

export default App;
