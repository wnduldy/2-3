// ================================
// 수행평가
// ================================

const assignments = [
  {
    subject: "영어",
    date: "9월 셋째 주(09/14~18)",
    content: "한국적 가치의 글로벌 재해석 논설문 작성 - 초안 작성"
  },
  {
    subject: "국어",
    date: "9월 셋째 주(09/14~18)",
    content: "유의 관계를 활용한 자기소개 - 자기소개 글쓰기 작성 완료(30분) 및 소감 공유(20분)"
  },
  {
    subject: "물리",
    date: "09/20 일요일 11시 59분",
    content: "스마트폰 활용 실험 설계 및 데이터 분석 수행평가"
  }
];

const assignmentLists = [
  document.getElementById("assignmentList"),
  document.getElementById("assignments")
];

assignmentLists.forEach(list => {
  if (list) {
    assignments.forEach(a => {
      const li = document.createElement("li");

      li.innerText =
        `${a.subject} - ${a.date} (${a.content})`;

      list.appendChild(li);
    });
  }
});


// ================================
// 학사일정
// ================================

const schedules = [
  "9/24~25 추석연휴",
  "10/5 개천절 대체공휴일",
  "10/13~16 2학기 1회고사",
  "10/20 전국연합학력평가",
  "10/29 수업 공개의 날",
  "11/19 대학수학능력시험/재량휴업일",
  "12/8~11 2학기 2회고사",
  "12/14~18 진로탐색주간",
  "12/22~24 자율적 교육과정 운영",
  "12/25 성탄절",
  "12/29 교육발표회",
  "12/31 방학식 및 종업식",
  "1/1 신정",
  "2/8~9 설연휴"
];

const calList = document.getElementById("calendarList");

if (calList) {
  schedules.forEach(s => {
    const li = document.createElement("li");
    li.innerText = s;
    calList.appendChild(li);
  });
}


// ================================
// 급식
// ================================

const KEY = "b008afcfbbd24a9fbe72158e33d09edd";
const ATPT = "I10";
const SCHOOL = "9300191";

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const date = `${year}${month}${day}`;

fetch(
  `https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=${KEY}&Type=json&ATPT_OFCDC_SC_CODE=${ATPT}&SD_SCHUL_CODE=${SCHOOL}&MLSV_YMD=${date}`
)
.then(res => res.json())
.then(data => {

  const lunch = document.getElementById("lunch");
  const mealEl = document.getElementById("meal");

  if (
    data.mealServiceDietInfo &&
    data.mealServiceDietInfo[1] &&
    data.mealServiceDietInfo[1].row &&
    data.mealServiceDietInfo[1].row.length > 0
  ) {

    const meal =
      data.mealServiceDietInfo[1].row[0].DDISH_NM
      .replace(/<br\s*\/?>/gi, "\n");

    if (lunch) {
      lunch.innerText = meal;
    }

    if (mealEl) {
      mealEl.innerText = meal;
    }

  } else {

    if (lunch) {
      lunch.innerText = "오늘은 급식이 없습니다.";
    }

    if (mealEl) {
      mealEl.innerText = "오늘은 급식이 없습니다.";
    }

  }

})
.catch(error => {

  console.log("급식 오류:", error);

  const lunch = document.getElementById("lunch");
  const mealEl = document.getElementById("meal");

  if (lunch) {
    lunch.innerText = "급식을 불러오지 못했습니다.";
  }

  if (mealEl) {
    mealEl.innerText = "급식을 불러오지 못했습니다.";
  }

});


// ================================
// 사진 슬라이드
// ================================

const slideIndex = {};

function slide(direction, galleryId) {

  const gallery = document.getElementById(galleryId);

  if (!gallery) return;

  const images = gallery.querySelectorAll("img");

  if (images.length === 0) return;

  if (slideIndex[galleryId] === undefined) {
    slideIndex[galleryId] = 0;
  }

  slideIndex[galleryId] += direction;

  if (slideIndex[galleryId] < 0) {
    slideIndex[galleryId] = images.length - 1;
  }

  if (slideIndex[galleryId] >= images.length) {
    slideIndex[galleryId] = 0;
  }

  images.forEach((img, i) => {

    if (i === slideIndex[galleryId]) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }

  });
}


// ================================
// 사진 초기 설정
// ================================

window.addEventListener("load", () => {

  document.querySelectorAll(".gallery").forEach(gallery => {

    const images = gallery.querySelectorAll("img");

    images.forEach((img, i) => {

      if (i === 0) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }

    });

  });

});


// ================================
// 사진 확대
// ================================

document.querySelectorAll(".gallery img").forEach(img => {

  img.addEventListener("click", () => {

    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popupImg");

    if (popup && popupImg) {

      popup.style.display = "flex";
      popupImg.src = img.src;

    }

  });

});


function closePopup() {

  const popup = document.getElementById("popup");

  if (popup) {
    popup.style.display = "none";
  }

}


// ================================
// 오늘의 시간표
// ================================

const timetable = {

  1: [
    "H",
    "D",
    "B 진로 한혜숙",
    "A",
    "F",
    "I",
    "I"
  ],

  2: [
    "A",
    "E",
    "B 스포츠 생활2 최익현",
    "D",
    "H",
    "C",
    "G"
  ],

  3: [
    "I",
    "I",
    "F",
    "E",
    "G",
    "F",
    ""
  ],

  4: [
    "D",
    "B 스포츠 생활2 최익현",
    "H",
    "E",
    "G",
    "C",
    "A"
  ],

  5: [
    "H",
    "G",
    "C",
    "F",
    "창체",
    "창체",
    ""
  ]

};

const todayList = document.getElementById("todayTimetable");

const todayNumber = new Date().getDay();

if (todayList) {

  if (timetable[todayNumber]) {

    timetable[todayNumber].forEach((subject, i) => {

      const li = document.createElement("li");

      li.innerText =
        `${i + 1}교시 : ${subject || "-"}`;

      todayList.appendChild(li);

    });

  } else {

    const li = document.createElement("li");

    li.innerText = "오늘은 수업이 없습니다.";

    todayList.appendChild(li);

  }

}


// ================================
// D-Day
// ================================

const examDate = new Date("2026-10-13");

const diff = Math.ceil(
  (examDate - new Date()) /
  (1000 * 60 * 60 * 24)
);

const dday = document.getElementById("examDday");

if (dday) {

  if (diff >= 0) {
    dday.innerText = `2학기 1회고사 D-${diff}`;
  } else {
    dday.innerText = "시험 종료";
  }

}
