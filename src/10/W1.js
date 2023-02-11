import Wheader from "./Wheader";
import item from "../db/item.json"
import weather2 from "../db/weather2.json";

const W1 = () => {

    let items = weather2.response.body.items.item ;

    console.log('weather2', weather2)
    console.log('item',item)
    console.log('items',items)
    
    let w2 = items.map((i)=>{//함수형으로 쓰면 여러줄 쓸 수 있다 대신 ruturn해야함
        let temp = [];
        temp.push(item[i.category][0]) ;//item 오브젝트 중에서 i.category에 해당하는 값을 가져오는데, item의 0번지에 있는걸 가져온다. weather2의 item에서 category 키의 value를 순서대로 가져온다(PTY부터). 이제 그 value들이 다시 key가 된다. 이 key의 value중, 0번지에 있는 거만 가져온다. 
        temp.push(i.obsrValue) ;//수치(숫자)
        temp.push(item[i.category][1]) ;//1번지 가져와야 단위가 들어온다
        //push3번 1세트로 총 8개의 배열 생성

        return temp; 
    })
    console.log("w2", w2)

    return(
        <div className="content">
            <Wheader title={'일기예보-단기'} />
            <div>
                <div className="w2div">
                    {/* <span className="sp0">강수량</span>
                    <span className="sp1">0</span>
                    <span className="sp2">mm</span> */}

                    {w2}
                </div>

            </div>
        </div>
    );
}
export default W1;