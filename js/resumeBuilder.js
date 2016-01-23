/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var formattedName = HTMLheaderName.replace("%data%", "Kamala Supanyapinit");
//$("#header").append(formattedName);

//var formattedRole = HTMLheaderRole.replace("%data%", "UX/UI Designer");
//$("#header").append(formattedRole);

/*header*/
var bio = {
	"name" : "Kamala Supanyapinit",
	"role" : "UX/UI Designer",
	"contacts" : {
		"mobile" : "07-511-402437",
		"email" : "kamala_l@hotmail.com",
		"github" : "woshilink",
		"twitter" : "@Link_kamala",
		"Location" : "London"
	},
	"WelcomeMessage": "I passionate about design and coding.",
	"Skills": [
	   "HTML","CSS","Javascript","jQuary","Photoshop","Illustrator"],
	"bioPic" : "images/mypic.jpg"

};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(HTMLemail);

var HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(HTMLgithub);

var HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(HTMLtwitter);

var HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.Location);
$("#topContacts").append(HTMLlocation);

var HTMLbioPic = HTMLbioPic.replace("%data%", "images/mypic.jpg");
$("#header").append(HTMLbioPic);

var HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
$("#header").append(HTMLwelcomeMsg);

$("#header").append(HTMLskillsStart);

var HTMLskills = HTMLskills.replace("%data%", bio.Skills);
$("#header").append(HTMLskills);

/*work experience*/

var workexp = {

	"Synnapps" : {
		"employer" : "Synnapps.,co.ltd",
		"title" : "Designer",
		"dates" : "December 2015 - January 2016",
		"location" : "London, UK",
		"description" : "I was part of the design team and responsible for designing website’s user journey, wireframe, mock up and responsive design. I worked alongside Creative director, developers."
		
	},
	"Mintel" : {
		"employer" : "Mintel.,co.ltd",
		"title" : "Senior Research Analyst",
		"dates" : "August 2014 - October 2015",
		"location" : "London, UK",
		"description" : "Research on specific FMCG markets across Thailand included Australia, US and UK, qualitative and quantitative research, analyse data, provide insight and opinion into the market."
		
	}
	};


$("#workExperience").append(HTMLworkStart);

var HTMLworkEmployer = HTMLworkEmployer.replace("%data%", workexp.Synnapps.employer);
$(".work-entry:last").prepend(HTMLworkEmployer);

var HTMLworkTitle = HTMLworkTitle.replace("%data%", workexp.Synnapps.title);
$(".work-entry:last").append(HTMLworkTitle);

var HTMLworkDates = HTMLworkDates.replace("%data%", workexp.Synnapps.dates);
$(".work-entry:last").append(HTMLworkDates);

var HTMLworkLocation = HTMLworkLocation.replace("%data%", workexp.Synnapps.location);
$(".work-entry:last").append(HTMLworkLocation);

var HTMLworkDescription = HTMLworkDescription.replace("%data%", workexp.Synnapps.description);
$(".work-entry:last").append(HTMLworkDescription);


var HTMLworkEmployer = HTMLworkEmployer.replace("%data%", workexp.Mintel.employer);
$(".work-entry:last").append(HTMLworkEmployer);

var HTMLworkTitle = HTMLworkTitle.replace("%data%", workexp.Mintel.title);
$(".work-entry:last").append(HTMLworkTitle);

var HTMLworkDates = HTMLworkDates.replace("%data%", workexp.Mintel.dates);
$(".work-entry:last").append(HTMLworkDates);

var HTMLworkLocation = HTMLworkLocation.replace("%data%", workexp.Mintel.location);
$(".work-entry:last").append(HTMLworkLocation);

var HTMLworkDescription = HTMLworkDescription.replace("%data%", workexp.Mintel.description);
$(".work-entry:last").append(HTMLworkDescription);

