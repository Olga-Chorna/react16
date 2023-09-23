import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import Chat from './components/Chat';
import Home from './components/Home';
import NavMenu from './components/NavMenu';
import { useReducer } from 'react';
import { MENU_CLOSE, MENU_OPEN } from './constants';
import navMenuReducer from './reducers/navMenuReducer';
import { MenuContext } from './context';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
function MyList(props) {
  console.log(props);
  return (
    <section>
      <h2>props.header</h2>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}
function MyItem(props) {
  const { title } = props;
  return (
    <li>{title}</li>
  )
}

function App() {
  const [state, dispatch] = useReducer(navMenuReducer, {
    isMenuOpen: false
  })
  const openNavMenu = () => {
    dispatch({ type: MENU_OPEN });
  }
  const closeNavMenu = () => {
    dispatch({ type: MENU_CLOSE });
  }
  return (
    <main>
      <MenuContext.Provider value={{ state, openNavMenu, closeNavMenu }}>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/counter1" element={<Counter1 />} />
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="/counter3" element={<Counter3 />} />

        </Routes>
      </MenuContext.Provider>


      {/* <MyList header="Lesson about props.children">
        <MyItem title="title#1" />
        <MyItem title="title#2" />
        <MyItem title="title#3" />
      </MyList> */}
    </main>
  );
}

export default App;
