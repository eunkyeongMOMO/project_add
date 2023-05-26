import { Item, Lecture } from "@src/graphql/lecture";
import Image from "next/image"
import LectureItem from "./item";

const LectureCate = ({
  cateImg,
  cateTitle,
  cateSubTitle,
  cateDescription,
  cateDescription1,
  cateDescription2,
  items
} : Lecture) => {
    return (
      <div className="lecture-list-wrap">
        <div className="teacher-area">
          {cateImg && <Image src={cateImg} alt="" width="125" height="120" className="teacher-img"/>}
          <div className="teacher-title">
              {cateDescription}<br/><strong>{cateDescription1}</strong><span className="tip">{cateDescription2}</span>
          </div>
        </div>
        <h3 className="lecture-list-title">{cateTitle} - {cateSubTitle}</h3>
        {
          items.map((item : Item) => {
            return (<LectureItem {...item} key={item.idx} />)
          }
        )}
      </div>
    )
} 

export default LectureCate; 