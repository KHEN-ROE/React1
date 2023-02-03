import Thead from "./Thead";
import TaccidentC1 from "./TaccidentC1";
import TaccidentC2 from "./TaccidentC2";
import Detail from "./Detail";

const Taccidentm = ({c1, c2, data}) => {
    console.log("c1", c1);
    console.log("c2", c2);
    console.log("data", data);


    return(
        <div className="tam">
            <Thead />
            <TaccidentC1 />
            <TaccidentC2 />
            <Detail />
        </div>
    );
}

export default Taccidentm;