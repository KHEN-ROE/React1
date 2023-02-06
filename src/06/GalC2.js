const GalC2 = ({selData}) => {

    let keys = ["galTitle", "galPhotographyLocation" ,"galPhotographer", "galPhotographyMonth","galSearchKeyword"]
    let dTag;

    dTag = keys.map((k)=>
        <li className="li1">
            {selData[k]}
        </li>
    )

    dTag.unshift(
        <div>
            <span><img src={selData["galWebImageUrl"]}></img></span>
        </div>

    )

   

    return(
        <div className="dTag">
            {dTag}
        </div>
    );
}
export default GalC2;