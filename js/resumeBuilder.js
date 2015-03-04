/*
var awesomeThoughts = "I am Awesome";

var funThoughts = awesomeThoughts.replace("Awesome", "Fun");

$("#main").append(funThoughts);
var name = "Vikas Bhutani";
var role = "Front End Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["good","bad","right"];
$("header").append(skills.length);

var bio = {
    "name" : "Vikas Bhutani",
    "role" : role,
    "contact" : "0430176012",
    "bioPic" : "http://vikasbhutani.info/wp-content/uploads/vikas1.jpg"
};

$("#main").append(bio.name);

var work = {};
    work.position = "UI Developer";
    work.employer = "Ray White";
    work.yearsWorked = 1.5;
    work.city = "Melbourne";


var education = {};
    education.name = "Australian Catholic University";
    education.yearsAttended = 2;
    education.city = "Melbourne";

$("#workExperience").append(work.position);

$("#education").append(education["name"]);
*/

var bio = {
    "name" : "Vikas Bhutani",
    "role" : "UI Developer",
    "contact" : {
        "mobile" : "0430176012",
        "email" : "vikasbhutani2001@gmail.com",
        "github" : "vikasbhutani",
        "location" : "Melbourne"
    },

    "WelcomeMessage" : "Whatever!!!",
    "skills" : [
        "good", "bad", "awesome", "nice"
    ],
    "bioPic" : "http://vikasbhutani.info/wp-content/uploads/vikas1.jpg0"
}

var education = {
  "schools" : [
          {
                "schools" : "ACU",
                "degree" : "Associate degree in visual arts and design",
                "graduationYear" : 2011,
                "city" : "Melbourne",
                "majors" : ["webdesign", "visual arts"]
          },

        {
            "schools" : "International design school",
            "diploma" : "Diploma in printing and graphic art and design",
            "graduationYear" : 2008,
            "city" : "Melbourne",
            "majors" : ["webdesign", "multimedia"]
        }

    ]
}

var work = {
    "jobs" : [
        {
            "employer" : "Kloud Solutions",
            "title" : "Front End developer",
            "dates" : 2013,
            "city" : "Melbourne"
        },

        {
            "employer" : "Ray white",
            "title" : "Ui / UX developer",
            "dates" : 2014,
            "city" : "Melbourne"
        }

    ]
}

var projects = {
    "projects" : [
        {
            "title" : "sample",
            "dates" : 2013,
            "city" : "Melbourne"
        },

        {
            "title" : "sample",
            "dates" : 2013,
            "city" : "Melbourne"
        }

    ]
}