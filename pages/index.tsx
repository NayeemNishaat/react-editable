import EditableEl from "../components/EditableEl";

function TableRow() {
    return (
        <div className="js__row mt-20 flex w-auto justify-center gap-4 border-b py-2 last:border-b-0">
            <EditableEl pnl={76} />
        </div>
    );
}

export default TableRow;
