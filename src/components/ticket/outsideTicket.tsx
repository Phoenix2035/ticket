import airplaneIcon from "assets/images/airplane.png";

import {FormattedMonthDate, FormattedTime, Truncate} from "utils";
import {OutsideTicketDetailsProps} from "constants/interface.const";


const OutsideTicket = ({flightClass, price, dst, src, logoStyle, logoSrc, setOpen}: OutsideTicketDetailsProps) => {
    return (
        <div
            className="w-[60%] h-[200px] rounded-xl flex justify-center items-center text-center select-none mt-4 absolute -bottom-[200px] overflow-hidden bg-white flip-box-back cursor-pointer bg-red-400"
            onClick={() => setOpen(true)}>
            <div className="w-[140px] text-center absolute -left-[44px] top-[15px] text-white bg-[#ff0000] p-1"
                 style={{transform: "rotateZ(-50deg)"}}>
                {flightClass}
            </div>

            <div
                className={"absolute bottom-0 left-1/2 border-2 border-dashed border-[#555] rounded px-10 font-bold text-3xl"}
                style={{transform: "translateX(-50%)"}}>
                ${price}
            </div>

            <div className={"w-[90%] flex justify-between items-center"}>
                <div className={"w-[55%] flex justify-between"}>
                    <div>
                        <div className={"text-gray-500"}> {Truncate(dst.country, 15)}</div>
                        <div className={"font-bold text-3xl"}>{FormattedTime(dst.time)}</div>
                        <div className={"text-gray-500"}>{FormattedMonthDate(dst.time)}</div>
                    </div>

                    <div>
                        <img src={airplaneIcon} alt="airplane"/>
                    </div>
                    <div>
                        <div className={"text-gray-500"}>
                            {Truncate(src.country, 15)}
                        </div>
                        <div className={"font-bold text-3xl"}>
                            {FormattedTime(src.time)}
                        </div>
                        <div className={"text-gray-500"}>
                            {FormattedMonthDate(src.time)}
                        </div>
                    </div>
                </div>

                <div>
                    <img width={200} height={logoStyle.height}
                         src={logoSrc} alt="logo"/>
                </div>
            </div>

        </div>
    );
};

export default OutsideTicket;