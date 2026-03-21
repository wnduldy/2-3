const assignments = [
{subject:"물리", date:"2026-04-10", content:"충격량 실험 보고서"},
{subject:"영어", date:"2026-04-03", content:"발표 수행평가"}
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
const mealText = "김치볶음밥 / 계란국 / 치킨";

if(document.getElementById("meal")){
document.getElementById("meal").innerText = mealText;
}
if(document.getElementById("lunch")){
document.getElementById("lunch").innerText = mealText;
}
