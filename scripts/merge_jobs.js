const fs = require('fs');
const path = require('path');

// Existing jobs
const existingJobs = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/jobs.json'), 'utf8'));
const maxId = Math.max(...existingJobs.map(j => j.id));

// Scraped data from Firecrawl (keeping content exactly as returned)
const scrapedJobs = [
    {
        "apply_url": "https://ngojobsinafrica.com/job/it-operations-assistant-4/",
        "employment_type": "Contract (On-site)",
        "full_description": "**Duties**\n\n- Accurately document instances of hardware failure, repair, installation and removal and pass them to the Supervisor where necessary.\n- Repair computers, peripherals, network equipment, software, printers and A/V systems that require specialized computer and electronic repair skills to maintain computer and network equipment safely and in a functional operating system.\n- Perform desktop fixes, including installing, upgrading, configuring parameters, systems and application software and ensure that the anti-virus software and virus definitions are up-to-date.\n- Work on assigned tickets already logged via the institutional helpdesk – Freshworks\n- Log, receive and respond to incident/ request/ problem on Freshworks.\n- Follow-up on all tickets assigned and from end-user to completion and resolutions.\n- Ensure that all requests and enquiries on IT matters and activities are promptly attended to and closed correctly with the appropriate response to the satisfaction of the customer.\n- Work with end-users to identify and deliver required PC service levels.\n- Asses malfunction of computer hardware of software applications to determine appropriate action to maintain computer and network operations.\n- Perform any other duty as may be directed by the Supervisor.\n\n**Requirements**\n\nQualification:\n\n- HND / Bachelor's Degree in Computer Science / Engineering, Electrical/ Mechanical Engineering, Information Technology or related field with a minimum of two (2) years' experience performing a similar role in a well-structured environment.\n\nCompetencies:\n\n- The ideal candidate must:\n  - Display excellent client relation, and Management\n  - Have good Customer Services, Relation and communication skills.\n  - Have sound knowledge of Microsoft Client Technologies Management Windows (10,11) and MacOS.\n\n**Remuneration**\n\n- We offer highly competitive salary with equally attractive benefits and excellent working conditions in a pleasant campus environment.",
        "location": "Ibadan, Oyo",
        "organization": "International Institute of Tropical Agriculture",
        "requirements": [
            "HND / Bachelor's Degree in Computer Science / Engineering, Electrical/ Mechanical Engineering, Information Technology or related field with a minimum of two (2) years' experience performing a similar role in a well-structured environment.",
            "The ideal candidate must:",
            "Display excellent client relation, and Management",
            "Have good Customer Services, Relation and communication skills.",
            "Have sound knowledge of Microsoft Client Technologies Management Windows (10,11) and MacOS."
        ],
        "responsibilities": [
            "Accurately document instances of hardware failure, repair, installation and removal and pass them to the Supervisor where necessary.",
            "Repair computers, peripherals, network equipment, software, printers and A/V systems that require specialized computer and electronic repair skills to maintain computer and network equipment safely and in a functional operating system.",
            "Perform desktop fixes, including installing, upgrading, configuring parameters, systems and application software and ensure that the anti-virus software and virus definitions are up-to-date.",
            "Work on assigned tickets already logged via the institutional helpdesk – Freshworks",
            "Log, receive and respond to incident/ request/ problem on Freshworks.",
            "Follow-up on all tickets assigned and from end-user to completion and resolutions.",
            "Ensure that all requests and enquiries on IT matters and activities are promptly attended to and closed correctly with the appropriate response to the satisfaction of the customer.",
            "Work with end-users to identify and deliver required PC service levels.",
            "Asses malfunction of computer hardware of software applications to determine appropriate action to maintain computer and network operations.",
            "Perform any other duty as may be directed by the Supervisor."
        ],
        "title": "IT Operations Assistant",
        "posted_date": "February 14, 2026",
        "closing_date": "February 21, 2026"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/country-data-collection-team-leads-libya-somalia-kenya-opt-gaza/",
        "closing_date": "Rolling basis",
        "employment_type": "Consultancy (daily-rate based)",
        "full_description": "Key Responsibilities\n\n- Recruit, train, and supervise field enumerators.\n- Maintain an active roster of trained enumerators for rapid deployment.\n- Coordinate and oversee all in-country data-collection activities.\n- Ensure compliance with national legal requirements for research and data collection.\n- Plan field logistics, transportation, permissions, and access arrangements.\n- Ensure adherence to ethical standards, informed consent, and data-protection protocols.\n- Monitor daily data-collection quality, completeness, and timeliness.\n- Review datasets and provide technical feedback to enumerators.\n- Produce concise field updates and incident reports.\n- Serve as the primary coordination focal point between Ektimisi and in-country teams.\n- Participate in technical and operational coordination meetings.\n- Support contextual analysis and contribute to reporting when required.\n\nMandatory Eligibility Criteria\n\nApplicants must demonstrate:\n\n- Legal registration (organization or company) permitting research and data-collection activities in Libya, Somalia, Kenya, or Gaza.\n- Operational field team with proven capacity to conduct surveys, KIIs, FGDs, or similar data-collection methodologies.\n- Minimum 4 years of field coordination or research implementation experience in humanitarian or development contexts.\n- Proven experience managing enumerators and supervising field data collection.\n- Fluency in relevant local language(s) and working English.\n- Strong experience with digital data-collection platforms (e.g., KoboToolbox) and Excel-based data review.\n- Demonstrated engagement with local authorities, communities, and stakeholders.\n- University degree in social sciences, development, or related discipline (preferred).",
        "location": "Kenya, Libya, Somalia",
        "organization": "Ektimisi",
        "title": "Country Data Collection Team Leads – Libya, Somalia, Kenya, OPT (Gaza)",
        "posted_date": "February 14, 2026",
        "requirements": [
            "Legal registration (organization or company) permitting research and data-collection activities in Libya, Somalia, Kenya, or Gaza.",
            "Operational field team with proven capacity to conduct surveys, KIIs, FGDs, or similar data-collection methodologies.",
            "Minimum 4 years of field coordination or research implementation experience in humanitarian or development contexts.",
            "Proven experience managing enumerators and supervising field data collection.",
            "Fluency in relevant local language(s) and working English.",
            "Strong experience with digital data-collection platforms (e.g., KoboToolbox) and Excel-based data review.",
            "Demonstrated engagement with local authorities, communities, and stakeholders.",
            "University degree in social sciences, development, or related discipline (preferred)."
        ],
        "responsibilities": [
            "Recruit, train, and supervise field enumerators.",
            "Maintain an active roster of trained enumerators for rapid deployment.",
            "Coordinate and oversee all in-country data-collection activities.",
            "Ensure compliance with national legal requirements for research and data collection.",
            "Plan field logistics, transportation, permissions, and access arrangements.",
            "Ensure adherence to ethical standards, informed consent, and data-protection protocols.",
            "Monitor daily data-collection quality, completeness, and timeliness.",
            "Review datasets and provide technical feedback to enumerators.",
            "Produce concise field updates and incident reports.",
            "Serve as the primary coordination focal point between Ektimisi and in-country teams.",
            "Participate in technical and operational coordination meetings.",
            "Support contextual analysis and contribute to reporting when required."
        ]
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/information-and-communications-technology-ict-officer-p2-ndjamena-chad/",
        "employment_type": "Full Time",
        "full_description": "Responsibilities\n\n1. Supervise missions' ICT team members and coordinate daily activities of the Information and Communications Technology (ICT) Unit for the mission.\n2. Ensure adherence to IOM standard, Policies, and guidelines with regards to network systems, IT security, software licensing, telecoms, and ICT procurement.\n3. Facilitate the implementation and compliance of the cyber security program.\n4. Liaise with the IMT Officer for the adequate and timely provision of ICT and Information management solutions.\n5. Ensure the required performance and stability of network services and servers.\n6. Ensure the adequate IT infrastructure performance for mission-critical and CAS operations applications.\n7. Facilitate the in-house development of required database information systems.\n8. Produce and implement ICT training to end users.\n9. Implement the improvements to mission IT Infrastructure.\n10. Facilitate the implementation of the ICT strategy in the Chad mission.\n11. Liaise with Logistics and Procurement staff to facilitate ICT-related procurement.\n12. Provide training to ICT team members and other staff.\n13. Perform such other duties as may be assigned.\n\nRequired Qualifications:\n- Master's degree in Computer Science, Information Management, Information Technology, or a related field with two years of relevant experience; or University degree with four years of experience.\n- Experience in Microsoft Windows network environment (LAN/WAN) and first-level network/desktop support.\n- Experience working with an international organization in a field location.\n- Knowledge of database information systems and data processing tools.\n- Extensive knowledge of Microsoft power platform and 365 cloud-based applications.",
        "location": "N'Djamena, Chad",
        "organization": "International Organization for Migration (IOM)",
        "requirements": [
            "Master's degree in Computer Science, Information Management, Information Technology, or a related field from an accredited academic institution with two years of relevant professional experience; or,",
            "University degree in the above fields with four years of relevant professional experience."
        ],
        "responsibilities": [
            "Supervise missions' ICT team members and coordinate daily activities of the Information and Communications Technology (ICT) Unit for the mission, ensuring that all requests are addressed timely and accurately, and that all daily operations are in compliance with IOM ICT Standards.",
            "Ensure adherence to IOM standard, Policies, and guidelines with regards to network systems, IT security, software licensing, telecoms, and ICT procurement.",
            "Facilitate the implementation and compliance of the cyber security program and other required compliance with donor and operational frameworks and standards.",
            "Liaise with the IMT Officer for the adequate and timely provision of ICT and Information management solutions and services to meet operational needs.",
            "Ensure the required performance and stability of network services and servers (LAN, WAN, Messaging, O365, internet connectivity, etc.), to prevent and minimize downtime or service interruptions.",
            "Ensure the adequate IT infrastructure performance for mission-critical and CAS operations applications, corporate applications such as STAR, MiMOSA, E-medical, PRISM, Intranet etc.",
            "Facilitate the in-house development of required database information systems to support mission operations.",
            "Produce and implement, when necessary, ICT training to end users, data entry operators and enumerators.",
            "In close coordination with the IMT Officer, implement the improvements to mission IT Infrastructure and the provision of services for the efficient functioning of mission operations.",
            "Facilitate the implementation of the ICT strategy in the Chad mission and actively coordinate ICT solutions or project components to meet the IT architecture review and other ICT frameworks.",
            "In close coordination with IMT Officer, liaise with Logistics and Procurement staff to facilitate the proper provision of ICT-related equipment/supplies/services and propose most suitable solutions.",
            "Provide training to ICT team members and other staff in the Mission.",
            "Perform such other duties as may be assigned."
        ],
        "title": "Information and Communications Technology (ICT) Officer (P2) N'Djamena, Chad",
        "posted_date": "February 12, 2026",
        "closing_date": "February 24, 2026"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/digital-and-innovation-assistant/",
        "employment_type": "Fixed Term",
        "full_description": "Position Summary\n\nThe Digital and Innovation Assistant will support the SMART Centre Project by managing digital systems, driving technology-based solutions, and providing training to staff, farmer cooperatives, and other stakeholders. This role ensures the effective use of digital tools, promotes digital literacy, and oversees all project digital activities, including the management of the computer training lab.\n\nBe able to trouble shoot all ICT related functions for the Centre as well as backstopping for the entire country office locations when required.\n\nKey Roles and Responsibilities:\n1. Digital Systems and Innovation Management\n2. Training and Capacity Building\n3. Computer Lab Management\n4. Data Management and Reporting\n5. Support Functions",
        "location": "Uganda",
        "organization": "ForAfrika",
        "title": "Digital and Innovation Assistant",
        "posted_date": "February 11, 2026",
        "closing_date": "February 19, 2026",
        "requirements": [
            "Diploma or bachelor's degree in information technology, Computer Science, Digital Innovation, Business Information Systems, or a related field.",
            "At least 2 years of experience in digital systems management, IT support, training, or innovation-related roles.",
            "Experience in NGOs, community development, or agricultural projects is preferred.",
            "Experience training adult learners, farmer groups, or community stakeholders in digital skills.",
            "Strong digital literacy and proficiency in software applications (MS Office, Google Workspace, digital apps).",
            "Experience in digital marketing and online communication tools.",
            "Ability to train and support staff, farmer groups, and stakeholders in technology adoption.",
            "Basic IT troubleshooting and lab management skills.",
            "Strong organizational, reporting, and multitasking skills.",
            "Problem-solving mindset and ability to implement innovative solutions."
        ],
        "responsibilities": [
            "Maintain, update, and secure project digital platforms, databases, and tools.",
            "Oversee all digital activities within the project to ensure efficiency and innovation.",
            "Identify opportunities to improve project processes through technology and digital solutions.",
            "Train staff, farmer cooperatives/groups, and other stakeholders on computer technology basics, digital marketing techniques, and use of digital apps and platforms.",
            "Promote digital literacy and innovation among project participants.",
            "Manage the computer training lab, including scheduling, maintenance, and security of equipment.",
            "Collect, organize, and maintain project data in digital formats.",
            "Prepare digital reports, dashboards, and visualizations to support decision-making.",
            "Assist with digital communications, online outreach, and social media where necessary.",
            "Support procurement, logistics, and administrative functions with digital tracking and reporting."
        ]
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/information-management-officer-59/",
        "employment_type": "Temporary Appointment",
        "full_description": "To qualify as an advocate for every child you will have:\n\nEducational Qualification:\n- University Degree in Nutrition, Public Health, Epidemiology, Statistics or computer science/engineering or a related field with a nutrition focus.\n\nExperience:\n- Minimum of 2 years of professional experience in public health, nutrition, knowledge/data management or related field.\n- Strong knowledge of the programme and operating context in Northeast Nigeria is highly desirable.\n- Experience of nutrition data collection, with extensive experience compiling and analyzing quantitative and qualitative data.\n- Proven experience in synthesizing relevant nutrition-related information and developing reports.",
        "location": "Maiduguri, Borno, Nigeria",
        "organization": "United Nations Children's Fund (UNICEF)",
        "requirements": [
            "University Degree in Nutrition, Public Health, Epidemiology, Statistics or computer science/engineering or a related field with a nutrition focus.",
            "Minimum of 2 years of professional experience in public health, nutrition, knowledge /data management or related field in the country, experience of working in a humanitarian context and UN agencies will be an asset.",
            "Strong knowledge of, and working familiarity with, the programme and operating context in Northeast Nigeria is highly desirable.",
            "Experience of nutrition data collection, with extensive experience, compiling and analyzing quantitative and qualitative data and producing relevant graphical presentations of analysed data is mandatory.",
            "Proven experience in synthesizing relevant nutrition-related information and developing reports on time against set deadlines for the dissemination of key findings to technical and non-technical audiences is required.",
            "Fluency in English is required. Knowledge of the working language of the duty station as an asset."
        ],
        "responsibilities": [],
        "title": "Information Management Officer",
        "posted_date": "February 7, 2026",
        "closing_date": "February 18, 2026"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/tupande-sap-admin-ops-qc-coordinator/",
        "employment_type": "Fixed Term",
        "location": "Kenya",
        "organization": "One Acre Fund",
        "title": "Tupande SAP Admin & Ops QC Coordinator",
        "posted_date": "February 7, 2026",
        "closing_date": "February 28, 2026"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/tupande-sap-data-entry-and-operations-admin-senior-officer-fixed-term/",
        "employment_type": "Full Time",
        "location": "Kenya",
        "organization": "One Acre Fund",
        "title": "Tupande SAP Data Entry and Operations Admin – Senior Officer (Fixed-Term)",
        "posted_date": "February 7, 2026",
        "closing_date": "April 1, 2026"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/fews-net-uganda-country-technical-senior-specialist-conflict/",
        "employment_type": "Fixed Term",
        "location": "Uganda",
        "organization": "Chemonics International Inc",
        "title": "FEWS NET Uganda Country Technical Senior Specialist – Conflict",
        "posted_date": "February 5, 2026",
        "closing_date": "February 18, 2026"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/case-management-data-senior-specialist/",
        "employment_type": "Full Time",
        "location": "Kenya",
        "organization": "International Rescue Committee",
        "title": "Case Management Data Senior Specialist",
        "posted_date": "February 4, 2026",
        "closing_date": "March 4, 2026"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/application-manager-single-data-entry-sde/",
        "employment_type": "Fixed Term",
        "location": "Kenya",
        "organization": "Médecins Sans Frontières",
        "title": "Application Manager – Single Data Entry (SDE)",
        "posted_date": "February 3, 2026",
        "closing_date": "February 17, 2026"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/strategic-information-advisor-15/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "Strategic Information Advisor"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/senior-officer-graphic-designer/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "Senior Officer Graphic Designer"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/business-analyst-39/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "Business Analyst"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/uganda-data-and-systems-lead-fixed-term-2/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "Uganda Data and Systems Lead (Fixed Term)"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/uganda-data-and-systems-lead-fixed-term/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "Uganda Data and Systems Lead (Fixed Term)"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/global-client-data-intern/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "Global Client Data Intern"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/senior-information-technology-and-information-management-associate/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "Senior Information Technology and Information Management Associate"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/ict-officer-27/",
        "employment_type": "Full Time",
        "location": "Nairobi, Kenya",
        "organization": "RCK",
        "title": "ICT Officer",
        "salary_range": "Kshs. 100,000 to Kes. 115,000/-"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/rfp-provision-of-information-communication-and-technology-audit-and-review-services/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "RFP: Provision of Information Communication and Technology Audit and Review Services"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/crm-data-specialist/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "International Rescue Committee",
        "title": "CRM Data Specialist"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/terms-of-reference-consultancy-for-the-development-of-the-somalia-partnership-compact/",
        "employment_type": "N/A",
        "location": "N/A",
        "organization": "N/A",
        "title": "Terms of Reference: Consultancy for the Development of the Somalia Partnership Compact"
    },
    {
        "apply_url": "https://ngojobsinafrica.com/job/senior-information-management-officer-team-lead-cameroon/",
        "employment_type": "N/A",
        "location": "Cameroon",
        "organization": "iMMAP",
        "title": "Senior Information Management Officer – Team Lead (Cameroon)"
    }
];

// Transform scraped jobs to match app's schema
const newJobs = scrapedJobs.map((job, index) => ({
    id: maxId + index + 1,
    title: job.title,
    organization: job.organization || "N/A",
    location: job.location || "N/A",
    description: job.full_description ? job.full_description.substring(0, 500) : "N/A",
    full_description: job.full_description || "N/A",
    requirements: job.requirements || [],
    responsibilities: job.responsibilities || [],
    salary_range: job.salary_range || "N/A",
    employment_type: job.employment_type || "N/A",
    language: "en",
    apply_url: job.apply_url,
    created_at: job.posted_date || "N/A",
    closing_date: job.closing_date || "N/A"
}));

const allJobs = [...existingJobs, ...newJobs];

fs.writeFileSync(
    path.join(__dirname, '../src/data/jobs.json'),
    JSON.stringify(allJobs, null, 2),
    'utf8'
);

console.log(`Done! Added ${newJobs.length} new jobs. Total: ${allJobs.length} jobs.`);
