const mileStoneData = JSON.parse(data).data;
console.log(mileStoneData);

const loadMilestoneData = () => {
  const milestonesLists = document.querySelector(".milestones");
  milestonesLists.innerHTML = `${mileStoneData
    .map((milestones) => {
      return `<div class="milestone border-b" id = "${milestones._id}">
    <div class="flex">
      <div class="checkbox"><input type="checkbox" onclick = "Checked(this, ${
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
  const milestonePanel = milestoneHeader.parentNode.nextElementSibling;

  const active = document.querySelector(".active");
  if (!milestoneHeader.classList.contains("active") && active) {
    active.classList.remove("active");
  }
  milestoneHeader.classList.toggle("active");

  const showPanel = document.querySelector(".show");
  if (!milestonePanel.classList.contains("show") && showPanel) {
    showPanel.classList.remove("show");
  }
  milestonePanel.classList.toggle("show");

  showMilestoneImages(id);
};

const showMilestoneImages = (id) => {
  const milestoneImg = document.querySelector(".milestoneImage");
  const milestoneTitle = document.querySelector(".title");
  const milestoneDetails = document.querySelector(".details");
  milestoneImg.style.opacity = "0";
  milestoneImg.src = mileStoneData[id].image;
  milestoneTitle.innerHTML = mileStoneData[id].name;
  milestoneDetails.innerHTML = mileStoneData[id].description;
};

const milestoneImg = document.querySelector(".milestoneImage");
milestoneImg.onload = function () {
  this.style.opacity = "1";
};

const Checked = (checkbox, id) => {
  const doneList = document.querySelector(".doneList");
  console.log(doneList)
  const milestone = document.querySelector(".milestones");
  const item = document.getElementById(id);
  if (checkbox.checked) {
    doneList.appendChild(item);
    milestone.removeChild(item);
  } else {
    doneList.removeChild(item);
    milestone.appendChild(item);
  }
};

loadMilestoneData();
