import { Button, Loader, Input  } from "semantic-ui-react";
export  function LoginForm({

    loginState = 'before',
    onLogin=()=>{}
}){
    var c = 'blue';
    var btnTxt = 'Click Me';
  
    if (loginState === 'before'){
      c = 'blue';
      btnTxt = 'Click Me'
    } 
  
    if (loginState === 'during'){
      c = 'green';
      btnTxt = 'Loading';
    }
  
    if (loginState === 'after'){
      c = 'grey';
      btnTxt = 'Redirecting'
    }

    return <div>
        <h3>Login Form</h3>
            <Input 
                disabled={loginState !== 'before'}
                placeholder='e-mail'
            />
            <Input 
                disabled={loginState !== 'before'}
                placeholder='password'
            />
            <Button color={c} onClick={() => onLogin()}>{btnTxt}
            {loginState === 'during' && <Loader active />}
            </Button>
    </div>
}