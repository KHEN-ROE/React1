const GalC2 = ({selData}) => {//클릭했을 때 해당하는 타이틀이 존재하는 배열안의 오브젝트를 여기에 전달

    let keys = ["galTitle", "galPhotographyLocation" ,"galPhotographer", "galPhotographyMonth","galSearchKeyword"]
    let dTag;

    dTag = keys.map((k)=>
        <div className={k === 'galTitle' ? "galTitle" : 
        k==="galPhotographyLocation" ? "galPhotographyLocation" :
        k==="galPhotographer" ? "galPhotographer" : 
        k==="galPhotographyMonth" ? "galPhotographyMonth" : "galSearchKeyword"} key={k}>
            {selData[k]}
        </div>
    )

    

    dTag.unshift(
        <div key={dTag}>
            <span><img src={selData["galWebImageUrl"]}></img></span>
        </div>

    )

   

    return(
        <>
            {dTag}
        </>
    );
}
export default GalC2;