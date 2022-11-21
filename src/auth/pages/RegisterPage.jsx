import React from 'react'

const formData = {
  email: "",
  password: "",
  confirmarPassword: ""
};

export const RegisterPage = () => {
  return (
    <div className="bg-login">
      <div className="container-fluid" style={{height: "100vh"}}>
        <div className="row">
          <div className="col-4 bg-light" style={{height: "100vh"}}>

            <h2 className="fw-bold text-center pt-5 mb-5">Dronebot</h2>
            <form action="">
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="Email"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Password</label>
                <input type="password" className="form-control" name="Password"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">Repetir Password</label>
                <input type="password" className="form-control" name="Repetir Password"/>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Crear Cuenta</button>
              </div>
              <div className="my-3">
                <span><a href="#">Iniciar Sesion</a></span>
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