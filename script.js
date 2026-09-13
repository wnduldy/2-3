// 수행평가
const assignments = [

];

const lists = [
  {subject:"영어", date:"9월 셋째 주(09/14~18)", content:"한국적 가치의 글로벌 재해석 논설문 작성 - 초안 작성"},
  {subject:"국어", date:"9월 셋째 주(09/14~18)", content:"유의 관계를 활용한 자기소개 - 자기소개 글쓰기 작성 완료(30분) 및 소감 공유(20분)"},
  {subject:"물리", date:"09/20 일요일 11시 59분", content:"스마트폰 활용 실험 설계 및 데이터 분석 수행평가"}
  
  document.getElementById("assignmentList"),
  document.getElementById("assignments")
];

lists.forEach(list => {
  if(list){
    assignments.forEach(a=>{
      const li = document.createElement("li");
      li.innerText = `${a.subject} - ${a.date} (${a.content})`;
      list.appendChild(li);
    });
  }
});

// 학사일정
const schedules = [
  {"9/24~25 추석연휴",
   "10/5 개천절 대체공휴일",
   "10/13~16 2학기 1회고사"
   "10/29 수업 공개의 날",
   "11/19 대학수학능력시험/재량휴업일",
   "12/8~11 2학기 2회고사"}


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
const date = today.toISOString().slice(0,10).replace(/-/g,"");

fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${KEY}&Type=json&ATPT_OFCDC_SC_CODE=${ATPT}&SD_SCHUL_CODE=${SCHOOL}&MLSV_YMD=${date}`)
.then(res=>res.json())
.then(data=>{
  if(!data.mealServiceDietInfo) return;

  const meal = data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/<br\/>/g,"\n");

  const lunch = document.getElementById("lunch");
const mealEl = document.getElementById("meal");

if(lunch) lunch.innerText = meal;
if(mealEl) mealEl.innerText = meal;
})
.catch(()=>{
  const lunch = document.getElementById("lunch");
  const mealEl = document.getElementById("meal");

  if(lunch) lunch.innerText = "급식 없음";
  if(mealEl) mealEl.innerText = "급식 없음";
});



// 🔥 슬라이드
const slideIndex = {};

function slide(direction, galleryId){
  const gallery = document.getElementById(galleryId);
  const images = gallery.querySelectorAll("img");

  if(!slideIndex[galleryId]) slideIndex[galleryId] = 0;

  slideIndex[galleryId] += direction;

  if(slideIndex[galleryId] < 0) slideIndex[galleryId] = images.length - 1;
  if(slideIndex[galleryId] >= images.length) slideIndex[galleryId] = 0;

  images.forEach((img, i)=>{
    img.style.display = i === slideIndex[galleryId] ? "block" : "none";
  });
}

// 초기 설정
window.onload = ()=>{
  document.querySelectorAll(".gallery").forEach(g=>{
    const imgs = g.querySelectorAll("img");
    imgs.forEach((img,i)=>{
      img.style.display = i === 0 ? "block" : "none";
    });
  });
};

// 사진 확대
document.querySelectorAll(".gallery img").forEach(img=>{
  img.addEventListener("click", ()=>{
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImg").src = img.src;
  });
});

function closePopup(){
  document.getElementById("popup").style.display = "none";
}
const timetable = {
  1: ["H", "D", "B 진로 한혜숙", "A", "F", "I", "I"], // 월
  2: ["A", "E", "B 스포츠 생활2 최익현", "D", "H", "C", "G"], // 화
  3: ["I", "I", "F", "E", "G", "F", ""], // 수
  4: ["D", "B 스포츠 생활2 최익현", "H", "E", "G", "C", "A"], // 목
  5: ["H", "G", "C", "F", "창체", "창체", ""] // 금
};

const dayNames = ["일","월","화","수","목","금","토"];
const day = new Date().getDay();

const todayList = document.getElementById("todayTimetable");

if(todayList && timetable[day]){
  timetable[day].forEach((subject, i)=>{
    const li = document.createElement("li");
    li.innerText = `${i+1}교시 : ${subject || "-"}`;
    todayList.appendChild(li);
  });
}
// D-Day
const examDate = new Date("2026-10-13");
const diff = Math.ceil((examDate - new Date())/(1000*60*60*24));

const dday = document.getElementById("examDday");
if(dday){
  dday.innerText = diff >= 0 ? `2회고사 D-${diff}` : "시험 종료";
}
