//-----------IMPORT EXPRESS,CREATE SERVER,DATABASE----------------

let express = require('express');
const app = express();
const dbConnection=require('./dbConnection');

//-------view engine------------------------

app.set('view engine','ejs');


//-------------START SERVER----------------------------------

app.listen('3000',()=>{
    console.log("server listening....");
});

//-------Page Navigation------------

app.get('/',(req,res)=>{
    res.render('index',{name:'sharn'})
})

// app.get('/customer',(req,res)=>{
//     const customerDetails=[
//         {id:1,name:'fb'},
//         {id:2,name:'amazon'},
//         {id:3,name:'google'}
//     ];' '
//     res.render('customer',{customerDetails})
// })

// app.get('/customer',(req,res)=>{
//     dbConnection.con().then((connection)=>{
//         const query='select * from customer';
//         connection.query(query,(err,result)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 res.render('customer',{data:result})
//                 console.log(result)
//             }
//             connection.end()
//         })
//     }).catch(error=>{
//         console.error(error);
//         res.send('not connected')
//     })
// })

app.get('/customer',(req,res)=>{
    dbConnection.con()
    .then((connection)=>{
        const query='select * from customer';
        connection.query(query,(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(result)
                res.render('customer',{data:result})
            }
            connection.end()
            })
            })
            .catch((err)=>{
                console.log(error)
                res.send('not connected')

         } )

    }
    )


app.get('/about',(req,res) => {
    res.render('about',{name:'express about'});
});

