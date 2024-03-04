//to select category*////////////////////////////////////////////
let selectedItem = null

function selectItem(itemNumber){
  selectedItem = itemNumber;
  console.log("Selected Item: " + selectedItem)
}

function startQuiz(){
  if(selectedItem !== null){
    switch(selectedItem){
      case 1:
        window.location.href = "page_two.html";
        break;
      case 2:
        window.location.href = "page_three.html";
        break;
      case 3:
        window.location.href = "page_four.html";
        break;
      case 4:
        window.location.href = "page_five.html";
        break;
      case 5:
        window.location.href = "page_six.html";
        break;
        default:
          console.log("invalid selection");
    } 
    }else{
      console.log("pls select an item first");
  }
};
//to display the profile settings
function userPop(){
  const userProfile = document.getElementById("user");
  if(userProfile.style.display === "none"){
    userProfile.style.display = "block";
  }else{
    userProfile.style.display = 'none'
  }
}