import { v4 as uuidv4 } from 'uuid'


export const projectsData = [
  {
    id: 1,
    title: 'Bossa Care',
    url: 'https://bossacare.se/',
    category: 'Webbsida',
    img: '/images/bossa care home page.png',
    ProjectHeader: {
      title: 'Bossa Care',
      publishDate: 'Januari 15, 2024',
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
          title: 'Klicka här för att komma till hemsidan:',
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
    id: 2,
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
          details:
          '"Hitta vikarie" är en webbplats utformad med målet av att skapa en effektiv och användarvänlig kommunikationsplattform för både arbetsgivare och arbetssökande. Genom den här webbplatsen kan arbetssökande skapa ett konto, ge sina kontaktuppgifter, detaljera sin arbetserfarenhet och ange sina tillgängliga arbetstider. På samma sätt kan arbetsgivare registrera sig och få tillgång till en lista över tillgängliga arbetssökande för en viss tidsperiod. Detta gör det möjligt för arbetsgivare att effektivt granska och kontakta lämpliga kandidater.'
        },
        {
          id: uuidv4(),
          details:
						'Det som sticker ut med "Hitta Vikarie" är dess förmåga att effektivisera anställningsprocessen. Till skillnad från traditionella jobbsökningswebbplatser som kräver att arbetsgivare sållar igenom flertalet Cv:n, så möjliggör plattformen en snabb och enkel identifiering av lämpliga deltidsanställda. Det utförs genom de avancerade filtreringsmöjligheterna. Arbetssökande, inklusive studenter, pensionärer och arbetslösa, kan använda webbplatsen gratis för att hitta deltidsjobb som motsvarar deras tillgänglighet och kompetens.'
        },
        {
          id: uuidv4(),
          details:
						'Detta är mitt första individuella fullstack-projekt och genom dess utveckling lärde jag mig hur man använder React för första gången. Denna erfarenhet har avsevärt förbättrat min förståelse för moderna ramverk för webbutveckling och gett mig värdefulla insikter om fullstack utveckling.'
        },
      ]
    }
  },
  {
    id: 3,
    title: 'Weather Forecast',
    url: 'https://weatherforecast.dongzhutan.com/',
    category: 'Webbapplikation',
    img: '/images/weather-app-2.png',
    ProjectHeader: {
      title: 'Weather Forecast',
      publishDate: 'Dec 20, 2023',
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
  {
    id: 5,
    title: 'CRUD Applikation',
    url: 'https://crud.dongzhutan.com/',
    category: 'Webbapplikation',
    img: '/images/crud.jpg',
    ProjectHeader: {
      title: 'CRUD Application',
      publishDate: 'Juli 26, 2022',
      tags: 'Webbapplikation'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'crud-login',
        img: '/images/crud-login.png'
      },
      {
        id: uuidv4(),
        title: 'crud-showSnippets',
        img: '/images/crud-showSnippets.png'
      },
      {
        id: uuidv4(),
        title: 'crud-home',
        img: '/images/crud-home.png'
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
          details: 'Backend & Frontend Development'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till hemsidan',
          details: 'https://crud.dongzhutan.com/',
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
            'Git',
            'Html',
            'CSS'
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
						'"Our Snippets" är en webbapplikation som tillåter användare att skapa ett konto, registrera sig, logga in och hantera sina kodsnuttar. De viktigaste funktionerna inkluderar att skapa, läsa, uppdatera och ta bort (CRUD) utdrag. Användaren kan även se utdrag som skapats av andra, men för att skapa sina egna måste de logga in. Dessutom kan användare bara ändra eller ta bort sina egna utdrag, vilket säkerställer dataintegritet och användarspecifik innehållshantering. Efter att användaren utfört en inloggning visas en "Logga ut"-knapp. Genom att klicka på den här knappen loggas användaren ut och återgår till startsidan.'
        },
        {
          id: uuidv4(),
          details:
						'I det här projektet har jag lärt mig grunderna i att bygga en CRUD-applikation, vilket har givit mig en djupare praktisk erfarenhet av full-stack-utveckling.'
        },
      ]
    }
  },
  
]
