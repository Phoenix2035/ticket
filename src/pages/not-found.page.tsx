import {Link} from "react-router-dom";

import {TOKEN} from "constants/token.const";
import ROUTES_CONSTANT from "constants/routes.const";

const NotFoundPage = () => {
    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="w-1/3 text-center">
                <div className="four_zero_four_bg"/>

                <div className="flex flex-col items-center text-[#f8f8f2] mt-2">
                    <h3 className="text-[30px]">بنظر میرسه گم شدی!</h3>
                    <p className="text-[20px]">این صفحه در دسترس نیست</p>

                    <div className="w-1/3 mt-5 py-2.5 px-5 rounded transition-all	bg-[#ff5555] hover:bg-[#6272a4]">
                        <Link
                            to={localStorage.getItem(TOKEN) ? ROUTES_CONSTANT.DASHBOARD_ROUTE : ROUTES_CONSTANT.LOGIN_ROUTE}>برگرد
                            به صفحه اصلی</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
