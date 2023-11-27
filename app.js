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


// Checkbox Transition One
  const dottedOne = document.querySelector('.dotted-one');
  const checkboxOne = document.querySelector('.checkbox-one');
  const containerOne = document.querySelector('.checkbox-custom-one');

containerOne.addEventListener('click', function () {

      if (dottedOne.style.display !== 'none') {
       
       dottedOne.style.display = 'none';
        checkboxOne.style.display = 'inline-block';
      } 

      else {
        checkboxOne.style.display = 'none';
        dottedOne.style.display = 'inline-block';
      }
    });

    // Checkbox Transition Two
  const dottedTwo = document.querySelector('.dotted-two');
  const checkboxTwo = document.querySelector('.checkbox-two');
  const containerTwo = document.querySelector('.checkbox-custom-two');
 
containerTwo.addEventListener('click', function () {

      if (dottedTwo.style.display !== 'none') {
       
       dottedTwo.style.display = 'none';
        checkboxTwo.style.display = 'inline-block';
      } 

      else {
        checkboxTwo.style.display = 'none';
        dottedTwo.style.display = 'inline-block';
      }
    });
    // Checkbox Transition Three
  const dottedThree = document.querySelector('.dotted-three');
  const checkboxThree = document.querySelector('.checkbox-three');
  const containerThree = document.querySelector('.checkbox-custom-three');
  
containerThree.addEventListener('click', function () {

      if (dottedThree.style.display !== 'none') {
       
       dottedThree.style.display = 'none';
        checkboxThree.style.display = 'inline-block';
      } 

      else {
        checkboxThree.style.display = 'none';
        dottedThree.style.display = 'inline-block';
      }
    });
    // Checkbox Transition Four
  const dottedFour = document.querySelector('.dotted-four');
  const checkboxFour = document.querySelector('.checkbox-four');
  const containerFour = document.querySelector('.checkbox-custom-four');
  
containerFour.addEventListener('click', function () {

      if (dottedFour.style.display !== 'none') {
       
       dottedFour.style.display = 'none';
        checkboxFour.style.display = 'inline-block';
      } 

      else {
        checkboxFour.style.display = 'none';
        dottedFour.style.display = 'inline-block';
      }
    });
    // Checkbox Transition Five
  const dottedFive = document.querySelector('.dotted-five');
  const checkboxFive = document.querySelector('.checkbox-five');
  const containerFive = document.querySelector('.checkbox-custom-five');
  
containerFive.addEventListener('click', function () {

      if (dottedFive.style.display !== 'none') {
       
       dottedFive.style.display = 'none';
        checkboxFive.style.display = 'inline-block';
      } 

      else {
        checkboxFive.style.display = 'none';
        dottedFive.tyle.display = 'inline-block';
      }
    });
 

 

// Custom Checkbox One
  const customCheckboxOne = document.querySelector('.checkbox-custom-one');

 
    customCheckboxOne.addEventListener('click', function() {
        const currentState = this.getAttribute('aria-checked') === 'true';
        this.setAttribute('aria-checked', String(!currentState));
       
        const extendedContentOne = document.querySelector('.extended-content-one');
        extendedContentOne.style.display = currentState ? 'none' : 'block';
        const contentContainerOne = document.querySelector('.content-container-one');
        if(extendedContentOne.style.display === 'block'){
          contentContainerOne.style.backgroundColor =   '#f3f3f3';
        }
        else {
          contentContainerOne.style.backgroundColor =   '#ffffff';
        }
   
    });
// Custom Checkbox Two
  const customCheckboxTwo = document.querySelector('.checkbox-custom-two');

 
    customCheckboxTwo.addEventListener('click', function() {
        const currentState = this.getAttribute('aria-checked') === 'true';
        this.setAttribute('aria-checked', String(!currentState));
       
        const extendedContentTwo = document.querySelector('.extended-content-two');
        extendedContentTwo.style.display = currentState ? 'none' : 'block';
        const extendedContentOne = document.querySelector('.extended-content-one');
        extendedContentOne.style.display = 'none';
        const contentContainerTwo = document.querySelector('.content-container-two');
        if(extendedContentTwo.style.display === 'block'){
          contentContainerTwo.style.backgroundColor =   '#f3f3f3';
        }
        else {
          contentContainerTwo.style.backgroundColor =   '#ffffff';
        }
    });
// Custom Checkbox Three
  const customCheckboxThree = document.querySelector('.checkbox-custom-three');

 
    customCheckboxThree.addEventListener('click', function() {
        const currentState = this.getAttribute('aria-checked') === 'true';
        this.setAttribute('aria-checked', String(!currentState));
       
        const extendedContentThree = document.querySelector('.extended-content-three');
        extendedContentThree.style.display = currentState ? 'none' : 'block';
        const extendedContentTwo = document.querySelector('.extended-content-two');
        extendedContentTwo.style.display = 'none';
        const contentContainerThree = document.querySelector('.content-container-three');
        if(extendedContentThree.style.display === 'block'){
          contentContainerThree.style.backgroundColor =   '#f3f3f3';
        }
        else {
          contentContainerThree.style.backgroundColor =   '#ffffff';
        }
    });
// Custom Checkbox Four
  const customCheckboxFour = document.querySelector('.checkbox-custom-four');

 
    customCheckboxFour.addEventListener('click', function() {
        const currentState = this.getAttribute('aria-checked') === 'true';
        this.setAttribute('aria-checked', String(!currentState));
       
        const extendedContentFour = document.querySelector('.extended-content-four');
        extendedContentFour.style.display = currentState ? 'none' : 'block';
        const extendedContentThree = document.querySelector('.extended-content-three');
        extendedContentThree.style.display = 'none';
        const contentContainerFour = document.querySelector('.content-container-four');
        if(extendedContentFour.style.display === 'block'){
          contentContainerFour.style.backgroundColor =   '#f3f3f3';
        }
        else {
          contentContainerFour.style.backgroundColor =   '#ffffff';
        }
    });
// Custom Checkbox Five
  const customCheckboxFive = document.querySelector('.checkbox-custom-five');

 
    customCheckboxFive.addEventListener('click', function() {
        const currentState = this.getAttribute('aria-checked') === 'true';
        this.setAttribute('aria-checked', String(!currentState));
       
        const extendedContentFive = document.querySelector('.extended-content-five');
        extendedContentFive.style.display = currentState ? 'none' : 'block';
        const extendedContentFour = document.querySelector('.extended-content-four');
        extendedContentFour.style.display = 'none';
        const contentContainerFive = document.querySelector('.content-container-five');
        if(extendedContentFive.style.display === 'block'){
          contentContainerFive.style.backgroundColor =   '#f3f3f3';
        }
        else {
          contentContainerFive.style.backgroundColor =   '#ffffff';
        }
    });


// Update Numbers completed and Progress bar

const checkboxContainers = document.querySelectorAll('.content-container');
const checkedCountElement = document.getElementById('numberCompleted');
const progressBar = document.getElementById('progress');

checkboxContainers.forEach(function(checkbox) {
  checkbox.addEventListener('click', updateCheckedCount);
});

function updateCheckedCount() {
  let checkedCount = 0;
  const currentState = this.getAttribute('aria-checked') === 'true';
  this.setAttribute('aria-checked', String(!currentState));
 
  checkboxContainers.forEach(function(checkbox) {
    const isChecked = checkbox.getAttribute('aria-checked') === 'true';

    if (isChecked) {
     
      checkedCount++;
    }
    const progressPercentage = (checkedCount / checkboxContainers.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
  });


  console.log(checkedCountElement.textContent);
  checkedCountElement.textContent = checkedCount;
}

 
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

