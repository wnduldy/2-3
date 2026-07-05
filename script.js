// 수행평가
const assignments = [

];

const lists = [
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
  {"7/10 학생회장, 부회장 선거",
   "7/13 교육과정박람회",
   "7/15~16 자율적교육과정운영주간"
   "7/17 제헌절",
   "7/20 방학식",
   "8/11 개학식"}


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
  1: ["", "영어1 정영학", "", "", "", "영어1 김형신", ""], // 월
  2: ["", "", "문학 고진주", "진로 송한경", "", "대수 채병훈", "스포츠생활1 최익현"], // 화
  3: ["스포츠생활1 최익현", "문학 신민영", "", "대수 채병훈", "", "영어1 송한경", ""], // 수
  4: ["", "", "문학 신민영", "", "대수 채병훈", "문학 김단희", ""], // 목
  5: ["", "", "영어1 송한경", "대수 채병훈", "창체", "창체", ""] // 금
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
const examDate = new Date("2026-06-30");
const diff = Math.ceil((examDate - new Date())/(1000*60*60*24));

const dday = document.getElementById("examDday");
if(dday){
  dday.innerText = diff >= 0 ? `2회고사 D-${diff}` : "시험 종료";
}
