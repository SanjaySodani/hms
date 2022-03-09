import LoginUser from './LoginUser';

function Login() {
    return (
        <div className='container-fluid vh-100 bg-light'>
            <div className="row h-100 justify-content-center">
                <div className="col col-12 col-md-8 col-lg-6 my-auto">
                    <div className="text-center mb-5">
                        <h2 style={{"color": "#B200ED"}} className="font-weight-bolder">
                            Hospital Management System</h2>
                    </div>
                    <div className='mx-sm-5 py-5 bg-white shadow'>
                        <LoginUser />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;