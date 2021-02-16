import React, { useContext } from "react";
import { AyahContext } from "../contexts/AyahContext";
import LibrarySurah from "./LibrarySurah";

const Surahs = () => {
	const listOfSurahs = [
		{ surah: "1", name: "الفاتحة", start: 1 },
		{ surah: "2", name: "البقرة", start: 8 },
		{ surah: "3", name: "آل عمران", start: 294 },
		{ surah: "4", name: "النساء", start: 494 },
		{ surah: "5", name: "المائدة", start: 670 },
		{ surah: "6", name: "الأنعام", start: 790 },
		{ surah: "7", name: "الأعراف", start: 955 },
		{ surah: "8", name: "الأنفال", start: 1161 },
		{ surah: "9", name: "التوبة", start: 1236 },
		{ surah: "10", name: "يونس", start: 1365 },
		{ surah: "11", name: "هود", start: 1474 },
		{ surah: "12", name: "يوسف", start: 1597 },
		{ surah: "13", name: "الرعد", start: 1708 },
		{ surah: "14", name: "ابراهيم", start: 1751 },
		{ surah: "15", name: "الحجر", start: 1803 },
		{ surah: "16", name: "النحل", start: 1902 },
		{ surah: "17", name: "الإسراء", start: 2030 },
		{ surah: "18", name: "الكهف", satart: 2141 },
		{ surah: "19", name: "مريم", start: 2251 },
		{ surah: "20", name: "طه", start: 2349 },
		{ surah: "21", name: "الأنبياء", start: 2484 },
		{ surah: "22", name: "الحج", start: 2596 },
		{ surah: "23", name: "المؤمنون", start: 2674 },
		{ surah: "24", name: "النور", start: 2792 },
		{ surah: "25", name: "الفرقان", start: 2856 },
		{ surah: "26", name: "الشعراء", start: 2933 },
		{ surah: "27", name: "النمل", start: 3160 },
		{ surah: "28", name: "القصص", start: 3253 },
		{ surah: "29", name: "العنكبوت", start: 3341 },
		{ surah: "30", name: "الروم", start: 3410 },
		{ surah: "31", name: "لقمان", start: 3470 },
		{ surah: "32", name: "السجدة", start: 3504 },
		{ surah: "33", name: "الأحزاب", start: 3534 },
		{ surah: "34", name: "سبإ", start: 3607 },
		{ surah: "35", name: "فاطر", start: 3661 },
		{ surah: "36", name: "يس", start: 3706 },
		{ surah: "37", name: "الصافات", start: 3789 },
		{ surah: "38", name: "ص", start: 3971 },
		{ surah: "39", name: "الزمر", start: 4059 },
		{ surah: "40", name: "غافر", start: 4134 },
		{ surah: "41", name: "فصلت", start: 4219 },
		{ surah: "42", name: "الشورى", start: 4273 },
		{ surah: "43", name: "الزخرف", start: 4326 },
		{ surah: "44", name: "الدخان", start: 4415 },
		{ surah: "45", name: "الجاثية", start: 4474 },
		{ surah: "46", name: "الأحقاف", start: 4511 },
		{ surah: "47", name: "محمد", start: 4546 },
		{ surah: "48", name: "الفتح", start: 4584 },
		{ surah: "49", name: "الحجرات", start: 4613 },
		{ surah: "50", name: "ق", start: 4631 },
		{ surah: "51", name: "الذاريات", start: 4676 },
		{ surah: "52", name: "الطور", start: 4736 },
		{ surah: "53", name: "النجم", start: 4785 },
		{ surah: "54", name: "القمر", start: 4847 },
		{ surah: "55", name: "الرحمن", start: 4902 },
		{ surah: "56", name: "الواقعة", start: 4980 },
		{ surah: "57", name: "الحديد", start: 5076 },
		{ surah: "58", name: "المجادلة", start: 5105 },
		{ surah: "59", name: "الحشر", start: 5127 },
		{ surah: "60", name: "الممتحنة", start: 5151 },
		{ surah: "61", name: "الصف", start: 5164 },
		{ surah: "62", name: "الجمعة", start: 5178 },
		{ surah: "63", name: "المنافقون", start: 5189 },
		{ surah: "64", name: "التغابن", start: 5200 },
		{ surah: "65", name: "الطلاق", start: 5218 },
		{ surah: "66", name: "التحريم", start: 5230 },
		{ surah: "67", name: "الملك", start: 5242 },
		{ surah: "68", name: "القلم", start: 5272 },
		{ surah: "69", name: "الحاقة", start: 5324 },
		{ surah: "70", name: "المعارج", start: 5376 },
		{ surah: "71", name: "نوح", start: 5420 },
		{ surah: "72", name: "الجن", start: 5448 },
		{ surah: "73", name: "المزمل", start: 5476 },
		{ surah: "74", name: "المدثر", start: 5496 },
		{ surah: "75", name: "القيامة", start: 5552 },
		{ surah: "76", name: "الانسان", start: 5592 },
		{ surah: "77", name: "المرسلات", start: 5623 },
		{ surah: "78", name: "النبإ", start: 5673 },
		{ surah: "79", name: "النازعات", start: 5713 },
		{ surah: "80", name: "عبس", start: 5759 },
		{ surah: "81", name: "التكوير", start: 5801 },
		{ surah: "82", name: "الإنفطار", start: 5830 },
		{ surah: "83", name: "المطففين", start: 5849 },
		{ surah: "84", name: "الإنشقاق", start: 5885 },
		{ surah: "85", name: "البروج", start: 5910 },
		{ surah: "86", name: "الطارق", start: 5932 },
		{ surah: "87", name: "الأعلى", start: 5949 },
		{ surah: "88", name: "الغاشية", start: 5968 },
		{ surah: "89", name: "الفجر", start: 5994 },
		{ surah: "90", name: "البلد", start: 6024 },
		{ surah: "91", name: "الشمس", start: 6044 },
		{ surah: "92", name: "الليل", start: 6059 },
		{ surah: "93", name: "الضحى", start: 6080 },
		{ surah: "94", name: "الشرح", start: 6091 },
		{ surah: "95", name: "التين", start: 6099 },
		{ surah: "96", name: "العلق", start: 6107 },
		{ surah: "97", name: "القدر", start: 6126 },
		{ surah: "98", name: "البينة", start: 6131 },
		{ surah: "99", name: "الزلزلة", start: 6139 },
		{ surah: "100", name: "العاديات", start: 6147 },
		{ surah: "101", name: "القارعة", start: 6158 },
		{ surah: "102", name: "التكاثر", start: 6169 },
		{ surah: "103", name: "العصر", start: 6177 },
		{ surah: "104", name: "الهمزة", start: 6180 },
		{ surah: "105", name: "الفيل", start: 6189 },
		{ surah: "106", name: "قريش", start: 6194 },
		{ surah: "107", name: "الماعون", start: 6198 },
		{ surah: "108", name: "الكوثر", start: 6205 },
		{ surah: "109", name: "الكافرون", start: 60208 },
		{ surah: "110", name: "النصر", start: 6213 },
		{ surah: "111", name: "المسد", start: 6217 },
		{ surah: "112", name: "الإخلاص", start: 6222 },
		{ surah: "113", name: "الفلق", start: 6226 },
		{ surah: "114", name: "الناس", start: 6231 },
	];

	const englishSurahs = [
		{
			name: "al-Fātihah",
			pageGreen: 1,
			start: 1,
		},
		{
			name: "al-Baqarah",
			pageGreen: 2,
		},
		{
			name: "Āl-ʿImrān",
			pageGreen: 50,
		},
		{
			name: "an-Nisāʾ",
			pageGreen: 77,
		},
		{
			name: "al-Māʾidah",
			pageGreen: 106,
		},
		{
			name: "al-Anʿām",
			pageGreen: 128,
		},
		{
			name: "al-Aʿrāf",
			pageGreen: 151,
		},
		{
			name: "al-Anfāl",
			pageGreen: 177,
		},
		{
			name: "at-Taubah",
			pageGreen: 187,
		},
		{
			name: "Yūnus",
			pageGreen: 208,
		},
		{
			name: "Hūd",
			pageGreen: 221,
		},
		{
			name: "Yūsuf",
			pageGreen: 235,
		},
		{
			name: "ar-Raʿd",
			pageGreen: 249,
		},
		{
			name: "Ibrāhīm",
			pageGreen: 255,
		},
		{
			name: "al-Ḥijr",
			pageGreen: 262,
		},
		{
			name: "an-Naḥl",
			pageGreen: 267,
		},
		{
			name: "al-Isrāʾ",
			pageGreen: 282,
		},
		{
			name: "al-Kahf",
			pageGreen: 293,
		},
		{
			name: "Maryam",
			pageGreen: 305,
		},
		{
			name: "Ṭā-Hā",
			pageGreen: 312,
		},
		{
			name: "al-Anbiyāʾ",
			pageGreen: 322,
		},
		{
			name: "al-Ḥajj",
			pageGreen: 332,
		},
		{
			name: "al-Muʾminūn",
			pageGreen: 342,
		},
		{
			name: "an-Nūr",
			pageGreen: 350,
		},
		{
			name: "al-Furqān",
			pageGreen: 359,
		},
		{
			name: "ash-Shuʿarā",
			pageGreen: 367,
		},
		{
			name: "an-Naml",
			pageGreen: 377,
		},
		{
			name: "al-Qaṣaṣ",
			pageGreen: 385,
		},
		{
			name: "al-ʿAnkabūt",
			pageGreen: 396,
		},
		{
			name: "ar-Rūm",
			pageGreen: 404,
		},
		{
			name: "Luqmān",
			pageGreen: 411,
		},
		{
			name: "as-Sajdah",
			pageGreen: 415,
		},
		{
			name: "al-Aḥzāb",
			pageGreen: 418,
		},
		{
			name: "Sabaʾ",
			pageGreen: 428,
		},
		{
			name: "Fāṭir",
			pageGreen: 434,
		},
		{
			name: "Yā-Sīn",
			pageGreen: 440,
		},
		{
			name: "as-Ṣāffāt",
			pageGreen: 446,
		},
		{
			name: "Ṣād",
			pageGreen: 453,
		},
		{
			name: "az-Zumar",
			pageGreen: 458,
		},
		{
			name: "Ghāfir",
			pageGreen: 467,
		},
		{
			name: "Fuṣṣilat",
			pageGreen: 477,
		},
		{
			name: "ash-Shūrā",
			pageGreen: 483,
		},
		{
			name: "az-Zukhruf",
			pageGreen: 489,
		},
		{
			name: "ad-Dukhān",
			pageGreen: 496,
		},
		{
			name: "al-Jāthiyah",
			pageGreen: 499,
		},
		{
			name: "al-Aḥqāf",
			pageGreen: 502,
		},
		{
			name: "Muḥammad",
			pageGreen: 507,
		},
		{
			name: "al-Fatḥ",
			pageGreen: 511,
		},
		{
			name: "al-Ḥujurāt",
			pageGreen: 515,
		},
		{
			name: "Qāf",
			pageGreen: 518,
		},
		{
			name: "adh-Dhāriyāt",
			pageGreen: 520,
		},
		{
			name: "at-Ṭūr",
			pageGreen: 523,
		},
		{
			name: "an-Najm",
			pageGreen: 526,
		},
		{
			name: "al-Qamar",
			pageGreen: 528,
		},
		{
			name: "ar-Raḥmān",
			pageGreen: 531,
		},
		{
			name: "al-Wāqiʿah",
			pageGreen: 534,
		},
		{
			name: "al-Ḥadīd",
			pageGreen: 537,
		},
		{
			name: "al-Mujādilah",
			pageGreen: 542,
		},
		{
			name: "al-Ḥashr",
			pageGreen: 545,
		},
		{
			name: "al-Mumtaḥanah",
			pageGreen: 549,
		},
		{
			name: "as-Ṣaff",
			pageGreen: 551,
		},
		{
			name: "al-Jumuʿah",
			pageGreen: 553,
		},
		{
			name: "al-Munāfiqūn",
			pageGreen: 554,
		},
		{
			name: "at-Taghābun",
			pageGreen: 556,
		},
		{
			name: "at-Ṭalāq",
			pageGreen: 558,
		},
		{
			name: "at-Taḥrīm",
			pageGreen: 560,
		},
		{
			name: "al-Mulk",
			pageGreen: 562,
		},
		{
			name: "al-Qalam",
			pageGreen: 564,
		},
		{
			name: "al-Ḥāqqah",
			pageGreen: 566,
		},
		{
			name: "al-Maʿārij",
			pageGreen: 568,
		},
		{
			name: "Nūḥ",
			pageGreen: 570,
		},
		{
			name: "al-Jinn",
			pageGreen: 572,
		},
		{
			name: "al-Muzzammil",
			pageGreen: 574,
		},
		{
			name: "al-Muddaththir",
			pageGreen: 575,
		},
		{
			name: "al-Qiyāmah",
			pageGreen: 577,
		},
		{
			name: "al-Insān",
			pageGreen: 578,
		},
		{
			name: "al-Mursalāt",
			pageGreen: 580,
		},
		{
			name: "an-Nabaʾ",
			pageGreen: 582,
		},
		{
			name: "an-Nāziʿāt",
			pageGreen: 583,
		},
		{
			name: "ʿAbasa",
			pageGreen: 585,
		},
		{
			name: "at-Takwīr",
			pageGreen: 586,
		},
		{
			name: "al-Infiṭār",
			pageGreen: 587,
		},
		{
			name: "al-Muṭaffifīn",
			pageGreen: 587,
		},
		{
			name: "al-Inshiqāq",
			pageGreen: 589,
		},
		{
			name: "al-Burūj",
			pageGreen: 590,
		},
		{
			name: "at-Ṭāriq",
			pageGreen: 591,
		},
		{
			name: "al-Aʿlā",
			pageGreen: 591,
		},
		{
			name: "al-Ghāshiyah",
			pageGreen: 592,
		},
		{
			name: "al-Fajr",
			pageGreen: 593,
		},
		{
			name: "al-Balad",
			pageGreen: 594,
		},
		{
			name: "ash-Shams",
			pageGreen: 595,
		},
		{
			name: "al-Layl",
			pageGreen: 595,
		},
		{
			name: "ad-Ḍuḥā",
			pageGreen: 596,
		},
		{
			name: "ash-Sharḥ",
			pageGreen: 596,
		},
		{
			name: "at-Tīn",
			pageGreen: 597,
		},
		{
			name: "al-ʿAlaq",
			pageGreen: 597,
		},
		{
			name: "al-Qadr",
			pageGreen: 598,
		},
		{
			name: "al-Bayyinah",
			pageGreen: 598,
		},
		{
			name: "az-Zalzalah",
			pageGreen: 599,
		},
		{
			name: "al-ʿĀdiyāt",
			pageGreen: 599,
		},
		{
			name: "al-Qāriʿah",
			pageGreen: 600,
		},
		{
			name: "at-Takāthur",
			pageGreen: 600,
		},
		{
			name: "al-ʿAsr",
			pageGreen: 601,
		},
		{
			name: "al-Humazah",
			pageGreen: 601,
		},
		{
			name: "al-Fīl",
			pageGreen: 601,
		},
		{
			name: "Quraysh",
			pageGreen: 602,
		},
		{
			name: "al-Māʿūn",
			pageGreen: 602,
		},
		{
			name: "al-Kawthar",
			pageGreen: 602,
		},
		{
			name: "al-Kāfirūn",
			pageGreen: 603,
		},
		{
			name: "an-Naṣr",
			pageGreen: 603,
		},
		{
			name: "al-Masad",
			pageGreen: 603,
		},
		{
			name: "al-Ikhlāṣ",
			pageGreen: 604,
		},
		{
			name: "al-Falaq",
			pageGreen: 604,
		},
		{
			name: "an-Nās",
			pageGreen: 604,
		},
	];
	const { changeAyah } = useContext(AyahContext);
	return (
		<div>
			<h1 className="title">Surahs</h1>
			{listOfSurahs.map((item, index) => (
				<LibrarySurah
					key={index}
					click={changeAyah}
					start={item.start}
					arabicName={item.name}
					number={item.surah}
					EnglishName={englishSurahs[index].name}
				/>
			))}
		</div>
	);
};

export default Surahs;
