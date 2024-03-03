const boxes = {
 box01 : document.querySelector('#box-01'),
 box02 : document.querySelector('#box-02'),
 box03 : document.querySelector('#box-03'),
 box04 : document.querySelector('#box-04'),
 box05 : document.querySelector('#box-05'),
 box06 : document.querySelector('#box-06'),
 box07 : document.querySelector('#box-07'),
 box08 : document.querySelector('#box-08'),
 box09 : document.querySelector('#box-09'),
 box10 : document.querySelector('#box-10'),
 box11 : document.querySelector('#box-11'),
 box12 : document.querySelector('#box-12'),
 box13 : document.querySelector('#box-13'),
 box14 : document.querySelector('#box-14'),
 box15 : document.querySelector('#box-15'),
 box16 : document.querySelector('#box-16'),
 box17 : document.querySelector('#box-17'),
 box18 : document.querySelector('#box-18'),
 box19 : document.querySelector('#box-19'),
 box20 : document.querySelector('#box-20'),
 box21 : document.querySelector('#box-21'),
 box22 : document.querySelector('#box-22'),
 box23 : document.querySelector('#box-23'),
 box24 : document.querySelector('#box-24'),
 box25 : document.querySelector('#box-25'),
 box26 : document.querySelector('#box-26'),
 box27 : document.querySelector('#box-27'),
 box28 : document.querySelector('#box-28'),
 box29 : document.querySelector('#box-29'),
 box30 : document.querySelector('#box-30'),
 box31 : document.querySelector('#box-31'),
 box32 : document.querySelector('#box-32'),
 box33 : document.querySelector('#box-33'),
 box34 : document.querySelector('#box-34'),
 box35 : document.querySelector('#box-35'),
 box36 : document.querySelector('#box-36'),
 box37 : document.querySelector('#box-37'),
 box38 : document.querySelector('#box-38'),
 box39 : document.querySelector('#box-39'),
 box40 : document.querySelector('#box-40'),
 box41 : document.querySelector('#box-41'),
 box42 : document.querySelector('#box-42'),
 box43 : document.querySelector('#box-43'),
 box44 : document.querySelector('#box-44'),
 box45 : document.querySelector('#box-45'),
 box46 : document.querySelector('#box-46'),
 box47 : document.querySelector('#box-47'),
 box48 : document.querySelector('#box-48'),
 box49 : document.querySelector('#box-49'),
 box50 : document.querySelector('#box-50'),
 box51 : document.querySelector('#box-51'),
 box52 : document.querySelector('#box-52'),
 box53 : document.querySelector('#box-53'),
 box54 : document.querySelector('#box-54'),
 box55 : document.querySelector('#box-55'),
 box56 : document.querySelector('#box-56'),
 box57 : document.querySelector('#box-57'),
 box58 : document.querySelector('#box-58'),
 box59 : document.querySelector('#box-59'),
 box60 : document.querySelector('#box-60'),
 box61 : document.querySelector('#box-61'),
 box62 : document.querySelector('#box-62'),
 box63 : document.querySelector('#box-63'),
 box64 : document.querySelector('#box-64'),
}

var notOnBlackBoxBlackPiece = [
    {num:1, not:"left"},
    {num:16, not:"right"},
    {num:17, not:"left"},
    {num:32, not:"right"},
    {num:33, not:"left"},
    {num:48, not:"right"},
    {num:49, not:"left"},
    {num:58, not:"none"},
    {num:60, not:"none"},
    {num:62, not:"none"},
    {num:64, not:"none"},
]

var notOnBlackBoxWhitePiece = [
    {num:64, not:"left"},
    {num:49, not:"right"},
    {num:48, not:"left"},
    {num:33, not:"right"},
    {num:32, not:"left"},
    {num:17, not:"right"},
    {num:16, not:"left"},
    {num:1, not:"none"},
    {num:3, not:"none"},
    {num:5, not:"none"},
    {num:7, not:"none"},
]

const piece = (e,piece) =>{

    if(piece === "black"){

        var elementsToGlow = []

        var box = e?.target?.parentNode
        
        const boxNum = +box.id.split("-")[1]

        for (let i = 0; i < notOnBlackBoxBlackPiece?.length; i++) {

            if(notOnBlackBoxBlackPiece[i]?.num == boxNum){
                if(notOnBlackBoxBlackPiece[i]?.not === "left"){

                    if(boxes[`box${+notOnBlackBoxBlackPiece[i].num + 9}`]?.firstElementChild?.id === "white"){
                        
                        if(boxes[`box${+notOnBlackBoxBlackPiece[i]?.num + 18}`]?.firstElementChild){
                            break
                        }else {
                            elementsToGlow = [`${+notOnBlackBoxBlackPiece[i]?.num + 18}`]
                            break
                        }

                    }else{
                        if(boxes[`box${+notOnBlackBoxBlackPiece[i].num + 9}`]?.firstElementChild?.id === "black"){
                            elementsToGlow = []
                            break
                        }
                        elementsToGlow = [`${+notOnBlackBoxBlackPiece[i]?.num + 9}`]
                        break
                    }
                    
                }else if(notOnBlackBoxBlackPiece[i]?.not === "right"){

                    if(boxes[`box${+notOnBlackBoxBlackPiece[i].num + 7}`]?.firstElementChild?.id === "white"){
                        
                        if(boxes[`box${+notOnBlackBoxBlackPiece[i]?.num + 14}`]?.firstElementChild){
                            break
                        }else {
                            elementsToGlow = [`${+notOnBlackBoxBlackPiece[i]?.num + 14}`]
                            break
                        }

                    }else{
                        
                        if(boxes[`box${+notOnBlackBoxBlackPiece[i].num + 7}`]?.firstElementChild?.id === "black"){
                            elementsToGlow = []
                            break
                        }else{
                            elementsToGlow = [`${+notOnBlackBoxBlackPiece[i]?.num + 7}`]
                            break
                        }
                        
                    }
                }
                break
            } else {

                if(boxes[`box${boxNum + 9}`]?.firstElementChild?.id === "white"){
                        
                    if(boxes[`box${boxNum + 18}`]?.firstElementChild){
                        break
                    }else {
                        elementsToGlow[0] = boxNum + 18
                        // break
                    }
                    
                }else{
                    if(boxes[`box${boxNum + 9}`]?.firstElementChild?.id === "black"){
                        break
                    }else{
                        elementsToGlow[0] = boxNum + 9
                        // break
                    }
                } 
                

                if(boxes[`box${boxNum + 7}`]?.firstElementChild?.id === "white"){

                    if(boxes[`box${boxNum + 14}`]?.firstElementChild){
                        break
                    }else {
                        elementsToGlow[1] = boxNum + 14
                        // break
                    }

                } else {
                    if(boxes[`box${boxNum + 7}`]?.firstElementChild?.id === "black"){
                        break
                    }else{
                        elementsToGlow[1] = boxNum + 14
                        // break
                    }
                }

            }
            
        }

        // un glow previous boxes

        let yellowBoxes = document.querySelectorAll(".yellow")
        yellowBoxes.forEach((box)=>{
            box.classList.remove("yellow")
            box.classList.add("black")
        })

        let orangeBoxes = document.querySelectorAll(".orange")
        orangeBoxes.forEach((box)=>{
            box.classList.remove("orange")
            box.classList.add("black")
        })

        // glow boxes

        box.classList.remove("black")
        box.classList.add("orange")

        for (let i = 0; i < elementsToGlow.length; i++) {
            let element = boxes[`box${elementsToGlow[i]}`]
            element.classList.remove("black")
            element.classList.add("yellow")
        }

    }else if (piece === "white") {
        var elementsToGlow = []

        var box = e?.target?.parentNode
        
        const boxNum = +box.id.split("-")[1]

        for (let i = 0; i < notOnBlackBoxWhitePiece?.length; i++) {
            
            if(notOnBlackBoxWhitePiece[i]?.num == boxNum){

                if(notOnBlackBoxWhitePiece[i]?.not === "left"){
                    
                    if(boxes[`box${+notOnBlackBoxWhitePiece[i].num - 9}`]?.firstElementChild?.id === "black"){

                        if(boxes[`box${+notOnBlackBoxWhitePiece[i]?.num - 18}`]?.firstElementChild){
                            break
                        }else {
                            elementsToGlow = [`${+notOnBlackBoxWhitePiece[i]?.num - 18}`]
                            break
                        }

                    }else{
                        if(boxes[`box${+notOnBlackBoxWhitePiece[i].num - 9}`]?.firstElementChild?.id === "white"){
                            elementsToGlow = []
                            break
                        }
                        elementsToGlow = [`${+notOnBlackBoxWhitePiece[i]?.num - 9}`]
                        break
                    }
                    
                }else if(notOnBlackBoxWhitePiece[i]?.not === "right"){

                    if(boxes[`box${+notOnBlackBoxWhitePiece[i].num - 7}`]?.firstElementChild?.id === "black"){
                        
                        if(boxes[`box${+notOnBlackBoxWhitePiece[i]?.num - 14}`]?.firstElementChild){
                            break
                        }else {
                            elementsToGlow = [`${+notOnBlackBoxWhitePiece[i]?.num - 14}`]
                            break
                        }

                    }else{
                        
                        if(boxes[`box${+notOnBlackBoxWhitePiece[i].num - 7}`]?.firstElementChild?.id === "white"){
                            elementsToGlow = []
                            break
                        }else{
                            elementsToGlow = [`${+notOnBlackBoxWhitePiece[i]?.num - 7}`]
                            break
                        }
                        
                    }
                }
                break
            } else {

                if(boxes[`box${boxNum - 9}`]?.firstElementChild?.id === "white"){
                        
                    if(boxes[`box${boxNum - 18}`]?.firstElementChild){
                        break
                    }else {
                        elementsToGlow[0] = boxNum - 18
                        // break
                    }
                    
                }else{
                    if(boxes[`box${boxNum - 9}`]?.firstElementChild?.id === "black"){
                        break
                    }else{
                        elementsToGlow[0] = boxNum - 9
                        // break
                    }
                } 
                

                if(boxes[`box${boxNum - 7}`]?.firstElementChild?.id === "white"){

                    if(boxes[`box${boxNum - 14}`]?.firstElementChild){
                        break
                    }else {
                        elementsToGlow[1] = boxNum - 14
                        // break
                    }

                } else {
                    if(boxes[`box${boxNum - 7}`]?.firstElementChild?.id === "black"){
                        break
                    }else{
                        elementsToGlow[1] = boxNum - 14
                        // break
                    }
                }

            }
            
        }

        // un glow previous boxes

        let yellowBoxes = document.querySelectorAll(".yellow")
        yellowBoxes.forEach((box)=>{
            box.classList.remove("yellow")
            box.classList.add("black")
        })

        let orangeBoxes = document.querySelectorAll(".orange")
        orangeBoxes.forEach((box)=>{
            box.classList.remove("orange")
            box.classList.add("black")
        })

        // glow boxes

        box.classList.remove("black")
        box.classList.add("orange")

        for (let i = 0; i < elementsToGlow.length; i++) {
            let element = boxes[`box${elementsToGlow[i]}`]
            element.classList.remove("black")
            element.classList.add("yellow")
        }
    }
}