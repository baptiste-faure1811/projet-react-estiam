
function DetailsComponent(props) {
    return (
        <div className="flex flex-row justify-center">
            <div className="text-white px-4 py-0 rounded-full border border-white bg-gray-500">
                <p className="text-center font-bold text-base">{props.title}</p>
            </div>
        </div>
    );
  }

export default DetailsComponent;