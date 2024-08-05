import { useState } from "react";
import NameDialog from "./NameDialog";

interface NameRowProp {
    onRename: (name: string) => void,
    onRemove: () => void,
    value: string,
}

export default function NameRow({onRename, onRemove, value}: NameRowProp) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="NameRow">
                <span>{value}</span>
                <button onClick={() => setOpen(true)} />
                <button onClick={onRemove} />
            </div>

            <NameDialog value={value} open={open} onClose={e => {
                setOpen(false)
                onRename(e)
            }} />
        </>
    )
}
