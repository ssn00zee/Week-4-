import {Button, Loader} from 'semantic-ui-react'
import {LoginForm} from '../comps/LoginForm'
//the router and states are mostly usedin the page for data/information state managements
import {useRouter} from 'next/router'
import {useState} from 'react'


export default function Home() {

  const [loginState, setLoginState] = useState('before');
  const r = useRouter();

  var c = 'blue';
  var btnTxt = 'Click Me';

  // if (loginState === 'before'){
  //   c = 'blue';
  //   btnTxt = 'Click Me'
  // } 

  // if (loginState === 'during'){
  //   c = 'green';
  //   btnTxt = 'Loading';
  // }

  // if (loginState === 'after'){
  //   c = 'grey';
  //   btnTxt = 'Redirecting'
  // }

  // const handleButton = () => {
  //   if (loginState === 'before'){
  //     setLoginState('during')
  //   }if (loginState === 'during'){
  //       setLoginState('after')
  //   } if (loginState === 'after'){
  //     r.push('/dashboard')
  //   } 
  // }

  const Login = async () => {
    setLoginState('during');

    //going to take time
    //mock of the time passing -> this code is useless
    await new Promise( resolve => setTimeout(resolve, 2000));
    
    setLoginState('after');
    
    await new Promise( resolve => setTimeout(resolve, 2000));
    //it's going to stall for 1-2 sec

    r.push('/dashboard');
  }

  return (
    <div>
      {/* <Button color={c} onClick={() => Login()}>{btnTxt}
      {loginState === 'during' && <Loader active />}
      </Button> */}
      <LoginForm 
      loginState={loginState}
      onLogin={() => Login() }
      ></LoginForm>
    </div>
  )
}
