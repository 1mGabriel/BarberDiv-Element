// seleção:
const caresContainer = document.querySelector(".cares")
const beardContainer = document.querySelector(".beard")
const cutsContainer = document.querySelector(".cuts")

const productsContainer = document.querySelector(".products")
const profissionaisContainer = document.querySelector(".profissionais")
const espaçoContainer = document.querySelector(".espaço")


const caresDescription = document.querySelector(".cares-description")
const beardDescription = document.querySelector(".beard-description")
const cutsDescription = document.querySelector(".cuts-description")

const productsDescription = document.querySelector(".products-description")
const profissionaisDescription = document.querySelector(".profissionais-description")
const espaçoDescription = document.querySelector(".espaço-description")


// Funções:



// Eventos:

// Mostrar as descrições dos Serviços
caresContainer.addEventListener("mouseover", ()=>{
    caresDescription.className = "cares-description"
})
caresContainer.addEventListener("mouseout", ()=>{
    caresDescription.className = "cares-description hide"
})

beardContainer.addEventListener("mouseover", ()=>{
    beardDescription.className = "beard-description"
})
beardContainer.addEventListener("mouseout", ()=>{
    beardDescription.className = "beard-description hide"
})

cutsContainer.addEventListener("mouseover", ()=>{
    cutsDescription.className = "cuts-description"
})
cutsContainer.addEventListener("mouseout", ()=>{
    cutsDescription.className = "cuts-description hide"
})


productsContainer.addEventListener("mouseover", ()=>{
    productsDescription.className = "products-description"
})
productsContainer.addEventListener("mouseout", ()=>{
    productsDescription.className = "products-description hide"
})

profissionaisContainer.addEventListener("mouseover", ()=>{
    profissionaisDescription.className = "profissionais-description"
})
profissionaisContainer.addEventListener("mouseout", ()=>{
    profissionaisDescription.className = "profissionais-description hide"
})

espaçoContainer.addEventListener("mouseover", ()=>{
    espaçoDescription.className = "espaço-description"
})
espaçoContainer.addEventListener("mouseout", ()=>{
    espaçoDescription.className = "espaço-description hide"
})