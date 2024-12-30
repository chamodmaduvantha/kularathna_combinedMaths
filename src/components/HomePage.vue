<template>
  <NavBar></NavBar>
  <CaroselPage></CaroselPage>

  <v-container>
    <!-- Logo Section -->
    <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
      <img :src="logo" alt="Company Logo" width="120" height="120" id="logo" />
    </div>
    <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
      What is Kularathna Education?
    </h1>
    <br />
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
      <b>Kularathna Education</b> is a premier educational initiative founded and conducted by Mr. S.K. Janith Charuka
      Kularathna. With a solid academic foundation, Mr. Kularathna holds a Bachelor of Science degree from the
      University of Peradeniya, specializing in Mathematics (December 2017 – February 2022).

      In addition to his undergraduate studies, Mr. Kularathne dedicated his 2nd Year and 3rd Year to full-time
      Mathematics, delving deeply into advanced mathematical theories and applications, further enriching his expertise.

      Dedicated to academic excellence, Kularathna Education focuses on empowering students to achieve their fullest
      potential in mathematics. Mr. Kularathna brings his expertise to the classroom by teaching G.C.E. Advanced Level
      Combined Mathematics, providing personalized guidance and effective strategies for mastering complex concepts.

      At Kularathna Education, students are not just prepared for exams; they are inspired to cultivate a deep
      understanding of mathematics and develop critical thinking skills that will serve them well beyond the classroom.
    </p>
    <br />
    <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
      <b>Join Kularathna Education and unlock your potential for academic success! </b>
    </p>
    <br />

    <!-- News Feed Section -->
    <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">News Feed</h1>
    <v-row class="text-center mt-5" justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" md="4" class="d-flex justify-center">
        <v-card class="mx-auto" max-width="400" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <v-img :src="item.src" height="auto" width="auto" cover></v-img>
          <v-card-subtitle class="black--text mt-3" style="color: black; font-weight: bold;">
            {{ item.subtitle }}
          </v-card-subtitle>
          <v-card-text>
            <div>{{ item.description }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Students Section -->
    <v-row class="text-center mt-5" justify="center">
      <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
        Students
      </h1>
      <v-row class="d-flex mt-5" justify="center">
        <v-col v-for="(student, i) in students" :key="i" cols="12" sm="6" md="2" class="d-flex justify-center">
          <v-card class="mx-2" max-width="600" data-aos="fade-down" data-aos-duration="1500">
            <v-img :src="student.src" height="150" width="150" cover></v-img>
            <v-card-subtitle class="text-bold mt-3">
              {{ student.subtitle }}
            </v-card-subtitle>
            <v-card-text>
              {{ student.description }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>

  </v-container>

  <FooterPage></FooterPage>
</template>

<script>
import CaroselPage from './CaroselPage.vue';
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';

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
          src: require("../assets/cards/11.jpg"),
          title: "Title",
          subtitle: "Master the Art of Mathematics!",
          description: "Unlock your full potential with expert guidance in G.C.E. Advanced Level Combined Mathematics.",
        },
        {
          src: require("../assets/cards/33.jpg"),
          subtitle: "Achieve Success in Mathematics",
          description: "Join our Mathematics program to build a strong foundation in key concepts and techniques.",
        },
        {
          src: require("../assets/cards/Banner2023.png"),
          subtitle: "2023 Batch: Building Strong Mathematical Foundations",
          description: "Our 2023 batch is on track to achieve remarkable results with focused, strategic learning.",
        },
        {
          src: require("../assets/cards/Banner2022.png"),
          subtitle: "2022 Batch: Excellence in Mathematics",
          description: "Our 2022 batch has set new benchmarks in Mathematics education!",
        },
      ],
      students: [
        {
          src: "https://i.ibb.co/3ptMVTT/1.jpg",
          description: "2022 A/L",
          subtitle: "L Pasindu Shantha",
        },
        {
          src: "https://i.ibb.co/6gyR2dG/2.jpg",
          description: "2022 A/L",
          subtitle: "T H R Fernando",
        },
        {
          src: "https://i.ibb.co/dGqHr5f/3.jpg",
          description: "2022 A/L",
          subtitle: "D C Kumarasiri",
        },
        {
          src: "https://i.ibb.co/VTvGHsY/4.jpg",
          description: "2023 A/L",
          subtitle: "A M M De Soysa",
        },
        {
          src: "https://i.ibb.co/gy51V1t/5.jpg",
          description: "2023 A/L",
          subtitle: "W U I A De Silva",
        },
        {
          src: "https://i.ibb.co/j4xzykv/6.jpg",
          description: "2023 A/L",
          subtitle: "K N I De Silva",
        },
        {
          src: "https://i.ibb.co/qnvxLvP/7.jpg",
          description: "2023 A/L",
          subtitle: "K S H Abeyvickrama",
        },
        {
          src: "data:image/png;base64,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",
          description: "2023 A/L",
          subtitle: "M H P Jeewantha",
        },
        {
          src: "https://i.ibb.co/zGhn97X/9.jpg",
          description: "2023 A/L",
          subtitle: "D H M D De Silva",
        },
      ],
      logo: require('@/assets/logo_ke.png'),
    };
  },
  computed: {
    singleStudent() {
      return this.students.slice(0, 1); // Show only the first student
    },
  },
};
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

.horizontal-scroll {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}

.horizontal-scroll::-webkit-scrollbar {
  display: none;
  /* For Chrome, Safari, and Opera */
}
</style>
