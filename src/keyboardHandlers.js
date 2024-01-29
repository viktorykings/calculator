import { OPERATIONS, numbers, operators } from "./constatns";

const isTargetKey = (e) => {
  return (
    numbers.includes(e.key) ||
    operators.includes(e.key) ||
    e.key === OPERATIONS.equal ||
    e.key === "Enter" ||
    e.key === 'Delete'
  );
};

export function activeBtn(e) {
  let value = e.key;
  if (e.key === "Enter") value = "=";
  if (e.key === "Delete") value = "ac";
  const btn = document.querySelector(`button[value="${value}"]`);
  if (isTargetKey(e)) {
    btn.classList.add("active");
  }
}
export function unactiveBtn(e) {
  if (!e.shiftKey && isTargetKey(e) || e.key === '+') {
    const btn = document.querySelector(".active");
    btn.classList.remove("active");
  }
}
