const assignments = [
{subject:"국어", date:"03-26 목요일 3교시", content:"현대소설 감상 및 분석 - 독서일지(2차시/10차시",
  subject:"영어", date:"03-27 금요일 4교시", content:"<지속가능발전목표 달성 실천 제안서 작성> 쓰기 수행평가 개요 작성"}
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
const mealText = "케이준치킨샐러드, 투움바파스타(베이컨), 고르곤졸라피자, 미니밥(자율), 피크닉청포도맛, 오이피클, 배추김치";

if(document.getElementById("meal")){
document.getElementById("meal").innerText = mealText;
}
if(document.getElementById("lunch")){
document.getElementById("lunch").innerText = mealText;
}
