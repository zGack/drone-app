import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore';
import { UserForm } from '../../hooks/useForm';

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {

  const { formState, onInputChange, email, password } = UserForm(formData);

  const {
    startLogInWithEmailPassword,
    startGoogleSignIn,
    errorMessage
  } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    startLogInWithEmailPassword(formState);
  };

  return (
    <div className="bg-login">
      <div className="container-fluid" style={{height: "100vh"}}>
        <div className="row">
          <div className="col-4 bg-light" style={{height: "100vh"}}>

            <h2 className="fw-bold text-center pt-5 mb-5">Bienvenido</h2>
            <form action="">
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="Email"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Password</label>
                <input type="password" className="form-control" name="Password"/>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Iniciar Sesion</button>
              </div>
              <div className="my-3">
                <span><a href="#">Crear Cuenta</a></span>
              </div>
            </form>
          </div>
          <div className="col-8">
          </div>
        </div>

      </div>
    </div>
  )
}
