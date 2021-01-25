let timeTable = {
  1: [
    {
      startTime: 9,
      endTime: 9.5,
      subject: "chemistry",
      meetingId: 1231231,
      meetingPass: 123123,
      Id: 0,
    },
    {
      startTime: 9.5,
      endTime: 10.4,
      subject: "ECS",
      meetingId: 1231,
      meetingPass: 1231,
      Id: 1,
    },
    {
      startTime: 10.4,
      endTime: 11.3,
      subject: "Math",
      meetingId: 23123123,
      meetingPass: 12312,
      Id: 2,
    },
    {
      startTime: 11.3,
      endTime: 12.2,
      subject: "SCA",
      meetingId: 1231231231,
      meetingPass: 12312,
      Id: 3,
    },
    {
      startTime: 12.2,
      endTime: 13.2,
      subject: "ECS",
      meetingId: 123123,
      meetingPass: 12312,
      Id: 4,
    },
    {
      startTime: 13.2,
      endTime: 15.1,
      subject: "physics",
      meetingId: 1123123,
      meetingPass: 1223,
      Id: 5,
    },
    {
      startTime: 15.1,
      endTime: 17,
      subject: "CFIT LAB",
      meetingId: 1231231,
      meetingPass: 123,
      Id: 6,
    },
  ],
  2: [
    {
      startTime: 9,
      endTime: 9.5,
      subject: "Math",
      meetingId: 1231231,
      meetingPass: 123123,
      Id: 0,
    },
    {
      startTime: 9.5,
      endTime: 10.4,
      subject: "chemistry",
      meetingId: 1231,
      meetingPass: 1231,
      Id: 1,
    },
    {
      startTime: 10.4,
      endTime: 12.2,
      subject: "physics lab",
      meetingId: 23123123,
      meetingPass: 12312,
      Id: 2,
    },
    {
      startTime: 12.2,
      endTime: 13.2,
      subject: "physics",
      meetingId: 1231231231,
      meetingPass: 12312,
      Id: 3,
    },
    {
      startTime: 13.2,
      endTime: 15.1,
      subject: "CFIT",
      meetingId: 123123,
      meetingPass: 12312,
      Id: 4,
    },
    {
      startTime: 15.1,
      endTime: 16,
      subject: "Math",
      meetingId: 1123123,
      meetingPass: 1223,
      Id: 5,
    },
    {
      startTime: 16,
      endTime: 17,
      subject: "SCA",
      meetingId: 1231231,
      meetingPass: 123,
      Id: 6,
    },
  ],
  3: [
    {
      startTime: 9,
      endTime: 9.5,
      subject: "ECS",
      meetingId: 1231231,
      meetingPass: 123123,
      Id: 0,
    },
    {
      startTime: 9.5,
      endTime: 10.4,
      subject: "physics",
      meetingId: 1231,
      meetingPass: 1231,
      Id: 1,
    },
    {
      startTime: 10.4,
      endTime: 13.2,
      subject: "GWP",
      meetingId: 23123123,
      meetingPass: 12312,
      Id: 2,
    },
    {
      startTime: 13.2,
      endTime: 17,
      subject: "ED",
      meetingId: 1231231231,
      meetingPass: 12312,
      Id: 3,
    },
  ],
  4: [
    {
      startTime: 9,
      endTime: 9.5,
      subject: "CFIT",
      meetingId: 1231231,
      meetingPass: 123123,
      Id: 0,
    },
    {
      startTime: 9.5,
      endTime: 10.4,
      subject: "Math",
      meetingId: 1231,
      meetingPass: 1231,
      Id: 1,
    },
    {
      startTime: 10.4,
      endTime: 13.2,
      subject: "GWP",
      meetingId: 23123123,
      meetingPass: 12312,
      Id: 2,
    },
    {
      startTime: 13.2,
      endTime: 15.1,
      subject: "chemistry",
      meetingId: 1231231231,
      meetingPass: 12312,
      Id: 3,
    },
    {
      startTime: 15.1,
      endTime: 17,
      subject: "ECS LAB",
      meetingId: 123123,
      meetingPass: 12312,
      Id: 4,
    },
  ],
  5: [
    {
      startTime: 9,
      endTime: 9.5,
      subject: "physics",
      meetingId: 1231231,
      meetingPass: 123123,
      Id: 0,
    },
    {
      startTime: 9.5,
      endTime: 10.4,
      subject: "Math",
      meetingId: 1231,
      meetingPass: 1231,
      Id: 1,
    },
    {
      startTime: 10.4,
      endTime: 12.2,
      subject: "Chemistry Lab",
      meetingId: 23123123,
      meetingPass: 12312,
      Id: 2,
    },
    {
      startTime: 12.2,
      endTime: 13.2,
      subject: "chemistry",
      meetingId: 1231231231,
      meetingPass: 12312,
      Id: 3,
    },
    {
      startTime: 13.2,
      endTime: 17,
      subject: "ED",
      meetingId: 123123,
      meetingPass: 12312,
      Id: 4,
    },
  ],
};

for (key in timeTable) {
  timeTable[key].forEach((e) => {
    switch (e.subject.toLowerCase()) {
      case "math":
        e.meetingId = 3099473001;
        e.meetingPass = 12345;
        break;
      case "sca":
        e.meetingId = 3099473001;
        e.meetingPass = 12345;
        break;
      case "ecs":
        e.meetingId = 5054549661;
        e.meetingPass = 722363;
        break;
      case "physics":
        e.meetingId = 8271406865;
        e.meetingPass = 123456;
        break;
      case "chemistry":
        e.meetingId = 4427721704;
        e.meetingPass = 321321;
        break;
      case "chemistry lab":
        e.meetingId = 4427721704;
        e.meetingPass = 321321;
        break;
      case "ecs lab":
        e.meetingId = 5054549661;
        e.meetingPass = 722363;
        break;
      default:
        break;
    }
  });
}

let i = 0;
// localStorage.setItem("timeTable", JSON.stringify(timeTable));
if (localStorage.getItem("timeTable") === null) {
  localStorage.setItem("timeTable", JSON.stringify(timeTable));
} else {
  timeTable = JSON.parse(localStorage.getItem("timeTable"));
  for (key in timeTable) {
    timeTable[key].forEach((e) => {
      e.uid = i;
      i++;
    });
  }
}

const ongoingClass_DOM_selector = document.querySelector(".ongoingClass");
const upcomingClass_DOM_selector = document.querySelector(".upcomingClass");
const ongoinhSubject = ongoingClass_DOM_selector.querySelector(
  ".ongoingClass-text"
);
const ongoingClassTime = ongoingClass_DOM_selector.querySelector(
  ".time-container"
);
const upcomingClassSubject = upcomingClass_DOM_selector.querySelector(
  ".upcomingClass-text"
);
const upcomingClassTime = upcomingClass_DOM_selector.querySelector(
  ".time-container"
);
const ongoingClassJoinLink = document.getElementById("ongoingClass-joinLink");
const upcomingClassJoinLink = document.getElementById("upcomingClass-joinLink");
const [ongoingClassIdView, ongoingClassPassView] = document.querySelectorAll(
  ".ongoingClass-info .meeting-ID-view, .ongoingClass-info .meeting-pass-view "
);

const [upcomingClassIdView, upcomingClassPassView] = document.querySelectorAll(
  ".upcomingClass-info .meeting-ID-view, .upcomingClass-info .meeting-pass-view"
);

const meetingIdValue = document.querySelector(".meeting-id-input");
const meetingPassValue = document.querySelector(".meeting-pass-input");
const NoteValue = document.querySelector(".note-input");
const editBtn = document.querySelectorAll(".edit-btn");
const [ongoing_editBtn, upcoming_editBtn] = document.querySelectorAll(
  ".ongoingClass .edit-btn, .upcomingClass .edit-btn"
);
const [EditModal, NoteModal] = document.querySelectorAll(".edit-modal");
const TimeTableEdit = document.querySelectorAll(".subjectBox");

const CURRENT_STATUS = {
  day: new Date().getDay(),
  time: 0,
  TimeUpdate() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    this.time = Number(hours + "." + (minutes < 10 ? "0" + minutes : minutes));
  },
};

CURRENT_STATUS.TimeUpdate();
setInterval(() => {
  compelete_update();
}, 60000);

const CLASS = {
  ongoingClass: null,
  upcomingClass: null,

  ongoingClassUpdate() {
    this.ongoingClass = null;
    const { day, time } = CURRENT_STATUS;
    if (day >= 1 && day <= 5) {
      if (time >= 9 && time <= 17) {
        this.ongoingClass = timeTable[day].filter(
          (e) => e.startTime <= time && e.endTime >= time
        )[0];
      }
    }
  },

  upcomingClassUpdate() {
    this.upcomingClass = null;
    const { day, time } = CURRENT_STATUS;
    if (day >= 1 && day <= 5) {
      console.log("this is executing");
      if (this.ongoingClass === null) {
        if (time < 9) {
          this.upcomingClass = timeTable[day][0];
        } else if (time > 17) {
          if (day !== 5) {
            this.upcomingClass = timeTable[day + 1][0];
          }
        }
      } else {
        this.upcomingClass = timeTable[day].filter(
          (e) => e.Id === this.ongoingClass.Id + 1
        )[0];
        if (this.upcomingClass === undefined) {
          this.upcomingClass = timeTable[day + 1][0];
        }
      }
    }
    if (this.upcomingClass === null) {
      this.upcomingClass = timeTable[1][0];
    }
  },

  DOM_update() {
    const linkGenrator = this.linkGenrator;
    common_updates(this.ongoingClass, {
      DOM_selector: ongoingClass_DOM_selector,
      subject: ongoinhSubject,
      time: ongoingClassTime,
      idView: ongoingClassIdView,
      passView: ongoingClassPassView,
      link: ongoingClassJoinLink,
      editBtn_id: ongoing_editBtn,
    });
    common_updates(this.upcomingClass, {
      DOM_selector: upcomingClass_DOM_selector,
      subject: upcomingClassSubject,
      time: upcomingClassTime,
      idView: upcomingClassIdView,
      passView: upcomingClassPassView,
      link: upcomingClassJoinLink,
      editBtn_id: upcoming_editBtn,
    });

    function common_updates(
      classObj,
      { DOM_selector, subject, time, idView, passView, link, editBtn_id }
    ) {
      if (classObj === null) {
        DOM_selector.style.display = "none";
      } else {
        DOM_selector.style.display = "flex";
        subject.innerText = classObj.subject;
        time.innerText = timeStringCreator(classObj);
        idView.innerText = classObj.meetingId;
        passView.innerText = classObj.meetingPass;
        link.href = linkGenrator(classObj.meetingId, classObj.meetingPass);
        editBtn_id.id = classObj.uid;
      }
    }
    function timeStringCreator(classTime) {
      return classTime.startTime + " - " + classTime.endTime;
    }
  },

  linkGenrator(id, pass) {
    return `zoommtg://zoom.us/join?confno=${id}&pwd=${pass}`;
  },
};

const EDIT_MODAL = {
  subject_name: undefined,
  id: 0,
  class: null,
  open(event) {
    this.id = event.target.id;
    this.class = this.find_class(this.id);
    this.subject_name = this.class.subject;
    this.set_values();
    this.visible(true);
  },
  visible(visible) {
    visible
      ? EditModal.classList.remove("display")
      : EditModal.classList.add("display");
  },
  cancle() {
    this.set_values({ clear: true });
    this.visible(false);
  },
  save() {
    if (!meetingIdValue.value || !meetingPassValue.value) {
      alert("value can't be empty");
    } else {
      for (key in timeTable) {
        timeTable[key].forEach((e) => {
          if (this.class.subject.toLowerCase() === e.subject.toLowerCase()) {
            e.meetingId = meetingIdValue.value.split(" ").join("");
            e.meetingPass = meetingPassValue.value;
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
    meetingIdValue.value = clear ? "" : this.class.meetingId;
    meetingPassValue.value = clear ? "" : this.class.meetingPass;
  },
};

const DOM_timeTable = {
  update() {
    this.class_update(CLASS.ongoingClass, "ongoing-active");
    this.class_update(CLASS.upcomingClass, "upcoming-active");
  },
  class_update(classInfo, classActive) {
    document
      .querySelectorAll(".subjectBox")
      .forEach((e) => e.classList.remove(classActive));
    classInfo &&
      document.getElementById(`${classInfo.uid}`).classList.add(classActive);
  },
  note_update() {
    const note_add_uid = [];
    document
      .querySelectorAll(".subjectBox")
      .forEach((e) => e.classList.remove("note-added"));
    for (key in timeTable) {
      timeTable[key].forEach((element) => {
        element.note && note_add_uid.push(element.uid);
      });
    }
    note_add_uid.forEach((e) => {
      document.getElementById(`${e}`).classList.add("note-added");
    });
  },
};

document.querySelectorAll(".subjectBox").forEach((e) => {
  e.addEventListener("mouseover", check_note);
});

function check_note(event) {
  Target_UID = event.target.id;
  msg = "";
  for (key in timeTable) {
    timeTable[key].forEach((e) => {
      if (Target_UID == e.uid) {
        if (e.note) {
          msg = e.note;
          document.querySelector(".note-view").classList.add("active");
          document.querySelector(".note-view-paragraph").innerText = msg;

          let rect = event.target.getBoundingClientRect();

          document.querySelector(".note-view").style.top = rect.top + "px";
          document.querySelector(".note-view").style.left = rect.right + "px";
        } else {
          document.querySelector(".note-view").classList.remove("active");
        }
      }
    });
  }
}

window.addEventListener("mouseover", check_note);

const timeTableTogglerBtn = document.querySelector(".timeTableCloser");

timeTableTogglerBtn.addEventListener("click", (e) => {
  document.getElementById("timeTable").classList.toggle("timeTableClosed");
  const BtnIcon = timeTableTogglerBtn.querySelector(".fas");
  if (BtnIcon.classList.contains("fa-table")) {
    BtnIcon.classList.add("fa-times");
    BtnIcon.classList.remove("fa-table");
  } else {
    BtnIcon.classList.add("fa-table");
    BtnIcon.classList.remove("fa-times");
  }
});

window.oncontextmenu = (e) => {
  const clicked_subject = e.path[0];
  contextMenu.classList.remove("active");
  if (clicked_subject.tagName === "TD" && clicked_subject.id) {
    CUSTOM_contextmenu.contextMenuForTimeTable(e);
    return false;
  }
};

const contextMenu = document.querySelector(".custom_contextMenu ");
const ContextMenu_JoinLink = document.querySelector(".TimeTable_joinBtn");

contextMenu.oncontextmenu = () => {
  return false;
};

window.addEventListener("click", () => {
  contextMenu.classList.remove("active");
});
window.addEventListener("resize", () => {
  contextMenu.classList.remove("active");
});

const CUSTOM_contextmenu = {
  Target_UID: null,
  Clicked_Class: null,
  contextMenuForTimeTable(event) {
    contextMenu.classList.add("active");

    this.Target_UID = event.path[0].id;

    for (key in timeTable) {
      timeTable[key].forEach((e) => {
        if (e.uid == this.Target_UID) {
          this.Clicked_Class = e;
        }
      });
    }
    this.joinBtn();
    this.setPosition(event);
    this.modifier();
  },

  setPosition(event) {
    const { X_possition, Y_possition } = {
      X_possition: event.clientX,
      Y_possition: event.clientY,
    };

    const contextMenu_position = contextMenu.style;
    contextMenu_position.top = Y_possition + "px";
    contextMenu_position.left = X_possition + "px";
  },

  joinBtn() {
    const [meeting_id, meeting_pass] = [
      this.Clicked_Class.meetingId,
      this.Clicked_Class.meetingPass,
    ];

    ContextMenu_JoinLink.href = CLASS.linkGenrator(meeting_id, meeting_pass);
  },
  modifier() {
    document.querySelector(".TimeTable_addNoteBtn").innerText = this
      .Clicked_Class.note
      ? "Edit Note"
      : "Add Note";
  },
  AddNote(event) {
    NOTE_MODAL.open(this.Clicked_Class);
  },
};

const NOTE_MODAL = {
  class: null,
  open(givenClass) {
    this.class = givenClass;
    this.visible(true);
    this.button_modifer();
    this.set_values({ clear: false });
  },
  button_modifer() {
    if (this.class.note) {
      document.querySelector(".note-svae-btn").innerText = "Save";
      document.querySelector(".note-delete-btn").classList.remove("display");
    } else {
      document.querySelector(".note-svae-btn").innerText = "Add";
      document.querySelector(".note-delete-btn").classList.add("display");
    }
  },
  set_values({ clear = false } = {}) {
    NoteValue.value = clear || !this.class.note ? "" : this.class.note;
  },
  visible(visible) {
    visible
      ? NoteModal.classList.remove("display")
      : NoteModal.classList.add("display");
  },
  cancle() {
    this.set_values({ clear: true });
    this.visible(false);
    DOM_timeTable.note_update();
  },
  save({ deleteNote = false } = {}) {
    if (NoteValue.value) {
      for (key in timeTable) {
        timeTable[key].forEach((e) => {
          if (e.uid === this.class.uid) {
            e.note = deleteNote ? "" : NoteValue.value;
          }
        });
      }
      localStorage.setItem("timeTable", JSON.stringify(timeTable));
      compelete_update();
      this.cancle();
    } else {
      alert("value can't be empty");
    }
  },
};

editBtn.forEach((element) => {
  element.addEventListener("click", (event) => {
    EDIT_MODAL.open(event);
  });
});
TimeTableEdit.forEach((element) => {
  element.addEventListener("click", (event) => {
    EDIT_MODAL.open(event);
  });
});

function compelete_update() {
  CURRENT_STATUS.TimeUpdate();
  CLASS.ongoingClassUpdate();
  CLASS.upcomingClassUpdate();
  CLASS.DOM_update();
  DOM_timeTable.update();
}
compelete_update();

function initial() {
  DOM_timeTable.note_update();
}
initial();
