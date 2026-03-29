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

