let timeTable = {
  1: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "Physics",
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "SCA",
    },
    {
      startTime: 10.38,
      endTime: 11.28,
      subject: "ECS",
    },
    {
      startTime: 11.28,
      endTime: 12.18,
      subject: "BE",
    },
    {
      startTime: 12.18,
      endTime: 14.18,
      subject: "Math",
    },
    {
      startTime: 14.18,
      endTime: 17,
      subject: "Computer ws",
    },
  ],
  2: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "Physics",
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "SCA",
    },
    {
      startTime: 10.38,
      endTime: 11.28,
      subject: "Math",
    },
    {
      startTime: 11.28,
      endTime: 12.18,
      subject: "ECS",
    },
    {
      startTime: 12.18,
      endTime: 14.18,
      subject: "EVS",
    },
    {
      startTime: 14.18,
      endTime: 15.08,
      subject: "BE",
    },
    {
      startTime: 15.08,
      endTime: 17,
      subject: "BE",
    },
  ],
  3: [
    {
      startTime: 9,
      endTime: 11.28,
      subject: "Computer ws",
    },
    {
      startTime: 11.28,
      endTime: 14.18,
      subject: "DTP",
    },
    {
      startTime: 14.18,
      endTime: 15.08,
      subject: "Math",
    },
    {
      startTime: 15.08,
      endTime: 15.58,
      subject: "Physics",
    },
    {
      startTime: 15.58,
      endTime: 17,
      subject: "SCA",
    },
  ],
  4: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "Math",
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "EVS",
    },
    {
      startTime: 10.38,
      endTime: 11.28,
      subject: "SCA",
    },
    {
      startTime: 11.28,
      endTime: 13.18,
      subject: "BE",
    },
    {
      startTime: 13.18,
      endTime: 15.08,
      subject: "DTP",
    },
    {
      startTime: 15.08,
      endTime: 17,
      subject: "physics",
    },
  ],
  5: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "Math",
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "Physics",
    },
    {
      startTime: 10.38,
      endTime: 12.18,
      subject: "ECS",
    },
    {
      startTime: 12.18,
      endTime: 14.18,
      subject: "SCA",
    },
    {
      startTime: 14.18,
      endTime: 15.08,
      subject: "ECS",
    },
    {
      startTime: 15.08,
      endTime: 15.58,
      subject: "BE",
    },
    {
      startTime: 15.58,
      endTime: 17,
      subject: "EVS",
    },
  ],
};

// for (key in timeTable) {
//   timeTable[key].forEach((e) => {
//     switch (e.subject.toLowerCase()) {
//       case "math":
//         e.meetingId = 3099473001;
//         e.meetingPass = 12345;
//         break;
//       case "sca":
//         e.meetingId = 3099473001;
//         e.meetingPass = 12345;
//         break;
//       case "ecs":
//         e.meetingId = 5054549661;
//         e.meetingPass = 722363;
//         break;
//       case "physics":
//         e.meetingId = 8271406865;
//         e.meetingPass = 123456;
//         break;
//       case "chemistry":
//         e.meetingId = 4427721704;
//         e.meetingPass = 321321;
//         break;
//       case "chemistry lab":
//         e.meetingId = 4427721704;
//         e.meetingPass = 321321;
//         break;
//       case "ecs lab":
//         e.meetingId = 5054549661;
//         e.meetingPass = 722363;
//         break;
//       default:
//         break;
//     }
//   });
// }

let i = 0;

localStorage.clear(timeTable);
for (key in timeTable) {
  timeTable[key].forEach((e) => {
    e.uid = i;
    i++;
  });
}

if (localStorage.getItem("timeTable") === null) {
  localStorage.setItem("timeTable", JSON.stringify(timeTable));
} else {
  timeTable = JSON.parse(localStorage.getItem("timeTable"));
}

const PERMISSIONS = {
  ONE_TIME: {
    autoJoin_permission: false,
  },
};

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

const dayBoxTimeTable = document.querySelectorAll(".dayBox");

const meetingIdValue = document.querySelector(".meeting-id-input");
const meetingPassValue = document.querySelector(".meeting-pass-input");
const NoteValue = document.querySelector(".note-input");
const editBtn = document.querySelectorAll(".edit-btn");
const [ongoing_editBtn, upcoming_editBtn] = document.querySelectorAll(
  ".ongoingClass .edit-btn, .upcomingClass .edit-btn"
);
const [EditModal, NoteModal] = document.querySelectorAll(".edit-modal");
const TimeTableEdit = document.querySelectorAll(".subjectBox");

const noteViewModal = document.querySelector(".note-view");

const autoJoin_checkbox = document.getElementById("auto_join_checkbox");

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
    const { day, time } = CURRENT_STATUS;
    if (day >= 1 && day <= 5) {
      if (time >= 9 && time <= 17) {
        const toBe = timeTable[day].find(
          (e) => e.startTime <= time && e.endTime >= time
        );
        if (this.ongoingClass) {
          if (
            this.ongoingClass.meetingId !== toBe.meetingId &&
            this.ongoingClass.meetingPass !== toBe.meetingPass
          ) {
            console.log("udated when calss actually changes");
            this.ongoingClass = toBe;
            toBe.autoJoin &&
              window.open(
                CLASS.linkGenrator(toBe.meetingId, toBe.meetingPass),
                "_self"
              );
            toBe.autoJoin && console.log("joining");
          }
        } else {
          console.log("updated when ongoing class is null");
          this.ongoingClass = toBe;
          toBe.autoJoin &&
            confirm(`would you like to join your ${toBe.subject} class`) &&
            window.open(
              CLASS.linkGenrator(toBe.meetingId, toBe.meetingPass),
              "_self"
            );
          toBe.autoJoin && console.log("joining");
        }
      } else {
        this.ongoingClass = null;
      }
    } else {
      this.ongoingClass = null;
    }
  },

  upcomingClassUpdate() {
    this.upcomingClass = null;
    const { day, time } = CURRENT_STATUS;
    if (day >= 1 && day <= 5) {
      if (this.ongoingClass === null) {
        if (time < 9) {
          this.upcomingClass = timeTable[day][0];
        } else if (time > 17) {
          if (day !== 5) {
            this.upcomingClass = timeTable[day + 1][0];
          }
        }
      } else {
        this.upcomingClass = timeTable[day].find(
          (e) => e.Id === this.ongoingClass.Id + 1
        );
        if (time > this.ongoingClass.startTime) {
          if (day !== 5) {
            if (this.upcomingClass === undefined) {
              this.upcomingClass = timeTable[day + 1][0];
            }
          }
        }
      }
    }
    if (this.upcomingClass === null || this.upcomingClass === undefined) {
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
      const { startTime, endTime } = classTime;

      function formateTime(time) {
        return time > 12 ? (time -= 12).toFixed(2) + " PM" : time + " AM";
      }
      return (
        formateTime(startTime).toString().replace(".", ":") +
        " - " +
        formateTime(endTime).toString().replace(".", ":")
      );
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
    AUTO_JOIN.DOM_autoJoin();
  },
  class_update(classInfo, classActive) {
    document
      .querySelectorAll(".subjectBox")
      .forEach((e) => e.classList.remove(classActive));
    classInfo &&
      document.getElementById(`${classInfo.uid}`).classList.add(classActive);
  },
  note_exists_update() {
    document.querySelectorAll(".subjectBox").forEach((e) => {
      e.classList.remove("note-added");
    });
    NOTE_MODAL.getNotes();
    NOTE_MODAL.notes.forEach((e) => {
      document.getElementById(`${e.id}`).classList.add("note-added");
    });
  },
  day_date_update() {
    dayBoxTimeTable.forEach(
      (e, index) =>
        (e.innerHTML += `<span class="timeTable_day_definer">${(function () {
          const currentDate = new Date();
          currentDate.setDate(
            currentDate.getDate() + index - (CURRENT_STATUS.day - 1)
          );
          return (
            currentDate.getDate() +
            " " +
            currentDate.toLocaleString("default", { month: "short" })
          );
        })()}</span>`)
    );
  },
};
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

const AUTO_JOIN = {
  check(CLASS) {
    autoJoin_checkbox.checked = CLASS.autoJoin;
  },
  execute(id) {
    for (key in timeTable) {
      timeTable[key].forEach((e) => {
        if (e.uid == id) {
          e.autoJoin = autoJoin_checkbox.checked;
        }
      });
    }
    this.save();
  },
  save() {
    localStorage.setItem("timeTable", JSON.stringify(timeTable));
    compelete_update();
  },
  DOM_autoJoin() {
    // for (key in timeTable) {
    //   timeTable[key].forEach((e) => {
    //     if (e.autoJoin) {
    //       document.getElementById(`${e.uid}`).classList.add("autoJoin-active");
    //     } else {
    //       document
    //         .getElementById(`${e.uid}`)
    //         .classList.remove("autoJoin-active");
    //     }
    //   });
    // }
  },
};

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
    AUTO_JOIN.check(this.Clicked_Class);
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
  autoJoin(event) {
    AUTO_JOIN.execute(this.Target_UID);
  },
};

const NOTE_MODAL = {
  class: null,
  notes: [],
  set_note_view_postion(event) {
    const e = NOTE_MODAL.notes.find((element) => element.id == event.target.id);
    if (e && e.note) {
      msg = e.note;
      noteViewModal.classList.add("active");
      noteViewModal.querySelector(".note-view-paragraph").innerText = e.note;
      let rect = event.target.getBoundingClientRect();
      noteViewModal.style.top = rect.top + "px";
      noteViewModal.style.left = rect.right + "px";
    } else {
      noteViewModal.classList.remove("active");
    }
  },
  getNotes: function () {
    this.notes = [];
    for (key in timeTable) {
      timeTable[key].forEach((e) => {
        if (e.note) {
          this.notes.push({ id: e.uid, note: e.note });
        }
      });
    }
  },

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
    DOM_timeTable.note_exists_update();
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

// document
//   .getElementById("timeTable")
//   .addEventListener("mouseover", NOTE_MODAL.set_note_view_postion);

TimeTableEdit.forEach((element) => {
  element.addEventListener("mouseenter", NOTE_MODAL.set_note_view_postion);
  element.addEventListener("mouseleave", () =>
    noteViewModal.classList.remove("active")
  );
});

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
  DOM_timeTable.note_exists_update();
  DOM_timeTable.day_date_update();
}
initial();
