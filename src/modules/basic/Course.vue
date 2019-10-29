<template>
  <div class="container" id="contMargin">
    <center>
      <h1 style="font-size:70px; margin-top: -3%;">
        Welcome {{fname}} {{lname}}
        <br />
      </h1>
      <br />
    </center>
    <div class="row" id="backCol" style="margin-top: -2%;">
      <div class="col-sm-4">
        <center>
          <br />
          <h1>Couse & Year</h1>
          <hr style="border: 1px solid #bab8b8" />
          <br />
        </center>
        <div>
          <label>Course:</label>
          <br />
          <input type="text" v-model="course" class="form-control" placeholder="course" />
        </div>
        <br />
        <div>
          <label>Year:</label>
          <br />
          <input type="text" v-model="year" class="form-control" placeholder="year" />
        </div>
        <br />
        <center>
          <button type="submit" class="btn btn-success" @click="addCourse()">Update</button>
        </center>
      </div>
      <div class="col-sm-4 mx-auto text-white">
        <div>
          <br />
          <table class="table" id="tblReceive">
            <thead>
              <tr>
                <th style="font-size:25px; color: white;">Course</th>
                <th style="font-size:25px; color: white;">Year</th>
              </tr>
            </thead>
            <tbody v-for="(mine, index) in this.col" :key="index">
              <tr>
                <td style="font-size:20px; color: #bab8b8;">
                  <b>{{mine.course}}</b>
                </td>
                <td style="font-size:20px; color: #bab8b8;">
                  <b>{{mine.year}}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div id="subject">
          <table class="table" id="tblReceive">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Schedule</th>
              </tr>
            </thead>
            <tbody v-for="(mine, index) in this.rows" :key="index">
              <tr>
                <td>{{mine.subject}}</td>
                <td>{{mine.teach}}</td>
                <td>{{mine.sched}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <br />
          <input type="text" v-model="delsub" class="form-control" placeholder="subject" />
          <center>
            <button type="submit" class="btn btn-success" @click="delSub()">Remove Subject</button>
          </center>
        </div>
        <br />
      </div>
      <div class="col-sm-4">
        <center>
          <br />
          <h1>Subjects</h1>
          <hr style="border: 1px solid #bab8b8" />
          <br />
        </center>
        <div>
          <label>Subject:</label>
          <br />
          <input type="text" v-model="subject" class="form-control" placeholder="subject" />
          <br />
        </div>
        <div>
          <label>Instructor:</label>
          <br />
          <input type="text" v-model="teach" class="form-control" placeholder="instructor" />
          <br />
        </div>
        <div>
          <label>Schedule:</label>
          <br />
          <input type="text" v-model="sched" class="form-control" placeholder="schedule" />
        </div>
        <br />
        <center>
          <button type="submit" class="btn btn-success" @click="addSub()">Add course</button>
        </center>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import "~assets/color.scss";
#contMargin {
  margin-top: $margTop;
}
#backCol {
  background-color: $color;
}

#subject {
  margin-top: -2%;
  background-color: #5295c4;
  height: 300px;
  overflow-y: scroll;
}
</style>

<script>
export default {
  data() {
    return {
      rows: [],
      col: [],
      fname: sessionStorage.getItem("fname"),
      lname: sessionStorage.getItem("lname"),
      course: "",
      year: "",
      subject: "",
      teach: "",
      sched: "",
      delsub: ""
      // subject: sessionStorage.getItem("subject")
    };
  },

  methods: {
    delSub() {
      for (let i = 0; i < this.rows.length; i++) {
        if (this.rows[i].subject === this.delsub) {
          this.rows.splice(this.rows.indexOf(this.rows[i]), 1);
        }
      }
      this.delsub = "";
    },

    addCourse() {
      this.col.splice(0, 5);
      this.col.push({
        course: this.course,
        year: this.year
      });
      (this.course = ""), (this.year = "");
      this.rows.splice(0, 20);
    },

    addSub() {
      if (this.col.length > 0) {
        this.rows.push({
          subject: this.subject,
          teach: this.teach,
          sched: this.sched
        });
      } else {
        alert("Add subject first!!!");
      }
      (this.subject = ""), (this.teach = ""), (this.sched = "");
    }
  }
};
</script>

