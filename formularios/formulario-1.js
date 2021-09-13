// Recupera todos os inputs com a propriedade required
let fields = document.querySelectorAll("[required]")

// Funcao que altera mensagem
function customValidation(event){
    const field = event.target
    console.log(field.validity)

    // Logica para verificar se existem erros
    function verifyErros(){
        let foudError = false

        for(let error in field.validity){
            // se não for customErro
            // então verifica se é verdadeira
            // Caso seja possui um erro
            if(error != "customError" && field.validity[error]){
                foundError = error
            }
        }
        return foundError
    }
    const error = verifyErros()
    console.log("Error Exisits : " + error)
    if (error){
        // Altera mensagem
        field.setCustomValidity("Esse campo é obrigatório")        
    } else{
        field.setCustomValidity("")
    }

}

// Percorre os inputs recuperados a partir da variável "field"
for(field of fields){
    // retorna a função "customValidation" caso o evento
    // "invalid" seja disparado
    field.addEventListener("invalid",customValidation)
}




// Recuperaremos o formulario sem envia-lo para algum lugar
// Ou seja sem dar reload na pagina
document.querySelector("form")
    .addEventListener("submit", event =>{
        console.log("Enviar Formulario")

        // não enviar formulario
        event.preventDefault()
    })