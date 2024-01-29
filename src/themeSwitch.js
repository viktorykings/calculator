const operationsBtns = document.querySelectorAll(".theme");

const themeSwitchFunc = (e, current) => {
  if (e.target.tagName.toLowerCase() === "button") {
    operationsBtns.forEach((el) => {
      el.classList.remove(current);
      el.classList.add(e.target.classList[1]);
    });
  }
  return e.target.classList[1];
};

export default themeSwitchFunc;
