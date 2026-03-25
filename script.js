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
const mealText = "쇠고기무국, 묵은지김치찜, 생깻잎지, 닭꼬치(킹콩소스), 오이소박이(자율), 과일(오렌지), 차조밥";

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

