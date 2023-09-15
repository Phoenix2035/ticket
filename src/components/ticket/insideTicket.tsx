import airplaneIcon from "assets/images/airplane.png"
import OutsideTicket from "./outsideTicket";
import {CalculateDurationTime, FormattedBoardingTime, FormattedTime} from "utils";
import {InsideTicketDetailsProps} from "constants/interface.const";


const InsideTicket = ({
                          dst,
                          src,
                          logoSrc,
                          logoStyle,
                          price,
                          seat,
                          gates,
                          transfer,
                          class: flightClass,
                          boarding
                      }:  InsideTicketDetailsProps) => {


    return (
        <div className={"flex justify-center items-center flex-col "}>
            <div className="w-[60%] h-[200px] relative bg-white rounded-xl flex flex-col select-none overflow-hidden">
                <div className="w-[140px] text-center absolute -left-[44px] top-[15px] text-white bg-[#ff0000] p-1"
                     style={{transform: "rotateZ(-50deg)"}}>
                    {flightClass}
                </div>
                <div className="w-full flex justify-around p-5 m-auto  text-center">
                    <div>
                        <div className={"font-bold text-xl"}>To</div>
                        <div className={"font-bold text-3xl"}>{dst.iso3}</div>
                        <div className={"text-[16px]"}>
                            <div className={"text-gray-500"}>
                                {dst.airline}
                            </div>

                        </div>
                    </div>


                    <div className="airplane-container">
                        <div className="dot dot1"/>
                        <div className="dot dot2"/>
                        <div className="dot dot3"/>
                        <img className={"z-20"} src={airplaneIcon} alt="airplane"/>
                        <div
                            className={"bg-[#ccc] mt-1 px-3 py-1 rounded font-bold text-xl"}>${price}</div>
                    </div>


                    <div>
                        <div className={"font-bold text-xl"}>From</div>
                        <div className={"font-bold text-3xl"}>{src.iso3}</div>
                        <div className={"text-[16px]"}>
                            <div className={"text-gray-500"}>{src.airline}</div>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="w-[60%] h-[200px] bg-white rounded-xl flex flex-col justify-around text-center select-none border-t-4 border-dashed">
                <div className="flex justify-around">
                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            {FormattedBoardingTime(boarding)}
                        </div>
                        <div className={"text-gray-500"}>
                            Boarding
                        </div>
                    </div>


                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            {CalculateDurationTime(src.time, dst.time)}
                        </div>
                        <div className={"text-gray-500"}>
                            Duration
                        </div>
                    </div>

                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            {FormattedTime(dst.time) + " - " + FormattedTime(src.time)}
                        </div>
                        <div className={"text-gray-500"}>
                            Flight Time
                        </div>
                    </div>
                </div>

                <div className="flex justify-around">
                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            {seat}
                        </div>
                        <div className={"text-gray-500"}>
                            Seat
                        </div>
                    </div>


                    <div className={"w-1/3"}>
                        <div className={"font-bold text-4xl"}>
                            {gates}
                        </div>
                        <div className={"text-gray-500"}>
                            Gate
                        </div>
                    </div>

                    <div className={"w-1/3"}>
                        <div className={"font-bold text-4xl"}>
                            {transfer ? "Yes" : "No"}
                        </div>
                        <div className={"text-gray-500"}>
                            Transfer
                        </div>
                    </div>
                </div>
            </div>

            <OutsideTicket dst={dst} logoSrc={logoSrc} src={src} flightClass={flightClass} logoStyle={logoStyle} price={price}/>

        </div>
    );
};

export default InsideTicket;