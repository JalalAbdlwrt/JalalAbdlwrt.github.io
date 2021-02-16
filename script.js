/* JS code */

let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let french = document.getElementById("french");
let spanish = document.getElementById("spanish");

//declaration variables infos
let text = document.getElementById("text");
let study = document.getElementById("study");
let name = document.getElementById("name");
let adress = document.getElementById("adress");

//declaration variables infos
let contact = document.getElementById("contact");

//academic background master
let backg = document.getElementById("backg");
let master = document.getElementById("master");
let masterAd = document.getElementById("masterAd");
let masterP = document.getElementById("masterP");
//academic background licence
let lic = document.getElementById("lic");
let licAd = document.getElementById("licAd");
let licP = document.getElementById("licP");
//academic background bac
let bac = document.getElementById("bac");
let bacAd = document.getElementById("bacAd");
let bacP = document.getElementById("bacP");

//professionnal exp administrator
let prof = document.getElementById("prof");
let adm = document.getElementById("adm");
let admT = document.getElementById("admT");
let admP = document.getElementById("admP");
//professionnal exp customer
let cust = document.getElementById("cust");
let custT = document.getElementById("custT");
let custP = document.getElementById("custP");
//professionnal exp intership
let inter = document.getElementById("inter");
let interT = document.getElementById("interT");
let interP = document.getElementById("interP");

//skills and tools
let skt = document.getElementById("skt");
let sktP = document.getElementById("sktP");
let sktF = document.getElementById("sktF");
//workflow
let workF = document.getElementById("workF");
let workOne = document.getElementById("workOne");
let workTwo = document.getElementById("workTwo");
let workThree = document.getElementById("workThree");

//languages
let lang = document.getElementById("lang");
let langAr = document.getElementById("langAr");
let langFr = document.getElementById("langFr");
let langEn = document.getElementById("langEn");
let langSp = document.getElementById("langSp");

//award and certificates
let award = document.getElementById("award");
let awardC = document.getElementById("awardC");

//footer
let footer = document.getElementById("footer");

/* functions */

arabic.onclick = () =>{
    setLang("arabic");
    //localStorage.setItem("Lang","arabic");
};
french.onclick = () =>{
    setLang("french");
    //localStorage.setItem("Lang","french");
};
english.onclick = () =>{
    setLang("english");
    //localStorage.setItem("Lang","english");
};
spanish.onclick = () =>{
    setLang("spanish");
    //localStorage.setItem("Lang","english");
};
/*
onload = () =>{
    setLang(localStorage.getItem("Lang"));
}
*/

//function progress bar
$(document).ready(function() {
    $('.progress .progress-bar-striped').css("width",
            function() {
                return $(this).attr("aria-valuenow") + "%";
            }
    )
});

$(function () {
    $('select').selectpicker();
});

function setLang(getLang) {
    if (getLang === "arabic") {
        text.innerHTML = "مطور ويب مبتدئ";
        study.innerHTML = "ماستر التسيير المعلوماتي للمقاولة";
        name.innerHTML = "أولاد عبد الوارث جلال";
        adress.innerHTML = "شارع الاسماعيلية حي بوسافو - تطوان";
        contact.innerHTML = "بياناتي";
        backg.innerHTML = "المسار الدراسي";
        master.innerHTML = "ماستر متخصص";
        masterAd.innerHTML = "FSJES – تطوان, المغرب";
        masterP.innerHTML = "ماستر متخصص <b>(التدبير المعلوماتي للمقاولة)</b> في كلية العلوم القانونية والاقتصادية والاجتماعية بتطوان. درجة مستحسن";
        lic.innerHTML = "اجازة الدراسات الاساسية";
        licAd.innerHTML = "FSJES – تطوان, المغرب";
        licP.innerHTML = "</b>اجازة الدراسات الاساسية في كلية العلوم القانونية والاقتصادية والاجتماعية بتطوان. تخصص <b>العلوم الاقتصادية والتسيير";
        bac.innerHTML = "باكالوريا";
        bacAd.innerHTML = "ثانوية الحسن الثاني – تطوان, المغرب";
        bacP.innerHTML = "</b>باكالوريا من ثانوية الحسن الثاني بتطوان, تخصص <b>العلوم التجريبية";
        prof.innerHTML = "التجارب العملية";
        adm.innerHTML = "مساعد اداري ومالي";
        admT.innerHTML = "ابداع ديكور - تطوان, المغرب";
        admP.innerHTML = "خبرة سنة كمساعد اداري ومالي, في شركة ابداع ديكور بتطوان, المغرب.";
        cust.innerHTML = "مندوب العملاء";
        custT.innerHTML = "شركة الرواج - تطوان, المغرب";
        custP.innerHTML = "خبرة سنة كمندوب عملاء, في شركة الرواج بتطوان, المغرب.";
        inter.innerHTML = "تدريب نهاية الدراسة";
        interT.innerHTML = "TMPA – طنجة, المغرب";
        interP.innerHTML = "تدريب نهاية الدراسة داخل شركة الميناء المتوسطي بطنجة لمدة 4 أشهر";
        skt.innerHTML = "المهارات والأدوات";
        sktP.innerHTML = "لغات البرمجة";
        sktF.innerHTML = "إطار أعمال";
        workF.innerHTML = "سير العمل";
        workOne.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>إنجاز مشروع نهاية الدراسة في شكل لوحة معلومات الموارد البشرية لقسم الموارد البشرية في TANGER MED PORT AUTHORITY: (Microsoft Excel 2010-2013).";
        workTwo.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>إنجاز مشروع يعتمد على دراسة تحليل التصميم ونظام إدارة قواعد البيانات داخل شركة رينو في تطوان.";
        workThree.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>إنشاء موقع على شكل صفحة ويب لسيرتي الذاتية الشخصية باستخدام (HTML5، CSS3، JS، BOOTSTRAP 4).";
        lang.innerHTML = "اللغات";
        langAr.innerHTML = "العربية";
        langFr.innerHTML = "الفرنسية";
        langEn.innerHTML = "الإنجليزية";
        langSp.innerHTML = "الإسبانية";
        award.innerHTML = "الجوائز والشهادات";
        awardC.innerHTML = `<i class="fas fa-trophy text-warning"></i>
                            شهادة الدورة التدريبية عبر الإنترنت "دورة مطور Python الكاملة" -
                            <br><i class="fas fa-trophy text-warning"></i>
                            شهادة دورة عبر الإنترنت "دورة React JS كاملة - من الأساسي إلى المتقدم"
                            <br><i class="fas fa-trophy text-warning"></i>
                            شهادة الدورة التدريبية عبر الإنترنت "HTML و CSS و Javascript لمطوري الويب"
                            <br><i class="fas fa-trophy text-warning"></i>
                            شهادة الدورة التدريبية عبر الإنترنت "Front-End JavaScript Frameworks: Angular"
                            <br><i class="fas fa-trophy text-warning"></i>
                            شهادة مشاركة فى بطولة الشطرنج المركز الرابع - جامعة عبدالمالك السعدى
                            <br><i class="fas fa-trophy text-warning"></i>
                            شهادة مشاركة فى بطولة كرة القدم المركز الثانى - جامعة عبدالمالك السعدى`;
        footer.innerHTML = "تم الإنشاء بواسطة شركة A.J || Company جميع الحقوق محفوظة 2021";

    } else if (getLang === "english") {
        text.innerHTML = "Junior Software Developer";
        study.innerHTML = "Master IT management";
        name.innerHTML = "AOULAD ABDELOUARIT JALAL";
        adress.innerHTML = "Avenue Alismailia Boussafou-Tetouan";
        contact.innerHTML = "My contacts";
        backg.innerHTML = "ACADEMIC BACKGROUND";
        master.innerHTML = "SPECIALIZED MASTER";
        masterAd.innerHTML = "FSJES – TETOUAN, MOROCCO";
        masterP.innerHTML = "Specialized Master Degree <b>(IT Management of Companies)</b> at the Faculty of Legal, Economic and Social Sciences of Tetouan. Degree Fairly well.";
        lic.innerHTML = "FUNDAMENTAL STUDIES BACHELOR";
        licAd.innerHTML = "FSJES – TETOUAN, MOROCCO"; 
        licP.innerHTML = "Bachelor of Fundamental Studies at the Faculty of Legal, Economic and Social Sciences of Tetouan, <b>Economics and Management branch</b>.";
        bac.innerHTML = "BACCALAUREATE";
        bacAd.innerHTML = "HIGH SCHOOL HASSAN II – TETOUAN, MOROCCO";
        bacP.innerHTML = "Baccalaureate from Hassan II high school in Tetouan, <b>Experimental Sciences</b> series.";
        prof.innerHTML = "PROFESSIONAL EXPERIENCES";
        adm.innerHTML = "ADMINISTRATIVE AND FINANCIAL ASSISTANT";
        admT.innerHTML = "IBDAA DECOR – TETOUAN, MOROCCO";
        admP.innerHTML = "One-year experience as an administrative and financial assistant, within the company IBDAA DECOR in Tetouan, Morocco.";
        cust.innerHTML = "Customer Service Advisor";
        custT.innerHTML = "ARRAWAJ COMPANY – TETOUAN, MOROCCO";
        custP.innerHTML = "One-year experience as a customer service advisor, within the company ARRAWAJ in Tetouan, Morocco.";
        inter.innerHTML = "INTERNSHIP AT THE END OF MY SCHOOL";
        interT.innerHTML = "TMPA – TANGER, MOROCCO";
        interP.innerHTML = "End of studies internship within the company Tanger Med Port Authority (TMPA) of Tangier for 4 months.";
        skt.innerHTML = "SKILLS & TOOLS";
        sktP.innerHTML = "Programming Languages";
        sktF.innerHTML = "Frameworks";
        workF.innerHTML = "Workflow";
        workOne.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>Realization of an end of study project in the form of a Human Resources Dashboard for the human resources department of TANGER MED PORT AUTHORITY: (Microsoft Excel 2010-2013).";
        workTwo.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>Carrying out a project using a MERISE design analysis study and Database Management System (DBMS) within the RENAULT company in Tetouan. (Access 2010 and SQL Database).";
        workThree.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>Realization of a website in the form of a web page of my personal CV using (HTML5, CSS3, JS, BOOTSTRAP 4).";
        lang.innerHTML = "LANGUAGES";
        langAr.innerHTML = "Arabic";
        langFr.innerHTML = "French";
        langEn.innerHTML = "English";
        langSp.innerHTML = "Spanich";
        award.innerHTML = "AWARDS & CERTIFICATES";
        awardC.innerHTML = `<i class="fas fa-trophy text-warning"></i>
                            Online course certificate "Complete Python Developer Course" - Udemy Certificate
                            <br><i class="fas fa-trophy text-warning"></i>
                            Online course certificate "Complete React JS Course - Basic to Advanced" - Udemy Certificate
                            <br><i class="fas fa-trophy text-warning"></i>
                            Online course certificate "HTML, CSS, and Javascript for Web Developers" - Coursera Certificate
                            <br><i class="fas fa-trophy text-warning"></i>
                            Online course certificate "Front-End JavaScript Frameworks: Angular" - Coursera Cerificate
                            <br><i class="fas fa-trophy text-warning"></i>
                            Certificate of participation in the chess tournament, 4<sup>th</sup>Place - University ABDELMALEK ESSAADI
                            <br><i class="fas fa-trophy text-warning"></i>
                            Certificate of participation in the football tournament, 2<sup>nd</sup>Place - University ABDELMALEK ESSAADI`;
        footer.innerHTML = "Created by A.J||Company All right reserved 2021 &copy";

    } else if (getLang === "french") {
        text.innerHTML = "Développeur web Junior";
        study.innerHTML = "Master Gestion Informatique d'Entreprise";
        name.innerHTML = "AOULAD ABDELOUARIT JALAL";
        adress.innerHTML = "Avenue Alismailia Boussafou-Tetouan";
        contact.innerHTML = "Mes contacts";
        backg.innerHTML = "PARCOUR ACADEMIQUE";
        master.innerHTML = "MASTER SPECIALISÉ";
        masterAd.innerHTML = "FSJES – TÉTOUAN, MAROC";
        masterP.innerHTML = "Master Spécialisé <b>(Gestion Informatique d'Entreprises)</b> à la Faculté des Sciences Juridiques, Economiques et Sociales de Tétouan. degré Assez bien.";
        lic.innerHTML = "LICENCE DES ÉTUDES FONDAMENTALES";
        licAd.innerHTML = "FSJES – TÉTOUAN, MAROC";
        licP.innerHTML = "Licence des études fondamentales à la Faculté des Sciences Juridiques, Economiques et Sociales de Tétouan. Spécialité <b>Sciences économiques et gestion</b>";
        bac.innerHTML = "BACCALAURÉAT";
        bacAd.innerHTML = "LYCÉE HASSAN II - TÉTOUAN, MAROC";
        bacP.innerHTML = "Baccalauréat au Lycée Hassan II à Tétouan. Série <b>Sciences expérimentales</b>";
        prof.innerHTML = "EXPÉRIENCES PROFESSIONNELLES";
        adm.innerHTML = "ASSISTANT ADMINISTRATIF ET FINANCIER";
        admT.innerHTML = "IBDAA DECOR – TÉTOUAN, MAROC";
        admP.innerHTML = "Expérience d'un an tant qu'un assistant administratif et financier au sein de la société IBDAA DECOR à Tétouan, Maroc.";
        cust.innerHTML = "CHARGÉ CLIENTÉLE";
        custT.innerHTML = "ARRAWAJ COMPANY – TÉTOUAN, MAROC";
        custP.innerHTML = "Expérience d'un an tant qu'un chargé clientéle au sein de la société ARRAWAJ à Tétouan, Maroc.";
        inter.innerHTML = "STAGE FIN D'ÉTUDE";
        interT.innerHTML = "TMPA – TANGER, MAROC";
        interP.innerHTML = "Stage fin d'étude au sein de la société Tanger Med Port Autorité à Tanger pour 4 mois.";
        skt.innerHTML = "COMPÉTENCES ET OUTILS";
        sktP.innerHTML = "Languages de programmation";
        sktF.innerHTML = "Cadres";
        workF.innerHTML = "workflow";
        workOne.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>Réalisation d'un projet de fin d'étude sous forme de tableau de bord des ressources humaines pour le service des ressources humaines de TANGER MED PORT AUTHORITY: (Microsoft Excel 2010-2013).";
        workTwo.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>Réalisation d'un projet à partir d'une étude d'analyse de conception MERISE et d'un système de gestion de bases de données (SGBD) au sein de la société RENAULT à Tétouan. (Access 2010 et base de données SQL).";
        workThree.innerHTML = "<span class='fa-li'><i class='fas fa-check'></i></span>Réalisation d'un site internet sous forme d'une page web de mon CV personnel en utilisant (HTML5, CSS3, JS, BOOTSTRAP 4).";
        lang.innerHTML = "LANGUES";
        langAr.innerHTML = "Arabe";
        langFr.innerHTML = "Français";
        langEn.innerHTML = "Anglais";
        langSp.innerHTML = "Espagnole";
        award.innerHTML = "PRIX et CERTIFICATS";
        awardC.innerHTML = `<i class="fas fa-trophy text-warning"></i>
                            Certificat de cours en ligne «Cours complet de développeur Python» - Certificat Udemy
                            <br><i class="fas fa-trophy text-warning"></i>
                            Certificat de cours en ligne «Cours complet React JS - De base à avancé» - Certificat Udemy
                            <br><i class="fas fa-trophy text-warning"></i>
                            Certificat de cours en ligne "HTML, CSS et Javascript pour les développeurs Web" - Certificat Coursera
                            <br><i class="fas fa-trophy text-warning"></i>
                            Certificat de cours en ligne "Front-End JavaScript Frameworks: Angular" - Coursera Cerificate
                            <br><i class="fas fa-trophy text-warning"></i>
                            Certificat de participation au tournoi d'échecs, 4thPlace - Université ABDELMALEK ESSAADI
                            <br><i class="fas fa-trophy text-warning"></i>
                            Certificat de participation au tournoi de football, 2ndPlace - Université ABDELMALEK ESSAADI`;
        footer.innerHTML = "Créé par A.J || Société Tous droits réservés 2021 &copy";

    } else if (getLang === "spanish") {
        text.innerHTML = "desarrollador de software junior";
        study.innerHTML = "Maestría en gestión de TI";
        name.innerHTML = "AOULAD ABDELOUARIT JALAL";
        adress.innerHTML = "Avenida Alismailia Boussafou-Tetouan";
        contact.innerHTML = "Mis contactos";
        backg.innerHTML = "CURSO ACADÉMICO";
        master.innerHTML = "MAESTRO ESPECIALIZADO";
        masterAd.innerHTML = "FSJES – TETOUAN, MARRUECOS";
        masterP.innerHTML = "Máestro especializado <b> (Gestión informática de empresas) </b> en la Facultad de Ciencias Jurídicas, Económicas y Sociales de Tetuán. Grado Bastante bien.";
        lic.innerHTML = "ESTUDIOS FUNDAMENTALES DE LICENCIADA";
        licAd.innerHTML = "FSJES – TETOUAN, MARRUECOS"; 
        licP.innerHTML = "Licenciada en Estudios Fundamentales por la Facultad de Ciencias Jurídicas, Económicas y Sociales de Tetuán, <b> rama Economía y Gestión </b>.";
        bac.innerHTML = "BACHILLERATO";
        bacAd.innerHTML = "ESCUELA SECUNDARIA HASSAN II – TETOUAN, MARRUECOS";
        bacP.innerHTML = "Bachillerato del instituto Hassan II de Tetuán, ciclo <b> Ciencias Experimentales </b>.";
        prof.innerHTML = "EXPERIENCIAS PROFESIONALES";
        adm.innerHTML = "ASISTENTE ADMINISTRATIVO Y FINANCIERO";
        admT.innerHTML = "IBDAA DECOR – TETOUAN, MARRUECOS";
        admP.innerHTML = "Experiencia de un año como asistente administrativo y financiero, dentro de la empresa IBDAA DECOR en Tetuán, Marruecos.";
        cust.innerHTML = "Asesor de servicio al cliente";
        custT.innerHTML = "ARRAWAJ COMPANY – TETOUAN, MARRUECOS";
        custP.innerHTML = "Experiencia de un año como asesor de atención al cliente, dentro de la empresa ARRAWAJ en Tetuán, Marruecos.";
        inter.innerHTML = "PRÁCTICAS AL FINAL DE MI ESCUELA";
        interT.innerHTML = "TMPA – TANGER, MARRUECOS";
        interP.innerHTML = "Prácticas fin de estudios en la empresa Tanger Med Port Authority (TMPA) de Tánger durante 4 meses.";
        skt.innerHTML = "HABILIDADES Y HERRAMIENTAS";
        sktP.innerHTML = "Lenguajes de programación";
        sktF.innerHTML = "Frameworks";
        workF.innerHTML = "Flujo de trabajo";
        workOne.innerHTML = "<span class = 'fa-li'> <i class = 'fas fa-check'> </i> </span> Realización de un proyecto de fin de estudios en forma de Panel de Recursos Humanos para el departamento de recursos humanos de AUTORIDAD DEL PUERTO TANGER MED: (Microsoft Excel 2010-2013).";
        workTwo.innerHTML = "<span class = 'fa-li'> <i class = 'fas fa-check'> </i> </span> Realización de un proyecto utilizando un estudio de análisis de diseño MERISE y un Sistema de Gestión de Base de Datos (DBMS) dentro de la empresa RENAULT en Tetuán. (Access 2010 y Base de datos SQL).";
        workThree.innerHTML = "<span class = 'fa-li'> <i class = 'fas fa-check'> </i> </span> Realización de un sitio web en forma de página web de mi CV personal usando (HTML5, CSS3, JS, BOOTSTRAP 4).";
        lang.innerHTML = "IDIOMAS";
        langAr.innerHTML = "Arábica";
        langFr.innerHTML = "Francés";
        langEn.innerHTML = "Inglés";
        langSp.innerHTML = "Español";
        award.innerHTML = "PREMIOS Y CERTIFICADOS";
        awardC.innerHTML = `<i class = "fas fa-trophy text-warning"> </i>
                            Certificado de curso en línea "Curso completo para desarrolladores de Python" - Certificado de Udemy
                            <br> <i class = "fas fa-trophy text-warning"> </i>
                            Certificado de curso en línea "Curso completo de React JS - Básico a avanzado" - Certificado Udemy
                            <br> <i class = "fas fa-trophy text-warning"> </i>
                            Certificado de curso en línea "HTML, CSS y Javascript para desarrolladores web" - Certificado de Coursera
                            <br> <i class = "fas fa-trophy text-warning"> </i>
                            Certificado de curso en línea "Frameworks JavaScript Front-End: Angular" - Certificado de Coursera
                            <br> <i class = "fas fa-trophy text-warning"> </i>
                            Certificado de participación en el torneo de ajedrez, 4 <sup> th </sup> Lugar - Universidad ABDELMALEK ESSAADI
                            <br> <i class = "fas fa-trophy text-warning"> </i>
                            Certificado de participación en el torneo de fútbol, ​​2 <sup> nd </sup> Lugar - Universidad ABDELMALEK ESSAADI`;
        footer.innerHTML = "Creado por A.J || Compañía Todos los derechos reservados 2021 &copy";
    }
}
