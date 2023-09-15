import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {logoutUser} from "services/logout";
import {TOKEN} from "constants/token.const";
import ROUTES_CONSTANT from "constants/routes.const";
import Ticket from "../../components/ticket";

const DashboardPage = () => {
    const [showLogout, setShowLogout] = useState(false)

    const navigate = useNavigate();
    const token = localStorage.getItem(TOKEN)


    const handleLogout = ()=>{
        logoutUser(token)
        localStorage.removeItem(TOKEN)
        navigate(ROUTES_CONSTANT.LOGIN_ROUTE)
    }

    return (
        <div>
            <div className="w-full h-[50px] bg-white flex justify-between items-center">

                <div className="flex flex-col relative ">
                    <div onClick={() => setShowLogout(!showLogout)}
                         className="select-none mr-10 px-4 py-1 rounded border border-black cursor-pointer">
                        admin
                    </div>

                    {
                        showLogout ?
                            <div
                                onClick={handleLogout}
                                className="absolute left-0 top-[100%] select-none cursor-pointer rounded border border-black px-4 py-1 mt-1 bg-white">
                                Logout
                            </div>
                            :
                            null
                    }
                    <div>

                    </div>
                </div>

                <h2 className="select-none text-2xl font-bold ml-10">
                    Dashboard
                </h2>
            </div>

            <div className="mt-4">
                <Ticket/>
            </div>
        </div>
    );
};

export default DashboardPage;