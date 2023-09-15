import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

import InsideTicket from "components/ticket/insideTicket";
import {logoutUser} from "services/logout";
import {TOKEN} from "constants/token.const";
import {getTicketList} from "services/getList";
import {getUsername} from "services/getUsername";
import ROUTES_CONSTANT from "constants/routes.const";
import {TicketDetailsProps} from "constants/interface.const";

const DashboardPage = () => {
    const [username, setUsername] = useState('')
    const [showLogout, setShowLogout] = useState(false)

    const [ticketDetails,setTicketDetails] = useState<TicketDetailsProps[]>([])

    const navigate = useNavigate();
    const token = localStorage.getItem(TOKEN)



    const handleLogout = () => {
        logoutUser(token)
        localStorage.removeItem(TOKEN)
        navigate(ROUTES_CONSTANT.LOGIN_ROUTE)
    }

    useEffect(() => {
        getUsername(token).then(response => {
            if (response?.data.result === "success") {
                setUsername(response.data.username)
            } else if (response?.data.result === "unauthorized") {
                toast.error("Please Authorized")
            }
        }).catch(err => toast.error("Somethings Wrong"))

    }, [])


    useEffect(() => {
        getTicketList(token, 1, 1).then(response => {
            if (response) {
                setTicketDetails(response.data.result)
            }
        })
    }, []);


    return (
        <div>
            <div className="w-full h-[50px] bg-white flex justify-between items-center">

                <div className="flex flex-col relative ">
                    <div onClick={() => setShowLogout(!showLogout)}
                         className="select-none mr-10 px-4 py-1 rounded border border-black cursor-pointer">
                        {username}
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
                {
                    ticketDetails?.map(item=><InsideTicket {...item}/>)
                }
            </div>
        </div>
    );
};

export default DashboardPage;