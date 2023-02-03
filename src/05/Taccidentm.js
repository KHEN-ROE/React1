import Thead from "./Thead";
import TaccidentC1 from "./TaccidentC1";
import TaccidentC2 from "./TaccidentC2";
import Detail from "./Detail";

const Taccidentm = ({c1, c2, data}) => {
    //데이터 넘어오는 지 확인
    // console.log("c1", c1);
    // console.log("c2", c2);
    // console.log("data", data);


    return(
        <div className="content">
            <div className="header">
                <Thead />
            </div>

            <div className="main">
                <TaccidentC1 c1={c1}/>
                <TaccidentC2 c2={c2}/>
                <Detail />
            </div>
        </div>
    );
}

export default Taccidentm;