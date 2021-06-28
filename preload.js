window.addEventListener("DOMContentLoaded", ()=>{
    const replaceText = (selector,Text) => {
        const element = document.getElementById(selector)
        if(element) element.innerText = Text
    }
    for (const type of ["chrome","node","electron"]){
        replaceText("${$type}-version, process.version[type]")
    }

})