import React from 'react';

const Login = () => {
    
    return(
        <div>
            <div>
                <img src=""></img>
            </div>
            <form>
                <h2>Login</h2>
                <input id= "admin" name="role" type="radio"/><label for="admin">Admin</label>
                <input id="meserx" name="role" type="radio"/><label for="meserx">Meserx</label>
                <label for="email">Email</label><input id="email" type="email" placeholder="Ingresar correo"/>
                <label for="password">Password</label><input id="password" type="password" placeholder="Ingresar contraseña"/>
                <button>Ingresar</button>
                <p>Si no tienes una cuenta<a href="#">Regístarte</a></p>
            </form>
        </div>
    )
}
export default Login