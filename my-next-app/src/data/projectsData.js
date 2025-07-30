import { v4 as uuidv4 } from 'uuid'


export const projectsData = [
  {
    id: 1,
    title: 'Lighthouse Bot',
    url: 'https://light.vild.ly/',
    category: 'Webbapplikation',
    img: '/images/lighthouse-bot.jpg',
    ProjectHeader: {
      title: 'Lighthouse Bot',
      publishDate: 'December 15, 2024',
      tags: 'Webbapplikation'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'lighthouse-bot-main',
        img: '/images/lighthouse-bot.jpg'
      }
    ],
    ProjectInfo: {
      ClientHeading: 'Om projektet',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Namn: ',
          details: 'Lighthouse Bot'
        },
        {
          id: uuidv4(),
          title: 'Typ av applikation: ',
          details: 'Webbapplikation'
        },
        {
          id: uuidv4(),
          title: 'Status: ',
          details: 'Under utveckling'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till applikationen',
          details: 'https://light.vild.ly/',
          isLink: true
        }
      ],
      Technologies: [
        {
          title: 'Verktyg och teknik',
          techs: [
            'AI',
            'Python',
            'JavaScript',
            'Jupyter Notebook'
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details: 'Lighthouse Bot är en intelligent webbapplikation som använder artificiell intelligens för att analysera och optimera webbsidors prestanda. Projektet kombinerar moderna AI-tekniker med webbutveckling för att ge användarna detaljerade insikter om deras webbsidors hastighet och tillgänglighet.'
        },
        {
          id: uuidv4(),
          details: 'Applikationen är byggd med Python för backend-logiken och AI-modeller, JavaScript för frontend-interaktionen, och Jupyter Notebook för dataanalys och prototyping. Bot:en kan automatiskt scanna webbsidor och ge förbättringsförslag baserat på Google Lighthouse metriker.'
        },
        {
          id: uuidv4(),
          details: 'Projektet fokuserar på att demokratisera webbprestandaoptimering genom att göra avancerade analysverktyg tillgängliga för alla utvecklare, oavsett teknisk bakgrund.'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Flutter App',
    url: 'https://github.com/DongzhuTan93/idrott-app',
    category: 'Applikation',
    img: '/images/Imtp-app.png',
    ProjectHeader: {
      title: 'Flutter App',
      publishDate: 'Januari 10, 2025',
      tags: 'Applikation'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'imtp-app-main',
        img: '/images/Imtp-app.png'
      }
    ],
    ProjectInfo: {
      ClientHeading: 'Om projektet',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Namn: ',
          details: 'IMTP Strength Measurement App'
        },
        {
          id: uuidv4(),
          title: 'Typ av applikation: ',
          details: 'Mobil Applikation'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till GitHub',
          details: 'https://github.com/DongzhuTan93/idrott-app',
          isLink: true
        }
      ],
      Technologies: [
        {
          title: 'Verktyg och teknik',
          techs: [
            'Dart',
            'Flutter',
            'C++',
            'CMake'
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details: 'En omfattande mobilapplikation för mätning av styrka med Isometric Mid-thigh Pull (IMTP) övningen. Detta projekt kombinerar hårdvarusensorer, mikrocontroller firmware och en Flutter mobilapplikation för att fånga, bearbeta, lagra och visualisera styrkedata.'
        },
        {
          id: uuidv4(),
          details: 'Applikationen fokuserar på att utveckla ett mobilt verktyg för att mäta styrka med IMTP-övningen. En lastcellsensor används för att fånga kraften som utövas under dragningen. Denna data bearbetas sedan och presenteras i ett intuitivt och användarvänligt gränssnitt.'
        },
        {
          id: uuidv4(),
          details: 'Projektet inkluderar IoT-integration med ESP32 mikrocontroller, MQTT-kommunikation för realtidsdata, och omfattande datavisualisering för prestandaanalys. Applikationen stöder både Android och iOS plattformar.'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Urshults bilservice',
    url: 'https://urshults-bilservice.se/',
    category: 'Webbsida',
    img: '/images/urshultsbilservice/urshults-cover.png',
    ProjectHeader: {
      title: 'Urshultsbilservice',
      publishDate: 'Mars 6, 2025',
      tags: 'Webbsida'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'urshultsbilservice-1',
        img: '/images/urshultsbilservice/urshult-4.png'
      },
      {
        id: uuidv4(),
        title: 'urshultsbilservice-2',
        img: '/images/urshultsbilservice/urshult-2.png'
      },
      {
        id: uuidv4(),
        title: 'urshultsbilservice-3',
        img: '/images/urshultsbilservice/urshult-3.png'
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Om klienten',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Namn: ',
          details: 'Natum AB'
        },
        {
          id: uuidv4(),
          title: 'Typ av applikation: ',
          details: 'Webbsida'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till hemsidan',
          details: 'https://natumtest4.craftwaresweden.se/',
          isLink: true
        }
      ],
      Technologies: [
        {
          title: 'Verktyg och teknik',
          techs: [
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Responsive Design'
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details: 'En modern och responsiv webbsida för Urshultsbilservice som presenterar deras tjänster och verksamhet inom bilservice. Webbplatsen är utvecklad med fokus på användarvänlighet och tillgänglighet på alla enheter.'
        },
        {
          id: uuidv4(),
          details: 'Projektet utvecklades med Next.js och TypeScript för att säkerställa en robust kodstruktur och bättre prestanda. Tailwind CSS användes för att skapa ett modernt och responsivt gränssnitt som fungerar lika bra på mobila enheter som på desktop.'
        },
        {
          id: uuidv4(),
          details: 'Webbplatsen är optimerad för sökmotorer och har snabb laddningstid, vilket förbättrar användarupplevelsen och synligheten online för Urshultsbilservice.'
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Bossa Care',
    url: 'https://bossacare.se/',
    category: 'Webbsida',
    img: '/images/bossa care home page.png',
    ProjectHeader: {
      title: 'Bossa Care',
      publishDate: 'Januari 15, 2025',
      tags: 'Webbsida'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'bossa-care-home',
        img: '/images/bossa care 1.png'
      },
      {
        id: uuidv4(),
        title: 'bossa-care-hand',
        img: '/images/bossa care hand.png'
      },
      {
        id: uuidv4(),
        title: 'bossa-care-massage',
        img: '/images/bossa care 2.png'
      },
    ],
    ProjectInfo: {
      ClientHeading: 'Om klienten',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Namn: ',
          details: 'Bossa Care Of Sweden AB'
        },
        {
          id: uuidv4(),
          title: 'Typ av applikation: ',
          details: 'Webbsida'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till hemsidan',
          details: 'https://bossacare.se/',
          isLink: true
        }
      ],
      Technologies: [
        {
          title: 'Verktyg och teknik',
          techs: [
            'Typescript',
            'Next.js',
            'Tailwind CSS',
            'Responsive Design'
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details: 'En modern och responsiv webbsida för Bossa Care som presenterar deras tjänster och verksamhet. Jag var involverad i hela utvecklingsprocessen, från de första kundmötena där jag lyssnade på och analyserade kundens behov och önskemål.'
        },
        {
          id: uuidv4(),
          details: 'Efter att ha samlat in kraven skapade jag designprototyper i Figma, vilket möjliggjorde en tydlig visuell kommunikation med kunden och säkerställde att designen mötte deras förväntningar innan utvecklingen påbörjades.'
        },
        {
          id: uuidv4(),
          details: 'För implementeringen valde jag att använda Next.js för dess fördelar inom prestanda och SEO, kombinerat med Tailwind CSS för att skapa ett modernt och responsivt gränssnitt. Detta tekniska val resulterade i en snabb, användarvänlig och visuellt tilltalande webbplats som effektivt presenterar Bossa Cares tjänster.'
        }
      ]
    }
  },
  {
    id: 5,
    title: 'Hitta vikarie',
    url: 'https://hittavikarie.dongzhutan.com/',
    category: 'Webbapplikation',
    img: '/images/hitta-vikarie.jpg',
    ProjectHeader: {
      title: 'Hitta vikarie',
      publishDate: 'December 1, 2023',
      tags: 'Webbapplikation'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'hitta-vikarie-2',
        img: '/images/hitta-vikarie-2.png'
      },
      {
        id: uuidv4(),
        title: 'hitta-vikarie-1',
        img: '/images/hitta-vikarie-1.jpg'
      },
      {
        id: uuidv4(),
        title: 'hitta-vikarie-3',
        img: '/images/hitta-vikarie-3.png'
      }
    ],
    ProjectInfo: {
      ClientHeading: 'Om klienten',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Namn: ',
          details: 'Dongzhu Tan'
        },
        {
          id: uuidv4(),
          title: 'Typ av applikation: ',
          details: 'Webbapplikation'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till hemsidan',
          details: 'https://hittavikarie.dongzhutan.com/',
          isLink: true
        }
      ],
      Technologies: [
        {
          title: 'Verktyg och teknik',
          techs: [
            'JavaScript',
            'Node.js',
            'Express',
            'MongoDB',
            'React.js',
            'Git',
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details: 'Denna webbsidan tillåter människor att logga in och skapa ett konto hos Hitta vikarie. Efter inloggning som vikarie kan användaren se lediga tjänster och lägga upp sina lediga arbetstider.'
        },
        {
          id: uuidv4(),
          details: 'Företag kan också logga in och lägga ut lediga tjänster som alla vikarier kan se och ansöka till. Företag kan enkelt hitta vikarier baserat på deras tillgänglighet och kompetens.'
        },
        {
          id: uuidv4(),
          details: 'All data lagras i MongoDB, vilket ger en flexibel och skalbar lösning för att hantera användarinformation, tjänster och ansökningar. Plattformen erbjuder ett användarvänligt gränssnitt med avancerade filtreringsmöjligheter för att underlätta matchningen mellan arbetsgivare och arbetssökande.'
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Weather Forecast',
    url: 'https://weatherforecast.dongzhutan.com/',
    category: 'Webbapplikation',
    img: '/images/weather-app-2.png',
    ProjectHeader: {
      title: 'Weather Forecast',
      publishDate: 'Augusti 20, 2024',
      tags: 'Webbapplikation'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'weather-app-1',
        img: '/images/weather-app-1.png'
      },
      {
        id: uuidv4(),
        title: 'weather-app-3',
        img: '/images/weather-app-3.png'
      },
      {
        id: uuidv4(),
        title: 'weather-app-4',
        img: '/images/weather-app-4.png'
      }
    ],
    ProjectInfo: {
      ClientHeading: 'Om klienten',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Namn: ',
          details: 'Dongzhu Tan'
        },
        {
          id: uuidv4(),
          title: 'Typ av applikation: ',
          details: 'Webbapplikation'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till hemsidan',
          details: 'https://weatherforecast.dongzhutan.com',
          isLink: true
        }
      ],
      
      Technologies: [
        {
          title: 'Verktyg och teknik',
          techs: [
            'React.js',
            'Javascript',
            'Node.js',
            'Express',
            'ESLint',
            'API',
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
						'Välkommen till Väderprognosapplikationen! Detta användarvänliga verktyg låter dig få en omfattande 40-dagars väderprognos för vilken stad som helst över hela världen. Genom att utnyttja data från OpenWeatherMap API bearbetar och presenterar vår applikation genomsnittliga väderförhållanden i ett intuitivt och visuellt tilltalande gränssnitt.'
        }
      ]
    }
  },
]
