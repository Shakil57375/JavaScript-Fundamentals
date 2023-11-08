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
      <div>
        <p>
          ${milestone.name}
          <span><i class="fas fa-chevron-down"></i></span>
        </p>
      </div>
    </div>
    <div class="hid den_panel">
        ${milestone.modules.map(module =>{
         return `<div class="module border-b">
          <p>${module.name}</p>
         </div>`
   
        }).join("")}
    </div>
  </div>`;
  }).join("")}`;
};

loadMilestoneData();
