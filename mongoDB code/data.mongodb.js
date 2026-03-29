use("hr_db");
db.employees.insertMany(
  [
    {
      emp_id : 101,
      name : "Asma",
      dept : "IT",
      salary : 850000,
      skills : [
        "Python", "MongoDB"
      ]
    },
    {
      emp_id : 102,
      name : "Sara",
      dept : "IT",
      salary : 56000
    },
  {
    emp_id: 103,
    name: "Usman Ali",
    dept: "Finance",
    salary: 90000,
    skills: ["Accounting", "Excel"],
    joining_date: "2020-01-20"
  },
  {
    emp_id: 104,
    name: "Zara Malik",
    dept: "HR",
    salary: 78000,
    skills: ["Java", "MongoDB"],
    joining_date: "2023-05-01"
  },
  {
    emp_id: 105,
    name: "Bilal Raza",
    dept: "Marketing",
    salary: 60000,
    skills: ["SEO", "Content Writing"],
    joining_date: "2021-11-15"
  }

  ]
)

db.employees.insertOne({
   emp_id: 106,
   name: "Ali Khan",
   department: "IT",
   salary: 95000,
   age: 29,
   skills: ["Python", "MongoDB", "SQL"],
   address: {
      city: "Lahore",
      country: "Pakistan"
   },
   joining_date: ISODate("2022-03-15"),
   performance_score: 4.5
});

// Insert department document
db.departments.insertOne({
   dept_name: "IT",
   budget: 5000000,
   manager: "Ahmed Raza"
});

use("hr_db");

db.employees.insertMany([
  {
    emp_id: 201,
    name: "Ali Khan",
    dept: "IT",
    salary: 85000,
    performance_score: 92
  },
  {
    emp_id: 202,
    name: "Sara Ahmed",
    dept: "HR",
    salary: 65000
    // no performance_score field
  },
  {
    emp_id: 203,
    name: "Usman Ali",
    dept: "Finance",
    salary: 90000,
    performance_score: 78
  },
  {
    emp_id: 204,
    name: "Zara Malik",
    dept: "IT",
    salary: "78000"  // stored as STRING by mistake
  },
  {
    emp_id: 205,
    name: "Bilal Raza",
    dept: "Marketing",
    salary: 60000
    // no performance_score field
  }
]);
// Insert these for practice
db.employees.insertMany([
  {
    emp_id: 106,
    name: "Hamza Sheikh",
    dept: "IT",
    salary: 88000,
    scores: [
      { subject: "MongoDB", marks: 85 },
      { subject: "Python", marks: 60 }
    ]
  },
  {
    emp_id: 107,
    name: "Nadia Iqbal",
    dept: "HR",
    salary: 70000,
    scores: [
      { subject: "MongoDB", marks: 45 },
      { subject: "Python", marks: 90 }
    ]
  }
]);

db.movies.insertMany([
  {
    title: "The Dark Horizon",
    year: 2018,
    rated: "PG-13",
    runtime: 118,
    countries: ["USA", "Canada"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    cast: ["Tom Hanks", "Emma Stone"],
    imdb: {
      rating: 8.8,
      votes: 25000
    },
    awards: {
      wins: 3,
      nominations: 7
    },
    num_mflix_comments: 12
  },
  {
    title: "Silent River",
    year: 2016,
    rated: "R",
    runtime: 110,
    countries: ["UK"],
    genres: ["Drama", "Thriller"],
    cast: ["Tom Hanks", "Meg Ryan"],
    imdb: {
      rating: 8.7,
      votes: 18000
    },
    awards: {
      wins: 1,
      nominations: 6
    },
    num_mflix_comments: 5
  },
  {
    title: "Lost Kingdom",
    year: 2005,
    rated: "PG-13",
    runtime: 140,
    countries: ["India", "Germany"],
    genres: ["Action", "Adventure", "Fantasy"],
    cast: ["Chris Evans", "Scarlett Johansson"],
    imdb: {
      rating: 8.1,
      votes: 5000
    },
    awards: {
      wins: 2,
      nominations: 8
    },
    num_mflix_comments: 8
  },
  {
    title: "The Forgotten Mission",
    year: 2008,
    rated: "R",
    runtime: 115,
    countries: ["France"],
    genres: ["Action", "Adventure", "War"],
    cast: ["Matt Damon", "Anne Hathaway"],
    imdb: {
      rating: 7.9,
      votes: 2200
    },
    awards: {
      wins: 0,
      nominations: 3
    },
    num_mflix_comments: 4
  },
  {
    title: "Dreams of Tokyo",
    year: 2012,
    rated: "PG",
    runtime: 105,
    countries: ["Japan"],
    genres: ["Romance", "Drama"],
    cast: ["Tom Hanks", "Natalie Portman"],
    imdb: {
      rating: 8.0,
      votes: 900
    },
    awards: {
      wins: 1,
      nominations: 2
    },
    num_mflix_comments: 9
  },
  {
    title: "The Last Empire",
    year: 1975,
    rated: "PG",
    runtime: 130,
    countries: ["Italy", "Spain", "France", "Germany"],
    genres: ["Adventure", "Drama"],
    cast: ["Al Pacino", "Robert De Niro"],
    imdb: {
      rating: 8.4,
      votes: 12000
    },
    awards: {
      wins: 4,
      nominations: 10
    },
    num_mflix_comments: 15
  },
  {
    title: "Ocean Strike",
    year: 2020,
    rated: "R",
    runtime: 95,
    countries: ["Australia", "New Zealand", "UK", "Canada"],
    genres: ["Action", "Adventure", "Thriller"],
    cast: ["Chris Hemsworth", "Gal Gadot"],
    imdb: {
      rating: 8.9,
      votes: 40000
    },
    awards: {
      wins: 5,
      nominations: 9
    },
    num_mflix_comments: 20
  },
  {
    title: "The Quiet Forest",
    year: 1999,
    rated: "PG-13",
    runtime: 102,
    countries: ["Brazil"],
    genres: ["Mystery", "Drama"],
    cast: ["Julia Roberts", "Sandra Bullock"],
    imdb: {
      rating: 7.5,
      votes: 1500
    },
    awards: {
      wins: 0,
      nominations: 1
    },
    num_mflix_comments: 6
  },
  {
    title: "Broken Stars",
    year: 2003,
    rated: "R",
    runtime: 123,
    countries: ["South Korea"],
    genres: ["Drama", "Sci-Fi"],
    cast: ["Song Kang-ho", "Bae Doona"],
    imdb: {
      rating: 8.2,
      votes: 3000
    },
    awards: {
      wins: 2,
      nominations: 6
    },
    num_mflix_comments: 2
  },
  {
    title: "The Golden Path",
    year: 1970,
    rated: "G",
    runtime: 90,
    countries: ["USA"],
    genres: ["Adventure", "Family"],
    cast: ["Gregory Peck", "Julie Andrews"],
    imdb: {
      rating: 8.0,
      votes: 7000
    },
    awards: {
      wins: 1,
      nominations: 4
    },
    num_mflix_comments: 3
  },
  {
    title: "Shadow Lines",
    year: 2019,
    rated: "PG-13",
    runtime: 150,
    countries: ["Mexico", "Argentina", "Chile", "Peru", "Colombia"],
    genres: ["Crime", "Thriller"],
    cast: ["Ben Affleck", "Jessica Chastain"],
    imdb: {
      rating: 8.6,
      votes: 16000
    },
    awards: {
      wins: 2,
      nominations: 7
    },
    num_mflix_comments: 11
  },
  {
    title: "the final storm",
    year: 2021,
    rated: "R",
    runtime: 100,
    countries: ["Germany"],
    genres: ["Action", "Adventure"],
    cast: ["Tom Hanks", "Emily Blunt"],
    imdb: {
      rating: 9.0,
      votes: 20000
    },
    awards: {
      wins: 6,
      nominations: 11
    },
    num_mflix_comments: 14
  }
])