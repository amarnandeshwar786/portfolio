export type LangCode = 'en' | 'hi' | 'mr' | 'es' | 'fr' | 'de' | 'pt' | 'ar' | 'ru' | 'ja';

export interface LanguageOption {
  code: LangCode;
  label: string;
  short: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'Hindi', short: 'HI' },
  { code: 'mr', label: 'Marathi', short: 'MR' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'ar', label: 'العربية', short: 'AR' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'ja', label: '日本語', short: 'JA' }
];

type TranslationTree = { [key: string]: string | TranslationTree };

export const TRANSLATIONS: Record<LangCode, TranslationTree> = {
  en: {
    common: {
      menu: 'Menu',
      downloadResume: 'Download Resume',
      fullImageAlt: 'Full section image',
      sliderAlt: 'Slider image'
    },
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      mailTo: 'Mail To'
    },
    home: {
      title: {
        windows: 'Windows Application',
        web: 'Web Application',
        mobile: 'Mobile Application'
      }
    },
    about: {
      heading: 'About',
      role: 'Full Stack Developer',
      location: 'Barwha, Maharashtra, India',
      highlights: {
        dotnet: '.NET Full Stack',
        angular: 'Angular',
        api: 'API Design',
        sql: 'SQL Performance',
        leadership: 'Team Leadership'
      },
      facts: {
        email: 'Email',
        phone: 'Phone',
        dob: 'Date of Birth',
        nationality: 'Nationality'
      },
      summary: {
        heading: 'Professional Summary',
        p1:
          'Full-stack developer with strong experience in building business-critical web platforms and enterprise portals. Focused on writing maintainable code, improving performance, and delivering reliable solutions aligned with real user and client needs.',
        p2:
          'Comfortable across backend APIs, data modeling, and modern frontend development, with proven ownership from design through deployment.'
      }
    },
    skills: {
      heading: 'Skills',
      subtitle: 'Technology stack and proficiency overview',
      cards: {
        programming: {
          title: 'Programming Languages',
          subtitle: 'Core development fundamentals',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'Server & Client Development',
          subtitle: 'Application logic and web architecture',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'Frontend Technologies',
          subtitle: 'UI structure and styling',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'Database Technologies',
          subtitle: 'Storage, query, and optimization',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'Projects',
      roleLabel: 'Role:',
      highlightsLabel: 'Key Highlights',
      responsibilitiesLabel: 'Responsibilities',
      technologiesLabel: 'Technologies:',
      goTo: 'Go to {{name}}',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'Business Planning and Forecasting Platform',
          role: 'Backend Developer',
          description:
            'Built a full-stack planning platform that helps organizations forecast financial performance using historical data and predictive models.',
          highlights: {
            h1: 'Enabled what-if simulation of business scenarios for better strategic planning.',
            h2: 'Helped identify potential profit leakage and optimization opportunities.',
            h3: 'Provided clear trend and revenue forecasting insights for decision-making.'
          },
          responsibilities: {
            r1: 'Developed and maintained backend services in Node.js and integrated them with React-based frontend modules.',
            r2: 'Designed high-performance REST APIs and SQL Server stored procedures for complex planning calculations.',
            r3: 'Contributed across the full lifecycle: design, implementation, testing, and deployment.'
          }
        },
        dof: {
          name: 'Department of Finance (DOF) Portal',
          subtitle: 'UAE Departmental Portal',
          role: 'Senior Software Developer',
          description:
            'Developed a comprehensive portal for the UAE Department of Finance to streamline internal operations and improve employee engagement.',
          highlights: {
            h1: 'Supported key modules such as performance management, training management, internal communication, and surveys.',
            h2: 'Enabled secure document management and collaboration through SharePoint integration.',
            h3: 'Improved usability for day-to-day departmental workflows, including menu and announcement management.'
          },
          responsibilities: {
            r1: 'Implemented backend functionality using ASP.NET Core Web API.',
            r2: 'Designed REST APIs for modules such as employee performance tracking and training management.',
            r3: 'Built SQL Server queries and stored procedures to support critical backend operations.'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'Student Feedback and Teaching Quality System',
          role: 'Team Lead',
          description:
            'Led development of a student feedback platform focused on improving teaching quality through data-driven and action-oriented insights.',
          highlights: {
            h1: 'Enabled structured student feedback collection and analysis to support continuous teaching improvement.',
            h2: 'Aligned academic quality outcomes with societal, industry, and business expectations.',
            h3: 'Promoted a learner-centered model for stronger engagement and instructional impact.'
          },
          responsibilities: {
            r1: 'Handled team onboarding, mentoring, task planning, and performance feedback.',
            r2: 'Defined project scope, timelines, deliverables, and workload distribution.',
            r3: 'Monitored execution, mitigated risks, resolved conflicts, and maintained communication transparency.',
            r4: 'Reviewed deliverables regularly to ensure quality and timely completion.'
          }
        }
      }
    },
    experience: {
      heading: 'Experience',
      subtitle: 'Professional timeline and key delivery impact',
      items: {
        item1: {
          role: 'Module Lead',
          highlights: {
            h1: 'Delivered a project one week ahead of schedule, enabling smooth deployment and exceeding client expectations.',
            h2: 'Optimized system architecture, improving application performance by 20% and reducing response time by 30%.'
          }
        },
        item2: {
          role: '.NET Full Stack Developer',
          highlights: {
            h1: 'Optimized database query systems, improving backend performance by 25% and significantly enhancing API response time.',
            h2: 'Designed and developed a fully dynamic, multi-tenant clinical trial platform and delivered it successfully to the client.'
          }
        },
        item3: {
          role: 'Senior Software Engineer',
          highlights: {
            h1: 'Learned new frameworks and delivered a mobile application within tight timelines, demonstrating adaptability and strong execution.',
            h2: 'Built a food donation app during the COVID-19 period to help users locate donation camps, and received client appreciation for its social impact.'
          }
        },
        item4: {
          role: 'Senior Software Engineer',
          highlights: {
            h1: 'Transformed a multi-page application into a streamlined single-page application (SPA), improving user experience and navigation flow.',
            h2: 'Revamped registration and barcode scanning workflows, increasing user registrations by 60% through a faster and more user-friendly portal.'
          }
        }
      }
    },
    education: {
      heading: 'Education',
      subtitle: 'Academic timeline and learning foundation',
      items: {
        item1: {
          course: 'Diploma in Information Technology',
          focus: 'Core software development, database fundamentals, and practical engineering projects.'
        },
        item2: {
          course: 'Higher Secondary Certificate (HSC)',
          focus: 'Built a strong foundation in mathematics, science, and analytical problem solving.'
        },
        item3: {
          course: 'Secondary School Certificate (SSC)',
          focus: 'Established fundamentals in academics and disciplined learning approach.'
        }
      }
    },
    contact: {
      heading: 'Contact',
      subtitle: "Let's connect for opportunities and collaborations",
      labels: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        coordinates: 'Coordinates',
        homeLocation: 'Home Location',
        social: "I'M ALSO ON SOCIAL NETWORK"
      },
      mapTitle: 'Barwha Coordinates Map'
    },
    mail: {
      heading: 'Send Your Comment',
      subheading: 'Share your message and I will get back to you soon.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Write your message',
      send: 'Send Message',
      sending: 'Sending...',
      status: {
        required: 'Please complete all fields.',
        opened: 'Opened your mail app.',
        sent: 'Message sent successfully.'
      },
      subject: 'Say Hello from {{name}}',
      nameFallback: 'Friend'
    }
  },
  hi: {
    common: {
      menu: 'मेनू',
      downloadResume: 'रेज़्यूमे डाउनलोड करें',
      fullImageAlt: 'पूर्ण सेक्शन इमेज',
      sliderAlt: 'स्लाइडर इमेज'
    },
    nav: {
      home: 'होम',
      about: 'परिचय',
      experience: 'अनुभव',
      projects: 'प्रोजेक्ट्स',
      skills: 'कौशल',
      education: 'शिक्षा',
      contact: 'संपर्क',
      mailTo: 'मेल भेजें'
    },
    home: {
      title: {
        windows: 'विंडोज एप्लिकेशन',
        web: 'वेब एप्लिकेशन',
        mobile: 'मोबाइल एप्लिकेशन'
      }
    },
    about: {
      heading: 'परिचय',
      role: 'फुल स्टैक डेवलपर',
      location: 'बरवा, महाराष्ट्र, भारत',
      highlights: {
        dotnet: '.NET फुल स्टैक',
        angular: 'Angular',
        api: 'API डिज़ाइन',
        sql: 'SQL परफॉर्मेंस',
        leadership: 'टीम लीडरशिप'
      },
      facts: {
        email: 'ईमेल',
        phone: 'फोन',
        dob: 'जन्म तिथि',
        nationality: 'राष्ट्रीयता'
      },
      summary: {
        heading: 'प्रोफेशनल सारांश',
        p1:
          'फुल-स्टैक डेवलपर जिसके पास बिजनेस-क्रिटिकल वेब प्लेटफॉर्म और एंटरप्राइज पोर्टल बनाने का मजबूत अनुभव है। मेंटेन करने योग्य कोड, बेहतर परफॉर्मेंस और विश्वसनीय समाधान देने पर फोकस है।',
        p2:
          'बैकएंड APIs, डेटा मॉडलिंग और आधुनिक फ्रंटएंड डेवलपमेंट में सहज, तथा डिजाइन से लेकर डिप्लॉयमेंट तक जिम्मेदारी निभाने का अनुभव।'
      }
    },
    skills: {
      heading: 'कौशल',
      subtitle: 'टेक्नोलॉजी स्टैक और प्रवीणता का सारांश',
      cards: {
        programming: {
          title: 'प्रोग्रामिंग भाषाएँ',
          subtitle: 'कोर डेवलपमेंट फंडामेंटल्स',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'सर्वर और क्लाइंट डेवलपमेंट',
          subtitle: 'एप्लिकेशन लॉजिक और वेब आर्किटेक्चर',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'फ्रंटएंड टेक्नोलॉजीज़',
          subtitle: 'UI स्ट्रक्चर और स्टाइलिंग',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'डेटाबेस टेक्नोलॉजीज़',
          subtitle: 'स्टोरेज, क्वेरी और ऑप्टिमाइज़ेशन',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'प्रोजेक्ट्स',
      roleLabel: 'भूमिका:',
      highlightsLabel: 'मुख्य हाइलाइट्स',
      responsibilitiesLabel: 'जिम्मेदारियाँ',
      technologiesLabel: 'टेक्नोलॉजीज़:',
      goTo: '{{name}} पर जाएं',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'बिजनेस प्लानिंग और फोरकास्टिंग प्लेटफॉर्म',
          role: 'बैकएंड डेवलपर',
          description:
            'एक फुल-स्टैक प्लानिंग प्लेटफॉर्म बनाया जो ऐतिहासिक डेटा और प्रेडिक्टिव मॉडल के आधार पर वित्तीय प्रदर्शन का अनुमान लगाने में मदद करता है।',
          highlights: {
            h1: 'बेहतर रणनीतिक योजना के लिए बिजनेस परिदृश्यों का what-if सिमुलेशन सक्षम किया।',
            h2: 'संभावित लाभ-क्षति और ऑप्टिमाइज़ेशन अवसरों की पहचान में मदद की।',
            h3: 'निर्णय लेने के लिए स्पष्ट ट्रेंड और रेवेन्यू फोरकास्टिंग इनसाइट्स प्रदान किए।'
          },
          responsibilities: {
            r1: 'Node.js में बैकएंड सेवाएँ विकसित कीं और React आधारित फ्रंटएंड मॉड्यूल्स के साथ इंटीग्रेट किया।',
            r2: 'कॉम्प्लेक्स प्लानिंग कैलकुलेशंस के लिए हाई-परफॉर्मेंस REST APIs और SQL Server स्टोर्ड प्रोसिजर्स डिज़ाइन किए।',
            r3: 'डिज़ाइन, इम्प्लीमेंटेशन, टेस्टिंग और डिप्लॉयमेंट सहित पूरे लाइफसाइकल में योगदान दिया।'
          }
        },
        dof: {
          name: 'Department of Finance (DOF) Portal',
          subtitle: 'यूएई डिपार्टमेंटल पोर्टल',
          role: 'सीनियर सॉफ्टवेयर डेवलपर',
          description:
            'यूएई डिपार्टमेंट ऑफ फाइनेंस के लिए एक व्यापक पोर्टल विकसित किया जिससे आंतरिक संचालन सरल हुआ और कर्मचारी सहभागिता बेहतर हुई।',
          highlights: {
            h1: 'परफॉर्मेंस मैनेजमेंट, ट्रेनिंग मैनेजमेंट, इंटरनल कम्युनिकेशन और सर्वे जैसे मॉड्यूल्स को सपोर्ट किया।',
            h2: 'SharePoint इंटीग्रेशन के माध्यम से सुरक्षित डॉक्यूमेंट मैनेजमेंट और सहयोग सक्षम किया।',
            h3: 'मेनू और अनाउंसमेंट मैनेजमेंट सहित दैनिक वर्कफ़्लो की उपयोगिता बेहतर की।'
          },
          responsibilities: {
            r1: 'ASP.NET Core Web API का उपयोग करके बैकएंड फंक्शनलिटी इम्प्लीमेंट की।',
            r2: 'कर्मचारी परफॉर्मेंस ट्रैकिंग और ट्रेनिंग मैनेजमेंट जैसे मॉड्यूल्स के लिए REST APIs डिज़ाइन किए।',
            r3: 'क्रिटिकल बैकएंड ऑपरेशंस को सपोर्ट करने के लिए SQL Server क्वेरी और स्टोर्ड प्रोसिजर्स बनाए।'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'स्टूडेंट फीडबैक और टीचिंग क्वालिटी सिस्टम',
          role: 'टीम लीड',
          description:
            'डेटा-ड्रिवन और एक्शन-ओरिएंटेड इनसाइट्स के जरिए टीचिंग क्वालिटी सुधारने पर केंद्रित स्टूडेंट फीडबैक प्लेटफॉर्म का नेतृत्व किया।',
          highlights: {
            h1: 'निरंतर टीचिंग सुधार के लिए संरचित स्टूडेंट फीडबैक कलेक्शन और विश्लेषण सक्षम किया।',
            h2: 'शैक्षणिक गुणवत्ता के परिणामों को समाज, उद्योग और व्यवसाय की अपेक्षाओं के साथ संरेखित किया।',
            h3: 'बेहतर सहभागिता और इंस्ट्रक्शनल इम्पैक्ट के लिए लर्नर-सेंटर्ड मॉडल को बढ़ावा दिया।'
          },
          responsibilities: {
            r1: 'टीम ऑनबोर्डिंग, मेंटरिंग, टास्क प्लानिंग और परफॉर्मेंस फीडबैक संभाला।',
            r2: 'प्रोजेक्ट स्कोप, टाइमलाइन, डिलिवरेबल्स और वर्कलोड डिस्ट्रीब्यूशन निर्धारित किए।',
            r3: 'एक्सीक्यूशन मॉनिटर किया, जोखिम कम किए, कॉन्फ्लिक्ट्स सुलझाए और संचार पारदर्शिता बनाए रखी।',
            r4: 'गुणवत्ता और समय पर डिलिवरी सुनिश्चित करने के लिए डिलिवरेबल्स की नियमित समीक्षा की।'
          }
        }
      }
    },
    experience: {
      heading: 'अनुभव',
      subtitle: 'प्रोफेशनल टाइमलाइन और प्रमुख डिलिवरी प्रभाव',
      items: {
        item1: {
          role: 'मॉड्यूल लीड',
          highlights: {
            h1: 'एक प्रोजेक्ट को तय समय से एक सप्ताह पहले पूरा किया, जिससे स्मूद डिप्लॉयमेंट और क्लाइंट संतुष्टि मिली।',
            h2: 'सिस्टम आर्किटेक्चर को ऑप्टिमाइज़ कर एप्लिकेशन परफॉर्मेंस 20% बढ़ाई और रिस्पॉन्स टाइम 30% घटाया।'
          }
        },
        item2: {
          role: '.NET फुल स्टैक डेवलपर',
          highlights: {
            h1: 'डेटाबेस क्वेरी सिस्टम को ऑप्टिमाइज़ कर बैकएंड परफॉर्मेंस 25% बढ़ाई और API रिस्पॉन्स टाइम बेहतर किया।',
            h2: 'पूरी तरह डायनेमिक, मल्टी-टेनेंट क्लिनिकल ट्रायल प्लेटफॉर्म डिज़ाइन और डेवेलप किया तथा सफलतापूर्वक डिलिवर किया।'
          }
        },
        item3: {
          role: 'सीनियर सॉफ्टवेयर इंजीनियर',
          highlights: {
            h1: 'नई फ्रेमवर्क्स सीखी और टाइट टाइमलाइन में मोबाइल एप्लिकेशन डिलिवर किया।',
            h2: 'COVID-19 के दौरान फूड डोनेशन ऐप बनाया जिससे डोनेशन कैंप्स खोजने में मदद मिली और क्लाइंट प्रशंसा मिली।'
          }
        },
        item4: {
          role: 'सीनियर सॉफ्टवेयर इंजीनियर',
          highlights: {
            h1: 'मल्टी-पेज एप्लिकेशन को SPA में बदलकर यूज़र एक्सपीरियंस और नेविगेशन फ्लो बेहतर किया।',
            h2: 'रजिस्ट्रेशन और बारकोड स्कैनिंग वर्कफ़्लो को रिवैम्प कर रजिस्ट्रेशन 60% बढ़ाए।'
          }
        }
      }
    },
    education: {
      heading: 'शिक्षा',
      subtitle: 'अकादमिक टाइमलाइन और लर्निंग फाउंडेशन',
      items: {
        item1: {
          course: 'इन्फॉर्मेशन टेक्नोलॉजी में डिप्लोमा',
          focus: 'कोर सॉफ्टवेयर डेवलपमेंट, डेटाबेस फंडामेंटल्स और प्रैक्टिकल इंजीनियरिंग प्रोजेक्ट्स।'
        },
        item2: {
          course: 'हायर सेकेंडरी सर्टिफिकेट (HSC)',
          focus: 'गणित, विज्ञान और एनालिटिकल प्रॉब्लम सॉल्विंग में मजबूत आधार बनाया।'
        },
        item3: {
          course: 'सेकेंडरी स्कूल सर्टिफिकेट (SSC)',
          focus: 'अकादमिक फंडामेंटल्स और डिसिप्लिन्ड लर्निंग एप्रोच विकसित की।'
        }
      }
    },
    contact: {
      heading: 'संपर्क',
      subtitle: 'अवसरों और सहयोग के लिए कनेक्ट करें',
      labels: {
        address: 'पता',
        phone: 'फोन',
        email: 'ईमेल',
        coordinates: 'कोऑर्डिनेट्स',
        homeLocation: 'होम लोकेशन',
        social: 'मैं सोशल नेटवर्क पर भी उपलब्ध हूँ'
      },
      mapTitle: 'बरवा कोऑर्डिनेट्स मैप'
    },
    mail: {
      heading: 'अपना संदेश भेजें',
      subheading: 'अपना संदेश साझा करें, मैं जल्द ही जवाब दूंगा।',
      nameLabel: 'नाम',
      emailLabel: 'ईमेल',
      messageLabel: 'संदेश',
      namePlaceholder: 'आपका नाम',
      emailPlaceholder: 'आपका ईमेल',
      messagePlaceholder: 'अपना संदेश लिखें',
      send: 'संदेश भेजें',
      sending: 'भेजा जा रहा है...',
      status: {
        required: 'कृपया सभी फ़ील्ड भरें।',
        opened: 'आपका मेल ऐप खुल गया है।',
        sent: 'संदेश सफलतापूर्वक भेजा गया।'
      },
      subject: '{{name}} की ओर से नमस्ते',
      nameFallback: 'मित्र'
    }
  },
  mr: {
    common: {
      menu: 'मेनू',
      downloadResume: 'रेझ्युमे डाउनलोड करा',
      fullImageAlt: 'पूर्ण विभाग प्रतिमा',
      sliderAlt: 'स्लायडर प्रतिमा'
    },
    nav: {
      home: 'मुख्य',
      about: 'परिचय',
      experience: 'अनुभव',
      projects: 'प्रकल्प',
      skills: 'कौशल्ये',
      education: 'शिक्षण',
      contact: 'संपर्क',
      mailTo: 'मेल पाठवा'
    },
    home: {
      title: {
        windows: 'विंडोज अॅप्लिकेशन',
        web: 'वेब अॅप्लिकेशन',
        mobile: 'मोबाइल अॅप्लिकेशन'
      }
    },
    about: {
      heading: 'परिचय',
      role: 'फुल स्टॅक डेव्हलपर',
      location: 'बरवा, महाराष्ट्र, भारत',
      highlights: {
        dotnet: '.NET फुल स्टॅक',
        angular: 'Angular',
        api: 'API डिझाइन',
        sql: 'SQL परफॉर्मन्स',
        leadership: 'टीम लीडरशिप'
      },
      facts: {
        email: 'ईमेल',
        phone: 'फोन',
        dob: 'जन्मतारीख',
        nationality: 'राष्ट्रीयत्व'
      },
      summary: {
        heading: 'व्यावसायिक सारांश',
        p1:
          'बिझनेस-क्रिटिकल वेब प्लॅटफॉर्म आणि एंटरप्राइज पोर्टल्स तयार करण्याचा मजबूत अनुभव असलेला फुल-स्टॅक डेव्हलपर. मेंटेन करण्यायोग्य कोड, उत्तम परफॉर्मन्स आणि विश्वासार्ह सोल्यूशन्स देण्यावर लक्ष.',
        p2:
          'बॅकएंड APIs, डेटा मॉडेलिंग आणि आधुनिक फ्रंटएंड डेव्हलपमेंटमध्ये सहज; डिझाइनपासून डिप्लॉयमेंटपर्यंत मालकी सिद्ध.'
      }
    },
    skills: {
      heading: 'कौशल्ये',
      subtitle: 'टेक्नॉलॉजी स्टॅक आणि प्रावीण्याचा आढावा',
      cards: {
        programming: {
          title: 'प्रोग्रामिंग भाषा',
          subtitle: 'कोर डेव्हलपमेंट फंडामेंटल्स',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'सर्व्हर आणि क्लायंट डेव्हलपमेंट',
          subtitle: 'अॅप्लिकेशन लॉजिक आणि वेब आर्किटेक्चर',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'फ्रंटएंड टेक्नॉलॉजीज',
          subtitle: 'UI रचना आणि स्टाइलिंग',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'डेटाबेस टेक्नॉलॉजीज',
          subtitle: 'स्टोरेज, क्वेरी आणि ऑप्टिमायझेशन',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'प्रकल्प',
      roleLabel: 'भूमिका:',
      highlightsLabel: 'मुख्य हायलाइट्स',
      responsibilitiesLabel: 'जबाबदाऱ्या',
      technologiesLabel: 'टेक्नॉलॉजीज:',
      goTo: '{{name}} येथे जा',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'बिझनेस प्लॅनिंग आणि फोरकास्टिंग प्लॅटफॉर्म',
          role: 'बॅकएंड डेव्हलपर',
          description:
            'ऐतिहासिक डेटा आणि प्रेडिक्टिव मॉडेल्स वापरून आर्थिक कामगिरीचा अंदाज लावण्यासाठी फुल-स्टॅक प्लॅनिंग प्लॅटफॉर्म तयार केला.',
          highlights: {
            h1: 'उत्तम धोरणात्मक नियोजनासाठी what-if सिम्युलेशन सक्षम केले.',
            h2: 'संभाव्य नफा गळती आणि ऑप्टिमायझेशन संधी ओळखण्यात मदत केली.',
            h3: 'निर्णयासाठी स्पष्ट ट्रेंड आणि रेव्हेन्यू फोरकास्टिंग इनसाइट्स दिले.'
          },
          responsibilities: {
            r1: 'Node.js मध्ये बॅकएंड सेवा विकसित करून React फ्रंटएंड मॉड्यूल्ससह इंटिग्रेट केले.',
            r2: 'कठीण प्लॅनिंग गणनांसाठी उच्च-परफॉर्मन्स REST APIs आणि SQL Server स्टोर्ड प्रोसीजर्स डिझाइन केले.',
            r3: 'डिझाइन, अंमलबजावणी, टेस्टिंग आणि डिप्लॉयमेंटसह संपूर्ण लाईफसायकलमध्ये योगदान.'
          }
        },
        dof: {
          name: 'Department of Finance (DOF) Portal',
          subtitle: 'यूएई विभागीय पोर्टल',
          role: 'सीनियर सॉफ्टवेअर डेव्हलपर',
          description:
            'यूएई डिपार्टमेंट ऑफ फायनन्ससाठी व्यापक पोर्टल तयार केला ज्यामुळे आंतरिक ऑपरेशन्स सुलभ झाले आणि कर्मचारी सहभाग वाढला.',
          highlights: {
            h1: 'परफॉर्मन्स मॅनेजमेंट, ट्रेनिंग मॅनेजमेंट, इंटरनल कम्युनिकेशन आणि सर्वे मॉड्यूल्सना सपोर्ट केला.',
            h2: 'SharePoint इंटिग्रेशनमुळे सुरक्षित डॉक्युमेंट मॅनेजमेंट आणि सहकार्य शक्य केले.',
            h3: 'मेनू आणि घोषणा व्यवस्थापनासह दैनंदिन वर्कफ्लोची उपयोगिता वाढवली.'
          },
          responsibilities: {
            r1: 'ASP.NET Core Web API वापरून बॅकएंड फंक्शनॅलिटी अंमलात आणली.',
            r2: 'कर्मचारी परफॉर्मन्स ट्रॅकिंग आणि ट्रेनिंग मॅनेजमेंटसाठी REST APIs डिझाइन केले.',
            r3: 'क्रिटिकल बॅकएंड ऑपरेशन्ससाठी SQL Server क्वेरीज आणि स्टोर्ड प्रोसीजर्स तयार केले.'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'स्टुडंट फीडबॅक आणि टीचिंग क्वालिटी सिस्टम',
          role: 'टीम लीड',
          description:
            'डेटा-ड्रिव्हन इनसाइट्सद्वारे अध्यापन गुणवत्ता सुधारण्यासाठी स्टुडंट फीडबॅक प्लॅटफॉर्मचे नेतृत्व केले.',
          highlights: {
            h1: 'सतत सुधारासाठी संरचित स्टुडंट फीडबॅक संकलन आणि विश्लेषण सक्षम केले.',
            h2: 'शैक्षणिक गुणवत्ता उद्दिष्टे समाज, उद्योग आणि व्यवसाय अपेक्षांशी संरेखित केली.',
            h3: 'जास्त सहभाग आणि अध्यापन परिणामासाठी learner-centered मॉडेलला प्रोत्साहन दिले.'
          },
          responsibilities: {
            r1: 'टीम ऑनबोर्डिंग, मेंटरिंग, टास्क प्लॅनिंग आणि परफॉर्मन्स फीडबॅक हाताळले.',
            r2: 'प्रकल्प स्कोप, टाइमलाइन, डिलिव्हरेबल्स आणि वर्कलोड वाटप निश्चित केले.',
            r3: 'एक्झिक्यूशन मॉनिटर केले, जोखीम कमी केली, कॉन्फ्लिक्ट्स सोडवले आणि पारदर्शक संवाद राखला.',
            r4: 'गुणवत्ता आणि वेळेवर डिलिव्हरीसाठी नियमित समीक्षा केली.'
          }
        }
      }
    },
    experience: {
      heading: 'अनुभव',
      subtitle: 'व्यावसायिक टाइमलाइन आणि प्रमुख डिलिव्हरी प्रभाव',
      items: {
        item1: {
          role: 'मॉड्यूल लीड',
          highlights: {
            h1: 'प्रकल्प एका आठवड्याने आधी पूर्ण करून स्मूथ डिप्लॉयमेंट आणि क्लायंट समाधान मिळवले.',
            h2: 'सिस्टम आर्किटेक्चर ऑप्टिमाइझ करून परफॉर्मन्स 20% वाढवला आणि रिस्पॉन्स टाइम 30% कमी केला.'
          }
        },
        item2: {
          role: '.NET फुल स्टॅक डेव्हलपर',
          highlights: {
            h1: 'डेटाबेस क्वेरी सिस्टम ऑप्टिमाइझ करून बॅकएंड परफॉर्मन्स 25% वाढवला आणि API रिस्पॉन्स सुधारला.',
            h2: 'डायनॅमिक, मल्टी-टेनंट क्लिनिकल ट्रायल प्लॅटफॉर्म डिझाइन व डेव्हलप करून डिलिव्हर केला.'
          }
        },
        item3: {
          role: 'सीनियर सॉफ्टवेअर इंजिनियर',
          highlights: {
            h1: 'नवे फ्रेमवर्क्स शिकून कमी वेळेत मोबाइल अॅप डिलिव्हर केला.',
            h2: 'COVID-19 काळात फूड डोनेशन अॅप तयार करून डोनेशन कॅम्प शोधण्यात मदत केली आणि प्रशंसा मिळाली.'
          }
        },
        item4: {
          role: 'सीनियर सॉफ्टवेअर इंजिनियर',
          highlights: {
            h1: 'मल्टी-पेज अॅप्लिकेशनचे SPA मध्ये रूपांतर करून UX आणि नेव्हिगेशन सुधारले.',
            h2: 'रजिस्ट्रेशन आणि बारकोड स्कॅनिंग प्रक्रिया सुधारून नोंदणी 60% वाढवली.'
          }
        }
      }
    },
    education: {
      heading: 'शिक्षण',
      subtitle: 'अकादमिक टाइमलाइन आणि लर्निंग फाउंडेशन',
      items: {
        item1: {
          course: 'इन्फॉर्मेशन टेक्नोलॉजी डिप्लोमा',
          focus: 'कोर सॉफ्टवेअर डेव्हलपमेंट, डेटाबेस फंडामेंटल्स आणि प्रॅक्टिकल प्रोजेक्ट्स.'
        },
        item2: {
          course: 'हायर सेकंडरी सर्टिफिकेट (HSC)',
          focus: 'गणित, विज्ञान आणि विश्लेषणात्मक समस्यांमध्ये मजबूत पाया.'
        },
        item3: {
          course: 'सेकंडरी स्कूल सर्टिफिकेट (SSC)',
          focus: 'शिस्तबद्ध अध्ययन आणि अकादमिक मूलतत्त्वे मजबूत केली.'
        }
      }
    },
    contact: {
      heading: 'संपर्क',
      subtitle: 'अवसर आणि सहकार्यासाठी कनेक्ट करा',
      labels: {
        address: 'पत्ता',
        phone: 'फोन',
        email: 'ईमेल',
        coordinates: 'कोऑर्डिनेट्स',
        homeLocation: 'घर स्थान',
        social: 'मी सोशल नेटवर्कवरही उपलब्ध आहे'
      },
      mapTitle: 'बरवा कोऑर्डिनेट्स नकाशा'
    },
    mail: {
      heading: 'तुमचा संदेश पाठवा',
      subheading: 'तुमचा संदेश पाठवा, मी लवकरच उत्तर देईन.',
      nameLabel: 'नाव',
      emailLabel: 'ईमेल',
      messageLabel: 'संदेश',
      namePlaceholder: 'तुमचे नाव',
      emailPlaceholder: 'तुमचा ईमेल',
      messagePlaceholder: 'तुमचा संदेश लिहा',
      send: 'संदेश पाठवा',
      sending: 'पाठवत आहोत...',
      status: {
        required: 'कृपया सर्व फील्ड भरा.',
        opened: 'तुमचे मेल अॅप उघडले आहे.',
        sent: 'संदेश यशस्वीरीत्या पाठवला.'
      },
      subject: '{{name}} कडून नमस्कार',
      nameFallback: 'मित्र'
    }
  },
  es: {
    common: {
      menu: 'Menú',
      downloadResume: 'Descargar currículum',
      fullImageAlt: 'Imagen de sección completa',
      sliderAlt: 'Imagen del carrusel'
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      education: 'Educación',
      contact: 'Contacto',
      mailTo: 'Enviar correo'
    },
    home: {
      title: {
        windows: 'Aplicación de Windows',
        web: 'Aplicación web',
        mobile: 'Aplicación móvil'
      }
    },
    about: {
      heading: 'Sobre mí',
      role: 'Desarrollador Full Stack',
      location: 'Barwha, Maharashtra, India',
      highlights: {
        dotnet: '.NET Full Stack',
        angular: 'Angular',
        api: 'Diseño de APIs',
        sql: 'Rendimiento SQL',
        leadership: 'Liderazgo de equipo'
      },
      facts: {
        email: 'Correo',
        phone: 'Teléfono',
        dob: 'Fecha de nacimiento',
        nationality: 'Nacionalidad'
      },
      summary: {
        heading: 'Resumen profesional',
        p1:
          'Desarrollador full stack con sólida experiencia creando plataformas web críticas para el negocio y portales empresariales. Enfocado en código mantenible, rendimiento y soluciones confiables.',
        p2:
          'Cómodo con APIs backend, modelado de datos y frontend moderno, con responsabilidad de diseño a despliegue.'
      }
    },
    skills: {
      heading: 'Habilidades',
      subtitle: 'Resumen del stack tecnológico y nivel',
      cards: {
        programming: {
          title: 'Lenguajes de programación',
          subtitle: 'Fundamentos de desarrollo',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'Desarrollo servidor y cliente',
          subtitle: 'Lógica de aplicación y arquitectura web',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'Tecnologías frontend',
          subtitle: 'Estructura de UI y estilo',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'Tecnologías de base de datos',
          subtitle: 'Almacenamiento, consulta y optimización',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'Proyectos',
      roleLabel: 'Rol:',
      highlightsLabel: 'Aspectos clave',
      responsibilitiesLabel: 'Responsabilidades',
      technologiesLabel: 'Tecnologías:',
      goTo: 'Ir a {{name}}',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'Plataforma de planificación y pronóstico',
          role: 'Desarrollador backend',
          description:
            'Plataforma full stack para prever el rendimiento financiero usando datos históricos y modelos predictivos.',
          highlights: {
            h1: 'Simulaciones what-if para mejor planificación estratégica.',
            h2: 'Identificación de fugas de beneficio y oportunidades de optimización.',
            h3: 'Tendencias claras y pronósticos de ingresos para la toma de decisiones.'
          },
          responsibilities: {
            r1: 'Desarrollé servicios backend en Node.js e integré módulos frontend en React.',
            r2: 'Diseñé APIs REST de alto rendimiento y procedimientos en SQL Server.',
            r3: 'Contribuí en todo el ciclo: diseño, implementación, pruebas y despliegue.'
          }
        },
        dof: {
          name: 'Portal del Department of Finance (DOF)',
          subtitle: 'Portal departamental de EAU',
          role: 'Desarrollador de software senior',
          description:
            'Portal integral para el Department of Finance de EAU que optimiza operaciones internas y compromiso del personal.',
          highlights: {
            h1: 'Soporte a módulos de desempeño, capacitación, comunicación interna y encuestas.',
            h2: 'Gestión documental segura y colaboración mediante SharePoint.',
            h3: 'Mejora de usabilidad para flujos diarios, menús y anuncios.'
          },
          responsibilities: {
            r1: 'Implementé backend con ASP.NET Core Web API.',
            r2: 'Diseñé APIs REST para seguimiento de desempeño y capacitación.',
            r3: 'Construí consultas y procedimientos en SQL Server para operaciones críticas.'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'Sistema de feedback estudiantil y calidad docente',
          role: 'Líder de equipo',
          description:
            'Lideré el desarrollo de una plataforma de feedback enfocada en mejorar la calidad docente con insights accionables.',
          highlights: {
            h1: 'Recolección y análisis estructurado de feedback para mejora continua.',
            h2: 'Alineación de calidad académica con expectativas sociales e industriales.',
            h3: 'Modelo centrado en el alumno para mayor participación e impacto.'
          },
          responsibilities: {
            r1: 'Onboarding, mentoring, planificación de tareas y feedback de desempeño.',
            r2: 'Definición de alcance, tiempos, entregables y distribución de carga.',
            r3: 'Monitoreo de ejecución, mitigación de riesgos y comunicación transparente.',
            r4: 'Revisión regular de entregables para calidad y tiempo.'
          }
        }
      }
    },
    experience: {
      heading: 'Experiencia',
      subtitle: 'Línea temporal profesional e impacto clave',
      items: {
        item1: {
          role: 'Líder de módulo',
          highlights: {
            h1: 'Entregué un proyecto una semana antes, habilitando un despliegue fluido.',
            h2: 'Optimicé la arquitectura, mejorando rendimiento 20% y respuesta 30%.'
          }
        },
        item2: {
          role: 'Desarrollador .NET Full Stack',
          highlights: {
            h1: 'Optimicé consultas de base de datos, mejorando rendimiento backend 25%.',
            h2: 'Diseñé y desarrollé una plataforma clínica multi-tenant dinámica y la entregué.'
          }
        },
        item3: {
          role: 'Ingeniero de software senior',
          highlights: {
            h1: 'Aprendí nuevos frameworks y entregué una app móvil en plazos ajustados.',
            h2: 'Construí una app de donaciones de comida durante COVID-19 con impacto social.'
          }
        },
        item4: {
          role: 'Ingeniero de software senior',
          highlights: {
            h1: 'Convertí una app multipágina en SPA, mejorando UX y navegación.',
            h2: 'Renové flujos de registro y escaneo, aumentando registros en 60%.'
          }
        }
      }
    },
    education: {
      heading: 'Educación',
      subtitle: 'Línea académica y base de aprendizaje',
      items: {
        item1: {
          course: 'Diploma en Tecnología de la Información',
          focus: 'Desarrollo de software, fundamentos de bases de datos y proyectos prácticos.'
        },
        item2: {
          course: 'Certificado de Educación Secundaria Superior (HSC)',
          focus: 'Base sólida en matemáticas, ciencias y análisis de problemas.'
        },
        item3: {
          course: 'Certificado de Educación Secundaria (SSC)',
          focus: 'Fundamentos académicos y enfoque disciplinado de aprendizaje.'
        }
      }
    },
    contact: {
      heading: 'Contacto',
      subtitle: 'Conectemos para oportunidades y colaboraciones',
      labels: {
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Correo',
        coordinates: 'Coordenadas',
        homeLocation: 'Ubicación',
        social: 'TAMBIÉN ESTOY EN REDES SOCIALES'
      },
      mapTitle: 'Mapa de coordenadas de Barwha'
    },
    mail: {
      heading: 'Enviar comentario',
      subheading: 'Comparte tu mensaje y te responderé pronto.',
      nameLabel: 'Nombre',
      emailLabel: 'Correo',
      messageLabel: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'Tu correo',
      messagePlaceholder: 'Escribe tu mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      status: {
        required: 'Por favor completa todos los campos.',
        opened: 'Se abrió tu app de correo.',
        sent: 'Mensaje enviado correctamente.'
      },
      subject: 'Saludos de {{name}}',
      nameFallback: 'Amigo'
    }
  },
  fr: {
    common: {
      menu: 'Menu',
      downloadResume: 'Télécharger le CV',
      fullImageAlt: 'Image de section complète',
      sliderAlt: 'Image du carrousel'
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      education: 'Éducation',
      contact: 'Contact',
      mailTo: 'Envoyer un mail'
    },
    home: {
      title: {
        windows: 'Application Windows',
        web: 'Application web',
        mobile: 'Application mobile'
      }
    },
    about: {
      heading: 'À propos',
      role: 'Développeur Full Stack',
      location: 'Barwha, Maharashtra, Inde',
      highlights: {
        dotnet: '.NET Full Stack',
        angular: 'Angular',
        api: 'Conception d’API',
        sql: 'Performance SQL',
        leadership: 'Leadership d’équipe'
      },
      facts: {
        email: 'Email',
        phone: 'Téléphone',
        dob: 'Date de naissance',
        nationality: 'Nationalité'
      },
      summary: {
        heading: 'Résumé professionnel',
        p1:
          'Développeur full stack avec une solide expérience dans la création de plateformes web critiques et de portails d’entreprise. Axé sur un code maintenable, la performance et des solutions fiables.',
        p2:
          'À l’aise avec les API backend, la modélisation de données et le frontend moderne, avec ownership du design au déploiement.'
      }
    },
    skills: {
      heading: 'Compétences',
      subtitle: 'Aperçu du stack technologique et du niveau',
      cards: {
        programming: {
          title: 'Langages de programmation',
          subtitle: 'Fondamentaux du développement',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'Développement serveur & client',
          subtitle: 'Logique applicative et architecture web',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'Technologies frontend',
          subtitle: 'Structure UI et style',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'Technologies de base de données',
          subtitle: 'Stockage, requêtes et optimisation',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'Projets',
      roleLabel: 'Rôle :',
      highlightsLabel: 'Points clés',
      responsibilitiesLabel: 'Responsabilités',
      technologiesLabel: 'Technologies :',
      goTo: 'Aller à {{name}}',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'Plateforme de planification et de prévision',
          role: 'Développeur backend',
          description:
            'Plateforme full stack pour prévoir la performance financière à partir de données historiques et de modèles prédictifs.',
          highlights: {
            h1: 'Simulation what-if pour une meilleure planification stratégique.',
            h2: 'Identification des pertes de profit et opportunités d’optimisation.',
            h3: 'Tendances claires et prévisions de revenus pour la décision.'
          },
          responsibilities: {
            r1: 'Développement de services backend en Node.js et intégration React.',
            r2: 'Conception d’API REST performantes et procédures SQL Server.',
            r3: 'Contribution sur tout le cycle : conception, implémentation, tests, déploiement.'
          }
        },
        dof: {
          name: 'Portal Department of Finance (DOF)',
          subtitle: 'Portail départemental des EAU',
          role: 'Développeur logiciel senior',
          description:
            'Portail complet pour le Department of Finance des EAU, simplifiant les opérations internes et l’engagement des employés.',
          highlights: {
            h1: 'Modules de performance, formation, communication interne et enquêtes.',
            h2: 'Gestion documentaire sécurisée et collaboration via SharePoint.',
            h3: 'Amélioration des workflows quotidiens, menus et annonces.'
          },
          responsibilities: {
            r1: 'Implémentation backend avec ASP.NET Core Web API.',
            r2: 'Conception d’API REST pour suivi des performances et formation.',
            r3: 'Requêtes SQL Server et procédures stockées pour opérations critiques.'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'Système de feedback étudiant et qualité d’enseignement',
          role: 'Chef d’équipe',
          description:
            'Développement d’une plateforme de feedback étudiant pour améliorer la qualité d’enseignement par des insights actionnables.',
          highlights: {
            h1: 'Collecte et analyse structurée du feedback pour l’amélioration continue.',
            h2: 'Alignement de la qualité académique avec les attentes société/industrie.',
            h3: 'Modèle centré sur l’apprenant pour renforcer l’engagement.'
          },
          responsibilities: {
            r1: 'Onboarding, mentoring, planification des tâches et feedback.',
            r2: 'Définition du scope, des délais, des livrables et de la charge.',
            r3: 'Suivi d’exécution, mitigation des risques, communication transparente.',
            r4: 'Revue régulière des livrables pour qualité et délais.'
          }
        }
      }
    },
    experience: {
      heading: 'Expérience',
      subtitle: 'Chronologie professionnelle et impact',
      items: {
        item1: {
          role: 'Responsable module',
          highlights: {
            h1: 'Projet livré une semaine en avance, déploiement fluide.',
            h2: 'Architecture optimisée, performance +20% et temps de réponse -30%.'
          }
        },
        item2: {
          role: 'Développeur .NET Full Stack',
          highlights: {
            h1: 'Optimisation des requêtes BD, performance backend +25%.',
            h2: 'Plateforme clinique multi-tenant dynamique livrée avec succès.'
          }
        },
        item3: {
          role: 'Ingénieur logiciel senior',
          highlights: {
            h1: 'Nouveaux frameworks appris et app mobile livrée à temps.',
            h2: 'App de don de nourriture pendant COVID-19 avec impact social.'
          }
        },
        item4: {
          role: 'Ingénieur logiciel senior',
          highlights: {
            h1: 'Conversion en SPA, amélioration UX et navigation.',
            h2: 'Refonte du flux d’inscription, +60% d’inscriptions.'
          }
        }
      }
    },
    education: {
      heading: 'Éducation',
      subtitle: 'Chronologie académique et fondation',
      items: {
        item1: {
          course: 'Diplôme en technologies de l’information',
          focus: 'Développement logiciel, bases de données, projets pratiques.'
        },
        item2: {
          course: 'Certificat d’enseignement secondaire supérieur (HSC)',
          focus: 'Bases solides en maths, sciences et analyse.'
        },
        item3: {
          course: 'Certificat d’enseignement secondaire (SSC)',
          focus: 'Fondamentaux académiques et discipline.'
        }
      }
    },
    contact: {
      heading: 'Contact',
      subtitle: 'Connectons-nous pour opportunités et collaborations',
      labels: {
        address: 'Adresse',
        phone: 'Téléphone',
        email: 'Email',
        coordinates: 'Coordonnées',
        homeLocation: 'Lieu',
        social: 'JE SUIS AUSSI SUR LES RÉSEAUX SOCIAUX'
      },
      mapTitle: 'Carte des coordonnées de Barwha'
    },
    mail: {
      heading: 'Envoyer votre message',
      subheading: 'Partagez votre message, je vous répondrai bientôt.',
      nameLabel: 'Nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'Votre email',
      messagePlaceholder: 'Écrivez votre message',
      send: 'Envoyer le message',
      sending: 'Envoi...',
      status: {
        required: 'Veuillez remplir tous les champs.',
        opened: 'Votre application mail est ouverte.',
        sent: 'Message envoyé avec succès.'
      },
      subject: 'Bonjour de {{name}}',
      nameFallback: 'Ami'
    }
  },
  de: {
    common: {
      menu: 'Menü',
      downloadResume: 'Lebenslauf herunterladen',
      fullImageAlt: 'Vollbild-Abschnitt',
      sliderAlt: 'Slider-Bild'
    },
    nav: {
      home: 'Start',
      about: 'Über mich',
      experience: 'Erfahrung',
      projects: 'Projekte',
      skills: 'Fähigkeiten',
      education: 'Ausbildung',
      contact: 'Kontakt',
      mailTo: 'E-Mail senden'
    },
    home: {
      title: {
        windows: 'Windows-Anwendung',
        web: 'Webanwendung',
        mobile: 'Mobile Anwendung'
      }
    },
    about: {
      heading: 'Über mich',
      role: 'Full-Stack-Entwickler',
      location: 'Barwha, Maharashtra, Indien',
      highlights: {
        dotnet: '.NET Full Stack',
        angular: 'Angular',
        api: 'API-Design',
        sql: 'SQL-Performance',
        leadership: 'Teamführung'
      },
      facts: {
        email: 'E-Mail',
        phone: 'Telefon',
        dob: 'Geburtsdatum',
        nationality: 'Nationalität'
      },
      summary: {
        heading: 'Berufliches Profil',
        p1:
          'Full-Stack-Entwickler mit solider Erfahrung in geschäftskritischen Webplattformen und Unternehmensportalen. Fokus auf wartbaren Code, Performance und verlässliche Lösungen.',
        p2:
          'Sicher in Backend-APIs, Datenmodellierung und modernem Frontend, mit Verantwortung von Design bis Deployment.'
      }
    },
    skills: {
      heading: 'Fähigkeiten',
      subtitle: 'Technologie-Stack und Kompetenzüberblick',
      cards: {
        programming: {
          title: 'Programmiersprachen',
          subtitle: 'Entwicklungsgrundlagen',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'Server- und Client-Entwicklung',
          subtitle: 'Applikationslogik und Webarchitektur',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'Frontend-Technologien',
          subtitle: 'UI-Struktur und Styling',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'Datenbank-Technologien',
          subtitle: 'Speicherung, Abfragen und Optimierung',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'Projekte',
      roleLabel: 'Rolle:',
      highlightsLabel: 'Highlights',
      responsibilitiesLabel: 'Verantwortlichkeiten',
      technologiesLabel: 'Technologien:',
      goTo: 'Zu {{name}}',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'Planungs- und Forecasting-Plattform',
          role: 'Backend-Entwickler',
          description:
            'Full-Stack-Planungsplattform zur Finanzprognose mit historischen Daten und prädiktiven Modellen.',
          highlights: {
            h1: 'What-if-Simulationen für bessere Strategieplanung.',
            h2: 'Erkennung von Gewinnverlusten und Optimierungspotenzialen.',
            h3: 'Klare Trends und Umsatzprognosen für Entscheidungen.'
          },
          responsibilities: {
            r1: 'Backend-Services in Node.js entwickelt und mit React integriert.',
            r2: 'Leistungsfähige REST-APIs und SQL-Server-Prozeduren entworfen.',
            r3: 'Über gesamten Lebenszyklus beigetragen: Design, Implementierung, Tests, Deployment.'
          }
        },
        dof: {
          name: 'Department of Finance (DOF) Portal',
          subtitle: 'VAE-Department-Portal',
          role: 'Senior Softwareentwickler',
          description:
            'Umfassendes Portal für das Department of Finance der VAE zur Optimierung interner Abläufe und Mitarbeiterbindung.',
          highlights: {
            h1: 'Module für Performance, Training, interne Kommunikation und Umfragen.',
            h2: 'Sichere Dokumentenverwaltung und Zusammenarbeit via SharePoint.',
            h3: 'Verbesserte Usability für tägliche Workflows inklusive Menüs und Ankündigungen.'
          },
          responsibilities: {
            r1: 'Backend-Funktionalität mit ASP.NET Core Web API implementiert.',
            r2: 'REST-APIs für Performance- und Trainingsmanagement entworfen.',
            r3: 'SQL-Server-Abfragen und Prozeduren für kritische Abläufe erstellt.'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'Studierenden-Feedback und Lehrqualitäts-System',
          role: 'Teamleiter',
          description:
            'Leitung der Entwicklung einer Feedback-Plattform zur Verbesserung der Lehrqualität mit datengetriebenen Insights.',
          highlights: {
            h1: 'Strukturiertes Feedback und Analyse für kontinuierliche Verbesserung.',
            h2: 'Abgleich akademischer Qualität mit gesellschaftlichen und industriellen Erwartungen.',
            h3: 'Förderung eines lernendenzentrierten Modells für mehr Engagement.'
          },
          responsibilities: {
            r1: 'Onboarding, Mentoring, Aufgabenplanung und Feedback organisiert.',
            r2: 'Scope, Zeitpläne, Deliverables und Arbeitsverteilung definiert.',
            r3: 'Ausführung überwacht, Risiken gemindert, transparente Kommunikation gesichert.',
            r4: 'Deliverables regelmäßig auf Qualität und Termine geprüft.'
          }
        }
      }
    },
    experience: {
      heading: 'Erfahrung',
      subtitle: 'Professionelle Timeline und Schlüsselwirkung',
      items: {
        item1: {
          role: 'Modulverantwortlicher',
          highlights: {
            h1: 'Projekt eine Woche früher geliefert, reibungsloses Deployment.',
            h2: 'Architektur optimiert, Performance +20% und Antwortzeit -30%.'
          }
        },
        item2: {
          role: '.NET Full-Stack-Entwickler',
          highlights: {
            h1: 'Datenbankabfragen optimiert, Backend-Performance +25%.',
            h2: 'Dynamische Multi-Tenant-Clinical-Trial-Plattform entwickelt und geliefert.'
          }
        },
        item3: {
          role: 'Senior Software Engineer',
          highlights: {
            h1: 'Neue Frameworks gelernt und Mobile-App termingerecht geliefert.',
            h2: 'Food-Donation-App während COVID-19 mit sozialem Impact gebaut.'
          }
        },
        item4: {
          role: 'Senior Software Engineer',
          highlights: {
            h1: 'Multipage-App zu SPA konvertiert, UX verbessert.',
            h2: 'Registrierung/Barcode-Flow überarbeitet, +60% Registrierungen.'
          }
        }
      }
    },
    education: {
      heading: 'Ausbildung',
      subtitle: 'Akademische Timeline und Grundlage',
      items: {
        item1: {
          course: 'Diplom in Informationstechnologie',
          focus: 'Softwareentwicklung, Datenbankgrundlagen und Praxisprojekte.'
        },
        item2: {
          course: 'Höhere Sekundarstufe (HSC)',
          focus: 'Starke Basis in Mathematik, Naturwissenschaften und Analyse.'
        },
        item3: {
          course: 'Sekundarstufe (SSC)',
          focus: 'Akademische Grundlagen und disziplinierter Lernansatz.'
        }
      }
    },
    contact: {
      heading: 'Kontakt',
      subtitle: 'Lass uns für Chancen und Kooperationen verbinden',
      labels: {
        address: 'Adresse',
        phone: 'Telefon',
        email: 'E-Mail',
        coordinates: 'Koordinaten',
        homeLocation: 'Wohnort',
        social: 'ICH BIN AUCH IN SOZIALEN NETZWERKEN'
      },
      mapTitle: 'Barwha Koordinatenkarte'
    },
    mail: {
      heading: 'Nachricht senden',
      subheading: 'Teilen Sie Ihre Nachricht, ich antworte bald.',
      nameLabel: 'Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Nachricht',
      namePlaceholder: 'Ihr Name',
      emailPlaceholder: 'Ihre E-Mail',
      messagePlaceholder: 'Ihre Nachricht',
      send: 'Nachricht senden',
      sending: 'Wird gesendet...',
      status: {
        required: 'Bitte alle Felder ausfüllen.',
        opened: 'Ihre Mail-App wurde geöffnet.',
        sent: 'Nachricht erfolgreich gesendet.'
      },
      subject: 'Hallo von {{name}}',
      nameFallback: 'Freund'
    }
  },
  pt: {
    common: {
      menu: 'Menu',
      downloadResume: 'Baixar currículo',
      fullImageAlt: 'Imagem de seção completa',
      sliderAlt: 'Imagem do slider'
    },
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Habilidades',
      education: 'Educação',
      contact: 'Contato',
      mailTo: 'Enviar e-mail'
    },
    home: {
      title: {
        windows: 'Aplicativo Windows',
        web: 'Aplicativo Web',
        mobile: 'Aplicativo Mobile'
      }
    },
    about: {
      heading: 'Sobre',
      role: 'Desenvolvedor Full Stack',
      location: 'Barwha, Maharashtra, Índia',
      highlights: {
        dotnet: '.NET Full Stack',
        angular: 'Angular',
        api: 'Design de APIs',
        sql: 'Performance SQL',
        leadership: 'Liderança de equipe'
      },
      facts: {
        email: 'E-mail',
        phone: 'Telefone',
        dob: 'Data de nascimento',
        nationality: 'Nacionalidade'
      },
      summary: {
        heading: 'Resumo profissional',
        p1:
          'Desenvolvedor full stack com sólida experiência em plataformas web críticas e portais corporativos. Foco em código sustentável, performance e soluções confiáveis.',
        p2:
          'Confortável com APIs backend, modelagem de dados e frontend moderno, com ownership de ponta a ponta.'
      }
    },
    skills: {
      heading: 'Habilidades',
      subtitle: 'Visão geral do stack e proficiência',
      cards: {
        programming: {
          title: 'Linguagens de programação',
          subtitle: 'Fundamentos de desenvolvimento',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'Desenvolvimento servidor e cliente',
          subtitle: 'Lógica da aplicação e arquitetura web',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'Tecnologias frontend',
          subtitle: 'Estrutura de UI e estilo',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'Tecnologias de banco de dados',
          subtitle: 'Armazenamento, consulta e otimização',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'Projetos',
      roleLabel: 'Função:',
      highlightsLabel: 'Destaques',
      responsibilitiesLabel: 'Responsabilidades',
      technologiesLabel: 'Tecnologias:',
      goTo: 'Ir para {{name}}',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'Plataforma de planejamento e previsão',
          role: 'Desenvolvedor backend',
          description:
            'Plataforma full stack que ajuda a prever desempenho financeiro usando dados históricos e modelos preditivos.',
          highlights: {
            h1: 'Simulações what-if para melhor planejamento estratégico.',
            h2: 'Identificação de vazamento de lucro e oportunidades de otimização.',
            h3: 'Insights claros de tendência e previsão de receita.'
          },
          responsibilities: {
            r1: 'Desenvolvi serviços backend em Node.js e integrei com módulos React.',
            r2: 'Projetei APIs REST de alto desempenho e procedures SQL Server.',
            r3: 'Contribuí em todo o ciclo: design, implementação, testes e deploy.'
          }
        },
        dof: {
          name: 'Portal Department of Finance (DOF)',
          subtitle: 'Portal departamental dos EAU',
          role: 'Desenvolvedor de software sênior',
          description:
            'Portal abrangente para o Department of Finance dos EAU, agilizando operações internas e engajamento dos colaboradores.',
          highlights: {
            h1: 'Suporte a módulos de desempenho, treinamento, comunicação interna e pesquisas.',
            h2: 'Gestão de documentos segura e colaboração via SharePoint.',
            h3: 'Melhor usabilidade em fluxos diários, incluindo menus e anúncios.'
          },
          responsibilities: {
            r1: 'Implementei backend com ASP.NET Core Web API.',
            r2: 'Desenhei APIs REST para desempenho e treinamento.',
            r3: 'Criei queries e procedures SQL Server para operações críticas.'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'Sistema de feedback estudantil e qualidade docente',
          role: 'Líder de equipe',
          description:
            'Liderei o desenvolvimento de uma plataforma de feedback estudantil para melhoria de qualidade docente com insights acionáveis.',
          highlights: {
            h1: 'Coleta e análise estruturada de feedback para melhoria contínua.',
            h2: 'Alinhamento da qualidade acadêmica com expectativas sociais e industriais.',
            h3: 'Modelo centrado no aluno para maior engajamento e impacto.'
          },
          responsibilities: {
            r1: 'Onboarding, mentoring, planejamento de tarefas e feedback.',
            r2: 'Definição de escopo, cronograma, entregáveis e distribuição de carga.',
            r3: 'Monitoramento de execução, mitigação de riscos e comunicação transparente.',
            r4: 'Revisões regulares para garantir qualidade e prazo.'
          }
        }
      }
    },
    experience: {
      heading: 'Experiência',
      subtitle: 'Linha do tempo profissional e impacto',
      items: {
        item1: {
          role: 'Líder de módulo',
          highlights: {
            h1: 'Projeto entregue uma semana antes, com deploy suave.',
            h2: 'Arquitetura otimizada, performance +20% e resposta -30%.'
          }
        },
        item2: {
          role: 'Desenvolvedor .NET Full Stack',
          highlights: {
            h1: 'Consultas otimizadas, performance backend +25%.',
            h2: 'Plataforma clínica multi-tenant dinâmica entregue com sucesso.'
          }
        },
        item3: {
          role: 'Engenheiro de software sênior',
          highlights: {
            h1: 'Aprendi novos frameworks e entreguei app móvel no prazo.',
            h2: 'Criei app de doação de alimentos durante COVID-19 com impacto social.'
          }
        },
        item4: {
          role: 'Engenheiro de software sênior',
          highlights: {
            h1: 'Converti app multipágina para SPA, melhor UX.',
            h2: 'Fluxo de registro e barcode aprimorados, +60% registros.'
          }
        }
      }
    },
    education: {
      heading: 'Educação',
      subtitle: 'Linha acadêmica e base de aprendizado',
      items: {
        item1: {
          course: 'Diploma em Tecnologia da Informação',
          focus: 'Desenvolvimento de software, fundamentos de banco de dados e projetos práticos.'
        },
        item2: {
          course: 'Certificado do Ensino Médio (HSC)',
          focus: 'Base sólida em matemática, ciência e análise.'
        },
        item3: {
          course: 'Certificado do Ensino Secundário (SSC)',
          focus: 'Fundamentos acadêmicos e aprendizado disciplinado.'
        }
      }
    },
    contact: {
      heading: 'Contato',
      subtitle: 'Conecte-se para oportunidades e colaborações',
      labels: {
        address: 'Endereço',
        phone: 'Telefone',
        email: 'E-mail',
        coordinates: 'Coordenadas',
        homeLocation: 'Localização',
        social: 'TAMBÉM ESTOU NAS REDES SOCIAIS'
      },
      mapTitle: 'Mapa de coordenadas de Barwha'
    },
    mail: {
      heading: 'Enviar sua mensagem',
      subheading: 'Compartilhe sua mensagem e responderei em breve.',
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      messageLabel: 'Mensagem',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'Seu e-mail',
      messagePlaceholder: 'Escreva sua mensagem',
      send: 'Enviar mensagem',
      sending: 'Enviando...',
      status: {
        required: 'Preencha todos os campos.',
        opened: 'Seu app de e-mail foi aberto.',
        sent: 'Mensagem enviada com sucesso.'
      },
      subject: 'Olá de {{name}}',
      nameFallback: 'Amigo'
    }
  },
  ar: {
    common: {
      menu: 'القائمة',
      downloadResume: 'تنزيل السيرة الذاتية',
      fullImageAlt: 'صورة كاملة للقسم',
      sliderAlt: 'صورة السلايدر'
    },
    nav: {
      home: 'الرئيسية',
      about: 'نبذة',
      experience: 'الخبرة',
      projects: 'المشاريع',
      skills: 'المهارات',
      education: 'التعليم',
      contact: 'التواصل',
      mailTo: 'إرسال بريد'
    },
    home: {
      title: {
        windows: 'تطبيقات ويندوز',
        web: 'تطبيقات الويب',
        mobile: 'تطبيقات الجوال'
      }
    },
    about: {
      heading: 'نبذة',
      role: 'مطوّر فل ستاك',
      location: 'باروا، ماهاراشترا، الهند',
      highlights: {
        dotnet: '.NET فل ستاك',
        angular: 'Angular',
        api: 'تصميم API',
        sql: 'أداء SQL',
        leadership: 'قيادة الفريق'
      },
      facts: {
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        dob: 'تاريخ الميلاد',
        nationality: 'الجنسية'
      },
      summary: {
        heading: 'ملخص مهني',
        p1:
          'مطوّر فل ستاك بخبرة قوية في منصات ويب حرجة للأعمال وبوابات الشركات. أركز على كود قابل للصيانة وأداء أفضل وحلول موثوقة.',
        p2:
          'مرتاح في APIs الخلفية ونمذجة البيانات وتطوير الواجهة الحديثة، مع ملكية كاملة من التصميم إلى النشر.'
      }
    },
    skills: {
      heading: 'المهارات',
      subtitle: 'نظرة على التقنية ومستوى الإتقان',
      cards: {
        programming: {
          title: 'لغات البرمجة',
          subtitle: 'أساسيات التطوير',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'تطوير الخادم والعميل',
          subtitle: 'منطق التطبيق وبنية الويب',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'تقنيات الواجهة الأمامية',
          subtitle: 'بنية واجهة المستخدم والتصميم',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'تقنيات قواعد البيانات',
          subtitle: 'التخزين والاستعلام والتحسين',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'المشاريع',
      roleLabel: 'الدور:',
      highlightsLabel: 'أهم النقاط',
      responsibilitiesLabel: 'المسؤوليات',
      technologiesLabel: 'التقنيات:',
      goTo: 'اذهب إلى {{name}}',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'منصة التخطيط والتنبؤ',
          role: 'مطوّر خلفي',
          description:
            'منصة تخطيط فل ستاك تساعد المؤسسات على توقع الأداء المالي باستخدام بيانات تاريخية ونماذج تنبؤية.',
          highlights: {
            h1: 'محاكاة what-if لتحسين التخطيط الاستراتيجي.',
            h2: 'تحديد فرص تحسين وتسرب الأرباح.',
            h3: 'تقديم اتجاهات وتوقعات إيرادات واضحة لاتخاذ القرار.'
          },
          responsibilities: {
            r1: 'تطوير خدمات خلفية بـ Node.js وربطها بواجهة React.',
            r2: 'تصميم APIs REST عالية الأداء وإجراءات SQL Server.',
            r3: 'المساهمة في دورة الحياة كاملة: تصميم وتنفيذ واختبار ونشر.'
          }
        },
        dof: {
          name: 'بوابة Department of Finance (DOF)',
          subtitle: 'بوابة قسم في الإمارات',
          role: 'مطوّر برمجيات أول',
          description:
            'بوابة شاملة لوزارة المالية الإماراتية لتبسيط العمليات الداخلية وتحسين مشاركة الموظفين.',
          highlights: {
            h1: 'دعم وحدات الأداء والتدريب والاتصال الداخلي والاستبيانات.',
            h2: 'تمكين إدارة المستندات والتعاون عبر SharePoint.',
            h3: 'تحسين قابلية الاستخدام لتدفقات العمل اليومية.'
          },
          responsibilities: {
            r1: 'تنفيذ وظائف خلفية باستخدام ASP.NET Core Web API.',
            r2: 'تصميم APIs لوحدات تتبع الأداء والتدريب.',
            r3: 'بناء استعلامات وإجراءات SQL Server للعمليات الحرجة.'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'نظام ملاحظات الطلاب وجودة التدريس',
          role: 'قائد فريق',
          description:
            'قيادة تطوير منصة ملاحظات طلابية لتحسين جودة التدريس عبر رؤى عملية.',
          highlights: {
            h1: 'جمع وتحليل منظم للملاحظات لتحسين مستمر.',
            h2: 'مواءمة جودة التعليم مع متطلبات المجتمع والصناعة.',
            h3: 'تعزيز نموذج يركز على المتعلم لزيادة التفاعل.'
          },
          responsibilities: {
            r1: 'إدارة onboarding والتوجيه وتخطيط المهام والتقييم.',
            r2: 'تحديد النطاق والجدول الزمني والتسليمات وتوزيع العمل.',
            r3: 'متابعة التنفيذ وتقليل المخاطر وضمان التواصل الشفاف.',
            r4: 'مراجعة التسليمات لضمان الجودة والوقت.'
          }
        }
      }
    },
    experience: {
      heading: 'الخبرة',
      subtitle: 'الخط الزمني المهني والأثر',
      items: {
        item1: {
          role: 'قائد وحدة',
          highlights: {
            h1: 'إنهاء مشروع قبل أسبوع مما سمح بنشر سلس وتجاوز التوقعات.',
            h2: 'تحسين المعمارية لرفع الأداء 20% وتقليل الاستجابة 30%.'
          }
        },
        item2: {
          role: 'مطوّر .NET فل ستاك',
          highlights: {
            h1: 'تحسين استعلامات قاعدة البيانات لرفع الأداء 25%.',
            h2: 'تصميم منصة تجارب سريرية متعددة المستأجرين وتسليمها.'
          }
        },
        item3: {
          role: 'مهندس برمجيات أول',
          highlights: {
            h1: 'تعلم أطر جديدة وتسليم تطبيق جوال ضمن الوقت.',
            h2: 'تطوير تطبيق تبرعات غذائية خلال COVID-19 بأثر اجتماعي.'
          }
        },
        item4: {
          role: 'مهندس برمجيات أول',
          highlights: {
            h1: 'تحويل تطبيق متعدد الصفحات إلى SPA وتحسين UX.',
            h2: 'تحسين التسجيل ومسح الباركود وزيادة التسجيل 60%.'
          }
        }
      }
    },
    education: {
      heading: 'التعليم',
      subtitle: 'الخط الأكاديمي والأساس',
      items: {
        item1: {
          course: 'دبلوم في تقنية المعلومات',
          focus: 'تطوير البرمجيات وأساسيات قواعد البيانات والمشاريع العملية.'
        },
        item2: {
          course: 'شهادة الثانوية العليا (HSC)',
          focus: 'أساس قوي في الرياضيات والعلوم والتحليل.'
        },
        item3: {
          course: 'شهادة الثانوية (SSC)',
          focus: 'أساس أكاديمي ونهج تعلم منظم.'
        }
      }
    },
    contact: {
      heading: 'التواصل',
      subtitle: 'للتواصل من أجل الفرص والتعاون',
      labels: {
        address: 'العنوان',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        coordinates: 'الإحداثيات',
        homeLocation: 'الموقع',
        social: 'أنا أيضًا على الشبكات الاجتماعية'
      },
      mapTitle: 'خريطة إحداثيات Barwha'
    },
    mail: {
      heading: 'أرسل رسالتك',
      subheading: 'شارك رسالتك وسأرد قريبًا.',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      messageLabel: 'الرسالة',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      messagePlaceholder: 'اكتب رسالتك',
      send: 'إرسال الرسالة',
      sending: 'جارٍ الإرسال...',
      status: {
        required: 'يرجى إكمال جميع الحقول.',
        opened: 'تم فتح تطبيق البريد.',
        sent: 'تم إرسال الرسالة بنجاح.'
      },
      subject: 'تحية من {{name}}',
      nameFallback: 'صديق'
    }
  },
  ru: {
    common: {
      menu: 'Меню',
      downloadResume: 'Скачать резюме',
      fullImageAlt: 'Полное изображение секции',
      sliderAlt: 'Изображение слайдера'
    },
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      experience: 'Опыт',
      projects: 'Проекты',
      skills: 'Навыки',
      education: 'Образование',
      contact: 'Контакты',
      mailTo: 'Отправить письмо'
    },
    home: {
      title: {
        windows: 'Приложение Windows',
        web: 'Веб-приложение',
        mobile: 'Мобильное приложение'
      }
    },
    about: {
      heading: 'Обо мне',
      role: 'Full Stack разработчик',
      location: 'Барва, Махараштра, Индия',
      highlights: {
        dotnet: '.NET Full Stack',
        angular: 'Angular',
        api: 'Дизайн API',
        sql: 'Производительность SQL',
        leadership: 'Лидерство в команде'
      },
      facts: {
        email: 'Email',
        phone: 'Телефон',
        dob: 'Дата рождения',
        nationality: 'Национальность'
      },
      summary: {
        heading: 'Профессиональный обзор',
        p1:
          'Full stack разработчик с сильным опытом создания критичных для бизнеса веб-платформ и корпоративных порталов. Фокус на поддерживаемом коде, производительности и надежных решениях.',
        p2:
          'Уверенно работаю с backend API, моделированием данных и современным frontend, с ответственностью от дизайна до деплоя.'
      }
    },
    skills: {
      heading: 'Навыки',
      subtitle: 'Обзор технологического стека и уровня',
      cards: {
        programming: {
          title: 'Языки программирования',
          subtitle: 'Основы разработки',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'Серверная и клиентская разработка',
          subtitle: 'Логика приложения и веб-архитектура',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'Frontend технологии',
          subtitle: 'Структура UI и стилизация',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'Технологии баз данных',
          subtitle: 'Хранение, запросы и оптимизация',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'Проекты',
      roleLabel: 'Роль:',
      highlightsLabel: 'Ключевые моменты',
      responsibilitiesLabel: 'Обязанности',
      technologiesLabel: 'Технологии:',
      goTo: 'Перейти к {{name}}',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'Платформа планирования и прогнозирования',
          role: 'Backend разработчик',
          description:
            'Full stack платформа планирования для прогнозирования финансовых результатов на основе исторических данных и предиктивных моделей.',
          highlights: {
            h1: 'What-if моделирование для стратегического планирования.',
            h2: 'Выявление утечек прибыли и возможностей оптимизации.',
            h3: 'Прозрачные тренды и прогнозы доходов для решений.'
          },
          responsibilities: {
            r1: 'Разработка backend сервисов на Node.js и интеграция с React.',
            r2: 'Дизайн REST API и процедур SQL Server для расчетов.',
            r3: 'Участие во всем цикле: дизайн, разработка, тестирование, деплой.'
          }
        },
        dof: {
          name: 'Department of Finance (DOF) Portal',
          subtitle: 'Портал департамента ОАЭ',
          role: 'Senior software developer',
          description:
            'Комплексный портал для департамента финансов ОАЭ для оптимизации внутренних операций и вовлеченности сотрудников.',
          highlights: {
            h1: 'Модули эффективности, обучения, внутренней коммуникации и опросов.',
            h2: 'Безопасное управление документами и коллаборация через SharePoint.',
            h3: 'Повышение удобства ежедневных процессов.'
          },
          responsibilities: {
            r1: 'Реализация backend на ASP.NET Core Web API.',
            r2: 'Дизайн REST API для performance tracking и training management.',
            r3: 'Запросы и процедуры SQL Server для критичных операций.'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: 'Система обратной связи студентов',
          role: 'Team Lead',
          description:
            'Руководство разработкой платформы обратной связи для улучшения качества преподавания с использованием практических инсайтов.',
          highlights: {
            h1: 'Сбор и анализ обратной связи для постоянного улучшения.',
            h2: 'Согласование академического качества с ожиданиями общества и индустрии.',
            h3: 'Модель, ориентированная на студента, для большего вовлечения.'
          },
          responsibilities: {
            r1: 'Онбординг, менторство, планирование задач и обратная связь.',
            r2: 'Определение объема, сроков, deliverables и распределение нагрузки.',
            r3: 'Мониторинг выполнения, снижение рисков, прозрачная коммуникация.',
            r4: 'Регулярный контроль качества и сроков.'
          }
        }
      }
    },
    experience: {
      heading: 'Опыт',
      subtitle: 'Профессиональная хронология и ключевой эффект',
      items: {
        item1: {
          role: 'Руководитель модуля',
          highlights: {
            h1: 'Проект завершен на неделю раньше, обеспечен плавный запуск.',
            h2: 'Оптимизация архитектуры: +20% производительности, -30% времени ответа.'
          }
        },
        item2: {
          role: '.NET Full Stack разработчик',
          highlights: {
            h1: 'Оптимизация запросов БД: +25% производительности backend.',
            h2: 'Разработка динамической multi-tenant платформы клинических испытаний.'
          }
        },
        item3: {
          role: 'Senior Software Engineer',
          highlights: {
            h1: 'Освоил новые фреймворки и выполнил мобильное приложение в срок.',
            h2: 'Создал приложение для донатов еды во время COVID-19 с соц. эффектом.'
          }
        },
        item4: {
          role: 'Senior Software Engineer',
          highlights: {
            h1: 'Перевел multipage приложение в SPA, улучшив UX.',
            h2: 'Обновил регистрацию и barcode flow, +60% регистраций.'
          }
        }
      }
    },
    education: {
      heading: 'Образование',
      subtitle: 'Академическая хронология и база',
      items: {
        item1: {
          course: 'Диплом в области информационных технологий',
          focus: 'Разработка ПО, основы БД и практические проекты.'
        },
        item2: {
          course: 'Старшая школа (HSC)',
          focus: 'Сильная база в математике, науках и анализе.'
        },
        item3: {
          course: 'Средняя школа (SSC)',
          focus: 'Академические основы и дисциплинированное обучение.'
        }
      }
    },
    contact: {
      heading: 'Контакты',
      subtitle: 'Свяжитесь для возможностей и сотрудничества',
      labels: {
        address: 'Адрес',
        phone: 'Телефон',
        email: 'Email',
        coordinates: 'Координаты',
        homeLocation: 'Местоположение',
        social: 'Я ТАКЖЕ В СОЦИАЛЬНЫХ СЕТЯХ'
      },
      mapTitle: 'Карта координат Barwha'
    },
    mail: {
      heading: 'Отправить сообщение',
      subheading: 'Поделитесь сообщением, я отвечу скоро.',
      nameLabel: 'Имя',
      emailLabel: 'Email',
      messageLabel: 'Сообщение',
      namePlaceholder: 'Ваше имя',
      emailPlaceholder: 'Ваш email',
      messagePlaceholder: 'Ваше сообщение',
      send: 'Отправить сообщение',
      sending: 'Отправка...',
      status: {
        required: 'Пожалуйста, заполните все поля.',
        opened: 'Почтовое приложение открыто.',
        sent: 'Сообщение успешно отправлено.'
      },
      subject: 'Привет от {{name}}',
      nameFallback: 'Друг'
    }
  },
  ja: {
    common: {
      menu: 'メニュー',
      downloadResume: '履歴書をダウンロード',
      fullImageAlt: 'セクション全体の画像',
      sliderAlt: 'スライダー画像'
    },
    nav: {
      home: 'ホーム',
      about: '紹介',
      experience: '経験',
      projects: 'プロジェクト',
      skills: 'スキル',
      education: '学歴',
      contact: '連絡先',
      mailTo: 'メール送信'
    },
    home: {
      title: {
        windows: 'Windowsアプリケーション',
        web: 'Webアプリケーション',
        mobile: 'モバイルアプリケーション'
      }
    },
    about: {
      heading: '紹介',
      role: 'フルスタック開発者',
      location: 'Barwha, Maharashtra, India',
      highlights: {
        dotnet: '.NET フルスタック',
        angular: 'Angular',
        api: 'API設計',
        sql: 'SQLパフォーマンス',
        leadership: 'チームリーダーシップ'
      },
      facts: {
        email: 'メール',
        phone: '電話',
        dob: '生年月日',
        nationality: '国籍'
      },
      summary: {
        heading: 'プロフェッショナル概要',
        p1:
          'ビジネスクリティカルなWebプラットフォームや企業ポータルの構築に強い経験を持つフルスタック開発者。保守性、パフォーマンス、信頼性を重視。',
        p2:
          'バックエンドAPI、データモデリング、モダンフロントエンドに精通し、設計からデプロイまで責任を持って対応。'
      }
    },
    skills: {
      heading: 'スキル',
      subtitle: '技術スタックと習熟度の概要',
      cards: {
        programming: {
          title: 'プログラミング言語',
          subtitle: '開発の基礎',
          items: {
            c: 'C Programming',
            cpp: 'C++',
            java: 'Core Java',
            dotnet: 'C#/.NET'
          }
        },
        serverClient: {
          title: 'サーバー・クライアント開発',
          subtitle: 'アプリロジックとWebアーキテクチャ',
          items: {
            js: 'JavaScript',
            jquery: 'jQuery',
            aspnet: 'ASP.NET',
            mvc: 'MVC',
            angular: 'Angular v2+'
          }
        },
        frontend: {
          title: 'フロントエンド技術',
          subtitle: 'UI構造とスタイリング',
          items: {
            html: 'HTML5',
            css: 'CSS3',
            bootstrap: 'Bootstrap 3+',
            responsive: 'Responsive UI'
          }
        },
        database: {
          title: 'データベース技術',
          subtitle: '保存、クエリ、最適化',
          items: {
            sqlserver: 'SQL Server',
            oracle: 'Oracle',
            sqlite: 'SQLite'
          }
        }
      }
    },
    projects: {
      heading: 'プロジェクト',
      roleLabel: '役割:',
      highlightsLabel: '主なハイライト',
      responsibilitiesLabel: '担当内容',
      technologiesLabel: '技術:',
      goTo: '{{name}}へ移動',
      items: {
        m12: {
          name: 'M-12 Planner',
          subtitle: 'ビジネス計画と予測プラットフォーム',
          role: 'バックエンド開発者',
          description:
            '過去データと予測モデルを用いて財務パフォーマンスを予測するフルスタック計画プラットフォーム。',
          highlights: {
            h1: '戦略立案のためのwhat-ifシミュレーションを実現。',
            h2: '利益漏れや最適化機会の特定に貢献。',
            h3: '意思決定向けに明確なトレンドと収益予測を提供。'
          },
          responsibilities: {
            r1: 'Node.jsでバックエンドを開発しReactと統合。',
            r2: '高性能REST APIとSQL Serverストアドを設計。',
            r3: '設計、実装、テスト、デプロイまで全工程に貢献。'
          }
        },
        dof: {
          name: 'Department of Finance (DOF) Portal',
          subtitle: 'UAE部門ポータル',
          role: 'シニアソフトウェア開発者',
          description:
            'UAE財務省向けの包括的ポータルを構築し内部運用を効率化、社員エンゲージメントを向上。',
          highlights: {
            h1: '評価、研修、社内連絡、アンケートなどのモジュール対応。',
            h2: 'SharePoint連携で安全な文書管理とコラボを実現。',
            h3: '日々の業務フローの使いやすさを向上。'
          },
          responsibilities: {
            r1: 'ASP.NET Core Web APIでバックエンドを実装。',
            r2: '評価・研修管理用のREST APIを設計。',
            r3: 'SQL Serverのクエリとストアドを作成。'
          }
        },
        teaqip: {
          name: 'Teacher Quality Improvement Program (TeaQIP)',
          subtitle: '学生フィードバックと教学品質システム',
          role: 'チームリード',
          description:
            'データ駆動の洞察で教学品質を改善する学生フィードバックプラットフォームを主導。',
          highlights: {
            h1: '継続改善のためのフィードバック収集・分析を実現。',
            h2: '学術品質を社会・産業ニーズと整合。',
            h3: '学習者中心モデルで関与度を向上。'
          },
          responsibilities: {
            r1: 'オンボーディング、メンタリング、タスク計画を担当。',
            r2: 'スコープ、期限、成果物、作業配分を策定。',
            r3: '進行管理、リスク低減、透明なコミュニケーション。',
            r4: '品質と納期を確保するため定期レビュー。'
          }
        }
      }
    },
    experience: {
      heading: '経験',
      subtitle: 'プロフェッショナル年表と主要成果',
      items: {
        item1: {
          role: 'モジュールリード',
          highlights: {
            h1: '1週間前倒しで納品しスムーズにデプロイ。',
            h2: 'アーキテクチャ最適化で性能+20%、応答-30%。'
          }
        },
        item2: {
          role: '.NETフルスタック開発者',
          highlights: {
            h1: 'DBクエリ最適化でバックエンド性能+25%。',
            h2: 'マルチテナント臨床試験プラットフォームを構築。'
          }
        },
        item3: {
          role: 'シニアソフトウェアエンジニア',
          highlights: {
            h1: '新フレームワークを習得しモバイルアプリを期限内に提供。',
            h2: 'COVID-19中に食料寄付アプリを構築し社会的貢献。'
          }
        },
        item4: {
          role: 'シニアソフトウェアエンジニア',
          highlights: {
            h1: 'マルチページをSPA化しUXとナビを改善。',
            h2: '登録とバーコードのフローを改善し登録+60%。'
          }
        }
      }
    },
    education: {
      heading: '学歴',
      subtitle: '学術年表と基礎',
      items: {
        item1: {
          course: '情報技術ディプロマ',
          focus: 'ソフトウェア開発、DB基礎、実践プロジェクト。'
        },
        item2: {
          course: '高等学校修了 (HSC)',
          focus: '数学・科学・分析の強固な基盤。'
        },
        item3: {
          course: '中等教育修了 (SSC)',
          focus: '学術基盤と規律ある学習。'
        }
      }
    },
    contact: {
      heading: '連絡先',
      subtitle: '機会やコラボレーションのために連絡ください',
      labels: {
        address: '住所',
        phone: '電話',
        email: 'メール',
        coordinates: '座標',
        homeLocation: '拠点',
        social: 'SNSでもつながっています'
      },
      mapTitle: 'Barwha座標マップ'
    },
    mail: {
      heading: 'メッセージ送信',
      subheading: 'メッセージを共有してください。すぐに返信します。',
      nameLabel: '名前',
      emailLabel: 'メール',
      messageLabel: 'メッセージ',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'メールアドレス',
      messagePlaceholder: 'メッセージを書く',
      send: '送信',
      sending: '送信中...',
      status: {
        required: 'すべての項目を入力してください。',
        opened: 'メールアプリを開きました。',
        sent: 'メッセージを送信しました。'
      },
      subject: '{{name}}からこんにちは',
      nameFallback: '友達'
    }
  }
};

