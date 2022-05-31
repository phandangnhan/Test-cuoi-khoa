
let a=prompt("Nhap so a:")
let b = prompt("Nhap so b:")
function Prime(n){
    let flag = 1;

    if (n <2) return flag = x; 
    
    
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; 
        }
        i++;
    }
      return flag;
}
for (let i = a; i < b; i++){
  if (Prime(i) == 1)  console.log( i );
}