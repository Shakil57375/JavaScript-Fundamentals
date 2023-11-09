const mileStoneData = JSON.parse(data).data;
console.log(mileStoneData);
const loadMilestoneData = () => {
  const milestoneDetails = document.querySelector(".milestones");
  milestoneDetails.innerHTML = `${mileStoneData
    .map((milestones) => {
      return `<div class="milestone border-b">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" /></div>
      <div onclick = "displayModules(this, ${milestones._id})">
        <p>
          ${milestones.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
      ${milestones.modules
        .map((milestone) => {
          return `<div class="module border-b">
        <p>${milestone.name}</p>
      </div>`;
        })
        .join("")}
    </div>
  </div>`;
    })
    .join("")}`;
};

const displayModules = (milestoneHeader, id) => {
  const currentPanel = milestoneHeader.parentNode.nextElementSibling;
  const active = document.querySelector(".active")
  if(!milestoneHeader.classList.contains("active") && active){
    active.classList.remove("active")
  }
  milestoneHeader.classList.toggle("active")

  const showPanel = document.querySelector(".show");
  if (!currentPanel.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }
  currentPanel.classList.toggle("show");
};
loadMilestoneData();
