import Frcdt from "./Frcdt";

const Frccn = ({dt, cn}) => {
    console.log("cn", cn)
    let infoArry = cn.split(',');
    let kn = 0 ; 

   infoArry = infoArry.map((v) =>         
        v.includes('높음') ?
        <li key = {dt + kn++}>
            <span>{v.split(':')[0]}</span>
            <span className='lired'>{v.split(':')[1]}</span> 
        </li> :
        <li key = {dt + kn++}>{v}</li>
    );

    return(
        <div className="mainbox2">
            <div className='detail'>
                <ul>
                {infoArry}
                </ul>
            </div>
                        
        </div>
    );

}

export default Frccn;