module.exports = function reverse(n) {
   let result = '';
   let resultNum = 0;
   if (n >= 0) {
      let num = n.toString();
      for (let i = 0; i < num.length; i += 1) {
         result = `${num[i]}${result}`;
      }
      resultNum = Number(result);
   } else {
      let num = n.toString().substr(1);
      for (let i = 0; i < num.length; i += 1) {
         result = `${num[i]}${result}`;
      }
      result = `-${result}`
      resultNum = - Number(result);
   }
   return resultNum;
}
