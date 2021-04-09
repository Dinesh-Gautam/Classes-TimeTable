const stringToHTML = function (str) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");
  return doc.querySelector("div");
};

const dayString = ["MONDAY", "TUEDAY", "WEDNERSDAY", "THURSDAY", "FRIDAY"];

let selectedClass = CURRENT_STATUS.day;

setClassList(CURRENT_STATUS.day);

function appendClassList(status) {
  if (status && selectedClass < 5) {
    selectedClass++;
    setClassList(selectedClass);
  } else if (!status && selectedClass > 1) {
    selectedClass--;
    setClassList(selectedClass);
  }
}

function setClassList(cday) {
  document.getElementById("classListDay").textContent = dayString[cday - 1];
  const classContainer = document.querySelector(
    ".mobile-view-table .class-container"
  );
  classContainer.innerHTML = "";
  timeTable[cday].forEach((c) => {
    classContainer.appendChild(
      stringToHTML(`
     <div class="class">
         <div class="class-wraper">
             <div class="time-container">
                ${timeStringCreator({
                  startTime: c.startTime,
                  endTime: c.endTime,
                })}
             </div>
             <div class="class-subject">
                 <span class="text-wraper ongoingClass-text">
                     ${c.subject}
                 </span><button class="mv-edit-btn"><i class="fas fa-pen"></i></button>
                 <button class="view-btn"><i class="fas fa-sticky-note"></i></i>
                 </button>
             </div>
     
         </div>
         <div class="join-link">
             <a id="ongoingClass-joinLink" href="">Join</a>
         </div>
     </div>`)
    );
  });
}
