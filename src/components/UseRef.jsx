
import { useRef } from "react";
const useReff = () => {
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    )
}
export default useReff;