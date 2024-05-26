
const data = document.querySelectorAll("input");
const select=document.querySelectorAll("select")
console.log(select[0].value)
let list=[]

const btn = () => {
  const info = {};
  event.preventDefault();
  for(let i = 0; i < data.length; i++) {
    if(data[i].name!="time"&&data[i].name!="emotions"){
    info[data[i].name] = data[i].value;
    }

    if(data[i].name==="time"&&data[i].checked){
        info[data[i].name] = data[i].value;
        console.log(data[i].name)
    }
    if(data[i].name==="emotions"&& data[i].checked){
       list.push(data[i].value)
       info[data[i].name] = list;
    }
    
  }
  for(let i = 0; i <select.length; i++){
    info[select[0].name] = select[i].value;
  }
console.log(info)
}











