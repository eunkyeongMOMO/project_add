import styles from "@src/scss/Jobbb.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function GradeChange() {
  const [point, setPoint] = useState("0.00");
  const [point40, setPoint40] = useState("0.00");
  const [point43, setPoint43] = useState("0.00");
  const [point45, setPoint45] = useState("0.00");
  const [point50, setPoint50] = useState("0.00");
  const [point70, setPoint70] = useState("0.00");
  const [point100, setPoint100] = useState("0.00");

  const gradeChange = (point: string, full_marks: string, basic_point: string) => {
    let mpoint = parseInt(basic_point) === 100 ? 60 : 1;
    let mpoint2 = parseInt(full_marks) === 100 ? 60 : 1;
    // N만점기준 학점을 M만점기준 학점으로 전환 공식
    // ({N만점기준 점수(학점)} - {N만점기준 최저점수(학점)}) * ({M만점기준 만점점수(학점)} - {M만점기준 최저점수(학점)}) / ({N만점기준 만점점수(학점)} - {N만점기준 최저점수(학점)}) + {M만점기준 최저점수(학점)}
    return (((Number(point) - Number(mpoint2)) * (Number(basic_point) - Number(mpoint))) / (Number(full_marks) - Number(mpoint2)) + Number(mpoint)).toFixed(2);
  };

  const translate = () => {
    let full_marks : any = document?.querySelector<HTMLInputElement>('#full_marks')?.value;
        
    // 학점(점수) 변환시 최저 취득점수 유효성검사 (100점만점기준 60점 이상 그외에는 1.0 이상)
    let basic_point = parseInt(full_marks) == 100 ? 60 : 1;
    if (parseInt(point) < basic_point || parseInt(point) > Number(full_marks)) {
        alert(full_marks + '점이하 ' + basic_point + '점이상 가능합니다.');
        // document.querySelector<HTMLInputElement>('#point').value = '';
        setPoint("0.00")
        setPoint40("0.00")
        setPoint43("0.00")
        setPoint45("0.00")
        setPoint50("0.00")
        setPoint70("0.00")
        setPoint100("0.00")
        return;
    }

    setPoint40(gradeChange(point, full_marks, "4"));
    setPoint43(gradeChange(point, full_marks, "4.3"));
    setPoint45(gradeChange(point, full_marks, "4.5"));
    setPoint50(gradeChange(point, full_marks, "5"));
    setPoint70(gradeChange(point, full_marks, "7"));
    setPoint100(gradeChange(point, full_marks, "100"));
  }
  
  return (
    <div className={`${styles.gradeChange}`}>
      <div className={`${styles.grayLinear}`}>
        <Image src={"https://job.hackers.com/A_offline/tool/images/title_credit_01.gif"} alt={"현재 학점"} width="47" height="16" />
        <div className={`${styles.gradeInputArea}`}>
          <div className={`${styles.flexRow} ${styles.sb}`}>
            <span>점수입력</span>
            <select id="full_marks">
              <option value="4.0">4.0</option>
              <option value="4.3">4.3</option>
              <option value="4.5">4.5</option>
              <option value="5.0">5.0</option>
              <option value="7.0">7.0</option>
              <option value="100">100</option>
            </select>
            만점
            <input id="point" name="point" type="text" className="input" maxLength={4} onChange={(e) => setPoint(e.target.value)} value={point} />
            <button type="button" onClick={translate}>
              <Image src={"https://job.hackers.com/A_offline/tool/images/btn_converse.gif"} alt={"변환하기"} width="62" height="22" />
            </button>
          </div>
        </div>
        <Image src={"https://job.hackers.com/A_offline/tool/images/title_credit_02.gif"} alt={"변환 학점"} width="47" height="16" />
        <table>
          <tbody>
            <tr>
              <td align="center">
                <span>{point40}</span>
              </td>
              <td align="center">
                4.0 만점
              </td>
            </tr>
            <tr>
              <td align="center">
                <span>{point43}</span>
              </td>
              <td align="center">
                4.3 만점
              </td>
            </tr>
            <tr>
              <td width="212" align="center">
                <span>{point45}</span>
              </td>
              <td width="114" align="center">
                4.5 만점
              </td>
            </tr>
            <tr>
              <td align="center">
                <span>{point50}</span>
              </td>
              <td align="center">
                5.0 만점
              </td>
            </tr>
            <tr>
              <td align="center">
                <span>{point70}</span>
              </td>
              <td align="center">
                7.0 만점
              </td>
            </tr>
            <tr>
              <td align="center">
                <span>{point100}</span>
              </td>
              <td align="center">
                100 만점
              </td>
            </tr>
          </tbody>
        </table>
        <p className={`${styles.notice}`}>
          ※ 해커스잡의 학점 변환 프로그램은 가장 범용적인 기준으로 만들었으나, 학교와 기업마다 기준이 다를 수 있으므로 약간의 오차가 발생할 수 있습니다.
        </p>
      </div>
    </div>
  );
}

export default GradeChange;
