const journals = [
  {
    label: 'a',
    title: 'Software Visualization',
    author: 'John Domingue, Erkki Sutinen',
    journal: 'Journal of Visual Languages and Computing',
    year: 2002,
  },
  {
    label: 'b',
    title: 'Reevaluating and Refining the Engagement Taxonomy',
    author: 'Tobias Lauer',
    journal: 'ITiCSE',
    year: 2008,
  },
    {
    label: 'c',
    title: 'Shifting from \`\`High Fidelity\'\' to \`\`Low Fidelity\'\' Algorithm Visualization Technology',
    author: 'Christopher Hundhausen, Sarah Douglas',
    journal: 'Conference on Human Factors in Computing Systems',
    year: 2000,
  },  {
    label: 'd',
    title: 'Using AVs to Explain NP-completeness',
    author: 'Pilu Crescenzi',
    journal: 'ITiCSE',
    year: 2010,
  },  {
    label: 'e',
    title: 'Visualizing Compression Algorithms on-the-fly',
    author: 'Guido {RoBling}, Florian Lindner',
    journal: 'ITiCSE',
    year: 2009,
  },  {
    label: 'f',
    title: 'A Testbed for Pedagogical Requirements in Algorithm Visualization',
    author: 'Guido {RoBling}, Thomas L. Naps',
    journal: 'ITiCSE',
    year: 2002,
  },  {
    label: 'g',
    title: 'Bridges: A System to Enable Creation of Engaging Data Structures Assignments with Real-World Data and Visualizations',
    author: 'David Burlinson et. al',
    journal: 'SIGCSE',
    year: 2016,
  },  {
    label: 'h',
    title: 'ANIMAL: A System for Supporting Multiple Roles in Algorithm Animation',
    author: 'Guido Rossling, Bernd Freisleben',
    journal: 'Journal of Visual Languages and Computing',
    year: 2002,
  },  {
    label: 'i',
    title: 'Designing Educationally Effective Algorithm Visualizations',
    author: 'Steven Hansen, N. Hari Narayanan, Mary Hegarty',
    journal: 'Journal of Visual Languages and Computing',
    year: 2002,
  },  {
    label: 'j',
    title: 'A Meta-Study of Algorithm Visualization Effectiveness',
    author: 'Christopher Hundhausen, Sarah Douglas, John Stasko',
    journal: 'Journal of Visual Languages and Computing',
    year: 2002,
  },
]

const websites = [
  {
    label: 'vue',
    howpublished: 'https://vuejs.org/',
    title: 'Vue.js Documentation',
  },
  {
    label: 'vuex',
    howpublished: 'https://vuex.vuejs.org/',
    title: 'Vuex Documentation',
  },
  {
    label: 'vue-comparison',
    howpublished: 'https://vuejs.org/v2/guide/comparison.html/',
    title: 'Vue Comparison with Other Frameworks',
  },
  {
    label: 'top-js-libraries',
    howpublished: 'https://medium.com/javascript-scene/top-javascript-libraries-tech-to-learn-in-2018-c38028e028e6',
    author: 'Eric Elliott',
    journal: 'Medium',
    title: 'Top JavaScript Libraries \\\& Tech to Learn in 2018',
    year: 2017,
  },
  {
    label: 'angular-react-vue',
    howpublished: 'https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176',
    author: 'Jens Neuhaus',
    journal: 'Medium',
    title: 'Angular vs. React vs. Vue: A 2017 comparison',
    year: 2017,
  },
  {
    label: 'vue-launch',
    howpublished: 'http://blog.evanyou.me/2014/02/11/first-week-of-launching-an-oss-project/',
    author: 'Evan You',
    journal: 'blog.evanyou.me',
    title: 'First Week of Launching Vue.js',
    year: 2014,
  }
];

let books = [
  {
    label: 'textbook',
    author: 'Jon Kleinberk, Eva Tardos',
    title: 'Algorithm Design',
    publisher: 'Pearson',
    year: 2014
  }
]


function print_journals({author, title, journal, year, label, howpublished}) {
  let arr;
  if(author) arr = author.split(',');
  else arr = [];
  let authorList = ''
  for (let i = 0; i < arr.length; i++) {
      authorList += arr[i].trim();
      if (i < arr.length - 2) authorList += ', '
      else if (i === arr.length - 2) authorList += ' and '
    }
  let str = `
@Article { ${label || ''},
  author = { ${authorList || ''} },
  title = {{ ${title || ''} }},
  journal = { ${journal || ''} },
  year = { ${year || ''} },
  howpublished = { ${howpublished || ''} },
}`
  return str;
}

function print_websites({label, howpublished, title, author, journal}) {
  let str = `
@Misc { ${label || ''},
  key = { ${label || ''} },
  title = {{ ${title || ''} }},
  howpublished = { ${howpublished || ''} },
}`
  return str;
}

function print_book({label, author, title, publisher, year}) {
  let str = `
@book{ ${label || ''},
	author = {${author}},
  title = {${title}},
  publisher = {${publisher}},
	year = {${year}},
}`
  return str;
}

for (let i = 0; i < journals.length; i++) {
  console.log(print_journals(journals[i]));
}

for (let i = 0; i < websites.length; i++) {
  console.log(print_websites(websites[i]));
}
for (let i = 0; i < books.length; i++) {
  console.log(print_book(books[i]));
}