const startDate = new Date(2024, 7, 24);
const today = new Date();

const counterEl = document.getElementById("counter");

let years = today.getFullYear() - startDate.getFullYear();
let months = today.getMonth() - startDate.getMonth();
let days = today.getDate() - startDate.getDate();

if (days < 0) {
    months--;
    const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthLastDay;
}

if (months < 0) {
    years--;
    months += 12;
}

counterEl.textContent = `付き合ってから${years}年${months}ヶ月${days}日`;