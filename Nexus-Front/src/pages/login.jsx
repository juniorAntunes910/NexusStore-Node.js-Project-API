import { use, useState } from 'react';
import { api } from '../services/api'

export default function login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function handleLogin(e) {
        e.preventDefault(); //Impede a pagina de recarregar
    }

    try {
        const response = await api.post('/login', {email, password});
        const { token } = response.data; // Salva o token 
        localStorage.setItem('token', token);
        alert("Login Realizado com sucesso");
        window.location()
    } catch(error){
        
    }

}