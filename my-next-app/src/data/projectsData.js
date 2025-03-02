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
          details: 'En modern webbplattform som förenklar matchningen mellan arbetsgivare och arbetssökande för deltidsjobb. Plattformen erbjuder ett effektivt system där arbetssökande kan registrera sin tillgänglighet och kompetens, medan arbetsgivare enkelt kan hitta lämpliga kandidater.'
        },
        {
          id: uuidv4(),
          details: 'Plattformen utmärker sig genom sina avancerade filtreringsmöjligheter och ett användarvänligt gränssnitt som gör det enkelt för både arbetsgivare och arbetssökande att hitta rätt matchning.'
        },
        {
          id: uuidv4(),
          details: 'Som mitt första fullstack-projekt gav utvecklingen av denna plattform mig värdefull erfarenhet av React och modern webbutveckling.'
        }
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
]
