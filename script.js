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

const anniversaries = [
    {
        year: 1,
        date: "2025-08-24",
        thumbnail: "photos/IMG_5935.jpg",
        timeline: [
            {date: "2024-08-24", title: "付き合い始めた日", description: ""}
        ],
        photos: ["photos/year1-1.jpg", "photos/year1-2.jpg"],
        letter: ""
    }
];

const archiveListEl = document.getElementById("archive-list");

anniversaries.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = "archive-item";

    itemEl.innerHTML = `
        <div class="archive-photo">
            <img src="${item.thumbnail}" alt="${item.year}年目の写真">
            <div class="archive-badge">${item.year}</div>
        </div>
        <div class="archive-year-label">${item.year}年目</div>
        <div class="archive-date-label">${item.date}</div>
    `;

    archiveListEl.appendChild(itemEl)
});