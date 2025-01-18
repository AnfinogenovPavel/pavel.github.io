var translations = {
    "name": "Имя",
    "role": "Роль",
    "mobile": "Мобильный",
    "email": "Электронная почта",
    "github": "Github",
    "work": "Работа",
    "experience": "Опыт",
    "employer": "Работодатель",
    "title": "Должность",
    "dates": "Даты",
    "description": "Описание"
};


function translate(key) {
    return translations[key];
}

function replaceText(text) {
    for (var key in translations) {
        text = text.replace(new RegExp(key, "g"), translate(key));
    }
    return text;
}

// Пример использования
var bio = {
    name: "Иван Иванов",
    role: "Разработчик",
    mobile: "1234567890",
    email: "ivan@example.com",
    github: "ivanivanov"
};

var work = {
    jobs: [
        {
            employer: "Компания 1",
            title: "Менеджер",
            dates: "2020-2022",
            description: "Описание работы 1"
        },
        {
            employer: "Компания 2",
            title: "Разработчик",
            dates: "2018-2020",
            description: "Описание работы 2"
        }
    ]
};

// Замена текста на странице
$("#bioName").text(replaceText(bio.name));
$("#bioRole").text(replaceText(bio.role));
$("#bioMobile").text(replaceText(bio.mobile));
$("#bioEmail").text(replaceText(bio.email));
$("#bioGithub").text(replaceText(bio.github));

// Замена текста в разделе работы
for (var i = 0; i < work.jobs.length; i++) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

    $("#workExperience").append(replaceText(formattedEmployer));
    $("#workExperience").append(replaceText(formattedTitle));
    $("#workExperience").append(replaceText(formattedDates));
    $("#workExperience").append(replaceText(formattedDescription));
}
