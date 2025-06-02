
let output = null
const firstOppgave = (number) => {
   
   

   switch (number) {
      case (number > 0): 
         output = 1
         break;
      case number === 0: 
         output = 0
         break;
      case number < 0: 
         output = -1
         break;
   
      default:
         console.log(number)
         break;
   }
   return output;
}

console.log(firstOppgave(23))