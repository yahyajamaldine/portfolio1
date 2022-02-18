 onload=()=>{/*controlling button*/
    const openButton=document.querySelector('.menu_icon_open');
    const closeButton=document.querySelector('.menu_icon_close >svg')
      const menu=document.querySelector('.slid_menu');
    openButton.addEventListener('click',()=>{menu.classList.toggle('slide_menu_closer')});
   closeButton.addEventListener('click',()=>{menu.classList.toggle('slide_menu_closer')});

   let twitterlogo=document.querySelector('#twitter');
    twitterlogo.addEventListener('click',()=>{
        open('https://twitter.com/yahya_jamaldine')
    });
   const mediumlogo=document.querySelector('#github');
   mediumlogo.addEventListener('click',()=>{
    open('https://github.com/yahyajamaldine')
    });
   const githublogo=document.querySelector('#linkdin');
   githublogo.addEventListener('click',()=>{
    open('https://www.linkedin.com/in/yahya-jamaldine-20/')
    });
   const linkdinlogo=document.querySelector('#medium');
   linkdinlogo.addEventListener('click',()=>{
    open('https://medium.com/@yahyajamaldine')
   });
 
    /*const fade_p=document.querySelector('.description__fade>p');
    let fade_p_opacity =getComputedStyle(fade_p).getPropertyValue('opacity');
    const body=document.querySelector('body');
    fade_p.onmouseenter=function(){
        fade_p.style.opacity="0.90"
    }
    fade_p.onmouseleave=function(){
      fade_p.style.opacity=fade_p_opacity;
    }*/
        }