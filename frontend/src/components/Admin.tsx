import React, { useState } from 'react'
import { authApi } from '../services/splitApis/authApi';

type Props = {}

const Admin = (props: Props) => {
    const [login, setLogin] = useState("");
    const [pwd, setPwd] = useState("");
    const [result, setResult] = useState<any>();
    const [ authUsr ] = authApi.useAuthenticateAdminAppUserMutation();
  
    const handleChangeLogin = (e: any) => {
        setLogin(e.target.value);
    };
    const handleChangePwd = (e: any) => {
        setPwd(e.target.value);
    };
  
    const handleSumbit = async (e: any) => {
        e.preventDefault();
        const response = await authUsr({ login, pwd });
        if ('data' in response) setResult(response.data);
    };
  
    console.log(result?.data);

    return (
        <div className="App">
            <form
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="login">Login: </label>
                <input
                    type="text"
                    id="login"
                    name="login"
                    value={login}
                    onChange={(event) => handleChangeLogin(event)}
                />
                <br />
                <label htmlFor="pwd">Pwd: </label>
                <input
                    type="text"
                    id="pwd"
                    name="pwd"
                    value={pwd}
                    onChange={(event) => handleChangePwd(event)}
                />
                <button type="submit">Submit</button>
            </form>
            {result && result?.data?.map((elem: any) => 
                <p key={elem.licence_plate}>{elem.brand}</p>
            )}
        </div>
    );
}

export default Admin