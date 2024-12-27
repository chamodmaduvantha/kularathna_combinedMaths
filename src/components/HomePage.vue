<template>

  <NavBar></NavBar>
  <CaroselPage></CaroselPage>

  <v-container>
    <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
      <img :src="logo" alt="Company Logo" width="120" height="120" id="logo">
    </div>
    <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
      What is Kularathna Education?
    </h1>
    <br>
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
      <b>Kularathna Education</b> is a premier educational initiative founded and conducted by Mr. S.K. Janith Charuka
      Kularathne. With a solid academic foundation, Mr. Kularathne holds a Bachelor of Science degree from the
      University of Peradeniya, specializing in Mathematics and Physics (December 2017 – February 2022).
      Dedicated to academic excellence, Kularathna Education focuses on empowering students to achieve their fullest
      potential in mathematics. Mr. Kularathne brings his expertise to the classroom by teaching G.C.E. Advanced Level
      Combined Mathematics, providing personalized guidance and effective strategies for mastering complex concepts.
      At Kularathna Education, students are not just prepared for exams; they are inspired to cultivate a deep
      understanding of mathematics and develop critical thinking skills that will serve them well beyond the classroom.
    </p>
    <br>
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
      <b>Join Kularathna Education and unlock your potential for academic success! </b>
    </p>
    <br>


    <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
      News Feed
    </h1>
    <v-row class="text-center mt-5" justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" md="4" class="d-flex justify-center">
        <v-card class="mx-auto" max-width="400" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <v-img :src="item.src" height="auto" width="auto" cover>
          </v-img>
          <v-card-subtitle class="black--text mt-3" style="color: black; font-weight: bold;">{{ item.subtitle
            }}</v-card-subtitle>
          <v-card-text>
            <div>{{ item.description }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- News Feed Section -->
     <v-row class="text-center mt-5" justify="center">
    <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
      Students
    </h1>
    <div class="horizontal-scroll mt-5">
      <v-row class="news-feed">
        <v-col v-for="(item, i) in items" :key="i" class="d-flex justify-center">
          <v-card class="mx-auto" max-width="400" data-aos="fade-down" data-aos-duration="1500">
            <v-img :src="item.src" height="250" cover></v-img>
            <v-card-subtitle class="text-bold mt-3">{{ item.subtitle }}</v-card-subtitle>
            <v-card-text>{{ item.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-row>
  </v-container>

  <FooterPage></FooterPage>
</template>

<script>
import CaroselPage from './CaroselPage.vue';
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue'


export default {
  name: 'HelloWorld',
  components: {
    CaroselPage,
    NavBar,
    FooterPage,
  },
  data() {
    return {
      items: [
        {
          src: require("../assets/cards/1.jpg"),
          title: "Title",
          subtitle: "Sub Title",
          description: "Vanilla cultivation is the primary focus at Agroventures."
        },
        {
          src: require("../assets/cards/3.jpg"),
          subtitle: "Sub Title",
          description: "Vanilla cultivation is the primary focus at Agroventures."
        },
        {
          src: require("../assets/cards/4.jpg"),
          subtitle: "Sub Title",
          description: "Vanilla cultivation is the primary focus at Agroventures."
        },
        {
          src: require("../assets/cards/5.jpg"),
          subtitle: "Sub Title",
          description: "Vanilla cultivation is the primary focus at Agroventures."
        },
        {
          src: require("../assets/cards/6.jpg"),
          subtitle: "Sub Title",
          description: "Vanilla cultivation is the primary focus at Agroventures."
        },
        {
          src: require("../assets/cards/7.jpg"),
          subtitle: "Sub Title",
          description: "Vanilla cultivation is the primary focus at Agroventures."
        },
        
      ],
      logo: require('@/assets/logo_ke.png')
    }
  },

}
</script>

<style>
.title-intro {
  font-family: "Anton", sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}

.paragraph {
  font-family: "Roboto", sans-serif;
  font-weight: 14px;
  font-size: 20px;
  font-style: normal;
  text-align: center;
}

#logo {
  justify-content: center;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>