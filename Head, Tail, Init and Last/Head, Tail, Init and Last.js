const head = (mas)=>{
  return mas[0]  
}
const last = (mas)=>{
  return mas[mas.length-1] 
}
const tail = (mas)=>{
    return mas.slice(1);    
}
const init = (mas)=>{
    return mas.slice(0, -1);
}
