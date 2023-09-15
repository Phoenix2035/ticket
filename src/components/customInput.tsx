import {Control, Controller} from "react-hook-form";


interface InputProps {
    type: string
    label: "username" | "password"
    error: boolean
    errorText: string | undefined
    control: Control<{ username: string; password: string; }>
}

const CustomInput = ({label, type, error, errorText, control}: InputProps) => {

    return (
        <>
            <label className="flex justify-end font-bold text-[1em] select-none">
                {label}
            </label>
            <Controller
                name={label}
                control={control}
                defaultValue=""
                render={({field}) => <div className="flex flex-col text-left">
                    <input {...field} type={type}
                           autoComplete={"off"}
                           className={`border rounded outline-0 text-left mt-2 p-2 ${error ? "border-[#ff0000] " : "border-[#111] "}`}/>
                    <span className={`text-[12px] ${error ? "text-[#ff0000] " : ""}`}>{errorText}</span>
                </div>
                }
            />

        </>
    );
};

export default CustomInput;