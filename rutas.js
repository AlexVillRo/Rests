const router = require('express').Router()
const conexion =require ('./config/conexion')

router.get('/',(req, res)=>{

    let sql ='select * from empleados'
    conexion.query(sql,(err,rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

router.get('/:id',(req, res)=>{
    const{id}=req.params
    let sql ='select * from empleados where Id = ?'
    conexion.query(sql,[id],(err,rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
router.post('/',( req, res)=>{
    const{Id,NombreEmpleado, Funciones, Jefe} = req.body

    let sql = `insert into empleados(Id,NombreEmpleado,Funciones,Jefe) values('${Id}','${NombreEmpleado}','${Funciones}','${Jefe}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Empleado agregado'})
        }
    })
})

//eliminar 
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from empleados where Id= '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'empleado eliminado'})
        }
    })
});


//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, funciones,jefe} = req.body

    let sql = `update empleados set 
                NombreEmpleado ='${nombre}',
                Funciones='${funciones}',
                Jefe='${jefe}'
                where Id = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Empleo modificado'})
        }
    })

})
module.exports=router;