export const profile = {
  name: 'Anupam Prakash',
  title: 'Senior .NET Developer',
  roles: ['Senior .NET Developer', 'Full-Stack Engineer', 'Back-Office & Kiosk Builder', 'Gen AI Explorer'],
  tagline: 'Building scalable back-office & enterprise applications',
  location: 'Mississauga, Ontario, Canada',
  linkedin: 'https://www.linkedin.com/in/ap2134',
  openTo: 'Open to Senior Developer, Tech Lead, and Full-Stack .NET roles in Ontario.',
  about: [
    'Senior .NET Developer with 8+ years of experience designing and building back-office platforms, POS systems, and enterprise web applications across Canada and India.',
    'At Diamond Game Enterprises I lead full-stack development of mission-critical gaming and kiosk platforms used across multiple provinces. I have worked across the full lifecycle, from requirements and system design to deployment and production support.',
    'I have also led cross-functional teams and managed stakeholder communication in contract project management roles. Currently learning my way around LLMs and Gen AI.',
  ],
  stats: [
    { label: 'Years Experience', value: 8, suffix: '+' },
    { label: 'Companies', value: 3, suffix: '' },
    { label: 'Internships', value: 3, suffix: '' },
    { label: 'Contracts', value: 2, suffix: '' },
    { label: 'Certifications', value: 2, suffix: '' },
    { label: 'Coding Awards', value: 2, suffix: '' },
  ],
  skills: {
    "Languages": [
        "C#",
        "C",
        "C++",
        "Java",
        "Visual Basic .NET",
        "JavaScript",
        "HTML",
        "T-SQL",
        "SQL",
        "LINQ"
    ],
    ".NET & Web": [
        ".NET Framework",
        ".NET Core",
        "ASP.NET",
        "ASP.NET Core",
        "ASP.NET MVC",
        "ASP.NET Web API",
        "Blazor",
        "REST APIs",
        "Web Development",
        "JSP"
    ],
    "Desktop & Data Access": [
        "WPF",
        "WinForms",
        "WCF",
        "ADO.NET",
        "Entity Framework"
    ],
    "Database": [
        "Microsoft SQL Server",
        "Stored Procedures",
        "Databases",
        "Optimization"
    ],
    "Domain": [
        "Kiosk Development",
        "POS Systems",
        "Back Office Applications",
        "Full-Stack Development",
        "Software Development",
        "Xcode"
    ],
    "AI": ["Generative AI", "LLMs", "Prompt Engineering", "AI-Assisted Development", "AI Agents"],
    "Tools & Delivery": [
        "Visual Studio",
        "Git",
        "CI/CD",
        "Agile Methodologies",
        "Agile & Waterfall"
    ],
    "Product & People": [
        "Stakeholder Management",
        "Technical Product Management",
        "Software Requirements",
        "Competitive Analysis",
        "Communication",
        "Microsoft Office",
        "PowerPoint"
    ]
} as Record<string, string[]>,
  experience: [
    {
      company: 'Diamond Game Enterprises',
      role: 'Application Developer',
      period: 'Jan 2024 - Present',
      location: 'Ontario, Canada',
      points: [
        'Architected a centralized back-office platform consolidating operations for lottery and gaming products, eliminating siloed legacy tools and reducing manual processing.',
        'Built and deployed self-service kiosk software used across multiple provincial locations, with real-time data sync and error-recovery workflows.',
        'Designed RESTful APIs and backend services in C# / ASP.NET Core for kiosk and reporting interfaces.',
        'Led unit, smoke, and regression testing; reduced post-release defects with repeatable QA checklists.',
        'Worked with product stakeholders to define requirements, scope features, and prioritize the backlog.',
        'Applying Generative AI, LLMs, prompt engineering, and AI-assisted development to speed up delivery and explore AI agents in day-to-day engineering work.',
      ],
    },
    {
      company: 'Diamond Game Enterprises',
      role: 'Junior .NET Application Developer',
      period: 'Jan 2021 - Jan 2024',
      location: 'Ontario, Canada',
      points: [
        'Developed and maintained POS and Bingo applications handling high transaction volumes with zero data-loss requirements.',
        'Built internal simulators so QA could test edge cases without hardware, accelerating releases.',
        'Optimized SQL Server stored procedures, cutting report query times through better indexing and query plans.',
        'Delivered features within sprint commitments in Agile ceremonies.',
      ],
    },
    {
      company: 'Future Focus Inc',
      role: 'Implementation Manager (Part-Time Contract)',
      period: 'Sep 2020 - Sep 2022',
      location: 'Waterloo, Ontario',
      points: [
        'Managed business automation projects from initiation through go-live, alongside a full-time development role.',
        'Acted as Product Owner: user stories, backlog, sprint planning, and retrospectives.',
        'Coordinated cross-functional teams and vendors; managed scope changes.',
        'Produced project plans, dependency maps, and executive status reports.',
      ],
    },
    {
      company: 'Ulta Cube Technologies',
      role: 'Team Lead (Contract)',
      period: 'May 2019 - Aug 2019',
      location: 'Bangalore',
      points: [
        'Delivered development and maintenance for financial risk reporting and technical cost systems (Capgemini) and the CAPTO platform (Infosys).',
        'Managed a team of 2-4 engineers: stand-ups, task assignment, code review.',
        'Translated client requirements into technical specs; maintained SQL Server databases and ran root cause analysis on incidents.',
      ],
    },
    {
      company: 'Infosys',
      role: 'Senior System Engineer',
      period: 'Oct 2018 - May 2019',
      location: 'Bangalore',
      points: [
        'Led a small developer team on the CAPTO platform, reviewing code and delivering sprints on time.',
        'Built full-stack components with ASP.NET and C# for a large enterprise system.',
        'Resolved production data quality and performance issues; mentored junior developers.',
      ],
    },
    {
      company: 'Capgemini',
      role: 'Senior Analyst / Software Engineer',
      period: 'Jul 2016 - Oct 2018',
      location: 'Bangalore',
      points: [
        'Built and maintained enterprise financial applications (Risk Reporting, Technical Cost) for global banking clients within strict SLAs.',
        'Wrote and tuned stored procedures for financial reporting pipelines; built ASP.NET internal tools.',
        'Ran root cause analysis on incidents and acted as technical point of contact in daily and weekly client calls.',
      ],
    },
    {
      company: 'Early Roles & Internships',
      role: 'M2M Applications, Zee Media, Ministry of Communication & IT',
      period: '2014 - 2015',
      location: 'India',
      points: [
        'iOS developer (Xcode, Swift) at M2M Applications.',
        'Built an ASP.NET request tracking system at Zee Media: developer, database designer, and DBA.',
        'Built a JSP-based search module for sponsored R&D projects at the Ministry of Communication & IT.',
      ],
    },
  ],
  projects: [
    { name: 'Centralized Back-Office Platform', desc: 'Unified operations for lottery and gaming products, replacing siloed legacy tools.', tech: ['C#', 'ASP.NET Core', 'SQL Server'] },
    { name: 'Self-Service Kiosk Software', desc: 'Deployed across multiple provinces with real-time data sync and error recovery.', tech: ['C#', 'WPF', 'REST APIs'] },
    { name: 'POS & Bingo Applications', desc: 'High-volume transaction systems with zero data-loss requirements, plus QA hardware simulators.', tech: ['C#', 'WCF', 'SQL Server'] },
    { name: 'Financial Risk Reporting', desc: 'Risk Reporting and Technical Cost modules for global banking clients.', tech: ['ASP.NET', 'SQL Server', 'Stored Procedures'] },
  ],
  achievements: [
    { title: 'LinkedIn Skill Assessments Passed', detail: 'C#, .NET Framework, JavaScript, HTML, Agile Methodologies, PowerPoint' },
    { title: 'Coding Competition, 1st Prize', detail: 'Sapthrang 2015' },
    { title: 'Coding Competition, 2nd Prize', detail: "Kalanjali'14, Sir MVIT Bengaluru (DEXTRIX'14)" },
    { title: 'Scrum Foundation Professional Certificate', detail: 'SFPC' },
    { title: 'EMC Academic Associate', detail: 'Cloud Infrastructure and Services' },
  ],
  education: [
    { school: 'Conestoga College', degree: 'Graduate Certificate, IT Business Analysis and Operations', period: '2019 - 2020' },
    { school: 'Visvesvaraya Technological University', degree: 'B.E., Computer Science', period: '2012 - 2016' },
    { school: 'Atria Institute of Technology', degree: "Bachelor's, Computer Engineering", period: '2012 - 2016' },
  ],
  languages: ['English', 'Hindi'],
  recommendations: [
    {
        "name": "Sumanth Mohan",
        "title": "Senior Analytics Engineer @AutoTrader Canada / AutoScout24 Germany",
        "date": "Jan 2021",
        "text": "I've known Anupam since my Engineering days! He has exceptional work etiquette and is willing to learn and grow as a professional. He also has tremendous technical skills across various domains which makes him a valuable asset! I'd definitely recommend him to be part of any team, wishing him the best!!"
    },
    {
        "name": "Ojas Kulkarni",
        "title": "QA Automation Engineer III at Guidepoint",
        "date": "Dec 2020",
        "text": "Anupam is an amazing person to work with. He is very solution-oriented with exceptional problem-solving skills. Anupam's deeper understanding of the technical nuances always helped us during the tough time of our project, where workaround was inevitable. Anupam is always ready to take up new challenges and to prove his mettle."
    },
    {
        "name": "Nikhil Sahi",
        "title": "ITAM/ITOM Product Owner - ServiceNow",
        "date": "Oct 2020",
        "text": "I've worked with Anupam in many internal synthesis workshops as a part of academic curriculum. I found him drawn towards decomposing information into simpler substances, and given that he possesses great technical capabilities, it only makes it easier for groups to utilize his niche skills to its full potential. Anupam in every sense is a highly skilled individual coupled with great work ethics."
    },
    {
        "name": "Irene Oritsegbubemi Akumagba",
        "title": "Senior Business Analyst | ERP Champion",
        "date": "Oct 2020",
        "text": "I have attended classes with Anupam (online and in-person) and without any doubt would consider him one of the most interesting individuals I have ever met. He is an excellent professional, with outstanding skills and experience in his field and is someone I would consider as well-rounded and really smart as he has a vast knowledge base. He is cheerful and has a \"can-do\" attitude towards work. He has shown leadership and excellence in various measures. I consider his indulgence in seeking knowledge noteworthy. I believe he will be a great addition to any team or organization."
    },
    {
        "name": "Suchet Raghavan",
        "title": "Senior Software Engineer at The Marketing Store, North America",
        "date": "Sep 2020",
        "text": "Anupam is an excellent problem solver. Having worked alongside him on multiple occasions at Capgemini and Future Focus, I am confident that he can achieve any challenge thrown at him. His greatest strength in my opinion is his optimism, and the ability to deliver above expectations. Skilled both technically and professionally, he has the desired skillset with the right attitude. Always been a pleasure working with him."
    },
    {
        "name": "Ankit Kumar",
        "title": "Gopher | Ex-Razorpay, Meta",
        "date": "Apr 2020",
        "text": "Anupam is an extremely talented and hard working teammate to have."
    },
    {
        "name": "Sreejith Nair",
        "title": "Technical Support Account Manager at ServiceNow",
        "date": "Feb 2020",
        "text": "Anupam is one of those individuals who'll show immense interest in understanding each and every aspect that is available in the project. He's a very fast learner and makes fruitful contributions that would help the project flourish and reach new heights. He's someone every team or project needs."
    },
    {
        "name": "Aaron McKee",
        "title": "Director of Global Sales - Value Add Services - ApplyBoard",
        "date": "Feb 2020",
        "text": "Anupam is one of the most ingenuitive, dedicated, and caring volunteers I have had the pleasure of managing in my 3 years of working and volunteering at Conestoga College. Not only is he the ultimate team player, as he routinely goes out of his way to ensure the job gets done, but he also applies critical and creative thinking to what are often complex student situations. I also noticed that Anupam always set the expectation for the team, he was always the one working and covering for others to let them take breaks. I have found that the broad majority of volunteers attend or events just to earn their credit for their resume. Of this majority there are always a select few who truly go above and beyond in the time they dedicate and in the work ethic they display, Anupam was one such volunteer and it is a testament to the amazing character he has. I can say with the utmost confidence, that wherever Anupam ends up working, they will be very lucky to have him."
    },
    {
        "name": "Sunayana Raju",
        "title": "Lead Customer Success Manager at Simpplr",
        "date": "Feb 2020",
        "text": "Anupam is a deeply knowledgeable and a highly motivated true professional. In my tenure with him both as a classmate and a colleague, he was never satisfied with good enough or status quo. He has a keen eye for excellence and above par performance. A great mentor for all his batch mates and his colleagues. Social, amicable and spontaneous are the three words I would use to describe Anupam."
    }
],
}
