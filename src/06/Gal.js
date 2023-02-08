//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드

import GalMain from "./GalMain"
import './Gal.css'
import data from "../db/data.json"

const Gal = () => {
    
      console.log("data", data)//data를 따로 빼서 import

    let c1 ;
    let data1 = data.response.body.items.item;
    console.log("data1", data1)

    //대분류 c1
    c1 = data1.map((item) => item['galTitle'])
    console.log("c1", c1)

    // //대분류 눌렀을 때 c2
    // let c2;
    // c2 = data1.map((item) => item)
    // console.log("c2",c2)

    
    return (
        <div className="main">
          <GalMain c1={c1} data1={data1}/>
        </div>
    ); 
}

export default Gal ;