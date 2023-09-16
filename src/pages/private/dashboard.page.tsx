import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

import {logoutUser} from "services/logout";
import {TOKEN} from "constants/token.const";
import {getTicketList} from "services/getList";
import {getUsername} from "services/getUsername";
import ROUTES_CONSTANT from "constants/routes.const";
import InsideTicket from "components/ticket/insideTicket";
import {InsideTicketDetailsProps} from "constants/interface.const";

const DashboardPage = () => {
    const [username, setUsername] = useState('')
    const [moreTickets, setMoreTickets] = useState(3)
    const [totalTickets, setTotalTickets] = useState(0)
    const [showLogout, setShowLogout] = useState(false)

    const [ticketDetails, setTicketDetails] = useState<InsideTicketDetailsProps[]>([])

    const navigate = useNavigate();
    const token = localStorage.getItem(TOKEN)


    const handleLogout = () => {
        logoutUser(token)
        localStorage.removeItem(TOKEN)
        navigate(ROUTES_CONSTANT.LOGIN_ROUTE)
    }

    const showMoreTickets = () => {
        setMoreTickets(prev => prev + 3)
    }

    useEffect(() => {
        getUsername(token).then(response => {
            if (response?.data.result === "success") {
                setUsername(response.data.username)
            } else if (response?.data.result === "unauthorized") {
                toast.error("Please Authorized")
            }
        }).catch(err => toast.error("Somethings Wrong"))

    }, [token])

    useEffect(() => {
        getTicketList(token, 1, moreTickets).then(response => {
            if (response) {
                setTicketDetails(response.data.result)
                setTotalTickets(response.data.total)
            }
        })
    }, [token, moreTickets]);


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

            <div className="my-20">
                {
                    ticketDetails?.map(item => <InsideTicket {...item}/>)
                }
            </div>

            {
                ticketDetails.length === totalTickets ? null :
                    <div
                        className="w-1/2 bg-[#ff0000] text-[18px] text-white text-center rounded border-0 outline-0  py-4 px-0 mx-auto cursor-pointer">
                        <button onClick={showMoreTickets}>Load More</button>
                    </div>
            }
        </div>
    );
};

export default DashboardPage;