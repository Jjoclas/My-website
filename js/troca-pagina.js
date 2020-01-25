var listaNav= document.querySelector(".lista-navegacao");
var portifolio = document.querySelector(".second-page");
var curriculo = document.querySelector(".third-page");
var contato = document.querySelector(".fourth-page");
var home = document.querySelector(".first-page");
var paginas= [portifolio,curriculo,contato];


listaNav.addEventListener("click",function(event){
  for(i=0;i<paginas.length;i++){ 
    if(event.target.className==paginas[i].id){
      aparecePagina(paginas[i]);
    }else{
      somePagina(paginas[i]);
    }
 }
})

function aparecePagina(pagina){
  pagina.style.transform ="translateY(-80.5vh)";
  pagina.style.zindex="1";
  pagina.style.transition= "1s";
}
function somePagina(pagina){
  pagina.style.transform="translateY(80.5vh)";
  pagina.style.zindex="0";
  pagina.style.transition= "1s";
}