const allLi = document.querySelectorAll('.bar')

allLi.forEach(function(eachLi){
    eachLi.addEventListener('mouseover', function(e){
        removeToggle()
        const target = e.target.parentElement.childNodes[1]
        const dataset =  e.target.dataset.day

        tryJson(dataset, target)
    })
})

tryJson()

async function tryJson(dataset, target){
    const get = await fetch('data.json')
    const response = await get.json()
    
    response.filter(function(eachFilter){
        if(eachFilter.day === dataset){
            target.classList.toggle('active')
            target.textContent = '$'+ eachFilter.amount
        }
    })

    // const max = response.reduce(function(prev, current){
    //     return (prev.amount > current.amount) ? prev : current  
    // })

    // allLi.forEach(function(eachLi){
    //     eachLi.filter(function(filterLi){
    //         if(filterLi === max.day){
    //             filterLi.style.backgroundColor = 'red'
    //         }
    //     })
    // })
 
}

function removeToggle(){
    allLi.forEach(function(eachLi){
    eachLi.addEventListener('mouseout', function(e){
        e.target.parentElement.childNodes[1].classList.remove('active')
    })
})
}