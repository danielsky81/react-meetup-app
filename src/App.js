import {Route, Switch} from 'react-router-dom';
import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div className="App">
    <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllMeetup />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
