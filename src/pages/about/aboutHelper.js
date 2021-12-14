/**
 * Array of Dates and descriptions for Spacelab History timeline
 * @type {string[][]}
 */
export const aboutHistoryArray = [
	[
		'SPACELAB 2021.01.27',
		'Data Scientist Matt Paterson is introduced to Dr. Andrew Vanderburg by Cal Tech\'s Dr. Jessie Christiansen ' +
		'in hopes that the former NASA Sagen Fellow can help with publishing a paper about machine learning and ' +
		'exoplanets. The interaction with Dr. Vanderburg and Dr. Christiansen lead Matt to reconnect with former ' +
		'classmates Ollie Jackson and Jon Zivku. The three are excited about space exploration and exoplanets and ' +
		'want to build a web application that allows all three to contribute; thus, SpaceLab was born.'
	],
	[
		'SPACELAB 2021.01.05',
		'The founders of The SpaceLab meet aspiring UX designers who were fresh out of school and ready to take ' +
		'the founders’ visions and designs towards a website for exoplanet discovery. The group recognizes that ' +
		'experience with cross-functional collaboration towards the development of real-world applications is ' +
		'something that early-career tech professionals often lack, specifically traditionally underrepresented ' +
		'groups in the tech industry. Upon recognizing this, the team decides that finding exoplanets it’s not ' +
		'just a one-time project. Instead, it will be the first of many projects built by the members and future ' +
		'community of The SpaceLab. This led the team at The SpaceLab to become a non-profit organization to ' +
		'help women, people of color, people from the LGBTQ+ community, and others currently underrepresented in ' +
		'the tech industry to gain experience with cross-functional teams in outer-space-related sciences.'
	],
	[
		'SPACELAB 2021.08.16',
		'After building a team of front-end developers, SpaceLab launches its website, announcing its purpose and ' +
		'mission to the world. While SpaceLab is working on becoming a nonprofit organization, the organization is ' +
		'created upon a foundation of diversity and inclusion with the help of Meghan Slan, Director of DEIB. ' +
		'SpaceLab is currently working with roughly 25 cross-functional members to build its first project, ' +
		'Exoplanetarium, of which users will have the opportunity to explore exoplanets in our milky way system.'
	],
]

/**
 * Object containing details for the Board of Directors
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const boardOFDirectors = {
	title: "board of directors",
	members: [
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/c_scale,w_200/v1629131440/team_pics/matt_ksbosg.jpg",
			fullName: "Matt Paterson",
			title: "Executive Director | Machine Learning Engineer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130990/team_pics/Ollie_pic_yabvpi.png",
			fullName: "Ollie Jackson",
			title: "Officer, Board of Directors | Physicist",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130971/team_pics/Megan_ncesok.png",
			fullName: "Meghan Slan",
			title: "Director of DEIB, Board Member at Large",
		},
		{
			image: "https://i.imgur.com/rddAX7C.png",
			fullName: "Anna Bukareva",
			title: "Officer, Board of Directors",
		},
	],
};

/**
 * Object containing details for the Team Leads
 * @type {{members: [{image: string, fullName: string, title: string}, ]}}
 */
export const teamLeads = {
	title: "team leads",
	members: [
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/Phaly_ieng0k.png",
			fullName: "Phally Bell",
			title: "Lead Project Manager | Lead UX Designer & Researcher",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/c_scale,w_200/v1629131500/team_pics/raysean_dn1vww.png",
			fullName: "Raysean Williams",
			title: "Project Manager | 3D Graphics Developer",
		},
		{
			image: "https://i.imgur.com/Ag0eTFb.png",
			fullName: "Hannah Sailar",
			title: "Data Science Project Manager",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/brandon_ihzbvu.png",
			fullName: "Brandon Cantello",
			title: " Project Manager | Software Engineer",
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
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/subin_p8gjt5.png",
			fullName: "Subin Shin",
			title: "UI/UX Designer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131338/team_pics/uma_n6hcdv.jpg",
			fullName: "Uma Muthu",
			title: "Product Designer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/yumi_j5x47l.png",
			fullName: "Yumi Jeon",
			title: "UX Designer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131297/team_pics/Christy_kn3wxm.jpg",
			fullName: "Christy Min",
			title: "UX Designer",
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
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/kat_wzzzo3.png",
			fullName: "Kat Hackethal",
			title: "Software Engineer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130969/team_pics/angelines_ygdgfi.png",
			fullName: "Angelines Yaport-Garcia",
			title: "Full Stack Software Engineer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1632849788/IMG_0286_bkf98r.jpg",
			fullName: "Kausar Akther",
			title: "Software Engineer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130965/team_pics/jon_cxasx9.png",
			fullName: "Jon Zivku",
			title: "Software Engineer",
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
			image: "https://i.imgur.com/UXz18XD.png",
			fullName: "Xu Xu",
			title: "Software Engineer",
		},
		{
			image: "https://i.imgur.com/fPunQXz.png",
			fullName: "Bach Le",
			title: "Software Engineer",
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
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629131368/team_pics/ricky_fdzb1y.png",
			fullName: "Ricky Rong",
			title: "Data Scientist | Machine Learning Engineer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130966/team_pics/robert_oggyg8.png",
			fullName: "Robert Sato",
			title: "Data Scientist | Machine Learning Engineer",
		},
		{
			image: "https://i.imgur.com/vxMri4M.png",
			fullName: "Cally Lin",
			title: "Data Scientist | Machine Learning Engineer",
		},
		{
			image: "https://i.imgur.com/6QT53lE.png",
			fullName: "Gio Abou Jaoude",
			title: "Data Scientist",
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
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/mamadou_mtnlfc.png",
			fullName: "Mamadou Diallo",
			title: "3D Graphics Developer",
		},
		{
			image: "https://i.imgur.com/tHUZq9s.png",
			fullName: "Nemi Gugssa",
			title: "3D Graphics Developer",
		},
		{
			image: "https://i.imgur.com/Zmy00N4.png",
			fullName: "Ian Walls",
			title: "3D Graphics Developer",
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
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1632850171/katgirl_lbfxk8.jpg",
			fullName: "Kat Rendon",
			title: "Staff Writer",
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
			title: "Software Developer | Intern",
		},
		{
			image: "https://media-exp1.licdn.com/dms/image/C4E03AQGHfQJtC1HIZg/profile-displayphoto-shrink_800_800/0/1517685303481?e=1645056000&v=beta&t=QCKr7FvI-osjN4xnthRoOnj6aNJkQgl9ab4awl97SwA",
			fullName: "Cat Moran",
			title: "Software Developer | Intern",
		},
		{
			image: "https://ca.slack-edge.com/T01NXS517FE-U02MHPLFH4H-0a5296950b94-512",
			fullName: "Cory Rice",
			title: "Software Developer | Intern",
		},
		{
			image: "https://media-exp1.licdn.com/dms/image/C4E03AQHZI4bXTLMyDA/profile-displayphoto-shrink_800_800/0/1626031072251?e=1645056000&v=beta&t=ka94J_p2DZMk_6aIPa3P-CbiKnsdAAyAqMleXo33B98",
			fullName: "Rohit Jacob",
			title: "Software Developer | Intern",
		},
		{
			image: "https://media-exp1.licdn.com/dms/image/C4D03AQF1l9bZLOA7kg/profile-displayphoto-shrink_800_800/0/1547235071876?e=1645056000&v=beta&t=ynZWmSo7WUppaDF9n4OBwmhXNR8mVJYkuacPt7GkAE0",
			fullName: "Sven Gerlach",
			title: "Software Developer | Intern",
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
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130970/team_pics/deen_ex8fxt.png",
			fullName: "Deen Haque",
			title: "Full Stack Software Engineer",
		},
		{
			image: "https://res.cloudinary.com/spacelabdev/image/upload/v1629130963/team_pics/charlie_ibjvgs.png",
			fullName: "Charlie Arboleda",
			title: "Software Engineer",
		},
	],
}
