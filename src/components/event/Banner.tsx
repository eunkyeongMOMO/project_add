import Link from "next/link";
import evtStyle from "./Event.module.scss";
//공통배너단 
const Banner = ({imgUrl}) =>{
    return(
        <section className={`${evtStyle.banner__wrap}`}>
            <div className={`${evtStyle.inner}`}>
            <img src={`${imgUrl}type1/v1/cont08.jpg`}alt="" />
            <h4 className={`${evtStyle.title}`}>해커스한국사 BEST 이벤트</h4>
            <ul>
                <li><Link href="https://history.hackers.com/?r=history&c=event&evt_id=20080302&_C_=566255" target="_blank" title="새창열림"></Link>한능검 정답채점 예약하기</li>
                <li><Link href="https://history.hackers.com/?r=history&c=event&evt_id=21120102&_C_=566256" target="_blank" title="새창열림"></Link>한능검 3일전 전범위 정리</li>
                <li><Link href="https://history.hackers.com/?r=history&c=event&evt_id=20120100&_C_=566257" target="_blank" title="새창열림"></Link>한국사 교재 체험판 무료배포</li>
            </ul>
            </div>
        </section>
    )
}
export default Banner;