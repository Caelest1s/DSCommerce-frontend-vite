import { useState } from 'react';
import { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-service';
import './styles.css';

export default function Login() {

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(formData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log("Erro no login", error);
            })
    }

    function handleInputChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Email"
                                    className="dsc-form-control" />
                                {/* <div className="dsc-form-error">Campo obrigatório</div> */}
                            </div>
                            <div>
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="dsc-form-control"
                                    type="password"
                                    placeholder="Senha" />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}