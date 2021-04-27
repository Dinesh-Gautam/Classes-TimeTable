class createTable {
  constructor() {
    this.days = [];
    this.time = [];
    this.tbody = {};
  }
  addDays(days) {
    const tr = document.createElement("tr");

    days.forEach((day) => {
      const td = document.createElement("td");
      const p = document.createElement("p");
      const b = document.createElement("b");
      b.textContent = day.text;
      p.appendChild(b);
      td.appendChild(p);
      td.className = day.class;
      if (day.id) {
        td.id = day.id;
      }
      tr.appendChild(td);
    });

    this.days = tr;
  }
  addtime(time) {
    time.forEach((time) => {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      const p = document.createElement("p");
      const b = document.createElement("b");
      b.textContent = time;
      p.appendChild(b);
      td.appendChild(p);
      td.className = time.class;
      if (time.id) {
        td.id = time.id;
      }
      tr.appendChild(td);
      tr.className = "timeRanking";
      this.time.push(tr);
    });
  }
  setTbody(content) {
    this.time.forEach((t, i) => {
      for (let key in content) {
        if (!content[key][i]) {
          continue;
        }
        const subject = content[key][i]
          ? content[key][i].subject
          : "No Subject";

        const td = document.createElement("td");
        const p = document.createElement("p");
        p.textContent = subject;
        td.appendChild(p);

        t.appendChild(td);
      }
      console.log(t);
    });
  }
  createDOMTable() {}
}

const table = new createTable();

table.addDays([
  {
    text: "",
    class: "",
    id: "emptyTableBox",
  },
  {
    text: "MON",
    class: "dayBox",
  },
  {
    text: "TUE",
    class: "dayBox",
  },
  {
    text: "WED",
    class: "dayBox",
  },
  {
    text: "THU",
    class: "dayBox",
  },
  {
    text: "FRI",
    class: "dayBox",
  },
]);
table.addtime([
  "9-9:50",
  "9:50-10:40",
  "10:40-11:30",
  "11:30-12:20",
  "12:20-1:20",
  "1:20-2:20",
  "2:20-3:10",
  "3:10-4:00",
  "4:00-5:00",
]);

table.setTbody({
  1: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "chemistry",
      meetingId: "4427721704",
      meetingPass: "321321",
      Id: 0,
      uid: 0,
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "ECS",
      meetingId: "5044549661",
      meetingPass: "722363",
      Id: 1,
      uid: 1,
      note: "",
    },
    {
      startTime: 10.38,
      endTime: 11.28,
      subject: "Math",
      meetingId: 3099473001,
      meetingPass: 12345,
      Id: 2,
      uid: 2,
    },
    {
      startTime: 11.28,
      endTime: 12.18,
      subject: "SCA",
      meetingId: 3099473001,
      meetingPass: 12345,
      Id: 3,
      uid: 3,
    },
    {
      startTime: 12.18,
      endTime: 14.18,
      subject: "ECS",
      meetingId: "5044549661",
      meetingPass: "722363",
      Id: 4,
      uid: 4,
      note:
        "Add a general note (global note) and moveon event listener on each subjectbox and whenever user leaves the box the note view should be display none and a copy a note feature, add automatic link opener in contexte menu to enable it, Replace class ",
    },
    {
      startTime: 14.18,
      endTime: 15.08,
      subject: "physics",
      meetingId: 8271406865,
      meetingPass: 123456,
      Id: 5,
      uid: 5,
      note: "",
    },
    {
      startTime: 15.08,
      endTime: 17,
      subject: "CFIT LAB",
      meetingId: "77371587217",
      meetingPass: "thapar",
      Id: 6,
      uid: 6,
      note: "",
    },
  ],
  2: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "Math",
      meetingId: 3099473001,
      meetingPass: 12345,
      Id: 0,
      uid: 7,
      note: "",
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "chemistry",
      meetingId: "4427721704",
      meetingPass: "321321",
      Id: 1,
      uid: 8,
      note: "",
    },
    {
      startTime: 10.38,
      endTime: 12.18,
      subject: "physics lab",
      meetingId: "4639101625",
      meetingPass: "90121",
      Id: 2,
      uid: 9,
    },
    {
      startTime: 12.18,
      endTime: 14.18,
      subject: "physics",
      meetingId: 8271406865,
      meetingPass: 123456,
      Id: 3,
      uid: 10,
    },
    {
      startTime: 14.18,
      endTime: 15.08,
      subject: "CFIT",
      meetingId: "8072876058",
      meetingPass: "amansclass",
      Id: 4,
      uid: 11,
      note: "",
    },
    {
      startTime: 15.08,
      endTime: 15.58,
      subject: "Math",
      meetingId: 3099473001,
      meetingPass: 12345,
      Id: 5,
      uid: 12,
    },
    {
      startTime: 15.58,
      endTime: 17,
      subject: "SCA",
      meetingId: 3099473001,
      meetingPass: 12345,
      Id: 6,
      uid: 13,
      autoJoin: false,
    },
  ],
  3: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "ECS",
      meetingId: "5044549661",
      meetingPass: "722363",
      Id: 0,
      uid: 14,
      note: "This is chemistry class",
      autoJoin: false,
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "physics",
      meetingId: 8271406865,
      meetingPass: 123456,
      Id: 1,
      uid: 15,
      autoJoin: true,
    },
    {
      startTime: 10.38,
      endTime: 14.18,
      subject: "GWP",
      meetingId: "76756518856",
      meetingPass: "f4BgpQ",
      Id: 2,
      uid: 16,
    },
    {
      startTime: 14.18,
      endTime: 17,
      subject: "ED",
      meetingId: "2611381495",
      meetingPass: "047993",
      Id: 3,
      uid: 17,
      note: "",
    },
  ],
  4: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "CFIT",
      meetingId: "8072876058",
      meetingPass: "amansclass",
      Id: 0,
      uid: 18,
      autoJoin: true,
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "Math",
      meetingId: 3099473001,
      meetingPass: 12345,
      Id: 1,
      uid: 19,
      autoJoin: true,
    },
    {
      startTime: 10.38,
      endTime: 14.18,
      subject: "GWP",
      meetingId: "76756518856",
      meetingPass: "f4BgpQ",
      Id: 2,
      uid: 20,
    },
    {
      startTime: 14.18,
      endTime: 15.08,
      subject: "chemistry",
      meetingId: "4427721704",
      meetingPass: "321321",
      Id: 3,
      uid: 21,
      autoJoin: true,
    },
    {
      startTime: 15.08,
      endTime: 17,
      subject: "ECS LAB",
      meetingId: "5044549661",
      meetingPass: "722363",
      Id: 4,
      uid: 22,
      note: "viva",
      autoJoin: true,
    },
  ],
  5: [
    {
      startTime: 9,
      endTime: 9.48,
      subject: "physics",
      meetingId: 8271406865,
      meetingPass: 123456,
      Id: 0,
      uid: 23,
      autoJoin: true,
    },
    {
      startTime: 9.48,
      endTime: 10.38,
      subject: "Math",
      meetingId: 3099473001,
      meetingPass: 12345,
      Id: 1,
      uid: 24,
      autoJoin: true,
    },
    {
      startTime: 10.38,
      endTime: 12.18,
      subject: "Chemistry Lab",
      meetingId: 4427721704,
      meetingPass: 321321,
      Id: 2,
      uid: 25,
      note:
        "video ON\nall 3 assignment and seminar show on video\nand seminar viva.",
      autoJoin: true,
    },
    {
      startTime: 12.18,
      endTime: 14.18,
      subject: "chemistry",
      meetingId: "4427721704",
      meetingPass: "321321",
      Id: 3,
      uid: 26,
      autoJoin: true,
    },
    {
      startTime: 14.18,
      endTime: 17,
      subject: "ED",
      meetingId: "2611381495",
      meetingPass: "047993",
      Id: 4,
      uid: 27,
    },
  ],
});

console.log(table);
