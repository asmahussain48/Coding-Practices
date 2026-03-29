use("hr_db");
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






