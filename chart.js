const allLi = document.querySelectorAll('.bar')
const monEL = document.querySelector('#bar1')
const tueEL = document.querySelector('#bar2')
const wedEL = document.querySelector('#bar3')
const thuEL = document.querySelector('#bar4')
const friEL = document.querySelector('#bar5')
const satEL = document.querySelector('#bar6')
const sunEL = document.querySelector('#bar7')

allLi.forEach(function(eachLi){
    eachLi.addEventListener('mouseover', function(e){
        removeClass()
        const target = e.target.parentElement.childNodes[1]
        const targetData = e.target.dataset.day
        target.classList.toggle('active')
        outsideData(targetData, target)
    })
})

allLi.forEach(function(eachLi){
    eachLi.addEventListener('click', function(e){
        removeClass()
        const target = e.target.parentElement.childNodes[1]
        const targetData = e.target.dataset.day
        target.classList.toggle('active')
        outsideData(targetData, target)
    })
})


const outsideData = async function getData(targetData, target){
    const url = await fetch('data.json')
    const response = await url.json()

    response.filter(function(eachResponse){
        if(eachResponse.day === targetData){
            target.textContent = '$' + eachResponse.amount
        }
    })

    monEL.style.height = response[0].amount * 2 +'px'
    tueEL.style.height = response[1].amount * 2 +'px'
    wedEL.style.height = response[2].amount * 2 +'px'
    thuEL.style.height = response[3].amount * 2 +'px'
    friEL.style.height = response[4].amount * 2 +'px'
    satEL.style.height = response[5].amount * 2 +'px'
    sunEL.style.height = response[6].amount * 2 +'px'
   
    const max = response.reduce(function(prev, current){
        return (prev.amount > current.amount) ? prev : current
    })

    const filterLI = allLi.forEach(function(allLi){
      if(allLi.dataset.day === max.day){
    //    max.style.backgroundColor = 'red'
      }
        
    })

    // console.log(filterLI);
}

outsideData()

function removeClass(){
    allLi.forEach(function(eachLi){
        eachLi.addEventListener('mouseleave', function(e){
            const target = e.target.parentElement.childNodes[1]
            target.classList.remove('active')
        })
    })
}