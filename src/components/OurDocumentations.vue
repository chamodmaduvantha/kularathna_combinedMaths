<template>
    <NavBar></NavBar>
    <v-container>
        <v-row align="center" justify="center" class="text-center" style="flex-direction: column;">
            <v-col>
                <h1 class="page-title center" data-aos="flip-left" data-aos-duration="2000" style="color: #272643;">
                    Tutes and Notes</h1>
            </v-col>
            <v-col>
                <v-row align="center" justify="center" class="flex-column">
                    <v-btn size="x-large" color="orange" v-for="document in documents" :key="document.link" class="my-2"
                        variant="text" @click="navigate(document.link)">
                        <v-icon>{{ document.icon }}</v-icon> <!-- Display the icon -->
                        {{ document.name }} <!-- Display the document name -->
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
    <FooterPage></FooterPage>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'SalPlant',
    components: {
        NavBar,
        FooterPage
    },
    mounted() {
        AOS.init();
    },
    data() {
        return {
            documents: [ // Corrected property name to 'documents'
                { name: '01.Equilibrium', link: 'https://online.fliphtml5.com/ugqql/rltg/', icon: 'mdi-file' },
                { name: '02.Work, strength, ability Theyore', link: 'https://online.fliphtml5.com/ugqql/xsdi/', icon: 'mdi-file' },
                { name: '03.Rectilinear Motion', link: 'https://online.fliphtml5.com/ugqql/ejvg/', icon: 'mdi-file' },
                { name: '04.Relative Motion', link: 'https://online.fliphtml5.com/ugqql/magk/', icon: 'mdi-file' },
                { name: '05.circular motion', link: 'https://online.fliphtml5.com/ugqql/zenc/', icon: 'mdi-file' },
                { name: '06.Simple Harmonic Motion', link: 'https://online.fliphtml5.com/rcpsu/afky/', icon: 'mdi-file' },
                { name: '07.Coplaner Force Systems', link: 'https://online.fliphtml5.com/rcpsu/bpfi/', icon: 'mdi-file' },
                { name: '08.Vectors', link: 'https://online.fliphtml5.com/rcpsu/xivc/', icon: 'mdi-file' },
                { name: '09.HEAVY RODS', link: 'https://online.fliphtml5.com/rcpsu/xulf/', icon: 'mdi-file' },
                { name: '10.Light Rods Frameworks', link: 'https://online.fliphtml5.com/rcpsu/kquw/', icon: 'mdi-file' },
            ]
        };
    },
    methods: {
        navigate(link) { // Added navigate method to handle button click
            window.open(link, '_blank');
        }
    }
}
</script>

<style>
.v-card {
    max-width: 100%;
    height: auto;
}

iframe {
    border: none;
}

.page-title {
    font-size: 3rem;
    font-weight: bold;
    color: rgb(2, 58, 16);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    text-align: center;
}
</style>
