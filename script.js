const startDate = new Date(2024, 7, 24);
const today = new Date();

const counterEl = document.getElementById("counter");
const archiveListEl = document.getElementById("archive-list");
const modalEl = document.getElementById("modal");
const modalCloseEl = document.getElementById("modal-close");
const modalBodyEl = document.getElementById("modal-body");
const scrollDownEl = document.getElementById("scroll-down");
const archiveEl = document.getElementById("archive");

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
            {date: "2025-08-24", title: "1年記念日", description: "思い出：ジブリ展,ピクミンテラス,吉和花火大会,東京旅行"}
        ],
        photos: ["photos/year1-1.jpg", "photos/year1-2.jpg"],
        letter: ""
    },
    {
        year: 2,
        date: "2026-08-24",
        thumbnail: "photos/IMG_8213.jpg",
        timeline: [
            {date: "2026-08-24", title: "2年記念日", description: ""}
        ],
        photos: [],
        letter: ""
    }
];

scrollDownEl.addEventListener("click", () => {
    archiveEl.scrollIntoView({behavior: "smooth"});
});

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
    itemEl.addEventListener("click", () => {
        const timelineHTML = item.timeline.map((entry) => `
            <div class="timeline-entry">
                <p class="timeline-date">${entry.date}</p>
                <p class="timeline-title">${entry.title}</p>
                <p class="timeline-description">${entry.description}</p>
            </div>
        `).join("");

        const photosHTML = item.photos.map((src) => `
            <img src="${src}" alt="${item.year}年目の写真">
        `).join("");

        modalBodyEl.innerHTML = `
            <h3>${item.year}年目</h3>
            <h4>タイムライン</h4>
            ${timelineHTML}
            <h4>写真</h4>
            ${photosHTML}
            <h4>手紙</h4>
            <p class="modal-letter">${item.letter}</p>
        `;

        modalEl.classList.remove("hidden");
    })

    archiveListEl.appendChild(itemEl)
});


modalCloseEl.addEventListener("click", () => {
    modalEl.classList.add("hidden");
})
