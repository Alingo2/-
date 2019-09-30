// pages/timeline/timeline.js
Component({
  options: {
    addGlobalClass: true,
  },
  properties: {

  },
  data: {
    color:["green","red","blue"],
    icon: ["noticefill", "attentionforbidfill","evaluate_fill",],
    my_dataset: [
      {
        date: "9-19",
        content: [
          {
            time: "10:22",
            movement_type: 0,
            text: "fylnb"
          },
          {
            time: "5:99",
            movement_type: 1,
            text: "fyl真nb"
          },
          {
            time: "99:14",
            movement_type: 2,
            text: "fyl真的nb"
          },
          {
            time: "17:31",
            movement_type: 2,
            text: "fyl是真的nb"
          },
          {
            time: "16:59",
            movement_type: 1,
            text: "fyl他是真的nb"
          },
          {
            time: "22:81",
            movement_type: 2,
            text: "fyl他是真的巨nb"
          }]
      },


      {
        date: "9.20",
        content: [
          {
            time: "10:22",
            movement_type: 0,
            text: "zjhnb"
          },
          {
            time: "5:99",
            movement_type: 1,
            text: "zjh真nb"
          },
          {
            time: "99:14",
            movement_type: 2,
            text: "zjh真的nb"
          },
          {
            time: "17:31",
            movement_type: 2,
            text: "zjh是真的nb"
          },
          {
            time: "16:59",
            movement_type: 2,
            text: "zjh他是真的nb"
          },
          {
            time: "22:81",
            movement_type: 2,
            text: "zjh他是真的巨nb"
          }]
      }

    ]
  },
  methods: {

  }
})
