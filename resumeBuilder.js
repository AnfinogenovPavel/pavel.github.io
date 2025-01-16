var bio = {
    "name": "Анфиногенов Павел Иванович",
    "role": "Разработчик - Программист ",
    "contacts": [{
        "mobile": "89000840599",
        "github": "AnfinogenovPavel",
        "location": "Россия г. Челябинск",
        "email": "miguemetri@gmail.com"
    }],
    "welcomeMessage": "",
    "skills": ["HTML5", "CSS3", "Media Query", "JavaScript", " P5", "Bootstrap", "jQuery", "CMS", "Ektron", "GitHub"],
    "biopic": "images/profile.jpg"
};

var education = {
    "schools": [{
            "name": "Baruch College, Zicklin School of Business",
            "location": "New York City",
            "degree": "BBA",
            "majors": ["Digital Marketing & Graphic Design"],
            "dates": "2013 - 2016",
            "url": "http://www.baruch.cuny.edu/"
        },
        {
            "name": "LaGuardia Community College",
            "location": "Long Island City",
            "degree": "AS",
            "majors": ["Business Administration"],
            "dates": "2010 - 2013",
            "url": "http://www.laguardia.edu/"
        }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017 - Present",
        "url": "https://www.udacity.com/course/nd001"
    }]
};

var work = {
    "jobs": [{
        "employer": "LaGuardia Community College  ",
        "title": "Web Designer",
        "location": "Long Island City",
        "dates": "2013 - Present",
        "description": "Designing and developing responsive web-pages using HTML5, CSS3, JavaScript, Bootstrap and Ektron widgets. The site averages about 1.5 Million users and 26 Million page views annually."
    }]
};

var projects = {
    "project": [{
            "title": "TechImpact Landing Page",
            "dates": "2017",
            "description": "Developed responsive microsite: TechImpact using HTML5, CSS3, JavaScript and Bootstrap.",
            "images": ["images/tech-1.jpg", "images/tech-2.jpg", "images/tech-3.jpg"]
        },
        {
            "title": "Summer in the City ",
            "dates": "2016",
            "description": "Produced high-quality Summer in the City landing page, which optimized user experience that garnered more than 7,000 page views and a bounce rate of 0.23% in the first month.",
            "images": ["images/sum-1.jpg", "images/sum-2.jpg", "images/sum-3.jpg"]
        }
    ]
};




bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic, formattedMessage);
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }

    for (var j = 0; j < bio.contacts.length; j++) {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[j].mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts[j].email);
        var formattedGithub = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", bio.contacts[j].github);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub);
    }
};


education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
    }
};

projects.display = function() {
    for (var i = 0; i < projects.project.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (var j = 0; j < projects.project[i].images.length; j++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[i].images[j]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};



bio.display();
education.display();
work.display();
projects.display();


function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

    return newName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);