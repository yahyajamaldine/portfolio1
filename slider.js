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
  /***
   * This is where we are going to control the modal of resume
   */
   const arrow_down=document.querySelector('.arrow_download');
   const close_button=document.querySelector('.close_modal_container');
   const modal=document.querySelector('.modal_container');
   const modalwindow=document.querySelector('.modal');
  arrow_down.addEventListener('click',()=>{
    [modal,modalwindow].map(item=>item.classList.toggle('modal_closer'));
  });
  close_button.addEventListener('click',()=>{
    [modal,modalwindow].map(item=>item.classList.toggle('modal_closer'));
  })
/********** */
/***Here we are going to give the user the desired resume language *
 * */
  const download_resume=document.querySelector('.download');
   download_resume.addEventListener('click',()=>{
      const languages=document.getElementsByName('language');
         const language= [...languages].find(item=>item.checked);
         if(language){
          const link=language.value=="french"
          ?'https://drive.google.com/file/d/1tMvoYDJ-mrhKn9UZ9BjiUQ_-k2Hn8NdA/view?usp=sharing'
          :'https://drive.google.com/file/d/1n-xmEFw1bmBwpS0HcfvGzFqwchejjZwf/view?usp=sharing';
          window.open(link);
          [modal,modalwindow].map(item=>item.classList.toggle('modal_closer'));
         }
         else{
          alert('Please select a language or leave'); 
         }
        });
/**
 * controlling the submiting of the form
 */
const my_form=document.getElementById('my_form');
    my_form.addEventListener("submit",function(event){
    event.preventDefault()
     const va=document.querySelector(".inputemail").value;
     alert("Thank you");

    });
}
