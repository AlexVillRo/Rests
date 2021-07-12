const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port:'3306',
    database: 'ejemplo'
});

conexion.connect((err)=>{
    if(err){
        console.log('Error :'+ err)
    }
    else
    {console.log(' Correcto')}
});

module.exports=conexion