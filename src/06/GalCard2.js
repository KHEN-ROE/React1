const GalC2 = ({selData}) => {//클릭했을 때 해당하는 타이틀이 존재하는 배열안의 오브젝트를 여기에 전달. 맵함수로 출력, 혹은 리턴문 안에 바로 그냥 출력하는 2가지 방법이 있음

    // let keys = ["galTitle", "galPhotographyLocation" ,"galPhotographer", "galPhotographyMonth","galSearchKeyword"]
    // let dTag;

    // dTag = keys.map((k)=>
    //     <div className={k === 'galTitle' ? "galTitle" : 
    //     k==="galPhotographyLocation" ? "galPhotographyLocation" :
    //     k==="galPhotographer" ? "galPhotographer" : 
    //     k==="galPhotographyMonth" ? "galPhotographyMonth" : "galSearchKeyword"} key={k}>
    //         {selData[k]}
    //     </div>
    // )

    

    // dTag.unshift(
    //     <div key={dTag}>
    //         <span><img src={selData["galWebImageUrl"]}></img></span>
    //     </div>

    // )
    
    console.log("galTitle",selData.galTitle)
   

    return(
        <div className="rt1">
            {/* {dTag} */}
            <li><img src={selData.WebImageUrl}></img></li>
            <li className="li1">{selData.Title}</li>
            <li className="li2">{selData.PhotographyLocation}</li>
            <li className="li3">{selData.Photographer}</li>
            <li className="li4">{selData.Month}</li>
            <li className="li5">{selData.SearchKeyword}</li>
            
            
        </div>
    );
}
export default GalC2;