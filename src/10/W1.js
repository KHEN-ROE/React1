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
        temp.push(item[i.category][0]) ;//배열로 가서 첫번째값 가져옴
        temp.push(i.obsrValue) ;
        temp.push(item[i.category][1])//첫번째가 돼야 단위가 들어온다
        
        return temp; 
    })
    console.log("w2", w2)

    return(
        <div className="content">
            <Wheader title={'일기예보-단기'} />
            <div>
                <div className="w2div">
                    <span className="sp0">강수량</span>
                    <span className="sp1">0</span>
                    <span className="sp2">mm</span>
                </div>

            </div>
        </div>
    );
}
export default W1;