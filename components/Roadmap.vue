<!--  <vue-timeline-update
      :date="dataTimeline.date"
      :description="dataTimeline.description"
      :title="dataTimeline.title"
      order="desc"
    /> -->

<template>
  <div>
    <!-- Latest update -->
    <vue-timeline-update
      :date="new Date('2017-02-26')"
      title="v2.2.0 - Initial D"
      description="Today I am thrilled to announce the release of Vue.js 2.2.0."
      thumbnail="/images/vuetimeline/initial_d.jpg"
      category="announcement"
      icon="code"
      color="red"
    />

    <!-- Another update -->
    <vue-timeline-update
      :date="new Date('2016-11-22')"
      title="v2.1.0 - Hunter X Hunter"
      description="Today I am thrilled to announce the release of Vue.js 2.1.0."
      thumbnail="/images/vuetimeline/hunter_x_hunter.jpg"
      category="announcement"
      icon="code"
      color="turquoise"
    />

    <!-- Yet another update -->
    <vue-timeline-update
      :date="new Date('2016-09-30')"
      title="v2.0.0 - Ghost in the Shell"
      description="Today I am thrilled to announce the release of Vue.js 2.0.0"
      thumbnail="/images/vuetimeline/ghost_in_the_shell.jpg"
      category="announcement"
      icon="code"
      color="white"
      is-last
    />
  </div>
</template>

<script>
export default {
  name: "Roadmap",
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
