
import Functions from "../utilities/functions.js";

function TypeComponent(props) {
    return (
        <div className="flex flex-row justify-center">
            <div className="text-white px-4 py-0 rounded-full border border-white" style={{backgroundColor: Functions.getBackgroundColor(props.type)}}>
                <p className="text-center font-bold text-base">{props.type}</p>
            </div>
        </div>
    );
}
      
export default TypeComponent;