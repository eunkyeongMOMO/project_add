import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "@src/scss/Main.module.scss";
import evtStyle from "@src/components/event/Event.module.scss";
import Banner from '@src/components/event/Banner';

const index = () =>{
    let [tab , setTab] = useState<number>(0);
    let imgUrl:string ='//gscdn.hackers.co.kr/history/img/event/2022/12/0600/pc/';
    return(
        <section className={`${evtStyle.evt__wrap}`}>
            <h4 className={`${evtStyle.title}`}>한국사 이벤트 안내</h4>
            <div className={`${evtStyle.cont01}`}>
                <div className={`${evtStyle.inner}`}>
                    <img src={`${imgUrl}type1/v1/main_img_01.jpg`} alt="2023 한국사능력검정 2주합격 풀패스" />
                    <img src={`${imgUrl}type1/v1/main_img_02.jpg`} alt="2023 한국사능력검정 2주합격 풀패스" />
                </div>
            </div>
            <Lect imgUrl = {imgUrl}></Lect>
            <div className={`${evtStyle.cont02}`}>
                <div className={`${evtStyle.inner}`}>
                <img src={`${imgUrl}type1/v1/cont01.jpg`} alt="네이버검색량 1위, 해커스한국사" />
                </div>
            </div>
            <div className={`${evtStyle.cont03}`}>
                <div className={`${evtStyle.inner}`}>
                <img src={`${imgUrl}type1/v1/hugi_tit.jpg`} alt="" />
                </div>
            </div>
            <div className={`${evtStyle.banner01}`}></div>
            <div className={`${evtStyle.cont04}`}>
                <div className={`${evtStyle.inner}`}>
                <img src={`${imgUrl}type1/v1/cont02_01.jpg`} alt="" />
                <img src={`${imgUrl}type1/v1/cont02_02.jpg`} alt="" />
                </div>
            </div>
            <div className={`${evtStyle.cont05}`}>
                <div className={`${evtStyle.inner}`}>
                <img src={`${imgUrl}type1/v1/tab_tit.jpg`} alt="" />

                <img src={`${imgUrl}type1/v1/roll_tit.jpg`} alt="" />
                    <div>

                    </div>
                    <img src={`${imgUrl}type1/v1/cont03.jpg`} alt="" />
                </div>
            </div>
            <div className={`${evtStyle.banner02}`}></div>
            <div className={`${evtStyle.cont06}`}>
                <div className={`${evtStyle.in_wide}`}>
                    <img src={`${imgUrl}type1/v1/cont04_01.jpg`} alt="" />
                    <img src={`${imgUrl}type1/v1/cont04_02.jpg`} alt="" />
                </div>
            </div>
            <div className={`${evtStyle.cont07}`}>
                <div className={`${evtStyle.inner}`}>
                    <img src={`${imgUrl}type1/v1/cont05.jpg`} alt="" />
                    <img src={`${imgUrl}type1/v1/cont06.jpg`} alt="" />
                    <iframe className={`${evtStyle.vod}`} width='500' height='300' src="https://www.youtube.com/embed/4AVW3ClAuuY" frameborder="0"></iframe>
                </div>
            </div>
            <Lect imgUrl = {imgUrl}></Lect>
            <div className={`${evtStyle.cont08}`}>
                <div className={`${evtStyle.inner}`}>
                    <img src={`${imgUrl}type1/v1/cont07.jpg`} alt="" />
                </div>
            </div>
           
            <Banner imgUrl ={imgUrl}></Banner> 
            <div className={`${evtStyle.bot_banner}`}>
                <div className={`${evtStyle.inner}`}>
                    <Link href="">
                        <img src={`${imgUrl}type1/v1/btm_bnr.jpg`} alt="" />
                    </Link>
                </div>
            </div>
        </section>
    )
}


const Lect = ({imgUrl}) =>{
    let price =['195,100원','132,111원','18,900원','17,900원'];
    let sale =['44% 할인','40% 할인'];
    let finalPrice = ['109,000원', '79,000원','17,010원','16,110원'];
    let [input01, setInput01] =useState<boolean>(false);
    let [input02, setInput02] =useState<boolean>(false);

        return(
        <div className={`${evtStyle.lect__wrap}`}>
            <ul className={`${evtStyle.inner}`}>
                <li>
                    <img src={`${imgUrl}type1/v1/cta01.jpg`} alt="" />
                    <div className={`${evtStyle.check_box}`}>
                        <label htmlFor=""  className={`${input01 === true ? evtStyle.active : ''}`}>
                            <input type="checkbox" checked={input01} onChange={(e)=>{setInput01(e.target.checked)}}/>
                        </label>
                    </div>
                    <ul className={`${evtStyle.lect_info}`}>
                        <li>{price[0]}</li>
                        <li>{sale[0]}</li>
                        <li>{input01=== true ?'128,800' : '109,000'}</li>
                    </ul>
                    <Link href="/">해택보기</Link>
                    <Link href="/">신청하기</Link>
                </li>
                <li>
                    <img src={`${imgUrl}type1/v1/cta02.jpg`} alt="" />
                    <div className={`${evtStyle.check_box}`}>
                        <label htmlFor="" className={`${input02 === true ? evtStyle.active : ''}`}>
                            <input type="checkbox" checked={input02} onChange={(e)=>{setInput02(e.target.checked)}}/>
                        </label>
                    </div>
                    <ul className={`${evtStyle.lect_info}`}>
                        <li>{price[1]}</li>
                        <li>{sale[1]}</li>
                        <li>{input02 === true ?'96,100':'79,000'}</li>
                    </ul>
                    <Link href="/">해택보기</Link>
                    <Link href="/">신청하기</Link>
                </li>
                <li>
                    <img src={`${imgUrl}type1/v1/cta_btm.jpg`} alt="" />
                    <ul className={`${evtStyle.book_info}`}>
                        <li>
                            <p>{price[2]}</p>
                            <p>{finalPrice[2]}</p>
                           
                        </li>
                        <li>
                            <p>{price[3]}</p>
                            <p>{finalPrice[3]}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
const Popup=({imgUrl})=>{
    return(
        <div className={`${evtStyle.popup__wrap}`}>
            <ul className={`${evtStyle.tabBtn}`}>
                <li>심화합격패스</li>
                <li>기본합격패스</li>
            </ul>
            <div className="tab_cont01">
                <img src={`${imgUrl}type1/v1/pop_hard.png`} alt="" />
            </div>
            <div className="tab_cont02">
                <img src={`${imgUrl}type1/v1/pop_basic.png`} alt="" />
            </div>
        </div>
    )
}

export default index;