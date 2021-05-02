import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Pokemon from './components/Pokemon';


function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Pokemon/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
