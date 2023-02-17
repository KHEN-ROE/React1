import { useState, useEffect } from "react";

const BoxofficDetail = ({mvcd}) => {

    const [mTag, setMTag] = useState();

    console.log("BoxofficeDetail",mvcd)

    const getData = async() => {
        let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${mvcd}`;

        try{
            const resp = await fetch(url);
            const data = await resp.json() ;
            
            //object
            let temp = data.movieInfoResult.movieInfo ;
            let showItem = {'영화명': 'movieNm', '개봉일' : 'openDt', '제작상태' : 'prdtStatNm', '영화구분':'typeNm'}

            if(mvcd){
                let tag=[];
            for(let[k,v] of Object.entries(showItem)){
                tag.push(<div>
                    <span>{k}</span>
                    <span>{temp[v][0].peopleNm}</span>
                </div>)
                
            }
            setMTag(tag)
        }
            } catch(err) {
            console.log(err)
        }
        
        }

        useEffect(() =>{
            getData();
            console.log("mvcd", mvcd)
        },[mvcd]);
        
    
    
    
        return(
            <>
               {mvcd && mTag}
            </>
        );
    }

   
    

export default BoxofficDetail;