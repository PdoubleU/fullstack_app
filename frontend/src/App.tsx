import React, { useState } from 'react';
import './App.css';
import { authApi } from './services/splitApis/authApi';

function App() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
    const [ authUsr ] = authApi.useAuthenticateAppUserMutation();
  
    const handleChange = (e: any) => {
        setName(e.target.value);
    };
  
    const handleSumbit = async (e: any) => {
        e.preventDefault();
        const response = await authUsr(name);
        if ('data' in response) setResult(response.data.user);
        
    };
  
    return (
        <div className="App">
            <form
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result as any}</h1>
        </div>
    );
}
  
export default App;
