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

const ongoingProgressBarTemplet = `<div class="liveClassProgress">
<div class="liveProgressBar"></div>
</div>`;

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

let currentTime = currentTimeUpdate();
setInterval(() => {
  currentTime = currentTimeUpdate();
  ongoingClassUpdate();
}, 60000);

function currentTimeUpdate() {
  return Number(new Date().getHours() + "." + new Date().getMinutes());
}

const ongoingClass = document.querySelector(".ongoingClass");
const upcomingClass = document.querySelector(".upcomingClass");
const ongoinhSubject = ongoingClass.querySelector(".ongoingClass-text");
const ongoingClassTime = ongoingClass.querySelector(".time-container");
const upcomingClassSubject = upcomingClass.querySelector(".upcomingClass-text");
const upcomingClassTime = upcomingClass.querySelector(".time-container");
const ongoingClassJoinLink = document.getElementById("ongoingClass-joinLink");
const upcomingClassJoinLink = document.getElementById("upcomingClass-joinLink");
const [ongoingClassIdView, ongoingClassPassView] = [
  document.querySelector(".ongoingClass-info .meeting-ID-view"),
  document.querySelector(".ongoingClass-info .meeting-pass-view"),
];
const [upcomingClassIdView, upcomingClassPassView] = [
  document.querySelector(".upcomingClass-info .meeting-ID-view"),
  document.querySelector(".upcomingClass-info .meeting-pass-view"),
];

let classArr = [];
let [ongoingClassArr] = classArr;
let upcomingClassArr;

let day = new Date().getDay();
const currentDayCheck =
  day > 5 || day < 1 || (day === 5 && currentTime > 17) ? 1 : day;
let currentDay = timeTable[currentDayCheck];

function ongoingClassUpdate() {
  if (currentTime > 17) {
    upcomingClassArr =
      day >= 5 || day == 0
        ? timeTable[1][0]
        : timeTable[currentDayCheck + 1][0];
  } else if (currentTime < 9) {
    upcomingClassArr = timeTable[currentDayCheck][0];
  } else {
    if (day <= 5 && day >= 1) {
      classArr = currentDay.filter(
        (e) => e.startTime <= currentTime && e.endTime >= currentTime
      );
      let [ongoingClassArr] = classArr;
      upcomingClassArr =
        ongoingClassArr.Id + 1 === currentDay.length
          ? currentDayCheck === 5
            ? timeTable[1][0]
            : timeTable[currentDayCheck + 1][0]
          : currentDay[ongoingClassArr.Id + 1];
      ongoinhSubject.innerText = ongoingClassArr.subject;
      ongoingClassTime.innerText =
        ongoingClassArr.startTime + " - " + ongoingClassArr.endTime;
      ongoingClassJoinLink.href = linkGenrator(
        ongoingClassArr.meetingId,
        ongoingClassArr.meetingPass
      );
      ongoingClassTimeTable(ongoingClassArr);
      idPassUpdater();
    } else {
      upcomingClassArr = timeTable[1][0];
    }
  }
  upcomingClassSubject.innerText = upcomingClassArr.subject;
  upcomingClassTime.innerText =
    upcomingClassArr.startTime + " - " + upcomingClassArr.endTime;
  upcomingClassJoinLink.href = linkGenrator(
    upcomingClassArr.meetingId,
    upcomingClassArr.meetingPass
  );
  upcomingClassTimeTable(upcomingClassArr);
  idPassUpdater();
  classArr.length < 1
    ? (ongoingClass.style.display = "none")
    : (ongoingClass.style.display = "flex");
}
ongoingClassUpdate();

const meetingIdValue = document.querySelector(".meeting-id-input");
const meetingPassValue = document.querySelector(".meeting-pass-input");
const editBtn = document.querySelectorAll(".edit-btn");
const EditModal = document.querySelector(".edit-modal");

editBtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    openEditModal(e, false);
  });
});

function openEditModal(e, TimeTableEdit) {
  if (e) {
    let [ongoingClassArr] = classArr;
    let targetName = e.target.name;
    targetName === "ongoingClassArr"
      ? (targetName = ongoingClassArr)
      : (targetName = upcomingClassArr);
    meetingIdValue.value = targetName.meetingId;
    meetingPassValue.value = targetName.meetingPass;
    EditModal.id = targetName.subject;
    EditModal.classList.remove("display");
  }
  if (TimeTableEdit) {
    let editId = TimeTableEdit.target.id;
    let getClass;
    for (key in timeTable) {
      timeTable[key].forEach((e) => {
        if (e.uid == editId) {
          getClass = e;
        }
      });
    }
    meetingIdValue.value = getClass.meetingId;
    meetingPassValue.value = getClass.meetingPass;
    EditModal.id = getClass.subject;
    EditModal.classList.remove("display");
  }
}

const TimeTableEdit = document.querySelectorAll(".subjectBox");
TimeTableEdit.forEach((e) => {
  e.addEventListener("click", (event) => {
    openEditModal(false, event);
  });
});

function SaveEdit() {
  if (!meetingIdValue.value || !meetingPassValue.value) {
    alert("value can't be empty");
  } else {
    let [ongoingClassArr] = classArr;
    // let modifiedContent = timeTable[currentDayCheck];
    EditModal.classList.add("display");
    for (key in timeTable) {
      timeTable[key].forEach((e) => {
        if (EditModal.id.toLowerCase() === e.subject.toLowerCase()) {
          e.meetingId = meetingIdValue.value.split(" ").join("");
          e.meetingPass = meetingPassValue.value;
        }
      });
    }

    localStorage.setItem("timeTable", JSON.stringify(timeTable));
    if (ongoingClassArr) {
      ongoingClassJoinLink.href = linkGenrator(
        ongoingClassArr.meetingId,
        ongoingClassArr.meetingPass
      );
    }
    upcomingClassJoinLink.href = linkGenrator(
      upcomingClassArr.meetingId,
      upcomingClassArr.meetingPass
    );
  }
  idPassUpdater();
}

function cancelEdit() {
  EditModal.classList.add("display");
  meetingIdValue.value = "";
  meetingPassValue.value = "";
}

function linkGenrator(id, pass) {
  return `zoommtg://zoom.us/join?confno=${id}&pwd=${pass}`;
}

function idPassUpdater() {
  let [ongoingClassArr] = classArr;
  ongoingClassIdView.innerText = ongoingClassArr && ongoingClassArr.meetingId;
  ongoingClassPassView.innerText =
    ongoingClassArr && ongoingClassArr.meetingPass;
  upcomingClassIdView.innerText = upcomingClassArr.meetingId;
  upcomingClassPassView.innerText = upcomingClassArr.meetingPass;
}

function ongoingClassTimeTable(ongoing) {
  document
    .querySelectorAll(".subjectBox")
    .forEach((e) => e.classList.remove("ongoing-active"));
  let ongoingClassBox = document.getElementById(`${ongoing.uid}`);
  ongoingClassBox.classList.add("ongoing-active");
}

function upcomingClassTimeTable(upcoming) {
  document
    .querySelectorAll(".subjectBox")
    .forEach((e) => e.classList.remove("upcoming-active"));
  document.getElementById(`${upcoming.uid}`).classList.add("upcoming-active");
}

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
  if (clicked_subject.tagName === "TD" && clicked_subject.id) {
    contextMenuForTimeTable(e);
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

function contextMenuForTimeTable(e) {
  contextMenu.classList.add("active");

  const Target_UID = e.path[0].id;

  let Clicked_Class;

  for (key in timeTable) {
    timeTable[key].forEach((e) => {
      if (e.uid == Target_UID) {
        Clicked_Class = e;
      }
    });
  }

  const [meeting_id, meeting_pass] = [
    Clicked_Class.meetingId,
    Clicked_Class.meetingPass,
  ];

  ContextMenu_JoinLink.href = linkGenrator(meeting_id, meeting_pass);

  const { X_possition, Y_possition } = {
    X_possition: e.clientX,
    Y_possition: e.clientY,
  };

  const contextMenu_position = contextMenu.style;
  contextMenu_position.top = Y_possition + "px";
  contextMenu_position.left = X_possition + "px";
}
