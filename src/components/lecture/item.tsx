import { numberWithCommas } from "@src/assets/ts/Utils"
import { Item } from "@src/graphql/lecture"
import Image from "next/image"


const LectureItem = ({
  idx,
  icon: {
    isBest,
    isNew,
    isEvent,
    isNote,
  },
  title,
  description,
  description2,
  period,
  totalNum,
  useMobile,
  usePc,
  sampleLecture,
  bookUrl,
  price,
  sellingPrice,
  couponPrice,
  eventPrice,
  point
}: Item) => {
  return (
    <ul className="lecture-list">
    <li>
        <div className="lecture-item">
            <div className="lecture-title-box">
                <div className="lecture-ico-area">
                    {isBest && <span className="lecture-ico best icon-best_yn">BEST</span>}
                    {isNew && <span className="lecture-ico new icon-new_yn">NEW</span>}
                    {isEvent && <span className="lecture-ico icon icon-event_yn">EVENT</span>}
                    {isNote && <span className="lecture-ico icon icon-data_yn">NOTE</span>}
                </div>
                <strong className="lecture-title"><a className="lecture-name" href="https://history.hackers.com/?r=history&amp;c=event&amp;evt_id=22120600" target="_blank">{title}</a></strong>
                <span className="sub-text"><span className="sub-text-blue"> {description} </span> <span className="sub-text-red"> {description2}</span> </span>
                <ol className="lecture-info">
                    <li className="period-common">수강기간 : <span className="lecture-period">{period}일</span><span className="lecture-count">({totalNum}강)</span> </li>
                    {useMobile && <li className="icon-mobile"><span className="lecture-ico"><i className="ico-com mobile"></i>Mobile</span></li>}
                    {usePc && <li className="icon-pc"><span className="lecture-ico"><i className="ico-com pc"></i>PC</span></li>}
                    {sampleLecture && <li className="icon-sample"><a target="_blank" href={sampleLecture} className="lecture-ico"><i className="ico-com movie"></i>샘플강의</a></li>}
                </ol>
            </div>
            <div className="lecture-book">
              {bookUrl && <Image src={bookUrl} alt="" width="97" height="130"/>}
            </div>
            <div className="lecture-price">
                {sellingPrice && <del>{numberWithCommas(sellingPrice)}원</del>}
                <strong>{numberWithCommas(price)}원</strong>
                <span className="lecture-text">
                    {couponPrice && <p>쿠폰가 : <span>{numberWithCommas(couponPrice)}원</span></p>}
                    {eventPrice && <p>이벤트가 : <span>{numberWithCommas(eventPrice)}원</span></p>}
                </span>
                {point && <span className="lecture-point"><i className="ico-com point2"></i><span>{numberWithCommas(point)}</span>점</span>}
                
            </div>
            <div className="lecture-btn">
                <span className="btn-medium" title="수강신청">수강신청</span>
                <span className="btn-medium v2">장바구니</span>
            </div>
        </div>
      </li>
    </ul>
  )
}

export default LectureItem