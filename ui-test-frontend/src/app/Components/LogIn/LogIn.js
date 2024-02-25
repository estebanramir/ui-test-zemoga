'use client'
import React, { useState } from 'react';


export const LogIn = () => {
    const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const pushUser = async () => {
        try {
            const response = await fetch('http://localhost:3001/users', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                name,
                password,
                'type':'Admin',
            }),
            });
            const data = await response.json();
            console.log(data);
        } catch (e) {
            console.log(e, 'error');
        }
    }
    if (name.trim() !== '' && password.trim() !== ''){
        pushUser();
    } else{
        window.alert('Please fill username and Paswrod');
    }
  };


    return(
        <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    )
}
