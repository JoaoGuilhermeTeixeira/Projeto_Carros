let listadeCarros = [
    {
        "nome": "Drako-GTE", 
        "img": "img/Drako GTE.jpg",
        "descrição": "O Drako GTE é um supercarro elétrico de luxo, com mais de 1.200 cavalos e aceleração de 0 a 100 km/h em menos de 3 segundos."
    },
    {
        "nome": "De Tomaso P72", 
        "img": "img/DeTomaso.jpg",
        "descrição": "O De Tomaso P72 é um supercarro de luxo com design retrô e motor V8, combinando elegância clássica e engenharia moderna."
    },
    {
        "nome": "Ferrari LaFerrari", 
        "img": "img/Laferrari-capa-.jpg",
        "descrição": "A LaFerrari é um supercarro híbrido de luxo, com motor V12 e tecnologia de Fórmula 1, que oferece desempenho extremo e design exclusivo."

    },
    {
        "nome": "Pagani Huayara", 
        "img": "img/image.jpg",
        "descrição": "O Pagani Huayra é um supercarro de luxo com motor V12 biturbo, destacando-se pelo desempenho excepcional e design artesanal exclusivo"
    },
    {
        "nome": "McLaren Elva", 
        "img": "img/mclaren.jpg",
        "descrição": "O McLaren Elva é um supercarro aberto de luxo, com motor V8 biturbo, que combina leveza, potência e design inovador para uma experiência de condução única."
    },
    {
        "nome": "Lamborghini Aventador", 
        "img": "img/Lamborghini-Aventador.jpg",
        "descrição": "O Lamborghini Aventador é um supercarro de luxo com motor V12, conhecido pelo design agressivo e desempenho impressionante, oferecendo uma experiência de condução emocionante."
    }
]

listadeCarros.map((carro, posicao)=>{
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `<div class="col-md-4">
                    <div class="card m-2">
                        <img src="${carro.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${carro.nome}</h5>
                          <a href="#" class="btn btn-secondary" onclick ="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                        </div>
                    </div>
               
                </div>
    `

})

function zoomImg (posicao){
    let carroSelecionado = listadeCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descriçãocarro").innerHTML = carroSelecionado.descrição;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();

}

function alterarTemaSite(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
    }else if(tema === "light"){
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}