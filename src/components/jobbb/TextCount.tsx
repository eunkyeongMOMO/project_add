import styles from "@src/scss/Jobbb.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";

function TextCount() {
  const ref = useRef(null);
  const [text, setText] = useState("");
  const [removeSpaceByte, setRemoveSpaceByte] = useState(0); // 공백 제외 byte
  const [byte, setByte] = useState(0); // 공백 포함 byte

  const onChangeTextArea = (e: { target: { value: string } }) => {
    setText(e.target.value);

    // * 한글 - 2byte
    let removeSpaceSize = 0; // 공백 제외 byte
    let size = 0; // 공백 포함 byte
    for (let i = 0; i < e.target.value.length; i++) {
      size++;
      // 공백(32)가 아니면 ++
      if (e.target.value.charCodeAt(i) != 32) removeSpaceSize++;
      // 한글에 대한 유니코드 체크값 44032 : "가" 55203 : "힣"
      if (44032 <= e.target.value.charCodeAt(i) && e.target.value.charCodeAt(i) <= 55203) {
        if (e.target.value.charCodeAt(i) != 32) removeSpaceSize++;
        size++;
      }
      // 자음&모음에 대한 유니코드 체크값 12593 : "ㄱ" 12686 : "·ㅣ"
      if (12593 <= e.target.value.charCodeAt(i) && e.target.value.charCodeAt(i) <= 12686) {
        if (e.target.value.charCodeAt(i) != 32) removeSpaceSize++;
        size++;
      }
    }

    setRemoveSpaceByte(removeSpaceSize);
    setByte(size);
  };

  const deleteText = () => {
    if(confirm("모두 지우기 모드를 실행하시겠습니까?")){
      setText("");
    }
  };

  const copyText = () => {
    (ref.current as any).onClick();
  };

  const createFile = (type: string) => {
    // 파일생성
    let header = "<html><head><meta charset='utf-8'></head><body>";
    let footer = "</body></html>";
    let sourceHTML = header + text.replace(/\n/g, "<br/>") + footer;

    if (type == "hwp") {
      // 한글파일은 html 방식으로 사용할 경우 깨지므로 그냥 입력값으로만 출력
      sourceHTML = text;
    }
    let source = "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(sourceHTML);

    // 오늘 날짜
    let today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + today.getDate()).slice(-2);

    // 파일다운로드 구현
    let fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = "hackersjob_" + year + "-" + month + "-" + day + "." + type;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  return (
    <div className={`${styles.textCount}`}>
      <div className={`${styles.grayLinear}`}>
        <textarea placeholder="자기소개서 글자 수를 세어보시려면 이곳에 내용을 입력해주세요." value={text} onChange={onChangeTextArea} />
        <div className={`${styles.noticeArea} ${styles.flexRow} ${styles.sb}`}>
          <p className={`${styles.notice}`}>
            공백제외 : {text.split(" ").join("").length} 자 {removeSpaceByte} byte | 공백포함 : {text.length} 자 {byte} byte
            <br />
            공백을0.5자로 계산 : {text.split(" ").join("").length + text.replace(/[^ ]/g, "").length * 0.5} 자 {byte} byte
          </p>
          <div className={`${styles.btnArea} ${styles.flexRow}`}>
            <button type="button" onClick={deleteText}>
              <Image src={"https://job.hackers.com/A_offline/tool/images/btn_all_del.gif"} alt={"모두지우기"} width="76" height="25" />
            </button>
            <button type="button" onClick={copyText}>
              <Image src={"https://job.hackers.com/A_offline/tool/images/btn_copy.gif"} alt={"내용 복사"} width="76" height="25" />
            </button>
            {/* <CopyToClipboard text={text} ref={ref} onCopy={() => {alert("복사되었습니다.")}}>
              <button type="button" disabled></button>
            </CopyToClipboard> */}
          </div>
        </div>
      </div>
      <div className={`${styles.flexRow} ${styles.sb}`}>
        <div>
          <button type="button" onClick={() => createFile("doc")}>
            <Image src={"https://job.hackers.com/A_offline/tool/images/btn_save_word.gif"} alt={"워드로 저장"} width="99" height="25" />
          </button>
          <button type="button" onClick={() => createFile("hwp")}>
            <Image src={"https://job.hackers.com/A_offline/tool/images/btn_save_han.gif"} alt={"한글로 저장"} width="99" height="25" />
          </button>
        </div>
        <button type="button" onClick={() => window.open("http://speller.cs.pusan.ac.kr/", "_blank", "width=850, height=720")}>
          <Image src={"https://job.hackers.com/A_offline/tool/images/btn_bottom_03.gif"} alt={"맞춤법 검사"} width="86" height="25" />
        </button>
      </div>
    </div>
  );
}

export default TextCount;
