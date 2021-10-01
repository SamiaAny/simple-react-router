import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to="/home"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >Home</NavLink>
        <NavLink to="/about"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >About</NavLink>
        <NavLink to="/friends"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        >Friends</NavLink>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
