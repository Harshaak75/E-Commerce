export const time = (setpercentage) =>{
    var a = 0;
    const intervel = setInterval(function(){
      a =a +  Math.floor(Math.random()*5);
      if(a < 500){
        setpercentage(a);
      }
      else{
        a = 600;
        // setpercentage(a)
        clearImmediate(intervel);
        // document.querySelector("#loader h1").innerHTML = a + "%";
      }
      
    },1000);
}