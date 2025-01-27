

const myObserver = new IntersectionObserver( (entries) => {
    entries.forEach ( (entry) => {
        if(entry.IntersectionObserver){
            entry.target.classList.add('aparecer')

        } else {
            entry.target.classList.remove('aparecer')
        }
    })
})
   

const elements = document.querySelectorAll('.sumir')

elements.forEach ((element) => myObserver.observe (element))