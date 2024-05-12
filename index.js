// <----------------- HTML SELECTOR --------------->
let btn = document.getElementById("btn");
let product = document.getElementById("product");
let cardlar = document.getElementById("cardlar");
let sidebar =  document.getElementById("sidebar");
let head = document.getElementById("head");
let span = document.getElementById("span");
let cards = document.getElementById("cards")
let biletlar = document.getElementById("biletlar")
let sotibol = document.getElementById("sotibol")
let qayerga =document.getElementById("qayerga")
let aviachipta =document.getElementById("aviachipta")
btn.addEventListener("click", (event) => {
    sidebar.classList.toggle("sidebar_toggle");
    head.classList.add("block")
    head.classList.toggle("mt-[200px]");
    span.classList.toggle("left-[-55px]")
    cardlar.classList.add("hidden");
    sotibol.classList.add("hidden")
    aviachipta.classList.add("hidden");
});

product.addEventListener("click", (event) => {
    sotibol.classList.toggle("hidden")
    cardlar.classList.toggle("hidden")
    sotibol.classList.add("hidden")
    head.classList.add("block");
    aviachipta.classList.add("hidden");
});

biletlar.addEventListener("click", (event)=>{
    head.classList.add("block");
    cardlar.classList.add("hidden")
    sotibol.classList.toggle("hidden")
    sotibol.classList.toggle("flex");
    sotibol.classList.add("flex")
    aviachipta.classList.add("hidden");
});

function Submit(e) {
    e.preventDefault();
    let value = document.getElementById('qayerga').value.toUpperCase();
    let value2 = document.getElementById('qayerdan').value.toUpperCase();
    let value3 =document.getElementById('data').value;
    console.log(value3);
    aviachipta.innerHTML = `
    <div class="avia_button flex bg-[green]  border-[silver] rounded-lg border-[3px]">
    <span><box-icon type='solid' color="white" name='plane-alt'></box-icon></span>
    <p class="text-white">AVIACHIPTA n% 1455</p>
</div>
<div class="avia_data bg-[white]">
    <ul class="flex gap-[10px] p-[8px]">
        <li class="flex flex-col  text-black  bg-[#01C3A7] border-[2px] border-[green] p-[8px] w-full  rounded-lg">
            <h1 class="text-black font-bold text-[20px]">JO'NASH:<box-icon name='plane-take-off' color="white" type='solid' ></box-icon></h1>
            <p>VAQT <span>04:30</span></p>
            <p>SANASI <span>12052024</span></p>
            <p>AEROPORT: <span>${value2} AIRWAYS</span></p>
           
        </li>
        <li class="flex flex-col  text-black bg-[#01C3A7] border-[2px] border-[green]  p-[8px] w-full rounded-lg">
            <h1 class="text-black font-bold text-[20px]">Qo'nish:<box-icon name='plane-land' color="white" type='solid'></box-icon></h1>
            <p>VAQT <span>21:30</span></p>
            <p>SANASI <span>${value3}</span></p>
            <p>AEROPORT : <span>${value} AIRWAYS</span></p>
        </li>
    </ul>
</div>`
}
let avisub =document.getElementById('avisub');
avisub.addEventListener("click" , (event)=>{
    aviachipta.classList.remove("hidden");
    aviachipta.classList.add("block");
    head.classList.add("block");
    cardlar.classList.add("hidden")
    sotibol.classList.add("hidden")
})

// -------------- CARD -------------------

function randerState(data) {
   let  card ='';
    data.forEach((el)=>{
        card +=`
        <div class="card-img">
           <img src="${el.photo}" alt="${el.title}">
        </div>
        <div class="card-title p-[10px] bg-[silver] text-white">
           <h3 class="text-center text-[32px] font-medium font-serif text-[red]">${el.title}</h3>
           <p>
               <span class="text-white font-medium">Davomiyligi:</span"> <span class="text-[blue]">${el.davomiyligi}.</span>
           </p>
           <p>
               <span class="text-white font-medium">Qo'shimcha:</span"> <span class="text-[blue]">${el.extiyojlar}.</span>
           </p>
           <p>
               <span class="text-white font-medium">Mexmonxona:</span"> <span class="text-[blue]">${el.mehmonxona}.</span>
           </p>
        </div>
        `
        cards.innerHTML =card
    })
}

randerState(data);


