module.exports = function toReadable (number) {
  var th = ['','thousand','million', 'billion','trillion'];
  var a = ['','one','two','three','four', 'five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  var d = ['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
   let str = number.toString();
    if (number == 0){
        return 'zero';
    }  
  if (number < 20) {
    return a[number];
  }
  if (number.toString().length === 2) {
      if (a[str[1]]!=='') {
          return d[str[0]]+' '+a[str[1]];
      }else {
          return d[str[0]]+''+a[str[1]];
      }
  }
    if (str[1] =='0' && str[2] =='0') {
    return a[str[0]] + ' hundred';
  }
  else {
    if (Number(str[1] + str[2]) < 20){
       return a[str[0]] + ' hundred '+ a[Number(str[1] + str[2])];
   }
   if (Number(str[2]) == 0){
       return a[str[0]] + ' hundred '+ d[Number(str[1])];
   }
   if (Number(str[1] + str[2]) > 20){
       return a[str[0]] + ' hundred '+ d[Number(str[1])] +' '+ a[Number(str[2])];
   }
}
}
