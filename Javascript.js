document.addEventListener("keyup", e =>{

    if (e.target.matches("#buscador")){
  
        if (e.key =="Enter")e.target.value = " ";
  
        document.querySelectorAll(".articulo").forEach( video =>{
            video.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            
              ?video.classList.remove("filtro")
              :video.classList.add("filtro") 
                
        }         
        )}
  })

 


    