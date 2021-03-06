// complete all words translation

var languages = {
  en: {
    "nav-home": "HOME",
    "nav-services": "SERVICES",
    "nav-about-me": "ABOUT ME",
    "nav-skills": "SKILLS",
    "nav-works": "WORKS",
    "nav-contact": "CONTACT",
    "car-title-dfs": "FULL STACK DEVELOPPER",
    "car-dfs": "Are you looking for a multi-skilled developer for your project ?",
    "car-title-f": "FORMATION",
    "car-f": "Are you looking for an IT instructor able to teach various programming languages ?",
    "car-title-ds": "DATA SCIENCE",
    "car-ds": "You have too many data and it makes you lose your mind ? Give it to me, I will turn it in gold.",
    "ser-title-ds": "Data Analysis",
    "ser-ds": "To make your business more profitable, I make a decision support software. I can analyse any kind of data (csv files, databases...).",
    "ser-title-dfs": "Full stack developer",
    "ser-dfs": "With many experiences in computer science project, I can help you to develop your application using different technologies (C, Pyhton, Java, AWS...).",
    "ser-title-f": "Formation",
    "ser-f": "Teaching is for me a passion, I can make your employees/students learn new technologies and popular languages (C, Pyhton, Java, AWS...).",
    "ser-button": "Know more",
    "ser-mod-ds-title": "Data analysis",
    "ser-mod-ds-1": "Do you want to take advantages of your stored data ?",
    "ser-mod-ds-2": "I will process it and submit the most revelant recommendations. I will treat your informations and make your manager's decision easier.",
    "ser-mod-ds-3": "Through my analysis report interpretation you will get the best business improvements. I will develop predicitive model to make you anticipating the market related to your company.",
    "ser-mod-dfs-title": "Full stack developer",
    "ser-mod-dfs-1": "You want to add features to your application ? You would like to make your code better ?",
    "ser-mod-dfs-2": "Your company need a developer for some time ?",
    "ser-mod-dfs-3": "My rigor and my flexibility will help you to reach your goales. My wise advice will turn your software to gold.",
    "ser-mod-f-title": "Formation",
    "ser-mod-f-1": "You need someone to teach to your employees/students ? ",
    "ser-mod-f-2": "You want your staff learning new technology and increase their skills ? I will teach them passionately as a real experienced professional .",
    "ser-mod-f-3": "My little tips will make them improve very quick.",
    "about-st": "A polyvalent developer !",
    "about-title-1": "A mathematician developer",
    "about-p-1": "My double cursus (mathematics, computer science) makes me truning into success any kind of challenge.",
    "about-title-2": "A french confortable with english",
    "about-p-2": "Far from the Moli??re language, I tame the Shakespeare's one.",
    "about-title-3": "A manager developer",
    "about-p-3": "Having managed a 25 peoples team, I understand the difficulties of running a business.",
    "section-experiences": "INTERNATIONAL EXPERIENCES",
    "section-experiences-st": "Click on layer to know more...",
    "international-map": "https://www.google.com/maps/d/embed?mid=1zSVsrElggpOberaM551ic8Uu9U2sgdDM",
    "cv-link": "https://docs.google.com/document/d/1xU3T2Vm4IFiRsgG4vIbLxDJ-H89_Xn_tO7Xd6C3RfhE",
    "ser-skills-st-1":"My computer skills are ready for you.",
    "ser-skills-st-2":"The object oriented programming has no secret for me !",
    "ser-skills-title-1":"Favourite Softwares",
    "ser-skills-p-1":"These softwares will make your business growing quickly and strongly.",
    "ser-skills-title-2":"Programing Languages",
    "ser-skills-p-2":"The Languages that I manage are very popular and efficient.",
    "contact-f1":"A Question ?",
    "contact-f2":"A Project ?",
    "contact-f3":"An Information ?",
    "contact-f4":"A Reply Within 24H",
    "contact-ph-1": "Name",
    "contact-ph-2": "Email",
    "contact-ph-3": "Subject",
    "contact-ph-4": "Message",
    "contact-button": "Send",
    "contact-button-waiting": "Send",
    "works-title": "LATEST WORKS",
    "pf-1": "Optimization, Data Science, Graph Theory, C++, GDB, Git...",
    "pf-2": "Development, Python, AWS, NodeJS, Boto3, Git...",
    "pf-3": "Quality, Development, Management, C#, Jenkins, SVN, Selenium...",
    "pf-4": "Formation, Development, C#, Html, Css, Javascript, JMeter, MySql...",
    "pf-5": "Optimization, Development, .Net Core API, Html, Css, JS, MySql...",
    "pf-6": "Optimization, Development, NodeJS, DynamoDB...",
    "pf-button": "More details",
    "pf-1": "Optimization, Data Science, Graph Theory, C++, GDB, Git...",
    "pf-2": "Development, Python, AWS, NodeJS, Boto3, Git...",
    "pf-3": "Quality, Development, Management, C#, Jenkins, SVN, Selenium...",
    "pf-4": "Formation, Development, C#, Html, Css, Javascript, JMeter, MySql...",
    "pf-5": "Optimization, Development, .Net Core API, Html, Css, JS, MySql...",
    "pf-6": "Optimization, Development, NodeJS, DynamoDB...",
    "pf-button": "More details",
    "pf-ao-1": "Ad Opt is a company treating the airline crew planning optimization. This problem is a major issue for any company, a poor crew planning optimization can cause many financial losses.",
    "pf-ao-2": "I had the responsibility to improve the algorithms which generated these schedules. A1% improvement in the solution represented a multi-million dollar gain for the company !",
    "pf-ao-3": "After understanding the problem theorically. I have significantly improved the performance of the algorithm.",
    "pf-b-1": "Born in 2007 by Falco Schmutz, premaccess is an international french-swiss company which evolve according digital innovation. Within 10 years, they developed useful tools (BAM) to help their customers reaching goals in IT sector (AWS).",
    "pf-b-2": "Works :",
    "pf-b-3": "1 - Bam software development (python, boto3, aws). It can automatically deploy and destroy some aws environments.",
    "pf-b-4": "2 - New features testing (unittest, mock...).",
    "pf-b-5": "3 - Customers support assistance.",
    "pf-b-6": "4 - Continuous integration.",
    "pf-bg-1": "Bassetti is a young company with a strong growth rate in recent year. Their solution called TEEXMA?? has more and more success with large multinationals (Airbus, Continental, Lafarge...).",
    "pf-bg-2": "The numbers of users is constantly grewing. the company had to increase its quality department.",
    "pf-bg-3": "I was selected to create this department in Kolkata (India). We have recruited and trained about twenty testers with whom we have developed thousand  manual and automatic tests to stabilize TEEXMA??.",
    "pf-bg-4": "The two-year operation was very beneficial for the young company. Now, many customers have noticed the stability of the new TEEXMA?? version and the image of the company is more than good.",
    "pf-i-1": "I am the C# trainer for Isika company. I Prepare some students (around 40) to develop a complete application which interacts with databases.  This application is the main task of the student's program. I try to give them consistent basics of C# coding and also make them thinking object oriented.",
    "pf-i-2": "Tasks :",
    "pf-i-3": "1 - Introduction to C#.",
    "pf-i-4": "2 - Objected oriented object (Classes, inheritance...).",
    "pf-i-5": "3 - ASP .Net Core MVC.",
    "pf-i-6": "4 - Data persistence (LINQ, Entity framework).",
    "pf-ftz-1": "Since 2013, fitizzy improve consumer shopping experiences. Through morphological data analysis, fitizzy help you to choose your size articles.",
    "pf-ftz-2": "Tasks :",
    "pf-ftz-3": "1 - Improve data models.",
    "pf-ftz-4": "2 - Algorithm optimization (NodeJS).",
    "pf-ftz-5": "3 - Clustering all morphologies.",
    "pf-btb-1": "Behind The Bet is the number one statitics provider for sport bets.",
    "pf-btb-2": "Tasks :",
    "pf-btb-3": "1 - MySql queries optimization.",
    "pf-btb-4": "2 - Automatic statistics update with Aws Lambda.",
    "pf-btb-5": "3 - Time execution improvement (X10).",
    "succes-sent": "Your message has been sent successfully",
    "fail-sent": "Something wrong happened... Please send your message to : ",
    "require-fields": "All fields should be filled !",
    "email-no-valid": "Email is not valid !"
  },
  fr: {
    "nav-home": "ACCUEIL",
    "nav-services": "MES SERVICES",
    "nav-about-me": "?? PROPOS",
    "nav-skills": "MES COMP??TENCES",
    "nav-works": "R??F??RENCES",
    "nav-contact": "CONTACT",
    "car-title-dfs": "D??VELOPPEUR FULL STACK",
    "car-dfs": "Vous recherchez un d??veloppeur polyvalent pour votre projet ?",
    "car-title-f": "FORMATION",
    "car-f": "Vous avez besoin d'un formateur dot?? d'une grande exp??rience professionnelle ?",
    "car-title-ds": "DATA SCIENCE",
    "car-ds": "Vous avez trop de donn??es ?? en perdre la t??te ? Confiez les  moi et j'en ferai de l'or.",
    "ser-title-ds": "Data scientist",
    "ser-ds": "Afin de rendre votre entreprise toujours plus rentable, je con??ois des logiciels d'aide ?? la d??cision. Je peux analyser toutes sortes de donn??es (fichiers csv, base de donn??es...).",
    "ser-title-dfs": "D??veloppeur full stack",
    "ser-dfs": "Fort de nombreuses exp??riences dans la programmation, je peux vous aider ?? d??velopper votre logiciel dans de nombreuses technologies (C, Pyhton, Java, AWS...).",
    "ser-title-f": "Formateur",
    "ser-f": "Aimant transmettre, j'enseigne chaque ann??e ?? de nombreux ??l??ves les rudiments ainsi que des notions avanc??es de diff??rents langages (Java, C#, C++, Python, Javascript).",
    "ser-button": "En savoir plus",
    "ser-mod-ds-title": "Data Scientist",
    "ser-mod-ds-1": "Vous voulez tirer profit des donn??es que vous avez stock??es ?",
    "ser-mod-ds-2": "Je traiterai vos donn??es afin de vous soumettre les plus pertinentes recommandations. J'exploiterai vos informations et faciliterai les prises de d??cisions de vos managers. je valoriserai la masse de donn??es collect??es et apporterai une vision coh??rente de toutes les activit??s de votre entreprise.",
    "ser-mod-ds-3": "Gr??ce ?? l'interpr??tation de mes rapports d'analyse vous tirerez les meilleurs am??liorations business. J'??laborerai des mod??les pr??dictifs afin d'anticiper l'??volution des donn??es tendances relatives ?? l'activit?? de votre entreprise.",
    "ser-mod-dfs-title": "D??veloppeur full stack",
    "ser-mod-dfs-1": "Vous voulez ajouter des fonctionnalit??s ?? votre application ? Vous souhaitez factoriser et am??loirer votre code ?",
    "ser-mod-dfs-2": "Votre ??quipe a besoin d'un nouveau d??veloppeur exp??riment?? ? Mon adaptabilit?? ainsi que ma rigueur me rendront fonctionnel promptement.",
    "ser-mod-dfs-3": "Mes conseils avis??s contribueront ?? la bonne ??volution de votre application.",
    "ser-mod-f-title": "Formateur",
    "ser-mod-f-1": "Vous avez besoin d'un intervenant pour former vos ??l??ves/votre personnel ?",
    "ser-mod-f-2": "Vous souhaitez faire monter vos ??quipes en comp??tences ?",  
    "ser-mod-f-3": "Gr??ce ?? ma passion et ?? ma p??dagogie, je vous transmettrai de solides bases en un temps record. Mes petites astuces vous donneront une longueur d'avance.",
    "about-st": "Un d??veloppeur ind??pendant polyvalent !",
    "about-title-1": "Un d??veloppeur math??maticien",
    "about-p-1": "Mon cursus bi-disciplinaire (math??matiques et informatique) me permet de surmonter n'importe quel challenge.",
    "about-title-2": "Un Fran??ais ?? l'aise avec l'anglais",
    "about-p-2": "Loin de la langue de Moli??re j'ai su apprivoiser celle de Shakespeare.",
    "about-title-3": "Un d??veloppeur manager",
    "about-p-3": "Ayant manager une ??quipe de 25 personnes, je con??ois les difficult??s de la gestion d'une entreprise.",
    "section-experiences": "MES EXP??RIENCES INTERNATIONALES",
    "section-experiences-st": "Cliquez sur les calques pour plus d'informations",
    "international-map": "https://www.google.com/maps/d/embed?mid=1LDRvmWSvbgJb5zMELtSjSC09Dilzxx3W",
    "cv-link": "https://docs.google.com/document/d/1DzbaT3S03J48wHF0GRSPc4ULovwsLbiiliKRVR4uPAI",
    "ser-skills-st-1":"Mes comp??tences informatiques sont ?? votre disposition.",
    "ser-skills-st-2":"La philosophie de l'objet n'a plus de secret pour moi !",
    "ser-skills-title-1":"Mes logiciels favoris",
    "ser-skills-p-1":"Ces logiciels m'aident ?? mener ?? bien n'importe quel projet.",
    "ser-skills-title-2":"Mes langages de programmation",
    "ser-skills-p-2":"Ces logiciels m'aident ?? mener ?? bien n'importe quel projet.",
    "contact-f1":"Une Question ?",
    "contact-f2":"Un Projet ?",
    "contact-f3":"Un Renseignement ?",
    "contact-f4":"Une r??ponse sous les 24 heures",
    "contact-ph-1": "Nom",
    "contact-ph-2": "Email",
    "contact-ph-3": "Sujet",
    "contact-ph-4": "Message",
    "contact-button": "Envoyer",
    "contact-button-waiting": "Envoyer",
    "works-title": "QUELQUES R??F??RENCES",
    "pf-1": "Optimisation, Data Science, Th??orie des graphes, C++, GDB, Git...",
    "pf-2": "D??veloppement, Python, AWS, NodeJS, Boto3, Git...",
    "pf-3": "Qualit??, D??veloppement, Management, C#, Jenkins, SVN, Selenium...",
    "pf-4": "Formation, D??veloppement, C#, Html, Css, Javascript, JMeter, MySql...",
    "pf-5": "Optimisation, D??veloppement, .Net Core API, Html, Css, JS, MySql...",
    "pf-6": "Optimisation, D??veloppement, NodeJS, DynamoDB...",
    "pf-button": "Plus de d??tails",
    "pf-ao-1": "Ad Opt est une entreprise qui traite le probl??me des rotations d'??quipage pour les compagnies a??riennes.",
    "pf-ao-2": "Ce probl??me est un enjeu de premier ordre pour n'importe quelle compagnie, en effet, une mauvaise optimisation des plannings d'??quipage peut causer de nombreuses pertes financi??res.",
    "pf-ao-3": "J'ai donc eu la responsabilit?? d'am??liorer les algorithmes qui g??n??raient ces plannings. Une am??lioration de 1% de la solution repr??sentait un gain de plusieurs millions de dollars pour la compagnie !",
    "pf-b-1": "Fond??e en 2007 par Falco Schmutz, premaccess est une entreprise franco-suisse ?? dimension internationale qui ??volue, depuis sa cr??ation, au rythme des innovations digitales. premaccess est aujourd???hui l???un des expert les plus reconnus dans le domaine des services manag??s et de la mise en place de plan de (co)gouvernance IT. En 10 ans, nous avons d??velopp??s les outils n??cessaires pour r??pondre aux enjeux de nos clients, en les accompagnant quotidiennement dans leur croissance. Gr??ce ?? des m??thodes novatrices, premaccess a r??ussi ?? se hisser parmi les g??ants du secteur, la souplesse en plus. Nous avons cr???? avec nos clients des relations fond??es sur la proximit?? et la confiance.",
    "pf-b-2": "R??alisations :",
    "pf-b-3": "1 - D??veloppement de l'application Bam (python, boto3, aws) qui d??ploie et d??truit automatiquement des environnements sur aws.",
    "pf-b-4": "2 - Test des nouvelles fonctionnalit??s (unittest, mock...).",
    "pf-b-5": "3 - R??solution de tickets clients.",
    "pf-b-6": "4 - Int??gration continue.",
    "pf-bg-1": "L'entreprise Bassetti est une jeune compagnie ayant un fort taux de croissance ces derni??res ann??es. En effet, leur solution TEEXMA?? a de plus en plus de succ??s aupr??s des grandes multinationales (Airbus, Continental, Lafarge...).",
    "pf-bg-2": "Le nombre d'utilisateurs ??tant en constante ??volution, l'entreprise se devait d'??toffer son d??partement qualit??.",
    "pf-bg-3": "J'ai donc ??t?? s??lectionn?? pour cr??er ce d??partement en Inde ?? Kolkata. Nous avons recrut?? et form?? une vingtaine de testeurs avec lesquelles nous avons ??labor?? des milliers de tests manuels et automatiques afin de garantir une r??elle stabilit?? ?? TEEXMA??.",
    "pf-bg-4": "L'op??ration de deux ans s'est av??r??e ??tre une r??elle plus-value pour la jeune compagnie, puisque bon nombre de clients ont remarqu?? la stabilit?? des nouvelles versions du logiciel.",
    "pf-i-1": "Au sein de l'organisme de formation isika, je suis charg?? d'intervenir sur la partie C#. Il s'agit d'une introduction au langage C#, ?? la programmation orient??e objet ainsi qu'?? la persistance des donn??es (MySql). Le but ??tant d'apporter aux ??l??ves les outils afin qu'ils puissent programmer une application lourde (.NET) sur laquelle ils seront ??valu??s.",
    "pf-i-2": "R??alisations :",
    "pf-i-3": "1 - Intro au C#.",
    "pf-i-4": "2 - POO (Classes, h??ritages...).",
    "pf-i-5": "3 - ASP .Net Core MVC.",
    "pf-i-6": "4 - Persistance des donn??es (LINQ, Entity framework).",
    "pf-ftz-1": "Depuis 2013, fitizzy met un point d'honneur ?? am??liorer l'exp??rience shopping de millions de consommateurs. Son expertise de la donn??e morphologique est mise ?? disposition de ses partenaires.",
    "pf-ftz-2": "R??alisations :",
    "pf-ftz-3": "1 - Am??lioration du mod??le de donn??es.",
    "pf-ftz-4": "2 - Optimisation des algorithmes (NodeJS).",
    "pf-ftz-5": "3 - Classification des morphologies du monde entier.",
    "pf-btb-1": "Behind The Bet est le fournisseur N??1 de statistiques d??taill??es pour les paris sportifs . Lanc??e en 2019 par une ??quipe passionn??e de sports, de paris sportifs et de math??matiques/statistiques, Behind The Bet tire profit de l'exp??rience et des connaissances de ses fondateurs.",
    "pf-btb-2": "R??alisations :",
    "pf-btb-3": "1 - Am??lioration et Optimisation des requ??tes MySql.",
    "pf-btb-4": "2 - Mise ?? jour automatique des statistiques via Aws Lambda.",
    "pf-btb-5": "3 - Am??lioration du temps d'ex??cution (X10).",
    "succes-sent": "Votre message a bien ??t?? envoy??",
    "fail-sent": "Un probl??me est survenu... Veuillez envoyer votre message ?? l'adresse suivante : ",
    "require-fields": "Vous devez remplir tous les champs !",
    "email-no-valid": "L'email n'est pas valide !"
  }



}
const langs = document.querySelectorAll(".lang");
const langsLinks = document.querySelectorAll(".lang-link");

function loadLanguage(lang){
    langs.forEach(elem => {
      if(elem.placeholder){
        elem.placeholder = languages[lang][elem.id]
      }
      if(elem.src){
        elem.src = languages[lang][elem.id]
      }
      if(elem.href && elem.id === "cv-link"){
        elem.href = languages[lang][elem.id]
      }
      else{
        elem.textContent = languages[lang][elem.id];
      }
    });
}

langsLinks.forEach(elem => {
  elem.onclick = function() {
    loadLanguage(elem.attributes['data-lang'].nodeValue);
  };
});

function LoadLang(){
  if (window.location.hash)
  {
    if (window.location.hash === '#en')
    {
      loadLanguage('en');
    }
    if(window.location.hash === '#fr')
    {
      loadLanguage('fr');
    }
  }
  else
  {
    loadLanguage('fr');
  }
}


