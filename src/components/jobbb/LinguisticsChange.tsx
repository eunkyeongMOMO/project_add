import styles from "@src/scss/Jobbb.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function LinguisticsChange() {
  const [point, setPoint] = useState("0");
  const [toeic, setToeic] = useState("0");
  const [teps, setTeps] = useState("0");
  const [toeflPbt, setToeflPbt] = useState("0");
  const [toeflIbt, setToeflIbt] = useState("0");
  const [toeicSpeaking, setToeicSpeaking] = useState("0");
  const [toeicWriting, setToeicWriting] = useState("0");
  const [opic, setOpic] = useState("0");

  const pointTable = [
    Array("927~990", "667~677", "118~120", "990", "8~9", "7~8", "AL"),
    Array("919~926", "660~663", "117", "985", "8~9", "7~8", "AL"),
    Array("911~918", "657", "116", "980", "8~9", "7~8", "AL"),
    Array("902~910", "657", "116", "975", "8~9", "7~8", "AL"),
    Array("893~301", "650~653", "115", "970", "8~9", "7~8", "AL"),
    Array("884~892", "650~653", "114", "965", "8~9", "7~8", "AL"),
    Array("873~883", "647", "113", "960", "8~9", "7~8", "AL"),
    Array("863~872", "640~643", "112", "955", "8~9", "7~8", "AL"),
    Array("852~862", "640~643", "111", "950", "8~9", "7~8", "IH"),
    Array("842~851", "640~643", "111", "945", "8~9", "7~8", "IH"),
    Array("833~841", "637", "110", "940", "8~9", "7~8", "IH"),
    Array("824~832", "630~633", "109", "935", "8~9", "7~8", "IH"),
    Array("815~823", "630~633", "109", "930", "8~9", "7~8", "IH"),
    Array("806~814", "623~627", "108", "925", "8~9", "7~8", "IH"),
    Array("798~805", "623~627", "107", "920", "8~9", "7~8", "IH"),
    Array("791~797", "623~627", "107", "915", "8~9", "7~8", "IH"),
    Array("782~790", "623~627", "106", "910", "8~9", "7~8", "IM3"),
    Array("774~781", "617~620", "105", "905", "8~9", "7~8", "IM3"),
    Array("766~773", "617~620", "105", "900", "8~9", "7~8", "IM3"),
    Array("758~765", "613", "104", "895", "8~9", "7~8", "IM3"),
    Array("751~757", "613", "103", "890", "8~9", "7~8", "IM3"),
    Array("744~750", "613", "103", "885", "7", "7~8", "IM3"),
    Array("737~743", "607~610", "102", "880", "7", "7~8", "IM3"),
    Array("730~736", "607~610", "101", "875", "7", "6", "IM3"),
    Array("723~729", "607~610", "101", "870", "7", "6", "IM3"),
    Array("716~722", "600~603", "100", "865", "7", "6", "IM3"),
    Array("708~715", "597", "99", "860", "7", "6", "IM3"),
    Array("701~707", "597", "99", "855", "7", "6", "IM3"),
    Array("695~700", "597", "98", "850", "7", "6", "IM3"),
    Array("688~694", "590~593", "97", "845", "7", "6", "IM3"),
    Array("681~687", "590~593", "96", "840", "7", "6", "IM3"),
    Array("675~680", "590~593", "96", "835", "7", "6", "IM3"),
    Array("669~674", "587", "95", "830", "7", "6", "IM3"),
    Array("663~668", "587", "94", "825", "7", "6", "IM3"),
    Array("658~662", "587", "94", "820", "7", "6", "IM3"),
    Array("652~657", "580~583", "93", "815", "7", "6", "IM3"),
    Array("647~651", "580~583", "92", "810", "7", "6", "IM2"),
    Array("642~646", "580~583", "92", "805", "7", "6", "IM2"),
    Array("637~641", "577", "91", "800", "7", "6", "IM2"),
    Array("632~636", "577", "90", "795", "7", "6", "IM2"),
    Array("628~631", "577", "90", "790", "7", "6", "IM2"),
    Array("623~627", "570~573", "89", "785", "7", "6", "IM2"),
    Array("619~622", "570~573", "88", "780", "7", "6", "IM2"),
    Array("615~618", "570~573", "88", "775", "7", "6", "IM2"),
    Array("611~614", "567", "87", "770", "7", "6", "IM2"),
    Array("606~610", "567", "86", "765", "7", "6", "IM2"),
    Array("602~605", "567", "86", "760", "7", "6", "IM2"),
    Array("598~601", "563", "85", "755", "7", "6", "IM2"),
    Array("594~597", "563", "85", "750", "7", "6", "IM2"),
    Array("590~593", "563", "84", "745", "7", "6", "IM2"),
    Array("585~589", "557~560", "83", "740", "7", "6", "IM2"),
    Array("581~584", "557~560", "83", "735", "7", "6", "IM2"),
    Array("577~580", "553", "82", "730", "7", "6", "IM2"),
    Array("573~576", "553", "82", "725", "7", "6", "IM2"),
    Array("569~572", "553", "81", "720", "7", "6", "IM2"),
    Array("566~568", "553", "81", "715", "7", "6", "IM1"),
    Array("562~565", "550", "80", "710", "7", "6", "IM1"),
    Array("558~561", "550", "80", "705", "7", "6", "IM1"),
    Array("555~557", "550", "79", "700", "7", "6", "IM1"),
    Array("551~554", "550", "79", "695", "7", "6", "IM1"),
    Array("548~550", "547", "78", "690", "6", "6", "IM1"),
    Array("544~547", "547", "78", "685", "6", "6", "IM1"),
    Array("541~543", "547", "78", "680", "6", "6", "IM1"),
    Array("538~540", "547", "77", "675", "6", "6", "IM1"),
    Array("534~537", "547", "77", "670", "6", "5", "IM1"),
    Array("531~533", "540~543", "76", "665", "6", "5", "IM1"),
    Array("527~530", "540~543", "76", "660", "6", "5", "IM1"),
    Array("524~526", "537", "75", "655", "6", "5", "IM1"),
    Array("520~523", "537", "74", "650", "6", "5", "IM1"),
    Array("516~519", "537", "74", "645", "6", "5", "IM1"),
    Array("512~515", "533", "73", "640", "6", "5", "IM1"),
    Array("508~511", "533", "73", "635", "6", "5", "IM1"),
    Array("505~507", "533", "72", "630", "6", "5", "IM1"),
    Array("501~504", "527~530", "71", "625", "6", "5", "IM1"),
    Array("497~500", "527~530", "71", "620", "6", "5", "IM1"),
    Array("493~496", "523", "70", "615", "6", "5", "IM1"),
    Array("489~492", "523", "69", "610", "6", "5", "IM1"),
    Array("486~488", "523", "69", "605", "6", "5", "IM1"),
    Array("482~485", "520", "68", "600", "6", "5", "IM1"),
    Array("479~481", "520", "68", "595", "6", "5", "IM1"),
    Array("476~478", "517", "67", "590", "6", "5", "IM1"),
    Array("473~475", "517", "67", "585", "6", "5", "IM1"),
    Array("469~472", "517", "66", "580", "6", "5", "IM1"),
    Array("466~468", "517", "66", "575", "6", "5", "IM1"),
    Array("463~465", "513", "65", "570", "6", "5", "IM1"),
    Array("460~462", "513", "65", "565", "6", "5", "IM1"),
    Array("456~459", "507~510", "64", "560", "6", "5", "IM1"),
    Array("453~455", "507~510", "64", "555", "6", "5", "IM1"),
    Array("450~452", "503", "63", "550", "6", "5", "IM1"),
    Array("447~449", "503", "63", "545", "6", "5", "IM1"),
    Array("443~446", "503", "62", "540", "6", "5", "IM1"),
    Array("440~442", "500", "61", "535", "6", "5", "IM1"),
    Array("437~439", "500", "61", "530", "6", "4", "IM1"),
    Array("433~436", "497", "60", "525", "6", "4", "IM1"),
    Array("430~432", "497", "59", "520", "6", "4", "IM1"),
    Array("427~429", "497", "59", "515", "6", "4", "IM1"),
    Array("423~426", "493", "58", "510", "6", "4", "IM1"),
    Array("420~422", "487~490", "57", "505", "6", "4", "IM1"),
    Array("416~419", "483", "56", "500", "6", "4", "IM1"),
    Array("412~415", "480", "55", "495", "6", "4", "IM1"),
    Array("409~411", "480", "55", "490", "5", "4", "IM1"),
    Array("405~408", "480", "54", "485", "5", "4", "IM1"),
    Array("401~404", "470~473", "52", "480", "5", "4", "IM1"),
    Array("398~400", "470~473", "52", "475", "5", "4", "IM1"),
    Array("394~397", "463~467", "50~51", "470", "5", "4", "IL"),
    Array("390~393", "463", "49", "465", "5", "4", "IL"),
    Array("387~389", "463", "49", "460", "5", "4", "IL"),
    Array("383~386", "460", "48", "455", "5", "4", "IL"),
    Array("380~382", "457", "47", "450", "5", "4", "IL"),
    Array("376~379", "457", "47", "445", "5", "4", "IL"),
    Array("372~375", "450~453", "46", "440", "5", "4", "IL"),
    Array("368~371", "450~453", "45", "435", "5", "4", "IL"),
    Array("364~367", "447", "44", "430", "5", "4", "IL"),
    Array("360~363", "447", "44", "425", "5", "4", "IL"),
    Array("356~359", "443", "43", "420", "5", "4", "IL"),
    Array("351~355", "437~440", "42", "415", "5", "4", "IL"),
    Array("345~350", "437~440", "41", "410", "5", "4", "IL"),
    Array("340~344", "437~440", "41", "405", "5", "4", "IL"),
    Array("334~339", "433", "40", "400", "5", "4", "IL"),
    Array("329~333", "430", "39", "395", "5", "4", "IL"),
    Array("323~328", "423~427", "38", "390", "5", "4", "IL"),
    Array("318~322", "420", "36~37", "385", "5", "4", "IL"),
    Array("314~317", "417", "35", "380", "5", "4", "IL"),
    Array("310~313", "410~413", "34", "375", "5", "4", "IL"),
    Array("306~309", "400~407", "32~33", "370", "5", "4", "IL"),
    Array("303~305", "397~403", "30~32", "365", "5", "4", "IL"),
    Array("299~302", "377~397", "25~30", "360", "5", "4", "IL"),
    Array("296~298", "357~373", "22~24", "355", "5", "4", "IL"),
    Array("293~295", "353", "21", "350", "5", "4", "IL"),
    Array("290~292", "347~350", "19~20", "345", "1~4", "1~3", "IL"),
    Array("288~289", "347~350", "19", "340", "1~4", "1~3", "IL"),
    Array("285~287", "340~343", "18", "335", "1~4", "1~3", "IL"),
    Array("283~284", "340~343", "18", "330", "1~4", "1~3", "IL"),
    Array("282", "333~337", "17", "325", "1~4", "1~3", "IL"),
    Array("279~281", "333~337", "17", "320", "1~4", "1~3", "IL"),
    Array("~278", "~330", "~17", "315", "1~4", "1~3", "IL"),
  ];

  const getSearchIndex = (point: string, idx: number) => {
    if (!point) return false;
    let find_idx = 0;
    let len = pointTable.length;
    //alert(len);
    for (let i = 0; i < len; i++) {
      if (idx == 0 || idx == 1) {
        let point_value = pointTable[i][idx].split("~");

        if (point_value[1]) {
          if (point >= point_value[0] && point <= point_value[1]) {
            find_idx = i;
            break;
          }
        } else {
          if (point_value[0] == point) {
            find_idx = i;
            break;
          }
        }
      } else {
        if (pointTable[i][idx] == point) {
          find_idx = i;
          break;
        }
      }
    }

    return find_idx;
  };

  const translate = () => {
    let full_marks: any = document?.querySelector<HTMLInputElement>("#full_marks")?.value;
    let point_idx: any;

    if (point == "" || isNaN(Number(point))) {
      alert("내 점수는 숫자만 입력 가능합니다.");
      return;
    }

    switch (full_marks) {
      case "toeic":
        if (Number(point) % 5 != 0) {
          alert("5배수 점수로 입력하세요");
          return;
        }
        if (Number(point) < 315) {
          alert("315점 이상 입력하세요");
          return;
        }
        if (Number(point) > 990) {
          alert("990점 이하로 입력하세요");
          return;
        }
        point_idx = 3;
        break;
      case "teps":
        if (Number(point) < 301) {
          alert("301점 이상 입력하세요");
          return;
        }
        if (Number(point) > 990) {
          alert("990점 이하로 입력하세요");
          return;
        }
        point_idx = 0;
        break;
      case "toeflIpt":
        if (Number(point) < 4) {
          alert("4점 이상 입력하세요");
          return;
        }
        if (Number(point) > 120) {
          alert("120점 이하로 입력하세요");
          return;
        }
        point_idx = 2;
        break;
      case "toeflPbt":
        if (Number(point) < 310) {
          alert("310점 이상 입력하세요");
          return;
        }
        if (Number(point) > 677) {
          alert("677점 이하로 입력하세요");
          return;
        }
        point_idx = 1;
        break;
    }

    let teps_value;
    let pbt_value;
    let idx = getSearchIndex(point, point_idx);

    console.log(idx);

    if (idx === false) {
      alert("어학점수 변환을 할 수 없습니다.");
      return;
    }

    if (point_idx == 0) {
      if (point > pointTable[idx][0]) {
        teps_value = pointTable[idx][0];
      } else {
        teps_value = point;
      }
    } else {
      teps_value = pointTable[idx][0];
    }

    if (point_idx == 1) {
      pbt_value = point;
    } else {
      pbt_value = pointTable[idx][1];
    }

    setToeic(pointTable[idx][3]);
    setTeps(teps_value);
    setToeflIbt(pointTable[idx][2]);
    setToeflPbt(pbt_value);
    setToeicSpeaking(pointTable[idx][5]);
    setToeicWriting(pointTable[idx][4]);
    setOpic(pointTable[idx][6]);
  };

  return (
    <div className={`${styles.gradeChange} ${styles.linguisticsChange}`}>
      <div className={`${styles.grayLinear}`}>
        <Image src={"https://job.hackers.com/A_offline/tool/images/title_credit_01.gif"} alt={"현재 학점"} width="47" height="16" />
        <div className={`${styles.gradeInputArea}`}>
          <div className={`${styles.flexRow} ${styles.sb}`}>
            <span>점수입력</span>
            <select id="full_marks">
              <option value="toeic">TOEIC</option>
              <option value="teps">TEPS</option>
              <option value="toeflIpt">TOEFL(iBT)</option>
              <option value="toeflPbt">TOEFL(PBT)</option>
            </select>
            <input id="point" name="point" type="text" className="input" maxLength={4} onChange={(e) => setPoint(e.target.value)} value={point} />
            <button type="button" onClick={translate}>
              <Image src={"https://job.hackers.com/A_offline/tool/images/btn_converse.gif"} alt={"변환하기"} width="62" height="22" />
            </button>
          </div>
        </div>
        <Image src={"https://job.hackers.com/A_offline/tool/images/title_language2.gif"} alt={"변환 점수"} width="47" height="16" />
        <table>
          <tbody>
            <tr>
              <td align="center">
                <span>TOEIC 점수</span>
              </td>
              <td align="center">{toeic}점</td>
            </tr>
            <tr>
              <td align="center">
                <span>TEPS 점수</span>
              </td>
              <td align="center">{teps}점</td>
            </tr>
            <tr>
              <td width="212" align="center">
                <span>TOEFL(PBT) 점수</span>
              </td>
              <td width="114" align="center">
                {toeflPbt}점
              </td>
            </tr>
            <tr>
              <td align="center">
                <span>TOEFL(iBT) 점수</span>
              </td>
              <td align="center">{toeflIbt}점</td>
            </tr>
            <tr>
              <td align="center">
                <span>TOEIC Speaking</span>
              </td>
              <td align="center">{toeicSpeaking}Lv</td>
            </tr>
            <tr>
              <td align="center">
                <span>TOEIC Writing</span>
              </td>
              <td align="center">{toeicWriting}Lv</td>
            </tr>
            <tr>
              <td align="center">
                <span>오픽</span>
              </td>
              <td align="center">{opic}Lv</td>
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

export default LinguisticsChange;
