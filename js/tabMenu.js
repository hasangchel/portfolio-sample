const tabButtons = document.querySelectorAll(".tab-button li");
// console.log(tabButtons);
const tabContents = document.querySelectorAll(".tab-contents > ul > li");
// console.log(tabContents);

tabButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (e) => {
    e.preventDefault(); // a 태그 기본동작 방지
    // console.log(`${index}탭버튼 클릭!`);

    tabButtons.forEach((item) => {
      item.classList.remove("active");
    });
    tabContents.forEach((item) => {
      item.classList.remove("active");
    });

    tabButton.classList.add("active");
    tabContents[index].classList.add("active");
  });
});
const gnbLinks = document.querySelectorAll(".gnb a");
gnbLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 이동 방지
    const targetId = link.getAttribute("href"); // href 가져오기
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" }); // 부드럽게 이동
    }
  });
});
