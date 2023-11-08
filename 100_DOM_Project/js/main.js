const mileStoneData = JSON.parse(data).data;
console.log(mileStoneData);

const loadMilestoneData = () => {
  const milestones = document.querySelector(".milestones");
  milestones.innerHTML = `${mileStoneData
    .map((milestone) => {
      return `<div class="milestone border-b">
    <div class="flex">
      <div class="checkbox">
        <input type="checkbox" />
      </div>
      <div onclick = "openMilestone(this, ${milestone._id})">
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hidden_panel">
        ${milestone.modules
          .map((module) => {
            return `<div class="module border-b">
          <p>${module.name}</p>
         </div>`;
          })
          .join("")}
    </div>
  </div>`;
    })
    .join("")}`;
};

const openMilestone = (milestoneElements, milestoneId) => {
  const currentPanel = milestoneElements.parentNode.nextElementSibling;

  const active = document.querySelector(".active");
  if (active && !milestoneElements.classList.contains("active")) {
    active.classList.remove("active");
  }
  milestoneElements.classList.toggle("active");

  const showPanel = document.querySelector(".show");
  if (!currentPanel.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }
  currentPanel.classList.toggle("show");
  showMilestoneImg(milestoneId);
};

const showMilestoneImg = (milestoneId) => {
  const milestoneImg = document.querySelector(".milestoneImage");
  const milestoneTitle = document.querySelector(".title");
  const milestoneDetails = document.querySelector(".details");

  milestoneImg.style.opacity = "0";


  milestoneImg.src = mileStoneData[milestoneId].image;
  milestoneTitle.innerHTML = mileStoneData[milestoneId].name;
  milestoneDetails.innerHTML = mileStoneData[milestoneId].description;
};

// listen for hero image load

const milestoneImage = document.querySelector(".milestoneImage")
milestoneImage.onload = function(){
  this.style.opacity = "1"
}

loadMilestoneData();
