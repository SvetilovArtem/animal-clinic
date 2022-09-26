
import { useState } from 'react';
import './App.scss';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

function App() {
  const [login, setLogin] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')

  const [loginDirty, setLoginDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)

  const [loginError, setLoginError] = useState('Логин не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

  

  return (
    <div className="App">
      <Header login={login} token={token} />
      {loginDirty && loginError && <div style={{color: 'red'}}>{loginError}</div>}
      {passwordDirty && passwordError && <div style={{color: 'red'}}>{passwordError}</div>}
        <Content 
        password={password} 
        setPassword={setPassword} 
        login={login} 
        setLogin={setLogin} 
        token={token} 
        setToken={setToken}
        setLoginDirty={setLoginDirty}
        setPasswordDirty={setPasswordDirty}
        setLoginError={setLoginError} 
        setPasswordError={setPasswordError}/> 
      
    </div>
  );
}

export default App;
