

function submit(){
    let input = document.getElementById('select')
    let inputValue = input.value
        axios(`https://v6.exchangerate-api.com/v6/cc02bc7972a0c8b71e9ac68b/latest/${inputValue}`)
        .then(serverData =>{
            let rate = serverData.data.conversion_rates
            let conversion = JSON.stringify(rate);
            console.log(typeof (conversion))

            let newTable =  `<table>
            <tr>
                <th>Currency Code</th>
                <th>Conversion Rates</th>
            </tr>`
            for(let value of conversion){
               newTable += `<tr> <td> ${value.aed} </td> <td> ${value.afn} </td> <tr>`
            }
            newTable += "</table>";
            document.getElementById("rate").innerHTML = newTable;

        // document.getElementById('rate2').innerHTML=conversion2 +'<br>'
        // document.getElementById('rate1').innerHTML=conversion1

        console.log(serverData.data);
        }).catch(err =>{
            console.log(err)
        })
}

function submit1(){
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
        let rate1 = rate.conversion_result + " " + rate.conversion_rate
        let conversion = JSON.stringify(rate1);
        console.log(typeof (conversion))
        document.getElementById('display').innerHTML=conversion
        console.log(serverData.data)
        }).catch(err =>{
            console.log(err)
        })
}