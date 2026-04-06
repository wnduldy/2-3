// 수행평가
const assignments = [
{subject:"국어", date:"04-09 목요일 3교시", content:"현대소설 감상 및 분석 - 독서일지(4차시/10차시)"},
{subject:"영어", date:"04-10 금요일 3교시", content:"<지속가능발전목표 달성 실천 제안서 작성> 쓰기 수행평가 최종안 작성"}
];

const list = document.getElementById("assignmentList");

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
"3/26 학교교육과정 설명회",
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
const date = today.toISOString().slice(0,10).replace(/-/g,"");

fetch(`https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${KEY}&Type=json&ATPT_OFCDC_SC_CODE=${ATPT}&SD_SCHUL_CODE=${SCHOOL}&MLSV_YMD=${date}`)
.then(res=>res.json())
.then(data=>{
  if(!data.mealServiceDietInfo) return;

  const meal = data.mealServiceDietInfo[1].row[0].DDISH_NM.replace(/<br\/>/g,"\n");

  const lunch = document.getElementById("lunch");
  if(lunch) lunch.innerText = meal;
})
.catch(()=>{});

// 🔥 갤러리 더보기
function toggleGallery(galleryId, btnId){
  const gallery = document.getElementById(galleryId);
  const btn = document.getElementById(btnId);

  gallery.classList.toggle("open");

  btn.innerText = gallery.classList.contains("open") ? "접기" : "더보기";
}

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

// D-Day
const examDate = new Date("2026-04-27");
const diff = Math.ceil((examDate - new Date())/(1000*60*60*24));

const dday = document.getElementById("examDday");
if(dday){
  dday.innerText = diff >= 0 ? `1회고사 D-${diff}` : "시험 종료";
}
