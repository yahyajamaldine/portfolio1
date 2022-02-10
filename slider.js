/**item_count will track which paragraphe is active so it activate its slider_circle  */
let item_count=0;
/***the slider_circle */
const active_circle=document.getElementsByClassName('slider_circle');
/**since the first paragraphe is going to be showen first we are going to activate the first circle */
active_circle[0].classList.add('slider_black');

   const slider_intro=document.querySelector('.slider__intro');
   //***the size of the paragraphe */
   const slider_intro_paraSize=slider_intro.querySelector('.slider__intro_para').clientWidth;
   /**the number of each paragraph */
   const slider_intro_paraItems=slider_intro.querySelectorAll('.slider__intro_para');
    /*calculating the width of the total scrolled item assuming they have one common width*/
    const rightArrow=document.querySelector('.arrow_right');
    /**event handler for scrolling right */
    rightArrow.addEventListener('click',()=>{
      /**if the svg of the rightarrow contains the class disbaled_arrow it'll not be clickable otherwise
       * it'll envoque scrollToNextPage(); 
       */
      return rightArrow.classList.contains('disbaled_arrow')?null:scrollToNextPage();
    });
    const leftarrow=document.querySelector('.arrow_left');
    leftarrow.addEventListener('click',()=>{
      return leftarrow.classList.contains('disbaled_arrow')?null:scrollToPrevPage();
    })

    /**this function will handle the activated circle */
     function fn_active_circle(item_count) {
      [...active_circle].map((item,index)=>{
        if(item_count==index){
          item.classList.add('slider_black');
        }
        else{
          item.classList.remove('slider_black');
        }
     });
       }


    function scrollToNextPage(){
        leftarrow.classList.remove('disbaled_arrow');
        slider_intro.scrollBy(slider_intro_paraSize,0);
        item_count++;
        fn_active_circle(item_count);
        if(item_count==slider_intro_paraItems.length-1){
          rightArrow.classList.add('disbaled_arrow');
        }
      }
      function scrollToPrevPage(){
        rightArrow.classList.remove('disbaled_arrow');
        slider_intro.scrollBy(-slider_intro_paraSize,0);
        item_count--;
        fn_active_circle(item_count);
        if(item_count==0){
          leftarrow.classList.add('disbaled_arrow');
        }
      }
    /**Styling the active cirle **/
      

    /*** */
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
          :'https://drive.google.com/file/d/1iezHLqSDXw7cK5BrY4z3o7RnbkFO9XMS/view?usp=sharing';
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
     alert("The email functionality is not ready for use.");

    });