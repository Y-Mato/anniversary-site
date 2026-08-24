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
const lightboxPrevEl = document.getElementById("lightbox-prev");
const lightboxNextEl = document.getElementById("lightbox-next");

let currentPhotos = [];
let currentPhotoIndex = 0;

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
        photos: [
        "photos/year2/6F153438-AE1B-40FF-8532-EB9114FC31F8.jpeg",
        "photos/year2/BA195A75-8CAE-4744-AA35-7E6194EDF82E.jpeg",
        "photos/year2/DDBC34AB-4A0A-4747-A7FC-FEF6990EB7AE.jpeg",
        "photos/year2/IMG_0735.jpeg",
        "photos/year2/IMG_0765.jpeg",
        "photos/year2/IMG_0772.jpeg",
        "photos/year2/IMG_0779.jpeg",
        "photos/year2/IMG_0970.jpeg",
        "photos/year2/IMG_1242.jpeg",
        "photos/year2/IMG_1246.jpeg",
        "photos/year2/IMG_1271.jpeg",
        "photos/year2/IMG_1275.jpeg",
        "photos/year2/IMG_1283.jpeg",
        "photos/year2/IMG_1284.jpeg",
        "photos/year2/IMG_1285.jpeg",
        "photos/year2/IMG_1301.jpeg",
        "photos/year2/IMG_1309.jpeg",
        "photos/year2/IMG_1316.jpeg",
        "photos/year2/IMG_1373.jpeg",
        "photos/year2/IMG_1380.jpeg",
        "photos/year2/IMG_2311.jpeg",
        "photos/year2/IMG_4080.jpeg",
        "photos/year2/IMG_4083.jpeg",
        "photos/year2/IMG_4151.jpeg",
        "photos/year2/IMG_4166.jpeg",
        "photos/year2/IMG_6076.jpeg",
        "photos/year2/IMG_6124.jpeg",
        "photos/year2/IMG_6127.jpeg",
        "photos/year2/IMG_6153.jpeg",
        "photos/year2/IMG_6156.jpeg",
        "photos/year2/IMG_6221.jpeg",
        "photos/year2/IMG_6532.jpeg",
        "photos/year2/IMG_6558.jpeg",
        "photos/year2/IMG_6559.jpeg",
        "photos/year2/IMG_6566.jpeg",
        "photos/year2/IMG_6664.jpeg",
        "photos/year2/IMG_6757.jpeg",
        "photos/year2/IMG_6843.jpeg",
        "photos/year2/IMG_6885.jpeg",
        "photos/year2/IMG_6887.jpeg",
        "photos/year2/IMG_6890.jpeg",
        "photos/year2/IMG_6965.jpeg",
        "photos/year2/IMG_6968.jpeg",
        "photos/year2/IMG_6969.jpeg",
        "photos/year2/IMG_6987.jpeg",
        "photos/year2/IMG_6995.jpeg",
        "photos/year2/IMG_7108.jpeg",
        "photos/year2/IMG_7437.jpeg",
        "photos/year2/IMG_7442.jpeg",
        "photos/year2/IMG_7581.jpeg",
        "photos/year2/IMG_7739.jpeg",
        "photos/year2/IMG_7826.jpeg",
        "photos/year2/IMG_7870.jpeg",
        "photos/year2/IMG_8061.jpeg",
        "photos/year2/IMG_8063.jpeg",
        "photos/year2/IMG_8075.jpeg",
        "photos/year2/IMG_8077.jpeg",
        "photos/year2/IMG_8085.jpeg",
        "photos/year2/IMG_8177.jpeg",
        "photos/year2/IMG_8213.jpg",
        "photos/year2/P1010029.jpeg",
        "photos/year2/P1010041.jpeg",
        "photos/year2/dhalf_2025-09-15_173308.934.jpeg",
        "photos/year2/dhalf_2025-09-25_134548.223.jpeg",
        "photos/year2/dhalf_2025-11-24_165111.736.jpeg",
        "photos/year2/dhalf_2025-12-25_191423.064.jpeg",
        "photos/year2/dhalf_2026-02-12_21221705A7BC4AF632.jpeg",
        "photos/year2/dhalf_2026-08-22_185202D3DA7CEE240F.jpeg",
        "photos/year2/dji_mimo_20250923_165936_20250923165935_1758635700151_photo.jpeg",
        "photos/year2/dji_mimo_20250923_170342_20250923170342_1758635698404_photo.jpeg",
        "photos/year2/dji_mimo_20250924_153538_20250924153538_1758699001019_photo.jpeg",
        "photos/year2/dji_mimo_20250924_160814_20250924160814_1758698996148_photo.jpeg",
        "photos/year2/dji_mimo_20250924_161006_20250924161006_1758698990524_photo.jpeg",
        "photos/year2/dji_mimo_20250924_161012_20250924161013_1758698989920_photo.jpeg",
        "photos/year2/dji_mimo_20250924_161208_20250924161208_1758698987918_photo.jpeg",
        "photos/year2/dji_mimo_20260404_195006_20260404195007_1778040526613_photo.jpeg",
        "photos/year2/dji_mimo_20260404_195500_20260404195500_1778040503426_photo.jpeg",
        "photos/year2/dji_mimo_20260506_115526_20260506115526_1778040501418_photo.jpeg",
        "photos/year2/dji_mimo_20260506_115700_20260506115700_1778040499709_photo.jpeg"
        ],
        letter: "2年目です！長いようで短い2年だったなって思います。何度も喧嘩したけど、結局仲良くなれる関係をこれからも続けていきたいです！さくは行きたいところをたくさん言ってくれるから全部行こうね。今年は就活でさくも不安なことがあると思うけど、頑張るので応援してください。ここで、初めて言うことです。プロポーズするまであと１年もないよ。これからもよろしくね！"
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
        photoEls.forEach((photoEl, index) => {
            photoEl.addEventListener("click", () => {
                currentPhotos = item.photos;
                currentPhotoIndex = index;
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

lightboxPrevEl.addEventListener("click", (event) => {
    event.stopPropagation();
    currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotos.length) % currentPhotos.length;
    lightboxImgEl.src = currentPhotos[currentPhotoIndex];
});

lightboxNextEl.addEventListener("click", (event) => {
    event.stopPropagation();
    currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotos.length;
    lightboxImgEl.src = currentPhotos[currentPhotoIndex];
});
