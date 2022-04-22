import { useState, useRef, FocusEvent, KeyboardEvent } from "react";
import { EditIcon } from "../components/UI/icons";

const EditableEl = ({ pnl }: { pnl: Number | String }) => {
    const spanRef = useRef<HTMLSpanElement>(null);

    const inpuHandler = async (
        e: FocusEvent<HTMLInputElement> | KeyboardEvent<HTMLInputElement>
    ) => {
        const target = e.target as HTMLInputElement;

        setEl(
            <span
                ref={spanRef}
                className={`${
                    +target.value >= 0 ? "text-[#55ca68]" : "text-[#ff4141]"
                } w-24 rounded-md border px-1.5`}
            >
                {target.value ? `${target.value}$` : "—"}
            </span>
        );
    };

    const elChangeHandler = () => {
        setEl(
            <input
                className="w-24 rounded border px-1.5 outline-none"
                type="number"
                defaultValue={spanRef?.current?.textContent?.slice(0, -1)}
                autoFocus
                onBlur={(e) => {
                    inpuHandler(e);
                }}
                onKeyDown={(e) => e.key === "Enter" && inpuHandler(e)}
            />
        );
    };

    const [el, setEl] = useState(
        <span
            className={`${
                pnl === "PNL" || pnl === null
                    ? ""
                    : pnl >= 0
                    ? "text-[#55ca68]"
                    : "text-[#ff4141]"
            } w-24 rounded-md border px-1.5`}
            ref={spanRef}
        >
            {pnl === "PNL" ? pnl : pnl ? pnl + "$" : "—"}
        </span>
    );

    return (
        <>
            {el}
            {pnl !== "PNL" && (
                <span className="w-24 cursor-pointer" onClick={elChangeHandler}>
                    <EditIcon />
                </span>
            )}
        </>
    );
};

export default EditableEl;
