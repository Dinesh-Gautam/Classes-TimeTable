const stringToHTML = function (str) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");
  return doc.querySelector("div");
};

const dayString = ["MONDAY", "TUEDAY", "WEDNERSDAY", "THURSDAY", "FRIDAY"];

let selectedClass = CURRENT_STATUS.day;

setClassList(CURRENT_STATUS?.day);

function appendClassList(status) {
  if (status && selectedClass < 5) {
    selectedClass++;
    setClassList(selectedClass);
  } else if (!status && selectedClass > 1) {
    selectedClass--;
    setClassList(selectedClass);
  }
}

function editBtnClick(event) {
  EDIT_MODAL.open(event);
}

function setClassList(cday) {
  document.getElementById("classListDay").textContent = dayString[cday - 1];
  const classContainer = document.querySelector(
    ".mobile-view-table .class-container"
  );

  classContainer.innerHTML = "";
  try {
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
                     </span>
                     <button id=${
                       c.uid
                     } class="edit-btn"><i class="fas fa-pen"></i></button>
                     <button onclick="CUSTOM_contextmenu.AddNote(this.id)" id=${
                       c.uid
                     } class="view-btn"><i class="fas fa-sticky-note"></i></i>
                 </div>
         
             </div>
             <div class="join-link">
                 <a id="ongoingClass-joinLink" href="">Join</a>
             </div>
         </div>`)
      );
    });
  } catch (error) {
    classContainer.innerText = "Today is a Holiday!";
  }
  const editBtn = document.querySelectorAll(".class");
  editBtn.forEach((element) => {
    element.removeEventListener("click", editBtnClick);
    if (element.classList.contains("edit-btn")) {
      element.addEventListener("click", editBtnClick);
    }
  });
}

const MOBILE_EDIT_MODAL = {
  subject_name: undefined,
  id: 0,
  class: null,
  open(event) {
    this.id = event.id;
    this.class = this.find_class(this.id);
    this.subject_name = this.class.subject;
    this.set_values();
    this.visible(true);
  },
  visible(visible) {
    visible
      ? mv.EditModal.classList.remove("mv-none")
      : mv.EditModal.classList.add("mv-none");
  },
  cancle() {
    this.set_values({ clear: true });
    this.visible(false);
  },
  save() {
    if (!mv.meetingIdValue.value || !mv.meetingPassValue.value) {
      alert("value can't be empty");
    } else {
      for (key in timeTable) {
        timeTable[key].forEach((e) => {
          if (this.class.subject.toLowerCase() === e.subject.toLowerCase()) {
            e.meetingId = mv.meetingIdValue.value.split(" ").join("");
            e.meetingPass = mv.meetingPassValue.value;
          }
        });
      }
      localStorage.setItem("timeTable", JSON.stringify(timeTable));
      compelete_update();
      this.cancle();
    }
  },
  find_class(get_id) {
    let getClass;
    for (key in timeTable) {
      timeTable[key].forEach((e) => {
        if (e.uid == get_id) {
          getClass = e;
        }
      });
    }
    return getClass;
  },
  set_values({ clear = false } = {}) {
    mv.meetingIdValue.value = clear ? "" : this.class.meetingId;
    mv.meetingPassValue.value = clear ? "" : this.class.meetingPass;
  },
};

function setDisplayNone(element) {
  element.classList.add("mv-none");
}

const editBtn = document.querySelectorAll("button");

editBtn.forEach((element) => {
  if (element.classList.contains("edit-btn")) {
    element.addEventListener("click", (event) => {
      EDIT_MODAL.open(event);
    });
  }
});
