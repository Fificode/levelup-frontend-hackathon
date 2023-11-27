// Delete Extend trial and select plan container
const deleteButton = document.getElementById('deleteButton');
const selectPlanContent = document.getElementById('selectPlanContent');
deleteButton.addEventListener('click', function() {
    selectPlanContent.innerHTML = '';
    selectPlanContent.style.display = 'none';
});

// Toggle arrow open button
const toggleButton = document.getElementById('toggleButton');
const setupGuideContent = document.getElementById('setupGuideContent');
const customiseContent = document.getElementById('customiseContent');
const openArrowIcon = document.getElementById('openArrowIcon');
const closeArrowIcon = document.getElementById('closeArrowIcon');

let isContentVisible = false;
// Preload images
const preloadImages = () => {
    openArrowIcon.onload = () => {
        openArrowIcon.style.display = 'block';
        closeArrowIcon.style.display = 'none';
    };
    openArrowIcon.src = 'https://crushingit.tech/hackathon-assets/icon-arrow-down.svg';
    closeArrowIcon.src = 'https://crushingit.tech/hackathon-assets/icon-arrow-up.svg';
};
toggleButton.addEventListener('click', function(e) {
    e.preventDefault(); 
    if (!isContentVisible) {
    
        customiseContent.style.display = 'block';
        openArrowIcon.style.display = 'none';
        closeArrowIcon.style.display = 'block'; 
    } else {
        
        customiseContent.style.display = 'none';
        openArrowIcon.style.display = 'block'; 
        closeArrowIcon.style.display = 'none';
    }
    isContentVisible = !isContentVisible;
});


// Checkbox Transition
  const dotted = document.querySelector('.dotted');
  const checkbox = document.querySelector('.checkbox');
  const container = document.querySelector('.checkbox-custom');
container.addEventListener('click', function () {

      if (dotted.style.display !== 'none') {
       
       dotted.style.display = 'none';
        checkbox.style.display = 'inline-block';
      } 

      else {
        checkbox.style.display = 'none';
        dotted.style.display = 'inline-block';
      }
    });
 

 


  const customCheckbox = document.querySelectorAll('.checkbox-custom');
console.log(customCheckbox);
  customCheckbox.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        const currentState = this.getAttribute('aria-checked') === 'true';
        this.setAttribute('aria-checked', String(!currentState));
        // console.log(currentState);
        // Toggle extended content visibility based on checked state
        const extendedContent = document.querySelector('.extended-content');
        extendedContent.style.display = currentState ? 'none' : 'block';
    });
});


  
  // const container = document.querySelector('#checkboxContainer');
  // const expandContent = document.querySelector('.extended-content');
  // // console.log(container);
  // container.addEventListener('click', function(){
  //   const isExpanded = container.getAttribute('ariaChecked') === 'true';
  //   console.log(container);
  //   if ( !isExpanded) {
  //     // console.log(expandContent);
  //     expandContent.style.display = 'block';
    
  //     container.setAttribute('ariaChecked', 'true');
  //     //  console.log(container);
  //     } else {
  //       // console.log(isExpanded);
  //         expandContent.style.display = 'none';
  //         container.setAttribute('ariaChecked', 'false');
  //     }
  // });

// Checkbox click
// document.addEventListener("DOMContentLoaded", function () {
//   const showDetailsCheckboxes = document.querySelectorAll('.show-details');
  

//   showDetailsCheckboxes.forEach(function (checkbox) {
//     checkbox.addEventListener('change', function () {

   
//       showDetailsCheckboxes.forEach(function (otherCheckbox) {
//         if (otherCheckbox !== checkbox) {
//           console.log(otherCheckbox.nextElementSibling);
//           // otherCheckbox.nextElementSibling.nextElementSibling.style.display = 'none';
         
//         }
//       });

      
//       const extendedContent = checkbox.nextElementSibling.nextElementSibling;
     
//       extendedContent.style.display = checkbox.checked ? 'block' : 'none';
//     });
//   });
// });

// Toggle Menu

const menuTrigger = document.querySelector("#profile-menu");
const menu = document.querySelector( "#profile-menu-content");
const allMenuItems = menu.querySelectorAll('[role="menuitem"]');

 function toggleMenu() {
  const isExpanded = menuTrigger.getAttribute('aria-expanded') === 'true';

  if ( !isExpanded) {
  allMenuItems[0].focus();
  menu.style.display = 'block';
  menuTrigger.setAttribute('aria-expanded', 'true');
 
  } else {
      menuTrigger.focus();
      menu.style.display = 'none';
      menuTrigger.setAttribute('aria-expanded', 'false');
  }
 
};
 
  menuTrigger.addEventListener("click", toggleMenu);

  // Toggle Notification
const notificationTrigger = document.querySelector('#notification-bell');
const alertContent = document.querySelector('#notification-bell-content');


function toggleNotification() {
  const isExpanded = notificationTrigger.getAttribute('ariaExpanded') === 'true';
  
  if(!isExpanded){
    alertContent.style.display = 'block';
    notificationTrigger.setAttribute('ariaExpanded', 'true');
  }
  else{
    notificationTrigger.focus();
    alertContent.style.display = 'none';
    notificationTrigger.setAttribute('ariaExpanded', 'false');
  }
}
notificationTrigger.addEventListener("click", toggleNotification);