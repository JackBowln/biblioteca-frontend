import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Main from '../template/Main'
import './table.css'
const DatatablePage = () => {
  const data = {
    columns: [
     {
        label: 'ID',
        field: 'id',
        width: 50
     },
      {
        label: 'Título',
        field: 'titulo',
        sort: 'desc',
        width: 150
      },
      {
        label: 'Sub-título',
        field: 'subtitulo',
        width: 270
      },
      {
        label: 'Autor',
        field: 'autor',
        width: 200
      },
      {
        label: 'Pags',
        field: 'numpag',
        width: 100
      },
      {
        label: 'Tema',
        field: 'tema',
        width: 150
      }
    ],
    rows: [
    {
      autor: "Jules Feiffer",
      titulo: "O Homem no Teto",
      numpag: "195",
      editor: "Cia das letras",
      tema: "Aventura",
      id: 1
    },
    {
      autor: "",
      titulo: "Dona Benta - Comer bem",
      numpag: "1055",
      editor: "Companhia Editora Nacional",
      tema: "Culinária",
      id: 2
    },
    {
      autor: "Subir Chowdhury",
      titulo: "Administração no século XXI",
      numpag: "292",
      editor: "Financial Times - Prentice Hall",
      tema: "Administração",
      id: 3
    },
    {
      autor: "",
      titulo: "Cinderela",
      numpag: "6",
      editor: "Ciranda Cultural",
      tema: "Infantil",
      id: 4
    },
    {
      autor: "",
      titulo: "Brinque com o Pequeno Dino",
      numpag: "6",
      editor: "Ciranda Cultural",
      tema: "Infantil",
      id: 5
    },
    {
      autor: "IBGC",
      titulo: "Governança Corporativa em Saúde",
      numpag: "269",
      editor: "Saint Paul Editora",
      tema: "Administração",
      id: 6
    },
    {
      autor: "Mark Minasi",
      titulo: "Windows 2000 Server - A Bíblia",
      numpag: "1275",
      editor: "Makron Books",
      tema: "Tecnologia",
      id: 7
    },
    {
      autor: "Napoleon Hill",
      titulo: "Quem Convence Enriquece",
      numpag: "207",
      editor: "CDG Grupo Editorial",
      tema: "Autoajuda",
      id: 8
    },
    {
      autor: "Napoleon Hill",
      titulo: "Quem Pensa Enriquece",
      numpag: "234",
      editor: "CDG Grupo Editorial",
      tema: "Autoajuda",
      id: 9
    },
    {
      autor: "Napoleon Hill",
      titulo: "Atitide Mental Positiva",
      numpag: "256",
      editor: "CDG Grupo Editorial",
      tema: "Autoajuda",
      id: 10
    },
    {
      autor: "David King",
      titulo: "O Julgamento de Adolf Hitler",
      numpag: "350",
      editor: "Novo Século Editora",
      tema: "História",
      id: 11
    },
    {
      autor: "Adolf Hitler",
      titulo: "Mein Kempf - Minha Luta",
      numpag: "271",
      editor: "Editora Confidencial",
      tema: "História",
      id: 12
    },
    {
      autor: "Antoine Vitkine",
      titulo: "Mein Kampf a História do Livro",
      numpag: "227",
      editor: "Editora Nova Fronteira",
      tema: "História",
      id: 13
    },
    {
      autor: "Immanuel Kant",
      titulo: "Crítica da Razão Prática",
      numpag: "189",
      editor: "Lafonte",
      tema: "Filosofia",
      id: 14
    },
    {
      autor: "H.P. Lovecraft",
      titulo: "Histórias de Lovecraft",
      numpag: "175",
      editor: "Pandorga",
      tema: "Terror",
      id: 15
    },
    {
      autor: "Friedrich Nietszsche",
      titulo: "Da utilidade e do inconveniente da história para a vida",
      numpag: "95",
      editor: "Lafonte",
      tema: "Filosofia",
      id: 16
    },
    {
      autor: "Friedrich Nietszsche",
      titulo: "Entre o passado e o futuro",
      numpag: "96",
      editor: "Escala",
      tema: "Filosofia",
      id: 17
    },
    {
      autor: "Claudio Fragata",
      titulo: "O tupi que você fala",
      numpag: "30",
      editor: "Globo Livros",
      tema: "Infantil",
      id: 18
    },
    {
      autor: "Benji Davies",
      titulo: "Leo e a baleia",
      numpag: "30",
      editor: "Paz & Terra",
      tema: "Infantil",
      id: 19
    },
    {
      autor: "Laurentino Gomes",
      titulo: "1808",
      numpag: "414",
      editor: "Planeta",
      tema: "História",
      id: 20
    },
    {
      autor: "Laurentino Gomes",
      titulo: "1822",
      numpag: "350",
      editor: "Nova Fronteira",
      tema: "História",
      id: 21
    },
    {
      autor: "Laurentino Gomes",
      titulo: "1889",
      numpag: "415",
      editor: "Globo Livros",
      tema: "História",
      id: 22
    },
    {
      autor: "José Franscisco Botelho",
      titulo: "A Odisséia da filosofia",
      numpag: "252",
      editor: "Abril",
      tema: "Filosofia",
      id: 23
    },
    {
      autor: "Regis McKenna",
      titulo: "Estratégias de marketing em tempos de crise",
      numpag: "177",
      editor: "Campus",
      tema: "Administração",
      id: 24
    },
    {
      autor: "Maria Inez M. T. Walter",
      titulo: "Estatística básica",
      numpag: "67",
      editor: "MSD",
      tema: "Administração",
      id: 25
    },
    {
      autor: "Ernesto Haberkorn",
      titulo: "Gestão empresarial com ERP",
      numpag: "674",
      editor: "Microsiga",
      tema: "Administração",
      id: 26
    },
    {
      autor: "Francisco Baddini",
      titulo: "Windows server 2003",
      numpag: "316",
      editor: "Érica",
      tema: "Tecnologia",
      id: 27
    },
    {
      autor: "J.Augusto Manzano",
      titulo: "Excel 2007 avançado",
      numpag: "268",
      editor: "Érica",
      tema: "Tecnologia",
      id: 28
    },
    {
      autor: "Stephen King",
      titulo: "The Stand",
      numpag: "1421",
      editor: "New English",
      tema: "Terror",
      id: 29
    },
    {
      autor: "Tom Sheldon",
      titulo: "Desvendando windows 3.1",
      numpag: "797",
      editor: "Makron Books",
      tema: "Tecnologia",
      id: 30
    },
    {
      autor: "Michel Crouhy",
      titulo: "Fundamentos da gestão de risco",
      numpag: "352",
      editor: "Qualitymark",
      tema: "Administração",
      id: 31
    },
    {
      autor: "Paul Campbell",
      titulo: "Gerenciamento de projetos",
      numpag: "342",
      editor: "Qualitymark",
      tema: "Administração",
      id: 32
    },
    {
      autor: "Manuel Odorico",
      titulo: "Eneida Brasileira",
      numpag: "515",
      editor: "Unicamp",
      tema: "Literatura",
      id: 33
    },
    {
      autor: "Taschen",
      titulo: "Imagens interativas em 3D",
      numpag: "63",
      editor: "Taschen",
      tema: "Fotografia",
      id: 34
    },
    {
      autor: "Abril",
      titulo: "Enciclopédia recreio",
      numpag: "238",
      editor: "Abril",
      tema: "Curiosidades",
      id: 35
    },
    {
      autor: "Richard S. Wiener",
      titulo: "POO e C++",
      numpag: "333",
      editor: "Makron Books",
      tema: "Tecnologia",
      id: 36
    },
    {
      autor: "Michaelis",
      titulo: "Dicionário PT-DE",
      numpag: "626",
      editor: "Melhoramentos",
      tema: "Dicionário",
      id: 37
    },
    {
      autor: "Paulo R.V.Dias",
      titulo: "Engenharia de Custos - Uma ciência",
      numpag: "75",
      editor: "Ibec",
      tema: "Administração",
      id: 38
    },
    {
      autor: "Paulo R.V.Dias",
      titulo: "Novo conceito de BDI C1",
      numpag: "104",
      editor: "Ibec",
      tema: "Administração",
      id: 39
    },
    {
      autor: "Paulo R.V.Dias",
      titulo: "Engenharia de Custos - Uma metodologia C1",
      numpag: "216",
      editor: "Ibec",
      tema: "Administração",
      id: 40
    },
    {
      autor: "Paulo R.V.Dias",
      titulo: "Engenharia de Custos - Uma metodologia C2",
      numpag: "216",
      editor: "Ibec",
      tema: "Administração",
      id: 41
    },
    {
      autor: "Paulo R.V.Dias",
      titulo: "Novo conceito de BDI C2",
      numpag: "104",
      editor: "Ibec",
      tema: "Administração",
      id: 42
    },
    {
      autor: "Frédéric Bastiat",
      titulo: "A lei",
      numpag: "139",
      editor: "Faro Editorial",
      tema: "Sociologia",
      id: 43
    },
    {
      autor: "Pedro Bandeira",
      titulo: "O patinho feio",
      numpag: "31",
      editor: "Quinteto Editorial",
      tema: "Infantil",
      id: 44
    },
    {
      autor: "James Comey",
      titulo: "Größer als das amt",
      numpag: "383",
      editor: "Droemer",
      tema: "Autoajuda",
      id: 45
    },
    {
      autor: "Marco Morel",
      titulo: "Corrupção",
      numpag: "254",
      editor: "Casa da palavra",
      tema: "Política",
      id: 46
    },
    {
      autor: "UEB",
      titulo: "Guia do lobo",
      numpag: "190",
      editor: "UEB",
      tema: "Escoteiro",
      id: 47
    },
    {
      autor: "UEB",
      titulo: "Guia de especialidades 2010",
      numpag: "120",
      editor: "UEB",
      tema: "Escoteiro",
      id: 48
    },
    {
      autor: "Chico Xavier",
      titulo: "Brasil coração do mundo",
      numpag: "239",
      editor: "FEB",
      tema: "Espirita",
      id: 49
    },
    {
      autor: "Renato Rodrigues",
      titulo: "Pequenas piadas grandes negócios",
      numpag: "130",
      editor: "Genero",
      tema: "Humor",
      id: 50
    },
    {
      autor: "Mundo Estranho",
      titulo: "Almanaque dos zumbis",
      numpag: "151",
      editor: "Abril",
      tema: "Curiosidades",
      id: 51
    },
    {
      autor: "Alfredo Sternheim",
      titulo: "John Lennon",
      numpag: "96",
      editor: "Nova estampa",
      tema: "Biográfia",
      id: 52
    },
    {
      autor: "Paulo Coelho",
      titulo: "As valkírias",
      numpag: "192",
      editor: "Gold",
      tema: "Autoajuda",
      id: 53
    },
    {
      autor: "Agatha Christie",
      titulo: "Os elefantes não esquecem",
      numpag: "175",
      editor: "Nova fronteira",
      tema: "Suspense",
      id: 54
    },
    {
      autor: "Agatha Christie",
      titulo: "Assassinato no beco",
      numpag: "239",
      editor: "Nova fronteira",
      tema: "Suspense",
      id: 55
    },
    {
      autor: "Agatha Christie",
      titulo: "Treze à mesa",
      numpag: "254",
      editor: "Nova fronteira",
      tema: "Suspense",
      id: 56
    },
    {
      autor: "Martin Claret",
      titulo: "Chaplin",
      numpag: "135",
      editor: "Martin Claret",
      tema: "Biográfia",
      id: 57
    },
    {
      autor: "Rubem Fonseca",
      titulo: "Feliz ano novo",
      numpag: "175",
      editor: "Companhia das Letras",
      tema: "Romance",
      id: 58
    },
    {
      autor: "Fernando Sabino",
      titulo: "O grande mentecapto",
      numpag: "253",
      editor: "Record",
      tema: "Romance",
      id: 59
    },
    {
      autor: "Katherine Paterson",
      titulo: "Ponte para terabítia",
      numpag: "160",
      editor: "Salamandra",
      tema: "Romance",
      id: 60
    },
    {
      autor: "Jostein Gaarder",
      titulo: "O mundo de Sofia",
      numpag: "555",
      editor: "Companhia das letras",
      tema: "Romance",
      id: 61
    },
    {
      autor: "Sidney Sheldon",
      titulo: "Um estranho no espelho",
      numpag: "292",
      editor: "Record",
      tema: "Romance",
      id: 62
    },
    {
      autor: "Zibia Gasparetto",
      titulo: "O morro das ilusões",
      numpag: "277",
      editor: "Vida & consciência",
      tema: "Espirita",
      id: 63
    },
    {
      autor: "James C. Hunter",
      titulo: "O monge e o executivo",
      numpag: "141",
      editor: "Sextante",
      tema: "Autoajuda",
      id: 64
    },
    {
      autor: "James C. Hunter",
      titulo: "De volta ao mosteiro",
      numpag: "191",
      editor: "Sextante",
      tema: "Autoajuda",
      id: 65
    },
    {
      autor: "Vicente Hilario dos Santos",
      titulo: "A melhor empresa do mundo",
      numpag: "219",
      editor: "Gráfica Lisboa",
      tema: "Administração",
      id: 66
    },
    {
      autor: "Divaldo F. R. Teixeira",
      titulo: "Diretrizes de segurança",
      numpag: "255",
      editor: "InterVidas",
      tema: "Espirita",
      id: 67
    },
    {
      autor: "Américo Simões",
      titulo: "Paixões que ferem",
      numpag: "445",
      editor: "Barbara",
      tema: "Espirita",
      id: 68
    },
    {
      autor: "Emily Brontë",
      titulo: "O morro dos ventos uivantes",
      numpag: "292",
      editor: "LeYa",
      tema: "Romance",
      id: 69
    },
    {
      autor: "Markus Zusak",
      titulo: "A menina que roubava livros",
      numpag: "479",
      editor: "Intríseca",
      tema: "Romance",
      id: 70
    },
    {
      autor: "Penny Le Couteur",
      titulo: "O botões de napoleão",
      numpag: "343",
      editor: "Zahar",
      tema: "Romance",
      id: 71
    },
    {
      autor: "Fernando Alburquerque",
      titulo: "POO Java e UML",
      numpag: "218",
      editor: "MSD",
      tema: "Tecnologia",
      id: 72
    },
    {
      autor: "Homero Luiz Píccolo",
      titulo: "Estrutura de dados",
      numpag: "159",
      editor: "MSD",
      tema: "Tecnologia",
      id: 73
    },
    {
      autor: "Willian P. Young ",
      titulo: "A cabana",
      numpag: "236",
      editor: "Sextante",
      tema: "Ficção",
      id: 74
    },
    {
      autor: "Chris Gane",
      titulo: "Análise estruturada de sistemas",
      numpag: "257",
      editor: "LTC editora",
      tema: "Tecnologia",
      id: 75
    },
    {
      autor: "Dan Brown",
      titulo: "O código da vinci",
      numpag: "477",
      editor: "Sextante",
      tema: "Ficção",
      id: 76
    },
    {
      autor: "Robert T. Kiyosaki",
      titulo: "Pai rico pai pobre",
      numpag: "186",
      editor: "Campus",
      tema: "Autoajuda",
      id: 77
    },
    {
      autor: "Frank Herbert",
      titulo: "Duna",
      numpag: "541",
      editor: "Aleph",
      tema: "Ficção",
      id: 78
    },
    {
      autor: "Augusto Cury",
      titulo: "O vendedor de sonhos - o chamado",
      numpag: "295",
      editor: "Academia",
      tema: "Autoajuda",
      id: 79
    },
    {
      autor: "Khaled Hosseini",
      titulo: "O caçador de pipas",
      numpag: "365",
      editor: "Nova fronteira",
      tema: "Romance",
      id: 80
    },
    {
      autor: "Ontreux/ Dark_Fox/Lord V1ru5",
      titulo: "Dossie v1ru5 (vírus)",
      numpag: "317",
      editor: "Digerati Books",
      tema: "Tecnologia",
      id: 81
    },
    {
      autor: "Spyman",
      titulo: "Manual completo do hacker",
      numpag: "409",
      editor: "Express books",
      tema: "Tecnologia",
      id: 82
    },
    {
      autor: "James Misse",
      titulo: "Vai corinthians - livro mágico",
      numpag: "",
      editor: "Pé de letra",
      tema: "Curiosidades",
      id: 83
    },
    {
      autor: "Editora escala",
      titulo: "Curso completo de guitarra",
      numpag: "",
      editor: "Editora escala",
      tema: "Curso",
      id: 84
    },
    {
      autor: "Martin Gilbert",
      titulo: "A segunda guerra mundial Volume 1",
      subtitulo: "Os contornos da guerra",
      numpag: "360",
      editor: "LeYa",
      tema: "História",
      id: 85
    },
    {
      autor: "Martin Gilbert",
      titulo: "A segunda guerra mundial Volume 2",
      subtitulo: "Um ano novo para os aliados",
      numpag: "266",
      editor: "LeYa",
      tema: "História",
      id: 86
    },
    {
      autor: "Martin Gilbert",
      titulo: "A segunda guerra mundial Volume 3",
      subtitulo: "A fúria do eixo agonizante",
      numpag: "334",
      editor: "LeYa",
      tema: "História",
      id: 87
    },
    {
      autor: "Ludwig Von Mises",
      titulo: "Marxismo desmascarado",
      subtitulo: "",
      numpag: "159",
      editor: "Vide",
      tema: "Economia",
      id: 88
    },
    {
      autor: "Ludwig Von Mises",
      titulo: "O livre mercado e seus inimigos",
      subtitulo: "Pseudo-ciência, socialismo e inflação",
      numpag: "139",
      editor: "Vide",
      tema: "Economia",
      id: 89
    },
    {
      autor: "Ayn Rand",
      titulo: "A revolta de atlas",
      subtitulo: "Quem é John Galt?",
      numpag: "1215",
      editor: "Arqueiro",
      tema: "Ficção",
      id: 90
    },
    {
      autor: "João Nunes de Souza",
      titulo: "Lógica para ciência da computação",
      subtitulo: "Fundamentos de linguagem, semântica e sistemas de dedução",
      numpag: "308",
      editor: "Campus",
      tema: "Tecnologias",
      id: 91
    },
    {
      autor: "Murray N. Rothbard",
      titulo: "A grande depressão americana",
      subtitulo: "",
      numpag: "378",
      editor: "Mises Brasil",
      tema: "Economia",
      id: 92
    },
    {
      autor: "Murray N. Rothbard",
      titulo: "Anatomia do estado",
      subtitulo: "",
      numpag: "75",
      editor: "LVM",
      tema: "Economia",
      id: 93
    },
    {
      autor: "Ludwig Von Mises",
      titulo: "A mentalidade anticapitalista",
      subtitulo: "",
      numpag: "146",
      editor: "LVM",
      tema: "Economia",
      id: 94
    },
    {
      autor: "Murray N. Rothbard",
      titulo: "O manifesto libertário",
      subtitulo: "Por uma nova liberdade",
      numpag: "402",
      editor: "Mises Brasil",
      tema: "Economia",
      id: 95
    },
    {
      autor: "Friedrich A. Hayek",
      titulo: "O caminho da servidão",
      subtitulo: "",
      numpag: "231",
      editor: "Mises Brasil",
      tema: "Economia",
      id: 96
    },
    {
      autor: "Ubiratan Jorge Iorio de Souza",
      titulo: "Economia & liberdade",
      subtitulo: "A escola austriaca e a economia brasileira",
      numpag: "227",
      editor: "Inconfidentes",
      tema: "Economia",
      id: 97
    },
    {
      autor: "Hans-Hermann Hoppe",
      titulo: "Democracia, o Deus que falhou",
      subtitulo: "A economia e a política da monarquia, da democracia e da ordem natural",
      numpag: "371",
      editor: "Mises Brasil",
      tema: "Economia",
      id: 98
    },
    {
      autor: "Walter Block",
      titulo: "Defendendo o idenfensavel",
      subtitulo: "",
      numpag: "221",
      editor: "Mises Brail",
      tema: "Economia",
      id: 99
    },
    {
      autor: "Murray N.Rothbard",
      titulo: "O que o governo fez com o nosso dinheiro",
      subtitulo: "",
      numpag: "105",
      editor: "Mises Brasil",
      tema: "Economia",
      id: 100
    },
    {
      autor: "Maquiavel",
      titulo: "O príncipe",
      subtitulo: "",
      numpag: "127",
      editor: "Lafonte",
      tema: "Política",
      id: 101
    },
    {
      autor: "Nietszche",
      titulo: "Além do bem e do mal",
      subtitulo: "Prelúdio de uma filosofia do futuro",
      numpag: "223",
      editor: "Lafonte",
      tema: "Filosofia",
      id: 102
    },
    {
      autor: "Dante Alighieri",
      titulo: "Monarquia",
      subtitulo: "",
      numpag: "220",
      editor: "Lafonte",
      tema: "Política",
      id: 103
    },
    {
      autor: "Geofrey Blainey",
      titulo: "Uma breve história do século XX",
      subtitulo: "",
      numpag: "307",
      editor: "Fundamento",
      tema: "História",
      id: 104
    },
    {
      autor: "Geofrey Blainey",
      titulo: "Uma breve história do mundo",
      subtitulo: "",
      numpag: "335",
      editor: "Fundamento",
      tema: "História",
      id: 105
    },
    {
      autor: "Martin Gilbert",
      titulo: "Winston Churchil Volume 1",
      subtitulo: "Uma vida",
      numpag: "558",
      editor: "Casa da palavra",
      tema: "Biografia",
      id: 106
    },
    {
      autor: "Jim Hutton",
      titulo: "Freddie Mercury",
      subtitulo: "",
      numpag: "251",
      editor: "Lira",
      tema: "Biografia",
      id: 107
    },
    {
      autor: "Alan Wykes",
      titulo: "Goebbels",
      subtitulo: "História ilustrada da 2º guerra mundial",
      numpag: "153",
      editor: "Renes",
      tema: "Biografia",
      id: 108
    },
    {
      autor: "David Mason",
      titulo: "Churchill",
      subtitulo: "História ilustrada da 2º guerra mundial",
      numpag: "158",
      editor: "Renes",
      tema: "Biografia",
      id: 109
    },
    {
      autor: "Louis C. Kilzer",
      titulo: "A farsa de Churchill",
      subtitulo: "A trama secreta que definiu a II guerra",
      numpag: "359",
      editor: "Biblioteca do Exercito",
      tema: "Biografia",
      id: 110
    },
    {
      autor: "George R.R Martin",
      titulo: "A guerra dos tronos",
      subtitulo: "As crônicas de gelo e fogo Livro 1",
      numpag: "587",
      editor: "LeYa",
      tema: "Ficção",
      id: 111
    },
    {
      autor: "George R.R Martin",
      titulo: "A fúria dos reis",
      subtitulo: "As crônicas de gelo e fogo Livro 2",
      numpag: "648",
      editor: "LeYa",
      tema: "Ficção",
      id: 112
    },
    {
      autor: "George R.R",
      titulo: "A tormenta de espadas",
      subtitulo: "As crônicas de gelo e fogo Livro 3",
      numpag: "848",
      editor: "LeYa",
      tema: "Ficção",
      id: 113
    },
    {
      autor: "George R.R Martin",
      titulo: "O festim dos corvos ",
      subtitulo: "As crônicas de gelo e fogo livro 4",
      numpag: "608",
      editor: "LeYa",
      tema: "Ficção",
      id: 114
    },
    {
      autor: "George R.R  Martin",
      titulo: "A dança dos drações",
      subtitulo: "As crônicas de gelo e fogo livro 5",
      numpag: "824",
      editor: "LeYa",
      tema: "Ficção",
      id: 115
    },
    {
      autor: "George R.R Martin",
      titulo: "Mulheres Perigosas",
      subtitulo: "",
      numpag: "734",
      editor: "LeYa",
      tema: "Ficção",
      id: 116
    },
    {
      autor: "George R.R Martin",
      titulo: "O Cavaleiro dos sete reinos",
      subtitulo: "História do mundo de gelo e fogo",
      numpag: "413",
      editor: "LeYa",
      tema: "Ficção",
      id: 117
    },
    {
      autor: "George R.R Martin",
      titulo: "Santuario dos ventos",
      subtitulo: "",
      numpag: "413",
      editor: "LeYa",
      tema: "Ficção",
      id: 118
    },
    {
      autor: "David I. Kertzer",
      titulo: "O papa e Mussolini",
      subtitulo: "A conexão secreta entre pio XI e a ascenção do fascismo na Europa",
      numpag: "590",
      editor: "intrinseca",
      tema: "Política",
      id: 119
    },
    {
      autor: "Stephen Meyer",
      titulo: "Saga crepúsculo",
      subtitulo: "Eclipse",
      numpag: "447",
      editor: "Intrinseca",
      tema: "Ficção",
      id: 120
    },
    {
      autor: "Stephen Meyer",
      titulo: "Saga crepúsculo",
      subtitulo: "Crepúsculo",
      numpag: "356",
      editor: "Intrinseca",
      tema: "Ficção",
      id: 121
    },
    {
      autor: "Stephen Meyer",
      titulo: "Saga crepúsculo",
      subtitulo: "Lua nova",
      numpag: "401",
      editor: "Intrinseca",
      tema: "Ficção",
      id: 122
    },
    {
      autor: "Monica de Castro",
      titulo: "Jurema das matas",
      subtitulo: "Pelo espírito leonel",
      numpag: "367",
      editor: "Vida e consciência",
      tema: "Espírita",
      id: 123
    },
    {
      autor: "Stephen King",
      titulo: "Quatro estações",
      subtitulo: "",
      numpag: "303",
      editor: "Objetiva",
      tema: "Terror",
      id: 124
    },
    {
      autor: "Stephen King",
      titulo: "Mr. Mercedes",
      subtitulo: "",
      numpag: "393",
      editor: "Suma",
      tema: "Terror",
      id: 125
    },
    {
      autor: "Stephen King",
      titulo: "Achados e Perdidos",
      subtitulo: "",
      numpag: "351",
      editor: "Suma",
      tema: "Terror",
      id: 126
    },
    {
      autor: "Stephen King",
      titulo: "Último turno",
      subtitulo: "",
      numpag: "338",
      editor: "Suma",
      tema: "Terror",
      id: 127
    },
    {
      autor: "Stephen King",
      titulo: "It",
      subtitulo: "A coisa",
      numpag: "1103",
      editor: "Suma",
      tema: "Terror",
      id: 128
    },
    {
      autor: "Chico Buarque",
      titulo: "Leite derramado",
      subtitulo: "",
      numpag: "195",
      editor: "Companhia das letras",
      tema: "Romance",
      id: 129
    },
    {
      autor: "Tony Bramwell",
      titulo: "Magical Mistery Tours",
      subtitulo: "Minha vida com Beatles",
      numpag: "519",
      editor: "Seoman",
      tema: "Biográfia",
      id: 130
    },
    {
      autor: "Peter Ames Carlin",
      titulo: "Paul McCartney",
      subtitulo: "Uma vida",
      numpag: "399",
      editor: "Nova Fronteira",
      tema: "Biografia",
      id: 131
    },
    {
      autor: "Ricardo Lisias",
      titulo: "Minha 1ª biblioteca Larousse Volume 1",
      subtitulo: "Porquês",
      numpag: "95",
      editor: "Larousse Junior",
      tema: "Infantil",
      id: 132
    },
    {
      autor: "Leila Gouvêa",
      titulo: "Minha 1ª biblioteca Larousse Volume 2",
      subtitulo: "Descobertas",
      numpag: "95",
      editor: "Larousse Junior",
      tema: "Infantil",
      id: 133
    },
    {
      autor: "Adriana de Oliveira Silva",
      titulo: "Minha 1ª biblioteca Larousse Volume 3",
      subtitulo: "Animais 1",
      numpag: "79",
      editor: "Larousse",
      tema: "Infantil",
      id: 134
    },
    {
      autor: "Marco Bezzi",
      titulo: "Beatles",
      subtitulo: "A história ilustrada",
      numpag: "224",
      editor: "Escala",
      tema: "Biografia",
      id: 135
    },
    {
      autor: "Yuri Vasconcelos",
      titulo: "Almanaque monstruoso dos vampíros",
      subtitulo: "Coleção mundo estranho",
      numpag: "121",
      editor: "Abril",
      tema: "Terror",
      id: 136
    },
    {
      autor: "Abril",
      titulo: "A história do nazismo e das grandes guerras",
      subtitulo: "Coleção mundo estranho",
      numpag: "97",
      editor: "Abril",
      tema: "História",
      id: 137
    },
    {
      autor: "Liliane de Lucena",
      titulo: "O guia definitivo the beatles",
      subtitulo: "Tudo sobre a banda que revolucionou a música",
      numpag: "998",
      editor: "Alto Astral",
      tema: "Biográfia",
      id: 138
    },
    {
      autor: "Abril",
      titulo: "10 melhores capas",
      subtitulo: "Coleção mundo estranho",
      numpag: "97",
      editor: "Abril",
      tema: "Curiosidades",
      id: 139
    },
    {
      autor: "Abril",
      titulo: "423 curiosidades da ciência",
      subtitulo: "Coleção mundo estranho",
      numpag: "98",
      editor: "Abril",
      tema: "Curiosidades",
      id: 140
    },
    {
      autor: "Abril",
      titulo: "A história da humanidade",
      subtitulo: "Coleção mundo estranho",
      numpag: "98",
      editor: "Abril",
      tema: "História",
      id: 141
    },
    {
      autor: "Alan Kardec",
      titulo: "O evangelho segundo o espiritismo",
      subtitulo: "",
      numpag: "296",
      editor: "Eme",
      tema: "Espirita",
      id: 142
    },
    {
      autor: "E L James",
      titulo: "50 tons de cinza Volume 1",
      subtitulo: "",
      numpag: "455",
      editor: "Intrínseca",
      tema: "Romance",
      id: 143
    },
    {
      autor: "E L James",
      titulo: "50 tons mais escuros",
      subtitulo: "",
      numpag: "485",
      editor: "Intrínseca",
      tema: "Romance",
      id: 144
    },
    {
      autor: "João Ubaldo Ribeiro",
      titulo: "A casa dos budas ditosos",
      subtitulo: "",
      numpag: "163",
      editor: "Objetiva",
      tema: "Romance",
      id: 145
    },
    {
      autor: "Silvia Lisboa",
      titulo: "Cura Espíritual",
      subtitulo: "Uma investigação",
      numpag: "203",
      editor: "Abril",
      tema: "Espirita",
      id: 146
    },
    {
      autor: "Nassim Nicholas Taleb",
      titulo: "A lógica do cisne negro",
      subtitulo: "O impacto do altamente improváel",
      numpag: "458",
      editor: "Best Seller",
      tema: "Filosofia",
      id: 147
    },
    {
      autor: "Marco Fábio Polli",
      titulo: "Gestão da qualidade",
      subtitulo: "",
      numpag: "144",
      editor: "Estácio de Sá",
      tema: "Administração",
      id: 148
    },
    {
      autor: "Liev Tolstói",
      titulo: "Ressureição",
      subtitulo: "",
      numpag: "431",
      editor: "Cosacnaify",
      tema: "Romance",
      id: 149
    },
    {
      autor: "Marcelo Cezar",
      titulo: "O que importa é o amor",
      subtitulo: "Pelo espírito de Marco Aurélio",
      numpag: "396",
      editor: "Vida e consciêmcia",
      tema: "Espírita",
      id: 150
    },
    {
      autor: "Dan Brown",
      titulo: "Anjos e demônios",
      subtitulo: "A primeira aventura de Robert Langdon",
      numpag: "416",
      editor: "Arqueiro",
      tema: "Ficção",
      id: 151
    },
    {
      autor: "Martin Lnn",
      titulo: "Revelando o  código da Vinci",
      subtitulo: "O guia não autorizado dos segredos de código da Vinci",
      numpag: "176",
      editor: "Madras",
      tema: "História",
      id: 152
    },
    {
      autor: "Anthony B. Atkinson",
      titulo: "Desigualdade",
      subtitulo: "O que pode ser feito",
      numpag: "429",
      editor: "LeYa",
      tema: "Economia",
      id: 153
    },
    {
      autor: "Ben Urwand",
      titulo: "O pacto entre hollywood e o nazismo",
      subtitulo: "Como o cinema americano colaborou com a alemanha de hitler",
      numpag: "365",
      editor: "LeYa",
      tema: "História",
      id: 154
    },
    {
      autor: "Ivan Sant'anna",
      titulo: "30 lições de mercado",
      subtitulo: "",
      numpag: "217",
      editor: "Inversa",
      tema: "Economia",
      id: 155
    }
  ]
  };

  return (
    <Main>
    <MDBDataTable
    theadColor="blue-grey"
    borderless
      hover
      big
      entries={100}
      entriesOptions={[10, 20, 40, 50, 80, 100, 140, 180, 200]}
      data={data}
      sorting={true}

    />
    </Main>
  );
}

export default DatatablePage;