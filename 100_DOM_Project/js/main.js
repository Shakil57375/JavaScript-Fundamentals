const milestoneData = JSON.parse(data).data;
console.log(milestoneData);

const loadMilestoneData = () => {
  const milestoneDetails = document.querySelector(".milestones");
  milestoneDetails.innerHTML = `${milestoneData
    .map((milestones) => {
      return `<div class="milestone border-b " id="${milestones._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick = "ModuleDoneList(this, ${
        milestones._id
      })" /></div>
      <div onclick = "showModules(this, ${milestones._id})">
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

const showModules = (milestoneHeader, id) => {
  const currentPanel = milestoneHeader.parentNode.nextElementSibling;

  const showPanel = document.querySelector(".show");
  if (!currentPanel.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }
  currentPanel.classList.toggle("show");

  const active = document.querySelector(".active");
  if (!milestoneHeader.classList.contains("active") && active) {
    active.classList.remove("active");
  }
  milestoneHeader.classList.toggle("active");

  milestoneImage(id);
};

const milestoneImage = (id) => {
  const milestoneImg = document.querySelector(".milestoneImage");
  const milestoneTitle = document.querySelector(".title");
  const milestoneDetails = document.querySelector(".details");
  milestoneImg.style.opacity = "0";
  milestoneImg.src = milestoneData[id].image;
  milestoneTitle.innerHTML = milestoneData[id]?.name;
  milestoneDetails.innerHTML = milestoneData[id]?.description;
};

const milestoneImg = document.querySelector(".milestoneImage");
milestoneImg.onload = function () {
  this.style.opacity = "1";
};

const ModuleDoneList = (doneMileStone, id) => {
  const finishedMileStone = document.querySelector(".doneList");
  const milestones = document.querySelector(".milestones");
  const item = document.getElementById(id)
  if (doneMileStone.checked) {
    finishedMileStone.appendChild(item);
    milestones.removeChild(item);
  } else {
    finishedMileStone.removeChild(item);
    milestones.appendChild(item);
  }
};

loadMilestoneData();
