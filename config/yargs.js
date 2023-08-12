const { options } = require("yargs");
const argv = require("yargs")
               .options({
                   "b": {
                    alias : "base",
                    type : "number",
                    demandOption : true
                   },
                   "l": {
                       alias : "listar",
                       type : "boolean",
                       default : false,
                       demandOption : false
                   },
                   "h" :  {
                       alias : "hasta",
                       type : "number",
                       default : 10,
                       demandOption : false

                   }
               })
               .check((argv,options) =>{
                   if(isNaN(argv.base)){
                       throw "la base tiene que ser un numero";
                   }
                   else{
                       return true;
                   }
               })
               .argv


module.exports = argv;