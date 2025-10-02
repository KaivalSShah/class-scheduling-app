interface TermProps {
    onChange: (update: string) => void;
}

const TermSelector = ({onChange}: TermProps) => {
    return (
        <div className="grid grid-cols-3 pb-3">
            <button className="border-2 border-gray-400 border-solid rounded-[1vw]" type="button" onClick={() => onChange("Fall")}>Fall</button>
            <button className="border-2 border-gray-400 border-solid rounded-[1vw]" type="button" onClick={() => onChange("Winter")}>Winter</button>
            <button className="border-2 border-gray-400 border-solid rounded-[1vw]" type="button" onClick={() => onChange("Spring")}>Spring</button>
        </div>
    );
}


export default TermSelector;