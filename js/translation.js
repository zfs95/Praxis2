document.addEventListener('DOMContentLoaded', function() {
    // Language translations
    const translations = {
        de: {
            // Header section
            call_phone: "+49 04965343",
            call_email: "email@adresse.de",
            
            // Navigation
            nav_home: "Startseite",
            nav_about: "Über uns",
            nav_contact: "Kontakt",
            
            // Banner section
            banner_title: "Ihre Gesundheit liegt uns am Herzen",
            banner_text: "In unserer Praxis bieten wir Ihnen umfassende medizinische Versorgung und individuelle Betreuung und Behandlung. Ob allgemeine Gesundheitsvorsorge oder spezialisierte Behandlungen – wir sind für Sie da.",
            banner_read_more: "Mehr lesen",
            
            // About section
            about_title: "Über die Praxis",
            about_text: "Unsere Praxis konzentriert sich auf die allgemeine medizinische Versorgung von Patienten. In einer freundlichen und barrierefreien Umgebung bieten wir Ihnen kompetente und individuelle Betreuung und Behandlung. Unser Team, unter der Leitung eines erfahrenen Hausarztes, hilft Ihnen bei der Diagnose und Behandlung häufiger Gesundheitsprobleme. Wir legen großen Wert auf eine vertrauensvolle Beziehung zu unseren Patienten und bieten eine umfassende Betreuung und Behandlung in allen alltäglichen Gesundheitsfragen.",
            about_read_more: "Mehr lesen",
            
            // Treatment section
            treatment_title: "Medizinische Leistungen",
            treatments: [
                {
                    number: "01",
                    title: "Allgemeine Gesundheitsvorsorge",
                    text: "Umfassende Behandlung und Betreuung der Patienten, unter Berücksichtigung ihres familiären und sozialen Umfeldes, in Notfall-, Akut- und Langzeitversorgungssituationen."
                },
                {
                    number: "02",
                    title: "Diagnose und Behandlung häufiger Erkrankungen",
                    text: "Behandlung von Beschwerden wie Erkältungen, Infektionen, Bluthochdruck und anderen häufig auftretenden Gesundheitsproblemen."
                },
                {
                    number: "03",
                    title: "Impfungen und Reiseberatung",
                    text: "Beratung zu Schutzimpfungen und individuelle Gesundheitsberatung für Reisen."
                },
                {
                    number: "04",
                    title: "Familienmedizin",
                    text: "Umfassende Betreuung und Behandlung von Patienten einschließlich Erwachsene und Senioren."
                }
            ],
            
            // Contact section
            location_text_title: "Standort",
            language_text_header: "Limbă",
            praxis_services_text : "Medizinische Dienstleistungen",
            
            // Footer section
            footer_address: "Adresse",
            footer_useful_links: "Nützliche Links",
            footer_useful_links_home: "Startseite",
            footer_useful_links_about_us: "Über uns",
            footer_useful_links_contact: "Kontakt",
            footer_help_support: "Hilfe & Unterstützung",
            footer_help_text: "Im Gegensatz zur Verwendung von „Inhalt hier, Inhalt hier“, wodurch es wie lesbares Deutsch aussieht. Viele Desktop-Publishing-Pakete und Webseiten.",
            footer_schedule_text: "Öffnungszeiten",
            footer_closed_text: "Geschlossen",
            footer_monday_text: "Montag: ",
            footer_tuesday_text: "Dienstag: ",
            footer_wednesday_text: "Mittwoch: ",
            footer_thursday_text: "Donnerstag: ",
            footer_friday_text: "Freitag: ",
            footer_saturday_text: "Samstag: ",
            footer_sunday_text: "Sonntag: "
        },
        ro: {
            // Header section
            call_phone: "+49 04965343",
            call_email: "email@adresse.de",
            
            // Navigation
            nav_home: "Acasă",
            nav_about: "Despre noi",
            nav_contact: "Contact",
            
            // Banner section
            banner_title: "Grija noastră, sănătatea dumneavoastră",
            banner_text: "La cabinetul nostru, vă oferim servicii medicale complete și îngrijire personalizată. Indiferent dacă este vorba de prevenție sau tratamente specializate, suntem aici pentru dumneavoastră.",
            banner_read_more: "Citește mai mult",
            
            // About section
            about_title: "Despre cabinetul medical",
            about_text: "Cabinetul nostru se concentrează pe îngrijirea medicală generală a pacienților. Într-un mediu prietenos și accesibil, vă oferim asistență și tratament competent și personalizat. Echipa noastră, sub conducerea unui medic de familie experimentat, vă ajută în diagnosticarea și tratarea problemelor comune de sănătate. Punem un mare accent pe o relație de încredere cu pacienții noștri și oferim îngrijire și tratament complet pentru toate problemele cotidiene de sănătate.",
            about_read_more: "Citește mai mult",
            
            // Treatment section
            treatment_title: "Servicii medicale oferite",
            treatments: [
                {
                    number: "01",
                    title: "Îngrijire generală a sănătății",
                    text: "Tratament și îngrijire cuprinzătoare a pacienților, ținând cont de contextul lor familial și social, în situații de urgență, acute și de îngrijire pe termen lung."
                },
                {
                    number: "02",
                    title: "Diagnostic și tratament pentru afecțiuni comune",
                    text: "Tratamentul afecțiunilor frecvente, precum răcelile, infecțiile, hipertensiunea și alte probleme de sănătate des întâlnite."
                },
                {
                    number: "03",
                    title: "Vaccinări și consiliere pentru călătorii",
                    text: "Consiliere privind vaccinările necesare și sfaturi de sănătate personalizate pentru călătorii."
                },
                {
                    number: "04",
                    title: "Medicină de familie",
                    text: "Îngrijire și tratament complet pentru pacienți, inclusiv adulți și seniori."
                }
            ],
            
            // Contact section
            location_text_title: "Locație",
            language_text_header: "Sprache",
            praxis_services_text : "Servicii Medicale",
            
            // Footer section
            footer_address: "Adresă",
            footer_useful_links: "Link-uri utile",
            footer_useful_links_home: "Acasă",
            footer_useful_links_about_us: "Despre noi",
            footer_useful_links_contact: "Contact",
            footer_help_support: "Ajutor și suport",
            footer_help_text: "S-a opus folosirii „Conținut aici, conținut aici”, făcându-l să pară ca o engleză lizibilă. Multe pachete de desktop publishing și pagini web",
            footer_schedule_text: "Program",
            footer_closed_text: "Închis",
            footer_monday_text: "Luni: ",
            footer_tuesday_text: "Marți: ",
            footer_wednesday_text: "Miercuri: ",
            footer_thursday_text: "Joi: ",
            footer_friday_text: "Vineri: ",
            footer_saturday_text: "Sâmbătă: ",
            footer_sunday_text: "Duminică: "
        }
    };

    // Function to apply translations
    function applyTranslations(lang) {
        if (!translations[lang]) return;
        const currentLang = translations[lang];

        try {
            const locationTileHeader = document.getElementById('location_header');
            if (locationTileHeader) locationTileHeader.textContent = currentLang.location_text_title;

            const languageLabelHeader = document.getElementById('language_label_header');
            if (languageLabelHeader) languageLabelHeader.textContent = currentLang.language_text_header;

            // Header nav links
            const navLinks = document.querySelectorAll('.nav-link');
            if (navLinks.length >= 3) {
                navLinks[0].textContent = currentLang.nav_home;
                navLinks[1].textContent = currentLang.nav_about;
                navLinks[2].textContent = currentLang.nav_contact;
            }

            // Custom menu links
            const customMenuLinks = document.querySelectorAll('.custom_menu ul li a');
            if (customMenuLinks.length >= 3) {
                customMenuLinks[0].textContent = currentLang.nav_home;
                customMenuLinks[1].textContent = currentLang.nav_about;
                customMenuLinks[2].textContent = currentLang.nav_contact;
            }

            // Banner section
            const bannerTitle = document.querySelector('.banner_taital');
            if (bannerTitle) bannerTitle.textContent = currentLang.banner_title;
            const bannerText = document.querySelector('.banner_text');
            if (bannerText) bannerText.textContent = currentLang.banner_text;
            const bannerReadMore = document.querySelector('.banner_section .read_bt a');
            if (bannerReadMore) bannerReadMore.textContent = currentLang.banner_read_more;

            // About section
            const aboutTitle = document.querySelector('.about_taital');
            if (aboutTitle) aboutTitle.textContent = currentLang.about_title;
            const aboutText = document.querySelector('.about_text');
            if (aboutText) aboutText.textContent = currentLang.about_text;
            const aboutReadMore = document.querySelector('.about_section .about_bt a');
            if (aboutReadMore) aboutReadMore.textContent = currentLang.about_read_more;

            // Treatment section
            const treatmentBoxes = document.querySelectorAll('.treatment_section_2 .row .col-lg-3');
            if (treatmentBoxes.length === currentLang.treatments.length) {
                treatmentBoxes.forEach((box, index) => {
                    const treatment = currentLang.treatments[index];
                    const numberText = box.querySelector('.number_text');
                    const careText = box.querySelector('.care_text');
                    const treatmentText = box.querySelector('.treatment_text, .treatment_text_1');
                    if (numberText) numberText.textContent = treatment.number;
                    if (careText) careText.textContent = treatment.title;
                    if (treatmentText) treatmentText.textContent = treatment.text;
                });
            }

            const praxisService = document.getElementById('praxis_services');
            if (praxisService) praxisService.textContent = currentLang.praxis_services_text;

            const locationTileFooter = document.getElementById('location_footer');
            if (locationTileFooter) locationTileFooter.textContent = currentLang.location_text_title;

            // Footer useful links
            const footerUsefulLinksTitle = document.getElementById('helpfulLinks');
            if (footerUsefulLinksTitle) footerUsefulLinksTitle.textContent = currentLang.footer_useful_links;
            const footerUsefulLinksTitleHome = document.getElementById('home');
            if (footerUsefulLinksTitleHome) footerUsefulLinksTitleHome.textContent = currentLang.footer_useful_links_home;
            const footerUsefulLinksTitleAbout = document.getElementById('about');
            if (footerUsefulLinksTitleAbout) footerUsefulLinksTitleAbout.textContent = currentLang.footer_useful_links_about_us;
            const footerUsefulLinksTitleContact = document.getElementById('contact');
            if (footerUsefulLinksTitleContact) footerUsefulLinksTitleContact.textContent = currentLang.footer_useful_links_contact;

            const footerSchedule = document.getElementById('schedule');
            if (footerSchedule) footerSchedule.textContent = currentLang.footer_schedule_text;
            const footerMondayText = document.getElementById('monday');
            if (footerMondayText) footerMondayText.textContent = currentLang.footer_monday_text;
            const footerTuesdayText = document.getElementById('tuesday');
            if (footerTuesdayText) footerTuesdayText.textContent = currentLang.footer_tuesday_text;
            const footerWednesdayText = document.getElementById('wednesday');
            if (footerWednesdayText) footerWednesdayText.textContent = currentLang.footer_wednesday_text;
            const footerThursdayText = document.getElementById('thursday');
            if (footerThursdayText) footerThursdayText.textContent = currentLang.footer_thursday_text;
            const footerFridayText = document.getElementById('friday');
            if (footerFridayText) footerFridayText.textContent = currentLang.footer_friday_text;
            const footerSaturdayText = document.getElementById('saturday');
            if (footerSaturdayText) footerSaturdayText.textContent = currentLang.footer_saturday_text;
            const footerSundayText = document.getElementById('sunday');
            if (footerSundayText) footerSundayText.textContent = currentLang.footer_sunday_text;
            const footerClosedSaturdayText = document.getElementById('saturday_closed');
            if (footerClosedSaturdayText) footerClosedSaturdayText.textContent = currentLang.footer_closed_text;
            const footerClosedSundayText = document.getElementById('sunday_closed');
            if (footerClosedSundayText) footerClosedSundayText.textContent = currentLang.footer_closed_text;

            const footerAddressTitle = document.getElementById('address');
            if (footerAddressTitle) footerAddressTitle.textContent = currentLang.footer_address;

            console.log(`Language switched to ${lang}`);
        } catch (error) {
            console.error('Error switching language:', error);
        }
    }

    // Function to switch language
    window.switchLanguage = function(lang) {
        localStorage.setItem('selectedLanguage', lang);
        applyTranslations(lang);

        const langDeImg = document.getElementById('lang-de');
        const langRoImg = document.getElementById('lang-ro');
        if (lang === 'de') {
            langDeImg.style.display = 'none';
            langRoImg.style.display = 'inline-block';
        } else if (lang === 'ro') {
            langDeImg.style.display = 'inline-block';
            langRoImg.style.display = 'none';
        }
    };

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'de';
    applyTranslations(savedLanguage);

    const languageImages = document.querySelectorAll('.call_text_3 img');
    languageImages.forEach(img => {
        img.addEventListener('click', function() {
            const lang = this.getAttribute('alt').toLowerCase();
            switchLanguage(lang);
        });
    });
});

document.getElementById('scroll-to-bottom').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
