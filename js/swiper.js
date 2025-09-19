const swHero = new Swiper(".sw-hero", {
  // slidesPerView: 3,
  // spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let fadeInterval; // 전역 변수로 interval 저장

function startFade(tab) {
  clearInterval(fadeInterval);

  const cards = tab.querySelectorAll(".card figure");
  if (!cards.length) return;

  const imgCount = cards[0].querySelectorAll("img").length;
  let current = 0;

  // 초기 상태: 모든 카드 첫 이미지 활성화
  cards.forEach((card) => {
    card.querySelectorAll("img").forEach((img, idx) => {
      img.classList.toggle("active", idx === 0);
    });
  });

  fadeInterval = setInterval(() => {
    const next = (current + 1) % imgCount;

    cards.forEach((card) => {
      card.querySelectorAll("img").forEach((img, idx) => {
        img.classList.toggle("active", idx === next);
      });
    });

    current = next; // current 업데이트
  }, 5000); // 5초마다 바뀌도록 설정
}

// 초기 실행
const initialTab = document.querySelector(".tab-contents > ul > li.active");
startFade(initialTab);

// 탭 버튼 및 링크 처리
const tabButtons = document.querySelectorAll(".tab-button li");
const tabContents = document.querySelectorAll(".tab-contents > ul > li");

tabButtons.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // a 태그 이동 막음

    // 탭 전환
    tabButtons.forEach((item) => item.classList.remove("active"));
    tabContents.forEach((item) => item.classList.remove("active"));

    btn.classList.add("active");
    tabContents[idx].classList.add("active");

    startFade(tabContents[idx]); // 선택한 탭 fade 시작

    // 해당 섹션으로 부드럽게 스크롤
    const targetId = btn.querySelector("a").getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
