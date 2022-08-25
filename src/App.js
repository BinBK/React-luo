import './App.css';
import routes from './Component/routes/index'
import { useRoutes } from 'react-router-dom'


function App() {

  const element = useRoutes(routes)

  return (
    <div className="App">
      
      {/* <NavLink to='/'>登录</NavLink>
      <NavLink to='/home'>主页</NavLink> */}

    {element}

    </div>
  );
}

export default App;
