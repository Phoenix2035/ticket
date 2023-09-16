import {useState} from "react";

import OutsideTicket from "./outsideTicket";
import airplaneIcon from "assets/images/airplane.png"
import {InsideTicketDetailsProps} from "constants/interface.const";
import {CalculateDurationTime, FormattedBoardingTime, FormattedTime} from "utils";

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
                      }: InsideTicketDetailsProps) => {

    const [open, setOpen] = useState(false)

    const filipStyle = {
        transform: open ? "rotateX(0deg)" : "rotateX(180deg)"
    }


    return (
        <div className="flex justify-center items-center flex-col flip-box mt-10"
             style={{marginBottom: open ? "230px" : "", transition: open ? "0.3s" : "1s"}}>
            <div
                className="w-[60%] h-[200px] relative rounded-xl flex flex-col select-none overflow-hidden bg-white cursor-pointer"
                onClick={() => setOpen(false)}>
                <div className="w-[140px] text-center absolute -left-[44px] top-[15px] text-white bg-[#ff0000] p-1"
                     style={{transform: "rotateZ(-50deg)"}}>
                    {flightClass}
                </div>
                <div className="w-full flex justify-around items-center p-5 m-auto text-center">
                    <div>
                        <div className={"font-bold xl:text-xl sm:text-lg"}>To</div>
                        <div className={"font-bold xl:text-3xl sm:text-lg"}>{dst.iso3}</div>
                        <div className={"xl:text-[16px] text-gray-500 sm:text-lg"}>
                            {dst.airline}
                        </div>
                    </div>


                    <div
                        className="w-[130px] h-[150px] flex flex-col justify-center items-center overflow-hidden relative">
                        <div className="dot dot1"/>
                        <div className="dot dot2"/>
                        <div className="dot dot3"/>
                        <img className={"absolute"} src={airplaneIcon} alt="airplane"/>
                        <div
                            className={"absolute bottom-0 bg-[#ccc]  px-3 py-1 rounded font-bold xl:text-xl sm:text-lg"}>${price}</div>
                    </div>


                    <div>
                        <div className={"font-bold xl:text-xl sm:text-lg"}>From</div>
                        <div className={"font-bold xl:text-3xl sm:text-lg"}>{src.iso3}</div>
                        <div className={"xl:text-[16px] sm:text-lg text-gray-500"}>
                           {src.airline}
                        </div>
                    </div>
                </div>
            </div>


            <div style={filipStyle} className="w-full flex items-center flex-col flip-box-inner">
                <div
                    className="w-[60%] h-[200px] bg-white rounded-xl flex flex-col justify-around text-center select-none border-t-4 border-dashed flip-box-front">
                    <div className="flex justify-around">
                        <div className={"w-1/3"}>
                            <div className={"font-bold xl:text-3xl sm:text-lg"}>
                                {FormattedBoardingTime(boarding)}
                            </div>
                            <div className={"text-gray-500 sm:text-lg"}>
                                Boarding
                            </div>
                        </div>


                        <div className={"w-1/3"}>
                            <div className={"font-bold xl:text-3xl sm:text-lg"}>
                                {CalculateDurationTime(src.time, dst.time)}
                            </div>
                            <div className={"text-gray-500 sm:text-lg"}>
                                Duration
                            </div>
                        </div>

                        <div className={"w-1/3"}>
                            <div className={"font-bold xl:text-3xl sm:text-lg"}>
                                {FormattedTime(dst.time) + " - " + FormattedTime(src.time)}
                            </div>
                            <div className={"text-gray-500 sm:text-lg"}>
                                Flight Time
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around">
                        <div className={"w-1/3"}>
                            <div className={"font-bold xl:text-3xl sm:text-lg"}>
                                {seat}
                            </div>
                            <div className={"text-gray-500 sm:text-lg"}>
                                Seat
                            </div>
                        </div>


                        <div className={"w-1/3"}>
                            <div className={"font-bold xl:text-3xl sm:text-lg"}>
                                {gates}
                            </div>
                            <div className={"text-gray-500 sm:text-lg"}>
                                Gate
                            </div>
                        </div>

                        <div className={"w-1/3"}>
                            <div className={"font-bold xl:text-3xl"}>
                                {transfer ? "Yes" : "No"}
                            </div>
                            <div className={"text-gray-500 sm:text-lg"}>
                                Transfer
                            </div>
                        </div>
                    </div>
                </div>

                <OutsideTicket dst={dst} logoSrc={logoSrc} src={src} flightClass={flightClass} logoStyle={logoStyle}
                               price={price} setOpen={setOpen}/>
            </div>

        </div>
    );
};

export default InsideTicket;