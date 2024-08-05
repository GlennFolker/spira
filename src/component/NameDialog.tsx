import { useEffect, useRef, useState } from "react";
import Lang from "../Lang"

interface NameDialogProp {
    onClose: (name: string) => void,
    value: string,
    open: boolean
}

export default function NameDialog({ onClose, value, open }: NameDialogProp) {
    const [newValue, setNewValue] = useState(value)

    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        const dialog = dialogRef.current
        if(dialog?.open && !open) {
            dialog?.close()
        } else if(!dialog?.open && open) {
            setNewValue(value)
            dialog?.showModal()
        }
    }, [value, open])

    return (
        <dialog ref={dialogRef} onClose={() => onClose(newValue)} className="NameDialog">
            <span>
                <p>{Lang.nameDialog}</p>
                <button onClick={() => dialogRef.current?.close()} />
            </span>
            <input autoFocus placeholder={Lang.namePlaceholder} value={newValue} onChange={e => setNewValue(e.target.value)} />
        </dialog>
    )
}
