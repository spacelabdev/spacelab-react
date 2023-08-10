/**
 * Array of Dates and descriptions for Spacelab History timeline
 * @type {string[][]}
 */

import jan2021 from "../../assets/aboutAssets/jan2021.jpeg"
import aug2021 from "../../assets/aboutAssets/aug2021.png"
import may2023 from "../../assets/aboutAssets/may2023.png"
import image2 from "../../assets/homeAssets/image2.jpg"

export const newAboutHistoryArray = [
    [
        "Jan",
        "2021",
        jan2021,
		"group of people gathered around a laptop looking at something",
        "Data Scientist Matt Paterson meets Dr. Andrew " + 
        "Vanderburg and Dr. Jessie Christiansen of CalTech to " + 
        "publish a paper on machine learning and exoplanets. " +
        "They connect him with former classmates Ollie" +
        "Jackson and Jon Zivku to create SpaceLab: a web " +
        "application for space exploration."
    ],
    [
        "Jan",
        "2021",
        image2,
		"people in an office planning a project",
        "SpaceLab meets with aspiring UX Designers to create " +
        "a website for exoplanet discovery. Realizing the lack " +
        "of cross-functional collaboration experience for early " +
        "tech professionals, they decide to become a non-profit " + 
        "organization aiming to provide experiences for women, " +
        "people of color, and members of the LGBTQ+ " +
        "community."
    ],
    [
        "Aug",
        "2021",
        aug2021,
		"planet against a blue sky",
        "SpaceLab launches its website and receive help " +
        "from Meghan Slan (Director of DEIB) in becoming a non-" +
        "profit organization with the foundation of diversity and " +
        "inclusion. "+
        
        "Currently, a team of 25 cross-functional members are " + 
        "working on SpaceLab's first project: Exoplanetarium, " +
        "where users can explore exoplanets in the Milky Way."
    ],
    [
        "May",
        "2023",
        may2023,
		"planets around a star, from Spacelab's Exoplanetarium project",
        "Exoplanetarium is launched as SpaceLab's pilot project! " + 
        "OTHER INTERESTING FACTS HERE. " +
        "ALSO HERE."
    ],
];


export const aboutHistoryArray = [
	[
		"SPACELAB 2021.01.27",
		'Data Scientist Matt Paterson is introduced to Dr. Andrew Vanderburg by Cal Tech"s Dr. Jessie Christiansen ' +
			"in hopes that the former NASA Sagen Fellow can help with publishing a paper about machine learning and " +
			"exoplanets. The interaction with Dr. Vanderburg and Dr. Christiansen lead Matt to reconnect with former " +
			"classmates Ollie Jackson and Jon Zivku. The three are excited about space exploration and exoplanets and " +
			"want to build a web application that allows all three to contribute; thus, SpaceLab was born.",
	],
	[
		"SPACELAB 2021.01.05",
		"The founders of The SpaceLab meet aspiring UX designers who were fresh out of school and ready to take " +
			"the founders’ visions and designs towards a website for exoplanet discovery. The group recognizes that " +
			"experience with cross-functional collaboration towards the development of real-world applications is " +
			"something that early-career tech professionals often lack, specifically traditionally underrepresented " +
			"groups in the tech industry. Upon recognizing this, the team decides that finding exoplanets it’s not " +
			"just a one-time project. Instead, it will be the first of many projects built by the members and future " +
			"community of The SpaceLab. This led the team at The SpaceLab to become a non-profit organization to " +
			"help women, people of color, people from the LGBTQ+ community, and others currently underrepresented in " +
			"the tech industry to gain experience with cross-functional teams in outer-space-related sciences.",
	],
	[
		"SPACELAB 2021.08.16",
		"After building a team of front-end developers, SpaceLab launches its website, announcing its purpose and " +
			"mission to the world. While SpaceLab is working on becoming a nonprofit organization, the organization is " +
			"created upon a foundation of diversity and inclusion with the help of Meghan Slan, Director of DEIB. " +
			"SpaceLab is currently working with roughly 25 cross-functional members to build its first project, " +
			"Exoplanetarium, of which users will have the opportunity to explore exoplanets in our milky way system.",
	],
];

/**
 * Object containing details for the Board of Directors
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const boardOfDirectors = {
	title: "board of directors",
	members: [
		{
			image: "https://i.imgur.com/Fi9AEMY.jpg",
			fullName: "Matt Paterson",
			title: "Executive Director | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://HireMattPaterson.com",
			linkedIn: "https://www.linkedin.com/in/hiremattpaterson/",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130990/team_pics/Ollie_pic_yabvpi.png",
			fullName: "Ollie Jackson",
			title: "Officer, Board of Directors | Physicist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130971/team_pics/Megan_ncesok.png",
			fullName: "Meghan Slan",
			title: "Director of DEIB, Board Member at Large",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/rddAX7C.png",
			fullName: "Anna Bukareva",
			title: "Officer, Board of Directors",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/vSQFMQh.png",
			fullName: "Jennifer Harrold",
			title: "Secretary, Board of Directors",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",

		},
		{
			image: "https://imgur.com/6KnXf6X.png",
			fullName: "Bernadette Cruz",
			title: "Advisory Board Member",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/JtNw1qE.png",
			fullName: "Mike Matera",
			title: "Advisory Board Member",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for the UX Designers
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const uxDesigners = {
	title: "ux designers",
	members: [
		{
			image: "https://imgur.com/OnDOWG8.png",
			fullName: "Venus Lumayag",
			title: "UX Designer",
			bioQuote:
				"Venus is a designer based in Southern California with a background in graphic design and illustration. In her professional work, she enjoys using creativity to solve design problems and puzzles. In her spare time, she enjoys video games, baking, and visiting local independent coffee shops.",
			gitHub: "",
			portfolio: "https://www.venuslumayag.com/",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/oFhnNer.png",
			fullName: "Faezeh Faezipour",
			title: "UX Researcher",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://www.faezehf.com/",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/paoGCSJ.png",
			fullName: "Amarachi Nwachukwu",
			title: "UI/UX (Podcaster)",
			bioQuote:
				"I'm a Amarachi Nwachukw, a product designer who believes in solving problems through designs. I'm a critical thinker and possess a strong skill in UX design.",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/kjXCkWW.png",
			fullName: "Charmy Patel",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://charmypatel.github.io/index.html",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Nina Ulaganathan",
			title: "UI/UX Designer",
			bioQuote:
				"Hi everyone! My name is Nina Ulaganathan, and I am a second-year Cognitive Science major at UCSC. My focuses in my major include AI, and Human Computer Interaction. I am extremely passionate about UX Design, and I hope to be able to contribute those skills to Spacelab!",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/a8kkFwV.png",
			fullName: "Eliza Gonzales",
			title: "UX Designer",
			bioQuote:
				"Hey! I am a UX Designer that recently graduated from University of California, Santa Cruz. I absolutely love design, and have been doing this for quite some time. ",
			gitHub: "",
			portfolio: "elizagonzales.com",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/Ovfpeog.png",
			fullName: "Bhavani Sree Mahendrakar",
			title: "UI/UX Design Team Lead",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/Phaly_ieng0k.png",
			fullName: "Phaly Bell",
			title: "Lead Project Manager | UX Designer & Researcher",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/subin_p8gjt5.png",
			fullName: "Subin Shin",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131338/team_pics/uma_n6hcdv.jpg",
			fullName: "Uma Muthu",
			title: "Product Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/yumi_j5x47l.png",
			fullName: "Yumi Jeon",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131297/team_pics/Christy_kn3wxm.jpg",
			fullName: "Christy Min",
			title: "UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/HttHaC0.png",
			fullName: "Stephanie Yarborough",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Yabi",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/rarcG7w.png",
			fullName: "Danni Freedman",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/gN6hybH.png",
			fullName: "May Wu",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/JfMphhG.png",
			fullName: "Meenakshi Limbachiya",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/yqSt1NS.png",
			fullName: "Joanne Li",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Mio Larasati",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/AExJLUf.png",
			fullName: "Victoria Gonzalez",
			title: "UI/UX Designer",
			bioQuote:
				"I’m a Mexican UX/UI Designer based in LA, in beautiful and sunny Southern California." +
				"I was a former bartender, and I’ve always enjoyed giving people great experiences and helping them in whatever their needs are. If I’m able to contribute for someone to feel good, it makes me feel twice as good." +
				"That’s why I choose to be in the UX field, because is not only delivering to your clients, is to deliver to all the users a great experience which will result in me feeling extremely satisfied because I was able to help!",
			gitHub: "",
			portfolio: "https://victoriagonzalezux.squarespace.com/",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Sheetal Paranjpe",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},

		{
			image: "",
			fullName: "Richard Garagliano",
			title: "UI/UX Designer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for the Front End Developers
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const frontEnd = {
	title: "front end developers",
	members: [
		{
			image: "https://imgur.com/HVUZ6bf.png",
			fullName: "Laura Hiller",
			title: "Lead Front-End Developer",
			bioQuote:
				"Laura is a Software Engineer with a BS in Computer Science from the University of California, Santa Cruz, and over two years of development experience.",
			gitHub: "https://github.com/lauraehiller",
			portfolio: "https://lauraehiller.com/",
			linkedIn: "https://www.linkedin.com/in/laura-e-hiller/",
			status: "current",
		},
		{
			image: "",
			fullName: "Joey Kozak",
			title: "3D Developer/Full-stack Engineer",
			bioQuote:
				"Exoplanetarium Lead @ SpaceLab | Solutions Engineer @ Orchestra | Trinity University & General Assembly Alum | Always excited to expand and refine my skills while building something awesome!",
			gitHub: "https://github.com/jrkozak92",
			portfolio: "http://joeykozak.com/",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/vutLmqW.png",
			fullName: "Eric Matlock",
			title: "Frontend Developer",
			bioQuote:
				"I am a software developer. My mission is to create highly intuitive products with a keen eye for detail, functionality, and a cohesive user experience. Aside from my professional work, I am an avid science and sci-fi nerd, and I play a talkbox. Let's chat science and music!",
			gitHub: "",
			portfolio: "https://terminal.turing.edu/alumni/1329-eric-matlock",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/bOmCTkN.png",
			fullName: "Meghan Bucher",
			title: "Software Engineer",
			bioQuote:
				"I'm a full stack developer based in the San Francisco Bay Area. My passion is delivering engaging, memorable, and meaningful user experiences. Thriving in the front end, I enjoy working at the intersection of art and functionality.",
			gitHub: "https://github.com/megbuch",
			portfolio: "https://meghanbucher.work",
			linkedIn: "https://linkedin.com/in/meghanbucher",
			status: "current",
		},
		{
			image: "https://i.imgur.com/afdlLMu.png",
			fullName: "Asti Shalymova",
			title: "Software Engineer",
			bioQuote:
				"Asti is a software engineer based in LA. Frontend developer @ Spacelab | Software Developer @ Femispace | Instructor associate @ General Assembly.",
			gitHub: "https://github.com/AnastasiiaAsti",
			portfolio: "https://asticodes.dev",
			linkedIn: "https://www.linkedin.com/in/anastasiiaasti/",
			status: "current",
		},
		{
			image: "",
			fullName: "Mark Sturman",
			title: "Software Engineer",
			bioQuote:
				"Mark has a BS in Computer Science. He is currently volunteering at SpaceLab" +
				"SWE @ Chief | Full-Stack Eng @ SpaceLab ",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/pBo2sNX.png",
			fullName: "Amanda Stern",
			title: "Full Stack Engineer",
			bioQuote:
				"My name's Amanda, and I'm a full-stack Software Engineer. My professional career started with working project management for software development programs in the Air Force's Space Command. Upon leaving the military, I went on to work outdoor education and became a Park Ranger in the Bureau of Land Management. As a Ranger I worked wildland fire response and collected field data for integration into SQL databases.",
			gitHub: "",
			portfolio: "https://www.amandastern.dev",
			status: "current",
		},
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02M259VB29-764495edcf61-512",
			fullName: "Alex Anand",
			title: "Full-Stack Software Engineer",
			bioQuote:
				"Frontend Developer @ SpaceLab | Graphic Designer/Owner @ TSL Printing Co. | Freelance Software Developer | General Assembly Alumni |" +
				"Currently studying for a bachelor's degree in Software Development & Security (class of 2024) at University of Maryland Global Campus",
			gitHub: "https://github.com/aanand93",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/alexanderanand/",
			status: "current",
		},
		{
			image: "",
			fullName: "S. Kyle Deleon",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/LAAT4Ac.png",
			fullName: "Brian De La Cruz",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/cAqeobu.png",
			fullName: "Lindsey Dukles",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "https://github.com/ldukles",
			portfolio: "https://lindsey-dukles-portfolio.netlify.app/",
			linkedIn: "https://www.linkedin.com/in/lindsey-dukles/",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/brandon_ihzbvu.png",
			fullName: "Brandon Cantello",
			title: "Project Manager | Software Engineer",
			bioQuote:
				"With a BS in Physics from UCSB and years of experience as a software engineer, Brandon brings " +
				"a unique perspective, leadership, and a passion for space to the front end team.",
			gitHub: "https://github.com/bcantello",
			portfolio: "https://www.brandoncantello.com/",
			linkedIn: "https://www.linkedin.com/in/brandon-cantello/",
			status: "current",
		},
		{
			image: "https://i.imgur.com/nDhtO48.png",
			fullName: "Anna Chowattanakul",
			title: "Summer 2021 Front End Project Manager",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/kat_wzzzo3.png",
			fullName: "Kat Hackethal",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130969/team_pics/angelines_ygdgfi.png",
			fullName: "Angelines Yaport-Garcia",
			title: "Full Stack Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1632849788/IMG_0286_bkf98r.jpg",
			fullName: "Kausar Akther",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/hlg0qD5.png",
			fullName: "Shanti Betts",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},

		/* TODO: The following members listed BELOW can be deleted upon the full implementation of Cohorts*/

		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/jon_cxasx9.png",
			fullName: "Jon Zivku",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/deen_ex8fxt.png",
			fullName: "Deen Haque",
			title: "Full Stack Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130963/team_pics/charlie_ibjvgs.png",
			fullName: "Charlie Arboleda",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Cat Moran",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02MHPLFH4H-0a5296950b94-512",
			fullName: "Cory Rice",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Rohit Jacob",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Sven Gerlach",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for the Back End Developers
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const backEnd = {
	title: "back end developers",
	members: [
		{
			image: "https://i.imgur.com/pBo2sNX.png",
			fullName: "Amanda Stern",
			title: "Full Stack Engineer",
			bioQuote:
				"My name's Amanda, and I'm a full-stack Software Engineer. My professional career started with working project management for software development programs in the Air Force's Space Command. Upon leaving the military, I went on to work outdoor education and became a Park Ranger in the Bureau of Land Management. As a Ranger I worked wildland fire response and collected field data for integration into SQL databases.",
			gitHub: "",
			portfolio: "https://www.amandastern.dev",
			status: "current",
		},
		{
			image: "https://i.imgur.com/FitwR6t.png",
			fullName: "Lily Obeng",
			title: "Software developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "current",
		},
		{
			image: "https://imgur.com/cAqeobu.png",
			fullName: "Lindsey Dukles",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "https://github.com/ldukles",
			portfolio: "https://lindsey-dukles-portfolio.netlify.app/",
			linkedIn: "https://www.linkedin.com/in/lindsey-dukles/",
			status: "current",
		},
		{
			image: "https://i.imgur.com/zuLfuhP.png",
			fullName: "Kheffy Cervantez",
			title: "Backend Engineer",
			bioQuote:
				'I am a graduate of General Assembly"s Full Stack Software Engineer Bootcamp, currently acting as a mentor for underrepresented communities in web development, with a focus on Node.js and Express.js.',
			gitHub: "",
			portfolio: "https://kheffycervantez.surge.sh",
			status: "current",
		},
		{
			image: "https://i.imgur.com/RrU84at.png",
			fullName: "Nathaniel Wolf",
			title: "Backend Team",
			bioQuote: "",
			gitHub: "",
			portfolio: "https://portfolio-site-seven-swart.vercel.app/",
			status: "current",
		},
		{
			image: "",
			fullName: "Brandon Tomecsko",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/UXz18XD.png",
			fullName: "Xu Xu",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/fPunQXz.png",
			fullName: "Bach Le",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/EsUof5b.png",
			fullName: "Dennis Oliver",
			title: "Backend Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/b86C11a.jpg",
			fullName: "Derek Deidrich",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/yV7uEjh.png",
			fullName: "Zachary Monea",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/gEbk8B1.png",
			fullName: "Glen Oliff",
			title: "Software Engineering Mentor",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/9Fd7Qwo.png",
			fullName: "Yunao Guo",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/qsJ2bg4.png",
			fullName: "Andrew Cabezudo",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Madhura Anand",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for the Data Science Team
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const dataScience = {
	title: "data scientists",
	members: [
		{
			image: "https://i.imgur.com/FitwR6t.png",
			fullName: "Lily Obeng",
			title: "Software Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/Th806tx.png",
			fullName: "Julian Ornelas",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/aLwVaRl.png",
			fullName: "Dustin Creech",
			title: "Data Scientist | Machine Learning Engineer",

			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedin: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/aVfBvaL.png",
			fullName: "Pramit Bhatia",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote:
				"Hello! I'm Pramit, a Computer Science Major @Georgia State University. I have a background in Data Science, and am interested in working on full stack development and machine learning." +
				"I'm keen on engaging in various projects throughout my engineering journey and excited to contribute to SpaceLab!",
			gitHub: "https://github.com/pramitbhatia25",
			portfolio: "pramitbhatia25.github.io/Portfolio",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/nRhfo0Q.png",
			fullName: "Alexandra Borriello",
			title: "Data Science Intern",
			bioQuote:
				"Hi! I am Alex Borriello, an Applied Math and Stats major at Stony Brook University, working at SpaceLab as a Data Science Intern." +
				"I am passionate about using data science and machine learning to understand and improve the world using technology.",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/PbwKBSo.png",
			fullName: "Shraddha Sonawane",
			title: "Data Science Intern",
			bioQuote:
				"I'm Shraddha; I'm a student and am currently pursuing a master's degree in data science. When I was applying for this internship, I was impressed with the organization's future goals and mission." +
				"It's a pleasure to work with SpceLab's data science team. I'm looking forward to contributing to the Explonatarium Project.",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Gabriel Pino",
			title: "Full Stack Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/7kNmHvV.png",
			fullName: "Vera-Patience Dureke",
			title: "Data Science Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/Ag0eTFb.png",
			fullName: "Hannah Sailar",
			title: "Data Science Project Manager",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131368/team_pics/ricky_fdzb1y.png",
			fullName: "Ricky Rong",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/robert_oggyg8.png",
			fullName: "Robert Sato",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/vxMri4M.png",
			fullName: "Cally Lin",
			title: "Data Scientist | Machine Learning Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/6QT53lE.png",
			fullName: "Gio Abou Jaoude",
			title: "Data Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/gZ2WUml.png",
			fullName: "Arwa Daqqaq",
			title: "Data Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/oUuPU8w.png",
			fullName: "Sean Atkinson",
			title: "Data Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/IyxqjJc.png",
			fullName: "Alex M",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/Wcrm1AI.png",
			fullName: "Daniel Mao",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/UWe1RAo.png",
			fullName: "Breanna Chi",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/418ED2U.png",
			fullName: "William Luo",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/FrSOSL3.png",
			fullName: "Zacharia Rupp",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/VKT4GAl.png",
			fullName: "Bella Arenas",
			title: "Machine Learning Engineering Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/C6PdpAK.png",
			fullName: "Joel Silverman",
			title: "Data Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/99Ecdd9.png",
			fullName: "Benjamin Nagle",
			title: "Data & Machine Learning Scientist",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for the WebGL Team
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const webGL = {
	title: "WebGL Developers",
	members: [
		{
			image: "https://imgur.com/HVUZ6bf.png",
			fullName: "Laura Hiller",
			title: "Lead 3D Graphics Developer",
			bioQuote:
				"Laura is a Software Developer with a BS in Computer Science from the University of California, Santa Cruz, and over two years of experience in Web Development.",
			gitHub: "https://github.com/lauraehiller",
			portfolio: "https://lauraehiller.com/",
			linkedIn: "https://www.linkedin.com/in/laura-e-hiller/",
			status: "current",
		},
		{
			image: "",
			fullName: "Joey Kozak",
			title: "3D Developer/Full-stack Engineer",
			bioQuote:
				"Exoplanetarium Lead @ SpaceLab | Solutions Engineer @ Orchestra | Trinity University & General Assembly Alum | Always excited to expand and refine my skills while building something awesome!",
			gitHub: "https://github.com/jrkozak92",
			portfolio: "http://joeykozak.com/",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/vutLmqW.png",
			fullName: "Eric Matlock",
			title: "Frontend Developer",
			bioQuote:
				"I am a software developer. My mission is to create highly intuitive products with a keen eye for detail, functionality, and a cohesive user experience. Aside from my professional work, I am an avid science and sci-fi nerd, and I play a talkbox. Let's chat science and music!",
			gitHub: "",
			portfolio: "https://terminal.turing.edu/alumni/1329-eric-matlock",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/c_scale,w_200/v1629131500/team_pics/raysean_dn1vww.png",
			fullName: "Raysean Williams",
			title: "Project Manager | 3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/mamadou_mtnlfc.png",
			fullName: "Mamadou Diallo",
			title: "3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/tHUZq9s.png",
			fullName: "Nemi Gugssa",
			title: "3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/Zmy00N4.png",
			fullName: "Ian Walls",
			title: "3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/aJgDqQw.png",
			fullName: "Adream Thompson",
			title: "3D Graphics Developer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for the Staff Writers team
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const writers = {
	title: "staff writers",
	members: [
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130968/team_pics/alex_s0g0a6.png",
			fullName: "Alex Simon",
			title: "Staff Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1632850171/katgirl_lbfxk8.jpg",
			fullName: "Kat Rendon",
			title: "Staff Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/hpdfwjo.png",
			fullName: "Diani Alvarenga", // Yes her preferred name is Diani
			title: "Staff Writer",
			bioQuote:
				"Diani is a student at North Central College and is obtaining her B.A in writing.",
			gitHub: "",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/diana-alvarenga-52b8a4206",
			status: "current",
		},
		{
			image: "https://imgur.com/AtAebvj.png",
			fullName: "Teshome Jenkins",
			title: "Staff Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/jD3LFb0.png",
			fullName: "Danielle Sidhu",
			title: "Tech Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/paoGCSJ.png",
			fullName: "Amara Nwachukwu",
			title: "UX | Tech Writer | Podcast Creator",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for administration to the Spacelab project
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const administration = {
	title: "administration",
	members: [
		{
			image: "https://imgur.com/0Qd8hVW.png",
			fullName: "Mayah Collins",
			title: "Director of Creative Content",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/6YPKVbH.png",
			fullName: "Myesha Dunn",
			title: "Program Director",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/IZOE2tp.png",
			fullName: "Blair Feldman",
			title: "Director of Finance",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/hCTKu88.png",
			fullName: "Scott Allison",
			title: "Fundraiser",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/zn2CSzP.png",
			fullName: "David Lindgren",
			title: "Grant Writer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/k0OYag4.png",
			fullName: "Chris Miller",
			title: "Mentor",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/QLChPXs.png",
			fullName: "Kristina Catapang",
			title: "Paralegal Advisor",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current", 
		},
		{
			image: "https://imgur.com/zx1ROBo.png",
			fullName: "Faith Marlin",
			title: "Recruiter",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/nIwMI5E.png",
			fullName: "Prachi Priya",
			title: "Recruiter",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://imgur.com/PxBOUHA.png",
			fullName: "T'Keyah Nichols",
			title: "Cyber Security Analyst",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://i.imgur.com/6Zq0ldv.png",
			fullName: "Lauren Owen",
			title: "Marketing and Digital Analytics Manager",
			bioQuote:
				"I create optimization reports for websites, mobile, and software. My data comes from Google/Adobe Analytics, user interviews, 1000's of research studies, and more." +
				"I also install and manage analytics software.",
			gitHub: "",
			portfolio: "https://www.laurenmarieowen.com/",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for members of the Spacelab December 2021 cohort
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const december2021Cohort = {
	title: "december 2021 cohort",
	members: [
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02M259VB29-764495edcf61-512",
			fullName: "Alex Anand",
			title: "Full-Stack Software Engineer",
			bioQuote:
				"Frontend Developer @ SpaceLab | Graphic Designer/Owner @ TSL Printing Co. | Freelance Software Developer | General Assembly Alumni |" +
				"Currently studying for a bachelor's degree in Software Development & Security (class of 2024) at University of Maryland Global Campus",
			gitHub: "https://github.com/aanand93",
			portfolio: "",
			linkedIn: "https://www.linkedin.com/in/alexanderanand/",
			status: "current",
		},
		{
			image: "",
			fullName: "Cat Moran",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02MHPLFH4H-0a5296950b94-512",
			fullName: "Cory Rice",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Rohit Jacob",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "",
			fullName: "Sven Gerlach",
			title: "Software Developer | Intern",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing details for additional contributors to the Spacelab project
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const additionalContributors = {
	title: "additional contributors",
	members: [
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/jon_cxasx9.png",
			fullName: "Jon Zivku",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/deen_ex8fxt.png",
			fullName: "Deen Haque",
			title: "Full Stack Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130963/team_pics/charlie_ibjvgs.png",
			fullName: "Charlie Arboleda",
			title: "Software Engineer",
			bioQuote: "",
			gitHub: "",
			portfolio: "",
			linkedIn: "",
			status: "current",
		},
	],
};

/**
 * Object containing the data to populate the nav bar for the Current Teams slider
 * @type {{currentTeams: [{title: string, activeFlag: string}]}}
 */
export const teamSliderNavLinks = {
	currentTeams: [
		{
			title: "Frontend Developers",
			activeFlag: "frontend",
		},
		{
			title: "Backend Developers",
			activeFlag: "backend",
		},
		{
			title: "WebGL Developers",
			activeFlag: "webgl",
		},
		{
			title: "Designers",
			activeFlag: "designers",
		},
		{
			title: "Data Scientist",
			activeFlag: "datascience",
		},
		{
			title: "Writers",
			activeFlag: "writers",
		},
		{
			title: "Board",
			activeFlag: "board",
		},
		{
			title: "Administration",
			activeFlag: "administration",
		},
	],
};

/**
 * Object containing the data to populate the nav bar for the Past Cohorts slider
 * @type {title: string, activeFlag: string}
 */
export const cohortSliderNavLinks = {
	pastCohorts: [
		{
			title: "Dec 2021",
			activeFlag: "december2021",
		},
		{
			title: "Additional Contributors",
			activeFlag: "additionalContributors",
		},
	],
};
