<template>
  <div>
    <div class="roadmap-anim"></div>
    <div class="roadmap-container">
      <div class="roadmap-header"><h1>Roadmap</h1></div>
      <!-- Latest update -->
      <div class="timeline-feed">
        <vue-timeline-update
          :date="new Date('2021-04-26')"
          title="v2.2.0 - Initial D"
          description="Today I am thrilled to announce the release of Vue.js 2.2.0."
          category="octobay core"
          animation="true"
          theme="light"
          icon="code"
          color="blue"
        />
        <vue-timeline-update
          :date="new Date('2021-04-26')"
          title="v2.2.0 - Initial D"
          description="Today I am thrilled to announce the release of Vue.js 2.2.0."
          category="octobay core"
          animation="true"
          theme="light"
          icon="code"
          color="blue"
        />
        <vue-timeline-update
          :date="new Date('2021-04-26')"
          title="v2.2.0 - Initial D"
          description="Today I am thrilled to announce the release of Vue.js 2.2.0."
          category="octobay core"
          animation="true"
          theme="light"
          icon="code"
          color="blue"
        />
        <vue-timeline-update
          :date="new Date('2021-04-26')"
          title="v2.2.0 - Initial D"
          description="Today I am thrilled to announce the release of Vue.js 2.2.0."
          category="octobay core"
          animation="true"
          theme="light"
          icon="code"
          color="blue"
        />
        <vue-timeline-update
          :date="new Date('2021-04-26')"
          title="v2.2.0 - Initial D"
          description="Today I am thrilled to announce the release of Vue.js 2.2.0."
          category="octobay core"
          animation="true"
          theme="light"
          icon="code"
          color="blue"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    messageWhenNoItems: "There arent items",
    dataTimeline: [
      {
        from: new Date(2017, 5, 22),
        title: "Name",
        showDayAndMonth: true,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2017, 8),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2016, 11),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2018, 7, 19),
        title: "Name",
        showDayAndMonth: true,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2016, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2016, 6),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2013, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2015, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2012, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      }
    ]
  })
};
</script>

<style>
h1 {
  font-size: 40px;
  font-weight: bold;
}

.roadmap-container {
  padding-top: 30px;
}
.roadmap-header {
  text-align: center;
}

.timeline-feed {
  padding-top: 40px;
}
</style>
