const mileStoneData = JSON.parse(data).data;
console.log(mileStoneData);

const loadMilestoneData = () => {
  const milestones = document.querySelector(".milestones");
  milestones.innerHTML = `${mileStoneData.map((milestone) => {
    return `<div class="milestone border-b">
    <div class="flex">
      <div class="checkbox">
        <input type="checkbox" />
      </div>
      <div onclick = "openMilestone(this)">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
        ${milestone.modules.map(module =>{
         return `<div class="module border-b">
          <p>${module.name}</p>
         </div>`
   
        }).join("")}
    </div>
  </div>`;
  }).join("")}`;
};

const openMilestone = (milestoneElements) =>{
  const currentPanel = milestoneElements.parentNode.nextElementSibling;
  const showPanel = document.querySelector(".show")
  if(!currentPanel.classList.contains("show") && showPanel ){
    showPanel.classList.remove("show")
  }

  currentPanel.classList.toggle("show");
}

loadMilestoneData();
