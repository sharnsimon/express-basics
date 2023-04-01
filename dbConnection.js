// var mysql=require('mysql2')

// //------CREATE CONNECTION------------------
// function con(){
//   var connection= mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Sharnsimon2002!',
//     database:'customer'
// });
// return new Promise((resolve, reject) => {
//     connection.connect((err)=>{
//         if(err){
//             reject(err);
//         }
//         else{
//             resolve(connection)
//             }
//         })
//     })
// }

// module.exports.con=con;





let mysql=require('mysql2')

function con(){
    const connection=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'Sharnsimon2002!',
        database:'customer'
    });
    return new Promise((resolve, reject) => {
        connection.connect((err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(connection)
            }
        })
    })

}

module.exports.con=con



