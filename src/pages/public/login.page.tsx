import {useState} from "react";
import * as yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup';
import {SubmitHandler, useForm} from "react-hook-form";

import Loading from "components/loading";
import {loginUser} from "services/login";
import {TOKEN} from "constants/token.const";
import CustomInput from "components/customInput";
import ROUTES_CONSTANT from "constants/routes.const";
import {LoginFormInputs} from "constants/interface.const";




const loginSchema = yup.object().shape({
    username: yup.string().required('username is required'),
    password: yup.string().min(6, "you can enter at least 6 character").max(6, "you can enter only 6 character").required('password is required')
})

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();


    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema),
    });

    const handleLogin: SubmitHandler<LoginFormInputs> = ({username, password}) => {
        setIsLoading(true)
        loginUser(username, password).then(response => {
            if (response.data.result === "success") {
                localStorage.setItem(TOKEN, response?.data?.token)
                setIsLoading(false)
                navigate(ROUTES_CONSTANT.DASHBOARD_ROUTE)
            } else if (response.data.result === "wrong_pass") {
                toast.error("Wrong username or password")
                setIsLoading(false)
            }
        }).catch((err) => {
            setIsLoading(false)
            toast.error("Somethings Wrong")
        })
    };


    return (
        <div className="App w-full h-full flex justify-center items-center relative bg-purple-200">
            <div
                className="w-[350px] h-auto min-h-[350px] flex flex-col justify-between items-center z-[2] text-center border border-[#ffffff1a] backdrop-blur-[4.9px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-2xl bg-[#ffffff33] p-[2.5rem_2rem_1.5rem_2rem]">

                <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
                    <p className="login relative uppercase font-bold text-[2em] tracking-[3px] text-stone-800  select-none">
                        Login
                    </p>

                    <div className="flex flex-col mt-2">
                        <CustomInput control={control} type={"text"} label={"username"} error={Boolean(errors.username)}
                                     errorText={errors.username && errors.username.message}/>
                    </div>


                    <div className="flex flex-col mt-2">
                        <CustomInput control={control} type={"password"} label={"password"} error={Boolean(errors.password)}
                                     errorText={errors.password && errors.password.message}/>
                    </div>


                    <button
                        type="button"
                        disabled={isLoading}
                        onClick={handleSubmit(handleLogin)}
                        className={`w-full text-white text-center py-2 px-4 mt-4 rounded-full ${isLoading ? "bg-[#ccc] cursor-auto " : "bg-[#ff0000] hover:bg-red-600 "}`}
                    >
                        {
                            isLoading ?
                                <div className="flex justify-center">
                                    <Loading/>
                                </div>
                                :
                                <span>
                                    Login
                                </span>
                        }
                    </button>
                </form>

            </div>
        </div>
    );
};

export default LoginPage;