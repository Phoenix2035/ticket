import React from 'react';
import airplaneIcon from "assets/images/airplane.png"

const Ticket = () => {
    return (
        <>
            <div className="w-[80%] h-[200px] relative bg-white rounded-xl flex flex-col select-none overflow-hidden">
                <div className="w-[140px] text-center absolute -left-[44px] top-[15px] text-white bg-[#ff0000] p-1"
                     style={{transform: "rotateZ(-50deg)"}}>
                    Economy
                </div>
                <div className=" flex p-5 m-auto gap-20 text-center">

                    <div className={""}>
                        <div className={"font-bold text-xl"}>To</div>
                        <div className={"font-bold text-3xl"}>DEL</div>
                        <div className={"text-[16px]"}>
                            <div>
                                Indira Gandhi
                            </div>
                            <div>
                                International
                            </div>
                        </div>
                    </div>


                    <div className="airplane-container">
                        <div className="dot dot1"/>
                        <div className="dot dot2"/>
                        <div className="dot dot3"/>
                        <img className={"z-20"} src={airplaneIcon} alt="airplane"/>
                        <div className={"bg-[#ccc] mt-1 px-3 py-1 rounded font-bold text-xl"}>$100</div>
                    </div>


                    <div>
                        <div className={"font-bold text-xl"}>From</div>
                        <div className={"font-bold text-3xl"}>BLR</div>
                        <div className={"text-[16px]"}>
                            <div>Kempegowda</div>
                            <div>International</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-[80%] h-[200px] relative bg-white rounded-xl flex flex-col justify-around text-center  select-none border-t-4 border-dashed">
                    <div className="flex justify-around">
                        <div className={"w-1/3"}>
                            <div className={"font-bold text-3xl"}>
                                5:35
                            </div>
                            <div>
                                Boarding
                            </div>
                        </div>


                        <div className={"w-1/3"}>
                            <div className={"font-bold text-3xl"}>
                                2h 25 min
                            </div>
                            <div>
                                Duration
                            </div>
                        </div>

                        <div className={"w-1/3"}>
                            <div className={"font-bold text-3xl"}>
                                6:20 - 8:45
                            </div>
                            <div>
                                Flight Time
                            </div>
                        </div>
                    </div>

                <div className="flex justify-around">
                    <div className={"w-1/3"}>
                        <div className={"font-bold text-3xl"}>
                            20A
                        </div>
                        <div>
                            Seat
                        </div>
                    </div>


                    <div className={"w-1/3"}>
                        <div className={"font-bold text-4xl"}>
                            8
                        </div>
                        <div>
                            Gate
                        </div>
                    </div>

                    <div className={"w-1/3"}>
                        <div className={"font-bold text-4xl"}>
                            No
                        </div>
                        <div>
                            Transfer
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Ticket;