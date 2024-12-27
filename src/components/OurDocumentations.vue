<template>
    <NavBar></NavBar>
    <v-container>
        <div>
            <h1 class="page-title center" data-aos="flip-left" data-aos-duration="2000">Our Documentations</h1>
        </div>
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <div>
                    <v-btn size="x-large" color="orange" v-for="document in documents" :key="document.link" class="mx-4" variant="text" @click="navigate(document.link)">
                        <v-icon>{{ document.icon }}</v-icon> <!-- Display the icon -->
                        {{ document.name }} <!-- Display the document name -->
                    </v-btn>
                </div>
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
                { name: 'CEO Magazine', link: 'https://online.fliphtml5.com/mltis/fcvl/#p=1', icon: 'mdi-file' },
                { name: 'E-Profile', link: 'https://online.fliphtml5.com/ugqql/vuqg/', icon: 'mdi-file' },
                { name: 'Sample Document', link: 'https://online.fliphtml5.com/ugqql/ckxa/', icon: 'mdi-file' }
                /*https://online.fliphtml5.com/ugqql/zvfp/*/
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
