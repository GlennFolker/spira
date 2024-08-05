import { useState } from "react";
import NameDialog from "./NameDialog";
import NameRow from "./NameRow";

export default function NameList() {
    const [open, setOpen] = useState(false)
    const [rows, setRows] = useState<string[]>([])
    
    return <>
        <div className="NameList">
            <ul>
                {rows.map((row, i) => <li>
                    <NameRow value={row} onRename={e => {
                        const newRows = [...rows]
                        newRows.splice(i, 1, e)
                        setRows(newRows)
                    }} onRemove={() => {
                        const newRows = [...rows]
                        newRows.splice(i, 1)
                        setRows(newRows)
                    }} />
                </li>)}
            </ul>

            <div>
                <button onClick={() => setOpen(true)} />

                <button onClick={() => {
                    const a = document.createElement("a")
                    a.download = "SpiraList.txt"
                    a.href = URL.createObjectURL(new Blob([rows.join('\n')], {type: "text/plain"}))
                    a.click()
                }} />
            </div>
        </div>

        <NameDialog value="" open={open} onClose={e => {
            setOpen(false)
            setRows(e.length > 0 ? [...rows, e] : rows)
        }} />
    </>
}
