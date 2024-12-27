<template>
    <NavBar></NavBar>
    <v-container>
        <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
            <img :src="logo" alt="Company Logo" width="120" height="100" id="logo">
        </div>
        <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
            About Us
        </h1>
        <br>
        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
            <b>Agroventures Plantations (Pvt) Ltd,</b> a pioneering company dedicated to the cultivation of vanilla and
            other export-oriented spices. Our vision is to generate USD 1 billion for Sri Lanka by 2030 through
            sustainable and large-scale vanilla cultivation. Our diverse range includes high-quality spices,
            vanilla, and various other crops that are meticulously grown to meet the stringent standards of
            international markets. Alongside our robust export operations, we are equally committed to serving the
            local market, catering to the refined tastes and preferences of Sri Lankan consumers.

            Our unwavering dedication to sustainability is at the core of our operations. We employ advanced,
            responsible farming practices that ensure minimal environmental impact while maximizing yield and
            quality. By integrating cutting-edge agricultural technologies with traditional farming knowledge, we
            maintain a delicate balance between innovation and heritage, ensuring the long-term health and
            productivity of our lands.

            As industry leaders, we pride ourselves on our ethical approach to agriculture. We believe in creating
            value not just for our customers but for the entire ecosystem involved in our operations. This includes
            fair labor practices, community engagement, and investment in local economies, all of which are integral
            to our business model.

            Agroventures Plantations offers unparalleled investment opportunities for those who are passionate about
            ethical and environmentally conscious agriculture. Our initiatives are designed to provide significant
            returns while promoting sustainability and ecological balance. Investors can be confident that their
            involvement is contributing to a greater good, fostering a future where agricultural practices are
            synonymous with responsibility and care for the environment.
        </p>
        <br>
        <p class="paragraph" data-aos="fade-up" data-aos-duration="3000">
            We are hoping to continue the timely tradition of our ancestors and strengthen the agro-investment industry
            in Sri
            Lanka. So join us in our innovative ventures that are sure to provide a great return to you and the
            environment.
        </p>
        <br>

        <h1 class="title-intro mt-5" data-aos="fade-up" data-aos-duration="3000">
            Branchers
        </h1>

        <div class="logo-container mt-3" data-aos="zoom-in-up" data-aos-duration="2000">
            <img width="400" height="375" frameborder="0" class="ma-auto" :src="branchers" cover>
        </div>


        <!-- Panorama viewer -->

    </v-container>

    <FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue'
import FooterPage from './FooterPage.vue'

//AOS Trasnsition
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'HelloWorld',
    components: {
        NavBar,
        FooterPage
    },
    mounted() {
        AOS.init(); // Initialize AOS when the component is mounted
    },
    data() {
        return {
            branchers: require("../assets/cards/our-network.png"),
            logo: require('@/assets/Logo_.png')
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
    /* Center horizontally */
    align-items: center;
    margin-top: 20px;
}
</style>