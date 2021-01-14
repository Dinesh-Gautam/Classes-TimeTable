const ClassTimeTable = {
  ongoingProgressBarTemplet: `<div class="liveClassProgress">
                                <div class="liveProgressBar"></div>
                              </div>`,
  I_id: 0,
  currentTime: this.currentTimeUpdat,
};

ClassTimeTable.TimeUpdater = setInterval(() => {
  ClassTimeTable = this;
  this.currentTime = ClassTimeTable.currentTimeUpdate;
  this.ongoingClassUpdate();
}, 60000);

ClassTimeTable.init_localStorage = () => {
  if (localStorage.getItem("timeTable") === null) {
    localStorage.setItem("timeTable", JSON.stringify(this.timeTable));
  } else {
    this.timeTable = JSON.parse(localStorage.getItem("timeTable"));
    for (key in this.timeTable) {
      this.timeTable[key].forEach((e) => {
        e.uid = this.I_id;
        this.i++;
      });
    }
  }
};

ClassTimeTable.currentTimeUpdate = Number(
  new Date().getHours() + "." + new Date().getMinutes()
);

console.log(ClassTimeTable.currentTimeUpdate);
