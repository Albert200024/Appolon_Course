$(document).ready(function (){
    class Uxankyun {
        constructor(a, b) {
            this.a = a
            this.b = b
        }

        paragic(){
            return (this.a + this.a) + (this.b + this.b)
        }
        makeres(){
            return this.a * this.b
        }

        draw(){
            let div = $(`<div style="background-color: red; width: ${this.b}px; height: ${this.a}px"> </div>`);
            $("body").append(div);
        }
    }

    let u1 = new Uxankyun(150, 300);
    console.log(u1.makeres())
    console.log(u1.paragic())
    u1.draw()

})

// class CreateInput{
//     create(){
//         let input = document.createElement("input")
//         input.type = "text"
//         document.body.append(input)
//     }
// }
//
// let x = new CreateInput()
// x.create()
