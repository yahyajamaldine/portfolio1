onload=()=>{
    let item_count=0;
   const slider_intro=document.querySelector('.slider__intro');
   const slider_intro_paraSize=slider_intro.querySelector('.slider__intro_para').clientWidth;
   const slider_intro_paraItems=slider_intro.querySelectorAll('.slider__intro_para');
    /*calculating the width of the total scrolled item assuming they have one common width*/
    const rightArrow=document.querySelector('.arrow_right');
    rightArrow.addEventListener('click',scrollToNextPage);
    const leftarrow=document.querySelector('.arrow_left');
    leftarrow.addEventListener('click',scrollToPrevPage)
    
    function scrollToNextPage(){
        leftarrow.removeAttribute('disabled');
        slider_intro.scrollBy(slider_intro_paraSize,0);
        item_count++;
        console.log(item_count);
        if(item_count===slider_intro_paraItems.length){
         rightArrow.setAttribute('disabled',true);
        }
      }
      function scrollToPrevPage(){
        rightArrow.removeAttribute('disabled');
        slider_intro.scrollBy(-slider_intro_paraSize,0);
        item_count--;
        console.log(item_count);
        if(item_count===0){
          leftarrow.setAttribute('disabled',true);
        }
      }
 const openButton=document.querySelector('.menu_icon_open');
const closeButton=document.querySelector('.menu_icon_close >svg')
const menu=document.querySelector('.slid_menu');
openButton.addEventListener('click',()=>{menu.classList.toggle('slide_menu_closer')});
closeButton.addEventListener('click',()=>{menu.classList.toggle('slide_menu_closer')});
    }