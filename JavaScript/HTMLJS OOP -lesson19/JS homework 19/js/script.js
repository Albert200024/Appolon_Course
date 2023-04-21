$(document).ready(function (){
    class Uxankyun {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }

        paragic(){
            return (this.a + this.a) + (this.b + this.b);
        }
        makeres(){
            return this.a * this.b;
        }

        draw(){
            let div = $(`<div> </div>`);
            div.css("display", "flex");

            for(let i = 0; i < this.a; i++){
                let syun = $("<span></span>");
                for(let j = 1; j <= this.b; j++){
                   if(i == 0){
                       let astxanish = $("<p class='sleel'>&nbsp;  &nbsp; *</p>");
                       syun.append(astxanish);
                   }

                   if(i > 0 && i < this.a - 1){
                       if(j == 1){
                           let astxanish = $("<p class='sleel'>&nbsp;  &nbsp; *</p>");
                           syun.append(astxanish);
                       }

                       if(j > 1 && j < this.b){
                           let astxanish = $("<p class='sleel'>&nbsp;  &nbsp; </p>");
                           syun.append(astxanish);
                       }

                       if(j == this.b){
                           let astxanish = $("<p class='sleel'>&nbsp;  &nbsp; *</p>");
                           syun.append(astxanish);
                       }
                   }

                   if(i == this.a - 1){
                       let astxanish = $("<p class='sleel'>&nbsp;  &nbsp; *</p>");
                       syun.append(astxanish);
                   }
                }
                div.append(syun);

            }
            $("body").append(div);
        }
    }

    let u1 = new Uxankyun(8, 4);
    console.log(u1.makeres());
    console.log(u1.paragic());
    u1.draw();

    class InputType{
        constructor(type) {
            this.type = type
        }
    }

    class CreateInput extends InputType{
        constructor(type){
            super(type)
        }

        creat(){
            let inp = $(`<input type="${this.type}">`)
            $("body").append(inp)
        }
    }

    let inp1 = new CreateInput("text")
    inp1.creat()
})