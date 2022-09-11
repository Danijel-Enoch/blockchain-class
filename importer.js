const {house}=require("./practice")

async function responder(){
    return 5
}
async function requests(){
   
   // console.log(response)
    try{
        const response=await  responder();
        console.log(response)
    }catch(e){
        console.log(e)
    }
}

requests()




