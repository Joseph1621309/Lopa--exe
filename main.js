// const SENHA_CERTA = "Pao123"
// let tentativas = 3


// while (true) {
//     let senha_digitada = prompt("Digite a senha: ")
//     if (senha_digitada === SENHA_CERTA){
//         alert("Bem vindo")
//         break
//     }

//     else if(tentativas === 1) {

//         alert("Bloqueado! Tentativas de senha excedidas!")
//         break
//     }
//     else{
//         tentativas--
//         alert(`Senha errada! ${tentativas} tentativas restantes  \ntente novamente`)
//     }

// }
    


// let count = 10

// alert ("contagem final")

// while (count >=1) {

//     alert(count)
//     count--
// }

// alert("Feliz ano novo")


// let amount = 0

// alert("Welcome to Pedro's pocket coin!")

// let start = true
// while (start){

//     let option = Number(prompt("input a valid option: \n(1)daily gain \n(2)amount \n(3)exit "))
//     switch (option) {
//         case 1:
//             daily_gain()
//             break
//         case 2:
//             total()
//             break  
//         case 3:
//             alert("saindo...")
//             start = false
//             break
//         default:
//             alert("It's not a valid value!")
//     }
// }

// function daily_gain(){


//     if (amount < 300){
//         let gain = Number(prompt("How much Pedro gain today?: "))
//         if (!isNaN(gain) && gain >0 ){

//             alert(`Pedro gain ${gain} today!`)
//             amount = amount + gain

//         }else{alert("It's not a valid value!")} 

//     }else{alert("Pedro has alredy what he's needed to buy his bike")}
// }

// function total() {

//     alert(`Pedro have ${amount} in his pocket!`)

// }


let attempts = 0
let right_number = 37

while (true){

    let again = Number(prompt("Try a number:"))
        if (again > 50 && again <1){

            if(again === right_number){

                alert("Congratulations!!")
                alert(`You needed ${attempts}!`)
                break
            }else if (again > right_number){

                alert("The right number is biger then your number")
                attempts++
            }else if(again < right_number){

                alert("The right number is minor then your number")
            }


        }
}