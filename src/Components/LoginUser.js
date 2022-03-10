import { useState } from 'react';

function LoginUser() {
    let [passwordVisible, setPasswordVisible] = useState("password");
    let [isAdminUser, setIsAdminUser] = useState(false);

    let handleToggleUser = () => {
        setIsAdminUser(prev => !prev);
    }

    let handleTogglePassword = () => {
        setPasswordVisible((prev) => {
            if (prev === "password") {
                return "text";
            }
            else {
                return "password";
            }
        });
    }

    return (
        <div className='form-group mx-sm-5 mx-3'>
            <h3 className='mb-5'>{isAdminUser ? "Admin Login" : "User Login"}</h3>
            <div className='input-group my-2'>
                <div className='input-group-prepend'>
                    <div className='input-group-text' style={{ fontSize: "20px" }} >
                        <i className='fas fa-user text-primary'></i>
                    </div>
                </div>
                <input type="text" className='form-control p-3' placeholder={isAdminUser ? "Admin email" : "User email"} style={{ fontSize: "20px" }} />
            </div>
            <div className='input-group my-2'>
                <div className='input-group-prepend'>
                    <div className='input-group-text' style={{ fontSize: "20px" }} >
                        <i className='fas fa-lock text-primary'></i>
                    </div>
                </div>
                <input type={passwordVisible} className='form-control p-3' placeholder={isAdminUser ? "Admin password" : "User password"} style={{ fontSize: "20px" }} />
                <div className='input-group-append'>
                    <button type="button" className='btn btn-outline-secondary' onClick={handleTogglePassword}>
                        <i className={passwordVisible === "text" ? 'fas fa-eye text-primary' : 'fas fa-eye text-secondary'}></i>
                    </button>
                </div>
            </div>
            <div className='input-group mt-5 mb-3'>
                <div className='d-flex justify-content-between'>
                    <a type='button' className='btn btn-default text-primary' onClick={handleToggleUser}>
                        {isAdminUser ? "Login as normal user" : "Login as Admin user"}
                    </a>
                    <a type='button' className='btn btn-outline-success'>Login</a>
                </div>
            </div>
        </div>
    )
}

export default LoginUser;