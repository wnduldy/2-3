// 수행평가
const assignments = [
{subject:"국어", date:"03-26 목요일 3교시", content:"현대소설 감상 및 분석 - 독서일지(2차시/10차시)"},
{subject:"영어", date:"04-03 금요일 3교시", content:"<지속가능발전목표 달성 실천 제안서 작성> 쓰기 수행평가 초안 작성"}
];

const list = document.getElementById("assignments") || document.getElementById("assignmentList");

if(list){
  assignments.forEach(a=>{
    const li = document.createElement("li");
    li.innerText = `${a.subject} - ${a.date} (${a.content})`;
    list.appendChild(li);
  });
}

// 학사일정
const schedules = [
"3/24 전국연합학력평가",
"3/25~31 학부모 상담주간",
"3/26 학교교육과정설명회",
"4/27~30 1학기 1회고사"
];

const calList = document.getElementById("calendarList");

if(calList){
  schedules.forEach(s=>{
    const li = document.createElement("li");
    li.innerText = s;
    calList.appendChild(li);
  });
}

// 급식
const KEY = "b008afcfbbd24a9fbe72158e33d09edd";
const ATPT = "I10";
const SCHOOL = "9300191";

const today = new Date();
const y = today.getFullYear();
const m = String(today.getMonth()+1).padStart(2,'0');
const d = String(today.getDate()).padStart(2,'0');
const date = y+m+d;

const url = `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${KEY}&Type=json&ATPT_OFCDC_SC_CODE=${ATPT}&SD_SCHUL_CODE=${SCHOOL}&MLSV_YMD=${date}`;

fetch(url)
.then(res=>res.json())
.then(data=>{
  if(!data.mealServiceDietInfo) return;

  const mealText = data.mealServiceDietInfo[1].row[0].DDISH_NM
    .replace(/<br\/>/g,"\n");

  if(document.getElementById("meal")){
    document.getElementById("meal").innerText = mealText;
  }
  if(document.getElementById("lunch")){
    document.getElementById("lunch").innerText = mealText;
  }
})
.catch(()=>{});

// D-Day
const examName = "1회고사";
const examDate = new Date("2026-04-27");

function getDDay(date){
  const today = new Date();
  return Math.ceil((date - today)/(1000*60*60*24));
}

const diff = getDDay(examDate);

if(document.getElementById("examDday")){
  document.getElementById("examDday").innerText =
    diff >= 0 ? `${examName} D-${diff}` : `${examName} 종료`;
}
