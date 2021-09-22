const fa=document.querySelectorAll(".fa");
fa.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        const title=ele.parentElement.previousElementSibling.firstElementChild;
    if(ele.classList.contains("fa-angle-down"))
    {
        ele.classList.remove("fa-angle-down");
        ele.classList.add("fa-angle-up");
        if(title.innerHTML==='Intro')
        {
            var info=document.querySelector(".intro");
            info.lastElementChild.style.display='none';
        }
        else if(title.innerHTML==='About')
        {
            var info=document.querySelector(".about");
            info.lastElementChild.style.display='none';
        }
        else if(title.innerHTML==='Featured')
        {
            var info=document.querySelector(".featured");
            info.lastElementChild.style.display='none';
        }
        else if(title.innerHTML==='Background')
        {
            var info=document.querySelector(".background");
            info.lastElementChild.style.display='none';
        }
        else if(title.innerHTML==='Skills')
        {
            var info=document.querySelector(".skills");
            info.lastElementChild.style.display='none';
        }
        else if(title.innerHTML==='Accomplishments')
        {
            var info=document.querySelector(".accomplishments");
            info.lastElementChild.style.display='none';
        }
        else if(title.innerHTML==='Stream')
        {
            var info=document.querySelector(".stream");
            info.lastElementChild.style.display='none';
        }
        else if(title.innerHTML==='Additional Information')
        {
            var info=document.querySelector(".additional");
            info.lastElementChild.style.display='none';
        }
        
    }
    else{

        ele.classList.remove("fa-angle-up");
        ele.classList.add("fa-angle-down");
        if(title.innerHTML==='Intro')
        {
            var info=document.querySelector(".intro");
            info.lastElementChild.style.display='block';
        }
        else if(title.innerHTML==='About')
        {
            var info=document.querySelector(".about");
            info.lastElementChild.style.display='block';
        }
        else if(title.innerHTML==='Featured')
        {
            var info=document.querySelector(".featured");
            info.lastElementChild.style.display='block';
        }
        else if(title.innerHTML==='Background')
        {
            var info=document.querySelector(".background");
            info.lastElementChild.style.display='block';
        }
        else if(title.innerHTML==='Skills')
        {
            var info=document.querySelector(".skills");
            info.lastElementChild.style.display='block';
        }
        else if(title.innerHTML==='Accomplishments')
        {
            var info=document.querySelector(".accomplishments");
            info.lastElementChild.style.display='block';
        }
        else if(title.innerHTML==='Stream')
        {
            var info=document.querySelector(".stream");
            info.lastElementChild.style.display='block';
        }
        else if(title.innerHTML==='Additional Information')
        {
            var info=document.querySelector(".additional");
            info.lastElementChild.style.display='block';
        }
    }
})
})