import { v4 as uuidv4 } from 'uuid'


export const projectsData = [
  {
    id: 1,
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
        title: 'hitta-vikarie',
        img: '/images/hitta-vikarie-2.png'
      },
      {
        id: uuidv4(),
        title: 'hitta-vikarie',
        img: '/images/hitta-vikarie-1.jpg'
      },
      {
        id: uuidv4(),
        title: 'hitta-vikarie',
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
    id: 2,
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
        title: 'crud',
        img: '/images/crud-login.png'
      },
      {
        id: uuidv4(),
        title: 'crud',
        img: '/images/crud-showSnippets.png'
      },
      {
        id: uuidv4(),
        title: 'crud',
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
  {
    id: 3,
    title: 'Städföretag',
    url: 'https://cleaningcompany.dongzhutan.com/',
    category: 'UI Design',
    img: '/images/cleaning-company.jpg',
    ProjectHeader: {
      title: 'Dong städ',
      publishDate: 'Mars 26, 2021',
      tags: 'UI / Frontend'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/cleaning-company-1.jpg'
      },
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/cleaning-company-2.jpg'
      },
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/cleaning-company-3.jpg'
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
          details: 'UI Design'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till hemsidan',
          details: 'https://cleaningcompany.dongzhutan.com/',
          isLink: true
        }
      ],
      
      Technologies: [
        {
          title: 'Verktyg och teknik',
          techs: [
            'HTML',
            'CSS',
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
						'"Dong städ" är en simulering av ett städföretags hemsida, Detta projekt skapades som en del av en presentationsuppgift under mina studier. Webbplatsen låter kunderna utforska olika städtjänster och deras tillhörande priser. Utöver tjänster och priser så innehåller hemsidan även ett kontaktformulär från vilket kunderna kan nå ut till företaget direkt.'
        },
        {
          id: uuidv4(),
          details:
						'Detta var den första webbplatsen jag byggde med HTML och CSS under mitt första år på Linnéuniversitetet. Som följd av projektet upptäckte jag min passion för front-end webbdesign och utveckling av användargränssnitt. Hemsidan visar upp min första satsning på interaktionsdesign, samtidigt som den visar min egna förmåga i att skapa intuitiva och visuellt tilltalande webbsidor.'
        },
        {
          id: uuidv4(),
          details:
						'Genom att besöka Dong städ, kan du se mina första steg i världen till målet som fullstackutvecklare. Det visar mitt tidiga arbete inom webbutveckling och mina grundläggande färdigheter inom UI-design. Detta projekt lade grunden för min fortsatta tillväxt och intresse för området webbutveckling.'
        },
      ]
    }
  },
  {
    id: 4,
    title: 'Grafik99/Bildverket',
    url: 'https://grafik99.com/',
    category: 'UI Design',
    img: '/images/grafik99.png',
    ProjectHeader: {
      title: 'Grafik99/Bildverket',
      publishDate: 'Maj 26, 2024',
      tags: 'UI / Frontend'
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/grafik99-after.png'
      },
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/grafik99-logo.jpg'
      },
      {
        id: uuidv4(),
        title: 'Kabul Project Management UI',
        img: '/images/grafik99-before.png'
      }
    ],
    ProjectInfo: {
      ClientHeading: 'Om klienten',
      CompanyInfo: [
        {
          id: uuidv4(),
          title: 'Namn: ',
          details: 'Grafik99/Bildverket'
        },
        {
          id: uuidv4(),
          title: 'Typ av applikation: ',
          details: 'UI Design'
        },
        {
          id: uuidv4(),
          title: 'Klicka här för att komma till hemsidan',
          details: 'https://grafik99.com/',
          isLink: true
        }
      ],
      
      Technologies: [
        {
          title: 'Verktyg och teknik',
          techs: [
            'WordPress',
          ]
        }
      ],
      ProjectDetailsHeading: 'Översikt',
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
						'Projektet fokuserade på att göra om den nuvarande föreningens hemsida till en mer modern utseende. Jag och min partner valde som ett första steg i process att titta på den nuvarande webbplatsen för att bestämma vad som kan behållas och vad som måste göras om. Vidare diskuterades vi den nuvarande strukturen och de önskemål som föreningen la fram. Avslutningssvis utfördes arbetet i Wordpress som den äldre versionen var utformad i, ett hinder i arbetet var hur föreingen skall kunna sköta föreningens webbsida själva och därefter föll valet i att behålla snarlik struktur och därav föll valet på behållandet av att använda sig utav wordpress, Slutligen så ändrades temat till ett ljusare och textfonterna till ett som var mer överskådligt och lättläst.'
        }
      ]
    }
  },
]
