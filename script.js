const monster = document.querySelector(".monster");
const buttons = document.querySelectorAll(".buttons button");

let currentMood = "happy";

// 初始化默认表情
setMood(currentMood);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const mood = btn.getAttribute("data-mood");
    setMood(mood);
  });
});

function setMood(mood) {
  // 移除旧的状态 class
  monster.classList.remove(
    "monster-happy",
    "monster-angry",
    "monster-sleepy",
    "monster-bored",
  );

  // 添加新的
  monster.classList.add(`monster-${mood}`);

  // 小抖动动画效果
  monster.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-6px)" },
      { transform: "translateY(0)" },
    ],
    {
      duration: 200,
      easing: "ease-out",
    },
  );

  currentMood = mood;
}
