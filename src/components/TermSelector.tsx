interface TermProps {
    onChange: (update: string) => void;
}

const TermSelector = ({onChange}: TermProps) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <button className="border-2 border-gray-400 border-solid rounded-[1vw] p-3 mb-3 w-32" type="button" onClick={() => onChange("Fall")}>Fall</button>
            <button className="border-2 border-gray-400 border-solid rounded-[1vw] p-3 mb-3 w-32" type="button" onClick={() => onChange("Winter")}>Winter</button>
            <button className="border-2 border-gray-400 border-solid rounded-[1vw] p-3 mb-3 w-32" type="button" onClick={() => onChange("Spring")}>Spring</button>
        </div>
    );
}


export default TermSelector;