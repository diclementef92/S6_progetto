window.onload = () => {
  const dark_theme_btn = document.querySelector(".dark-theme");
  const light_theme_btn = document.querySelector(".light-theme");
  light_theme_btn.style.display = "none";

  dark_theme_btn.onclick = function () {
    console.log("black theme click");
    const body = document.querySelector("body");
    body.style.backgroundColor = "black";
    dark_theme_btn.style.display = "none";
    light_theme_btn.style.display = "inline";
  };
};
