const milestoneData = JSON.parse(data).data
console.log(milestoneData)

const loadMilestoneData = () =>{
  const milestones = document.querySelector(".milestones")
  milestones.innerHTML = `${milestoneData.map((milestones)=>{
    return `<div class="milestone border-b" id = "${milestones._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick = "markMilestones(this , ${milestones._id})" /></div>
      <div onclick = "showModules(this , ${milestones._id})">
        <p>
          ${milestones.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestones.modules.map(milestone =>{
        return `<div class="module border-b">
        <p>${milestone.name}</p>
      </div>`
      }).join("")}
    </div>
  </div>`
  }).join("")}`
}

const showModules = (milestoneHeader, id) =>{
    const milestonePanel = milestoneHeader.parentNode.nextElementSibling;
    const showPanel = document.querySelector(".show");

    const activePanel = document.querySelector(".active");

    if(!milestoneHeader.classList.contains("active") && activePanel){
      activePanel.classList.remove("active")
    }
    milestoneHeader.classList.toggle("active")

    if(!milestonePanel.classList.contains("show") && showPanel){
      showPanel.classList.remove("show")
    }
    milestonePanel.classList.toggle("show");
    showMilestoneImage(id)
}

const showMilestoneImage = (id) =>{
  const milestoneImage = document.querySelector(".milestoneImage")
  const milestoneTitle = document.querySelector(".title")
  const milestoneDetails = document.querySelector(".details")
  milestoneImage.src = milestoneData[id].image
  milestoneImage.style.opacity = "0"
  milestoneTitle.innerHTML = milestoneData[id].name
  milestoneDetails.innerHTML = milestoneData[id].description
}

const milestoneImage = document.querySelector(".milestoneImage")
milestoneImage.onload = function(){
  this.style.opacity = "1"
}

const markMilestones  = (checkbox, id) =>{
  const doneList = document.querySelector(".doneList")
  const milestones = document.querySelector(".milestones")
  const item = document.getElementById(id)

  if(checkbox.checked){
    doneList.appendChild(item)
    milestones.removeChild(item)
  }else{
    doneList.removeChild(item)
    milestones.appendChild(item)
  }
}

loadMilestoneData()