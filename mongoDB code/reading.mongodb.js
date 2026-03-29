// use("hr_db");
// 2. Write a query to retrieve employees working in the IT department.
// db.employees.find({dept : "IT"},
// {_id: 0, name:1, dept:1}
// )

// 3. Update salaries of all Finance department employees by increasing 10%.
// db.employees.updateMany(
//     {dept: "Finance"},
//     {$inc: {salary: 1.10}}
// )
// 4. Write a query to display only employee names and salaries without showing _id.
// db.employees.find(
//     {},
//     {_id: 0, name: 1, salary: 1}
// )
// 5. Delete all employees who joined in 2021.
// db.employees.deleteMany(
//     {joining_date: {$gte: new Date("2021-01-01"), $lt: new Date("2022-01-01")}}
// );
// 6. Insert multiple employee documents in a single command and verify insertion.

// 7. Write a query to retrieve employees having skill java.
// db.employees.find(
//     {skills: "Java"},
//     {name: 1, skills: 1 }
// );

// 8. Update one employee’s department from HR to IT.\
// db.employees.updateOne(
//     {dept: "HR"},
//     {$set: {dept: "IT"}}
// )

// 9. Drop the entire HR database using MongoDB shell commands.
// db.dropDatabase()

// db.employees.find(
//     {salary: {$gte: 60000, $lte: 85000}},
//     {_id: 0, name: 1, dept: 1,salary:1}
// )

// db.employees.find(
//     {$and: [
//         {dept: {$not: {$eq: "HR"}}},
//         {salary: {$gte: 60000}}
//     ]},
//     {_id: 0, name: 1, salary:1, dept: 1}
// )

// db.employees.find(
//     {emp_id: {$mod: [2,0]}},
//     {_id:0 ,emp_id:1, name: 1, salary:1, performance_score:1}

// )

// db.employees.updateMany({}, { $set: { tax: 8000, bonus: 10000 } });
// db.employees.updateOne({ emp_id: 102 }, { $set: { tax: 12000, bonus: 9000 } });

// db.employees.updateMany(
//     {},
//     {$set: {tax: 8000, bonus: 10000}}
// )
// db.employees.updateOne(
//     {emp_id: 102},
//     {$set: {tax: 12000, bonus: 9000}}
// )

// db.employees.find(
//     {$expr: {$lt: ["$bonus", "$tax"]}},
//     {_id: 0, emp_id:1, name:1 ,bonus:1, tax:1}
// )

// db.employees.createIndex({name:"text"})
// db.employees.find(
//     {$text: {$search: "Ali Asma"}},
//     {_id:0, name:1}
// )


// db.employees.find(
//   {scores: {$elemMatch: {subject: "MongoDB", marks: {$gt: 80}}}},
//   {emp_id:1, name:1, scores:1}
// )

// db.employees.updateMany(
//     {},
//     {$rename: {"dept": "Department"}}
// );

// db.employees.updateOne(
//     {name: "Zara Malik"},
//     {$set: {salary: "78000"}}

// )


// db.employees.find().sort({salary: -1}).limit(5);

// 1. Find movies released after 2015 with an IMDb rating greater than 8.5.
// db.movies.find(
//     {$and : [
//             {year: {$gt: 2015}},
//             {"imdb.rating": {$gt: 8.5}}
//             ]
//             },
//     {_id:0, tutle:1, year:1, "imdb.rating":1}        
//             )
// 2. Retrieve movies that are either rated "PG-13" or "R" and have a runtime less than 
// 120 minutes.


// db.movies.find(
//  {$and: [
//     {$or: [
//         {rated: "PG-13"},
//         {rated: "R"}
//     ]
//     },
//     {runtime: {$lt: 120}}
//  ]},
//  {_id:0, title:1, rated:1, runtime:1}
// )



// 3.Find movies that were not released in the USA and have more than 50 IMDb 
// votes.

// db.movies.find(
//     {$and:[
//         {countries:{ $ne: "USA"}},
//         {"imdb.votes": {$gt: 50}}
//     ]},
//     {_id:0, title:1, countries:1, "imdb.votes":1}
// )

// 4. Retrieve movies released between 2000 and 2010 (inclusive) with at least 1000 
// IMDb votes.
// use("sample_mflix");
// db.movies.find(
//     {$and: [
//         {year: {$gte: 2000, $lte: 2010}},
//         {"imdb.votes": {$gte: 1000}}
//     ]},
//     {_id:0, title:1, year:1, imdb:1}
// )
use("hr_db");
// db.movies.find(
//     {$and: [
//         {year: {$gte: 2000, $lte: 2010}},
//         {"imdb.votes": {$gte: 1000}}  
//     ]},
//     {_id:0, title:1, year:1, imdb:1}
// )
// 5. Find movies that belong to both "Action" and "Adventure" genres.
// db.movies.find(
//     {genres: ["Action", "Adventure"]},
//     {_id:0, title:1, genres:1}
// )

// 6. Retrieve movies where the cast includes "Tom Hanks" but does not include "Meg 
// Ryan".

// db.movies.find(
//     {$and: [ {cast: {$in: ["Tom Hanks"] } },
//             {cast: {$nin:  ["Meg Ryan"] } }
//             ]},
//     {_id:0, title:1, cast:1}
// )


// 7. Find movies with at least one award win and more than 5 award nominations.

// db.movies.find(
//     {$and:[
//         {"awards.wins": {$gte: 1} },
//         {"awards.nominations": {$gt: 5}}
//         ]},
//     {_id:0, title:1, awards:1}
// )

// 8. Retrieve movies that were released in more than 3 countries.

// db.movies.find(
//     {"countries.3":{$exists: true}},
//     {_id:0, title:1, countries:1}
// )
// 9. Find movies whose title starts with "The" (case insensitive).
// db.movies.createIndexes(title, "text")
// db.movies.find(
//     {title: {$text: {$seach: "^The"}}},
//     {_id:0, title:1}
// )

// 10. Retrieve movies where the number of IMDb votes is greater than the runtime.
// db.movies.find(
//     {$expr: {$gt: ["$imdb.votes", "$runtime"]}},
//     {_id:0, title:1, "imdb.votes":1, runtime: }
// )

// 11. Increase the num_mflix_comments by 1 for a specific movie when a new 
// comment is added.
db.movies.find()




// 12. Add a new genre "Classic" to movies released before 1980, only if it does not 
// already exist in the genres array.
