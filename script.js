
const assignments = [
{subject:"국어", date:"03-26 목요일 3교시", content:"현대소설 감상 및 분석 - 독서일지(2차시/10차시)"}, {subject:"영어", date:"03-27 금요일 3교시", content:"<지속가능발전목표 달성 실천 제안서 작성> 쓰기 수행평가 개요 작성"}
];

// 날짜순 정렬
assignments.sort((a,b)=> new Date(a.date)-new Date(b.date));

// 수행평가 출력
const list = document.getElementById("assignments") || document.getElementById("assignmentList");

if(list){
assignments.forEach(a=>{
const li = document.createElement("li");
li.innerText = `${a.subject} - ${a.date} (${a.content})`;
list.appendChild(li);
});
}

// 급식 (임시 데이터 → 나중에 API 연결 가능)
const KEY = "b008afcfbbd24a9fbe72158e33d09edd	";
const ATPT = "I10";        // 세종교육청
const SCHOOL = "9300191";  // 보람고

const today = new Date();
const y = today.getFullYear();
const m = String(today.getMonth()+1).padStart(2,'0');
const d = String(today.getDate()).padStart(2,'0');
const date = y+m+d;

const url = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${KEY}&Type=json&ATPT_OFCDC_SC_CODE=${ATPT}&SD_SCHUL_CODE=${SCHOOL}&MLSV_YMD=${date}`;

fetch(url)
.then(res=>res.json())
.then(data=>{
  const meal = data.mealServiceDietInfo[1].row[0].DDISH_NM
    .replace(/<br\/>/g,"\n");

  document.getElementById("meal").innerText = meal;
})
.catch(()=>{
  document.getElementById("meal").innerText = "급식 없음";
});

if(document.getElementById("meal")){
document.getElementById("meal").innerText = mealText;
}
if(document.getElementById("lunch")){
document.getElementById("lunch").innerText = mealText;
}


// ===== 시험 D-Day =====
const examDate = new Date("2026-04-27");

function getDDay(date){
  const today = new Date();
  const target = new Date(date);
  const diff = Math.ceil((target - today)/(1000*60*60*24));
  return diff;
}

const examDiff = getDDay(examDate);

if(document.getElementById("examDday")){
  document.getElementById("examDday").innerText =
    examDiff >= 0 ? "D-" + examDiff : "시험";
}

