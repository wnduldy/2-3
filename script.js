const assignments = [
{subject:"국어", date:"03-26 3교시", content:"현대소설 감상 및 분석 - 독서일지(2차시/10차시"}
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
const mealText = "차수수밥/짬뽕국/가지양파무침/숫불맛닭갈비볶음/누룽지꿔바로우, 소스/배추김치/패션후르츠주스";

if(document.getElementById("meal")){
document.getElementById("meal").innerText = mealText;
}
if(document.getElementById("lunch")){
document.getElementById("lunch").innerText = mealText;
}
