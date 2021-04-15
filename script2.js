
const http = require('http')
const hostname = "127.0.0.1"
const port = 3000
const url = require('url')
const operacoes = require('./model/operacoes')

//criando um objeto do tipo servidor
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html'}); //monta o cabeçalho da página web
    let q = url.parse(req.url, true).query; //recebe um objeto url para consulta
    let a = parseInt(q.numA)
    let b = parseInt(q.numB)

    if(q.opcao == "soma"){
        res.end("Resultado: " + operacoes.soma(NumA,NumB))       
    }else if(q.opcao == "subtração"){      
        res.end("Resultado: " + operacoes.subt(NumA,NumB)) 
    }
    else if(q.opcao == "multiplicação"){       
      res.end("Resultado: " + operacoes.mult(NumA,NumB)) 
    }
    else if(q.opcao =="divisão"){       
        res.end("Resultado: " + operacoes.div(NumA,NumB)) 
    }    

}).listen(3000,()=>{
    console.log(`Server running in http://${hostname}:${port}` )
})