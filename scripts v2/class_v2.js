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

// localStorage.clear(timeTable);
// for (key in timeTable) {
//   timeTable[key].forEach((e, index) => {
//     e.Id = index;
//     e.uid = i;
//     i++;
//   });
// }

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

const responsive = {
  mv: checkMv(1200),
};

window.addEventListener("resize", () => (responsive.mv = checkMv(1200)));

function checkMv(width) {
  return window.innerWidth < width;
}

const ongoingClass_DOM_selector = document.querySelector(".ongoingClass");
const upcomingClass_DOM_selector = document.querySelector(".upcomingClass");
const ongoinhSubject =
  ongoingClass_DOM_selector.querySelector(".ongoingClass-text");
const ongoingClassTime =
  ongoingClass_DOM_selector.querySelector(".time-container");
const upcomingClassSubject = upcomingClass_DOM_selector.querySelector(
  ".upcomingClass-text"
);
const upcomingClassTime =
  upcomingClass_DOM_selector.querySelector(".time-container");
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
const meetingLinkValue = document.querySelector(".meeting-link-input");
const NoteValue = document.querySelector(".note-input");

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

const mv = {
  meetingIdValue: document.querySelector(
    ".mv-edit-modal .meeting-id-input.mv-input"
  ),
  meetingPassValue: document.querySelector(
    ".mv-edit-modal .meeting-pass-input.mv-input"
  ),
  EditModal: document.querySelector(".mv-popup-modal-container.mv-edit-modal"),
  NoteModal: document.querySelector(".mv-popup-modal-container.mv-note-modal"),
  NoteValue: document.querySelector(".popup-content .note-input"),
};

const navHeight = document.querySelector("header").clientHeight;

const infoViewBtn = document.querySelectorAll(".view-btn"),
  [ongoingInfoPopup, upcomingInfoPopup] = document.querySelectorAll(
    ".ongoingClass-info , .upcomingClass-info"
  );

// class info popup;

infoViewBtn.forEach((btn) => {
  let rect = btn.getBoundingClientRect(),
    y = rect.top - navHeight - 60 + "px";
  x = rect.right - 300 + "px";

  const className = btn.classList;

  if (x !== null) {
    if (className.contains("ongoing")) {
      ongoingInfoPopup.style.top = y;
      ongoingInfoPopup.style.right = x;
    } else {
      upcomingInfoPopup.style.top = y;
      upcomingInfoPopup.style.right = x;
    }
  }

  btn.addEventListener("mouseenter", (event) => {
    infoPopupDisplay(true, event.target);
  });
  btn.addEventListener("mouseleave", (event) => {
    infoPopupDisplay(false, event.target);
  });
});

function infoPopupDisplay(view, target) {
  const className = target.classList;

  if (view) {
    className.contains("ongoing")
      ? ongoingInfoPopup.classList.add("active")
      : upcomingInfoPopup.classList.add("active");
  } else {
    className.contains("ongoing")
      ? ongoingInfoPopup.classList.remove("active")
      : upcomingInfoPopup.classList.remove("active");
  }
}

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
        link.href = linkGenrator(
          classObj.meetingId,
          classObj.meetingPass,
          classObj
        );
        editBtn_id.id = classObj.uid;
      }
    }
  },

  linkGenrator(id, pass, classObj = false) {
    if (classObj.meetingLink && classObj) {
      return classObj.meetingLink;
    }

    return `zoommtg://zoom.us/join?confno=${id}&pwd=${pass}`;
  },
};

function timeStringCreator(classTime) {
  const { startTime, endTime } = classTime;

  function formateTime(time) {
    return time > 12
      ? (time - 12).toFixed(2) < 1
        ? time.toFixed(2) + " PM"
        : (time - 12).toFixed(2) + " PM"
      : time + " AM";
  }
  return (
    formateTime(startTime).toString().replace(".", ":") +
    " - " +
    formateTime(endTime).toString().replace(".", ":")
  );
}

const EDIT_MODAL = {
  subject_name: undefined,
  id: 0,
  class: null,
  open(event) {
    this.id = event.target.id;
    this.class = this.find_class(this.id);
    this.subject_name = this.class.subject;
    this.meetingIdValue = responsive.mv ? mv.meetingIdValue : meetingIdValue;
    this.meetingPassValue = responsive.mv
      ? mv.meetingPassValue
      : meetingPassValue;
    this.meetingLinkValue = meetingLinkValue;
    this.set_values();
    this.visible(true);
  },
  visible(visible) {
    visible
      ? responsive.mv
        ? mv.EditModal.classList.remove("mv-none")
        : EditModal.classList.remove("display")
      : responsive.mv
      ? mv.EditModal.classList.add("mv-none")
      : EditModal.classList.add("display");
  },
  cancle() {
    this.set_values({ clear: true });
    this.visible(false);
  },
  save() {
    if (this.meetingLinkValue.value) {
      saveMeetingIdAndPass(this);
      return;
    } else if (!this.meetingIdValue.value || !this.meetingPassValue.value) {
      alert("Enter meeting ID and Password or Link");
      return;
    } else {
      saveMeetingIdAndPass(this);
    }
    function saveMeetingIdAndPass(scope) {
      for (key in timeTable) {
        timeTable[key].forEach((e) => {
          if (scope.class.subject.toLowerCase() === e.subject.toLowerCase()) {
            e.meetingLink = scope.meetingLinkValue.value;
            e.meetingId = scope.meetingIdValue.value.split(" ").join("");
            e.meetingPass = scope.meetingPassValue.value;
          }
        });
      }
      localStorage.setItem("timeTable", JSON.stringify(timeTable));
      compelete_update();
      scope.cancle();
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
    this.meetingIdValue.value = clear ? "" : this.class.meetingId || "";
    this.meetingPassValue.value = clear ? "" : this.class.meetingPass || "";
    this.meetingLinkValue.value = clear ? "" : this.class.meetingLink || "";
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
            currentDate.getDate() +
              (CURRENT_STATUS.day > 5
                ? index + 2
                : index + 1 - CURRENT_STATUS.day)
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

timeTableTogglerBtn.addEventListener("click", () => {
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
      Y_possition: event.clientY - 50,
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

    ContextMenu_JoinLink.href = CLASS.linkGenrator(
      meeting_id,
      meeting_pass,
      this.Clicked_Class
    );
  },
  modifier() {
    document.querySelector(".TimeTable_addNoteBtn").innerText = this
      .Clicked_Class.note
      ? "Edit Note"
      : "Add Note";
  },
  AddNote(event) {
    NOTE_MODAL.open(this.Clicked_Class, event);
  },
  autoJoin() {
    AUTO_JOIN.execute(this.Target_UID);
  },
};

class GeneralNote {
  constructor(id, x, y, noteValue) {
    (this.noteId = id), (this.position = { x: x, y: y });
    this.noteValue = noteValue;
    this.draggableEnabled = false;
  }
  createGeneralNoteDOM() {
    const DOMTemplet = ` 
    <div class="general-note-header">
        <div class="header-title"></div>
        <div class="header-btns">
            <button id=${this.noteId}>
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>
    <div class="general-note-body">
        <span role="textbox" contenteditable class="body-content">${
          this.noteValue || ""
        }</span>
    </div>
  `;
    const div = document.createElement("div");
    div.className = "general-note";
    div.innerHTML = DOMTemplet;
    this.enableDraggable(div);
    document.body.appendChild(div);
  }
  enableDraggable(elmnt) {
    this.draggableEnabled = true;
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    elmnt.querySelector(".general-note-header").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      this.y = elmnt.offsetTop - pos2 + "px";
      this.x = elmnt.offsetLeft - pos1 + "px";
      elmnt.style.top = this.y;
      elmnt.style.left = this.x;
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

const GENERAL_NOTE = {
  notes: null,

  noteUpdated(once = false) {
    if (once) {
      this.getGeneralNotesFromLocalStorage();
      this.updateNotesDOM(true);
      return;
    }

    this.updateNotesDOM();
  },
  //use type in the argument to determine to add a new note or updated an existing note
  addNote() {
    this.notes.push(new GeneralNote());
    this.noteUpdated();
  },

  updateNotesDOM(once = false) {
    if (once) {
      this.notes.forEach((note) => note.createGeneralNoteDOM());
      return;
    }
    this.notes[this.notes.length - 1].createGeneralNoteDOM();
  },

  createID() {
    this.notes.forEach((note, index) => (note.id = index));
  },

  getGeneralNotesFromLocalStorage() {
    this.notes = JSON.parse(localStorage.getItem("generalNotes")) || [];
  },

  setGeneralNotesInLocalStorage() {},
};

const NOTE_MODAL = {
  class: null,
  notes: [],
  set_note_view_postion(event) {
    const e = NOTE_MODAL.notes.find((element) =>
      responsive.mv ? element.id == event : element.id == event.target.id
    );
    if (e && e.note) {
      if (responsive.mv)
        return (mv.NoteModal.querySelector(
          ".popup-content .popup-text-content"
        ).innerText = e.note);
      msg = e.note;
      noteViewModal.classList.add("active");
      noteViewModal.querySelector(".note-view-paragraph").innerText = e.note;
      let rect = event.target.getBoundingClientRect();
      noteViewModal.style.top = rect.top - 60 + "px";
      noteViewModal.style.left = rect.right + "px";
    } else {
      noteViewModal.classList.remove("active");
      mv.NoteModal.querySelector(
        ".popup-content .popup-text-content"
      ).innerText = "";
      // mv.NoteModal.querySelector(
      //   ".popup-content"
      // ).innerHTML = "Nothing";
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

  open(givenClass, event) {
    this.class = responsive.mv
      ? NOTE_MODAL.notes.find((element) =>
          responsive.mv ? element.id == event : element.id == event.target.id
        )
      : givenClass;
    this.visible(true);
    this.set_values({ clear: false });
    responsive.mv && this.set_note_view_postion(event);
    this.button_modifer(givenClass, event);
  },
  button_modifer(event, id) {
    if (this.class?.note && event != "note-edit-btn") {
      document
        .querySelector(".popup-content .note-modal")
        .classList.add("display");

      document.querySelector(".popup-buttons .note-svae-btn").style.display =
        "none";
      document.querySelector(".popup-buttons .note-cancle-btn").style.display =
        "none";

      document.querySelector(".popup-buttons .note-delete-btn").id = id;
      document.querySelector(".popup-buttons .note-edit-btn").id = id;

      document.querySelector(".popup-buttons .note-delete-btn").style.display =
        "initial";

      document.querySelector(".popup-buttons .note-edit-btn").style.display =
        "initial";

      document.querySelector(".note-svae-btn").innerText = "Save";
      document.querySelector(".note-delete-btn").classList.remove("display");
    } else {
      document
        .querySelector(".popup-content .note-modal")
        .classList.remove("display");

      document.querySelector(".popup-buttons .note-svae-btn").style.display =
        "initial";
      document.querySelector(".popup-buttons .note-cancle-btn").style.display =
        "initial";

      mv.NoteModal.querySelector(
        ".popup-content .popup-text-content"
      ).innerText = "";

      document.querySelector(".popup-buttons .note-svae-btn").id = id;
      document.querySelector(".popup-buttons .note-edit-btn").id = id;
      document.querySelector(".popup-buttons .note-delete-btn").id = id;
      document.querySelector(".popup-buttons .note-delete-btn").style.display =
        "none";
      document.querySelector(".popup-buttons .note-edit-btn").style.display =
        "none";
      document.querySelector(".note-svae-btn").innerText = "Add";

      document.querySelector(".popup-buttons .note-svae-btn").innerText =
        event == "note-edit-btn" ? "save" : "Add Note";
      document.querySelector(".note-delete-btn").classList.add("display");
    }
  },

  set_values({ clear = false } = {}) {
    let inputNoteValue = responsive.mv ? mv.NoteValue : NoteValue;
    inputNoteValue.value = clear || this.class?.note || "";
  },
  visible(visible) {
    visible
      ? responsive.mv
        ? mv.NoteModal.classList.remove("mv-none")
        : NoteModal.classList.remove("display")
      : responsive.mv
      ? mv.NoteModal.classList.add("mv-none")
      : NoteModal.classList.add("display");
  },
  cancle() {
    this.set_values({ clear: true });
    this.visible(false);
    DOM_timeTable.note_exists_update();
  },
  save({ deleteNote = false } = {}, id) {
    if (responsive.mv ? mv.NoteValue.value : NoteValue.value) {
      for (key in timeTable) {
        timeTable[key].forEach((e) => {
          if (e.uid == this.class?.uid || e.uid == id) {
            e.note = deleteNote
              ? ""
              : responsive.mv
              ? mv.NoteValue.value
              : NoteValue.value;
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
  GENERAL_NOTE.noteUpdated(true);
}
initial();
