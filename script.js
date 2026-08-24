const startDate = new Date(2024, 7, 24);
const today = new Date();

const counterEl = document.getElementById("counter");
const archiveListEl = document.getElementById("archive-list");
const modalEl = document.getElementById("modal");
const modalCloseEl = document.getElementById("modal-close");
const modalBodyEl = document.getElementById("modal-body");
const scrollDownEl = document.getElementById("scroll-down");
const archiveEl = document.getElementById("archive");
const lightboxEl = document.getElementById("lightbox");
const lightboxImgEl = document.getElementById("lightbox-img");

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
        thumbnail: "photos/year1/IMG_5935.jpg",
        timeline: [
            {date: "2025-08-24", title: "1年記念日", description: "思い出：ジブリ展,ピクミンテラス,吉和花火大会,東京旅行,宇品花火大会"}
        ],
        photos: [
        "photos/year1/8BF7B3E5-C186-4589-A6D6-4A72B1FB087B.jpeg",
        "photos/year1/EB57D2BD-40FC-44A0-8AB6-2D53AFD8B4EA.jpeg",
        "photos/year1/IMG_2942.jpeg",
        "photos/year1/IMG_3378.jpeg",
        "photos/year1/IMG_3402.jpeg",
        "photos/year1/IMG_3842.jpeg",
        "photos/year1/IMG_4037.jpeg",
        "photos/year1/IMG_4293.jpeg",
        "photos/year1/IMG_4360.jpeg",
        "photos/year1/IMG_4391.jpeg",
        "photos/year1/IMG_4627.jpeg",
        "photos/year1/IMG_4778.jpeg",
        "photos/year1/IMG_4784.jpeg",
        "photos/year1/IMG_4789.jpeg",
        "photos/year1/IMG_4790.jpeg",
        "photos/year1/IMG_4794.jpeg",
        "photos/year1/IMG_4795.jpeg",
        "photos/year1/IMG_4801.jpeg",
        "photos/year1/IMG_4803.jpeg",
        "photos/year1/IMG_4811.jpeg",
        "photos/year1/IMG_4820.jpeg",
        "photos/year1/IMG_4823.jpeg",
        "photos/year1/IMG_4848.jpeg",
        "photos/year1/IMG_4849.jpeg",
        "photos/year1/IMG_4850.jpeg",
        "photos/year1/IMG_4853.jpeg",
        "photos/year1/IMG_4854.jpeg",
        "photos/year1/IMG_4971_3.jpeg",
        "photos/year1/IMG_4974.jpeg",
        "photos/year1/IMG_4977.jpeg",
        "photos/year1/IMG_5067_3.jpeg",
        "photos/year1/IMG_5304.jpeg",
        "photos/year1/IMG_5471.jpeg",
        "photos/year1/IMG_5475.jpeg",
        "photos/year1/IMG_5845.jpeg",
        "photos/year1/IMG_5887_2.jpeg",
        "photos/year1/IMG_5903.jpeg",
        "photos/year1/IMG_5935.jpg",
        "photos/year1/dji_mimo_20250815_175010_20250815175009_1755259473834_photo.jpeg",
        "photos/year1/dji_mimo_20250816_102222_20250816102222_1755308765110_photo.jpeg",
        "photos/year1/dji_mimo_20250817_151350_20250817151350_1755414736699_photo.jpeg",
        "photos/year1/dji_mimo_20250817_190424_20250817190424_1755435751580_photo.jpeg"
        ],
        letter: ""
    },
    {
        year: 2,
        date: "2026-08-24",
        thumbnail: "photos/year2/IMG_8213.jpg",
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
            <img class="modal-photo" src="${src}" alt="${item.year}年目の写真" loading="lazy">
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

        const photoEls = modalBodyEl.querySelectorAll(".modal-photo");
        photoEls.forEach((photoEl) => {
            photoEl.addEventListener("click", () => {
                lightboxImgEl.src = photoEl.src;
                lightboxEl.classList.remove("hidden");
            });
        });

        modalEl.classList.remove("hidden");
    })

    archiveListEl.appendChild(itemEl)
});

modalCloseEl.addEventListener("click", () => {
    modalEl.classList.add("hidden");
});

lightboxEl.addEventListener("click", () => {
    lightboxEl.classList.add("hidden");
});