const express = require('express');
const cors = require('cors')
class Server{


    constructor(){
        this.app=express(  );
        this.port=8080;
        this.middleware()
    }



    listen(){

       this.app.listen(this.port,()=>{
           console.log('app works')
       })

    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }



}

module.exports=Server;