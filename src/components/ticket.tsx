import airplaneIcon from "assets/images/airplane.png"
import {CalculateDurationTime, FormattedBoardingTime, FormattedMonthDate, FormattedTime, Truncate} from "utils";


const Ticket = ({ticketDetails}: any) => {


    return (
        <div className={"flex justify-center items-center flex-col "}>
            <div className="w-[60%] h-[200px] relative bg-white rounded-xl flex flex-col select-none overflow-hidden">
                <div className="w-[140px] text-center absolute -left-[44px] top-[15px] text-white bg-[#ff0000] p-1"
                     style={{transform: "rotateZ(-50deg)"}}>
                    {ticketDetails.class}
                </div>
                <div className="w-full flex justify-around p-5 m-auto  text-center">
                    <div>
                        <div className={"font-bold text-xl"}>To</div>
                        <div className={"font-bold text-3xl"}>{ticketDetails.dst.iso3}</div>
                        <div className={"text-[16px]"}>
                            <div className={"text-gray-500"}>
                                {ticketDetails.dst.airline}
                            </div>

                        </div>
                    </div>


                    <div className="airplane-container">
                        <div className="dot dot1"/>
                        <div className="dot dot2"/>
                        <div className="dot dot3"/>
                        <img className={"z-20"} src={airplaneIcon} alt="airplane"/>
                        <div
                            className={"bg-[#ccc] mt-1 px-3 py-1 rounded font-bold text-xl"}>${ticketDetails.price}</div>
                    </div>


                    <div>
                        <div className={"font-bold text-xl"}>From</div>
                        <div className={"font-bold text-3xl"}>{ticketDetails.src.iso3}</div>
                        <div className={"text-[16px]"}>
                            <div className={"text-gray-500"}>{ticketDetails.src.airline}</div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="w-[60%] h-[200px] bg-white rounded-xl flex flex-col justify-around text-center select-none border-t-4 border-dashed">
                <div className="flex justify-around">
                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            {FormattedBoardingTime(ticketDetails.boarding)}
                        </div>
                        <div className={"text-gray-500"}>
                            Boarding
                        </div>
                    </div>


                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            {CalculateDurationTime(ticketDetails.src.time, ticketDetails.dst.time)}
                        </div>
                        <div className={"text-gray-500"}>
                            Duration
                        </div>
                    </div>

                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            {FormattedTime(ticketDetails.dst.time) + " - " + FormattedTime(ticketDetails.src.time)}
                        </div>
                        <div className={"text-gray-500"}>
                            Flight Time
                        </div>
                    </div>
                </div>

                <div className="flex justify-around">
                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            {ticketDetails.seat}
                        </div>
                        <div className={"text-gray-500"}>
                            Seat
                        </div>
                    </div>


                    <div className={"w-1/3"}>
                        <div className={"font-bold text-4xl"}>
                            {ticketDetails.gates}
                        </div>
                        <div className={"text-gray-500"}>
                            Gate
                        </div>
                    </div>

                    <div className={"w-1/3"}>
                        <div className={"font-bold text-4xl"}>
                            {ticketDetails.transfer ? "Yes" : "No"}
                        </div>
                        <div className={"text-gray-500"}>
                            Transfer
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="w-[60%] h-[200px] bg-white rounded-xl flex justify-center items-center text-center select-none mt-4 relative overflow-hidden">
                <div className="w-[140px] text-center absolute -left-[44px] top-[15px] text-white bg-[#ff0000] p-1"
                     style={{transform: "rotateZ(-50deg)"}}>
                    {ticketDetails.class}
                </div>

                <div
                    className={"absolute bottom-0 left-1/2 border-2 border-dashed border-[#555] rounded px-10 font-bold text-3xl"}
                    style={{transform: "translateX(-50%)"}}>
                    ${ticketDetails.price}
                </div>

                <div className={"w-[90%] flex justify-between items-center"}>
                    <div className={"w-[55%] flex justify-between"}>
                        <div>
                            <div className={"text-gray-500"}> {Truncate(ticketDetails.dst.country, 15)}</div>
                            <div className={"font-bold text-3xl"}>{FormattedTime(ticketDetails.dst.time)}</div>
                            <div className={"text-gray-500"}>{FormattedMonthDate(ticketDetails.dst.time)}</div>
                        </div>

                        <div>
                            <img src={airplaneIcon} alt="airplane"/>
                        </div>
                        <div>
                            <div className={"text-gray-500"}>
                                {Truncate(ticketDetails.src.country, 15)}
                            </div>
                            <div className={"font-bold text-3xl"}>
                                {FormattedTime(ticketDetails.src.time)}
                            </div>
                            <div className={"text-gray-500"}>
                                {FormattedMonthDate(ticketDetails.src.time)}
                            </div>
                        </div>
                    </div>

                    <div>
                        <img width={200} height={ticketDetails.logoStyle.height}
                             src={ticketDetails.logoSrc} alt="logo"/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Ticket;