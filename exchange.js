

   let h1doc = document.querySelector('form');
   h1doc.classList.add('frame')
 function submit1(){
let h1doc = document.querySelector('form');
    h1doc.classList.remove('frame');
    h1doc.classList.add('frame1');
             document.getElementById('text').innerHTML= `<p id="pp"><b>Currency</b></p> <p id="pp"><b>Rate</b></p>`
let select = document.getElementById('select');
let rate = select.value;
    axios(`https://v6.exchangerate-api.com/v6/1686e513b42112194982dddb/latest/${rate}`)
    .then(serverData =>{
        let ratee = serverData.data;
        let conv = ratee.conversion_rates;
            for (let key in conv){
                if (key){
                    document.getElementById('out').innerHTML += key  + '<br></br>';
                    
                }
            }
            for (let i in conv){
                if (i){
                    document.getElementById('outt').innerHTML += conv[i] + '<br></br>';
                    
                }
            }
            
            console.log(conv)
        }).catch(err =>{
            console.log(err)
        })
}

    

function submit(){
    let input = document.getElementById('first-code')
        inputValue = input.value
    let output = document.getElementById('second-code')
        outputValue = output.value
    let amount = document.getElementById('amount')
        amountValue = amount.value

        axios(`https://v6.exchangerate-api.com/v6/cc02bc7972a0c8b71e9ac68b/pair/${inputValue}/${outputValue}/${amountValue}
        `)
        .then(serverData =>{
        let rate = serverData.data
        let rate1 = rate.conversion_result
        let rate2 = rate.conversion_rate
        document.getElementById('display1').innerHTML=rate1
        document.getElementById('display2').innerHTML=rate2
        console.log(serverData.data)
        }).catch(err =>{
            console.log(err)
        })
}