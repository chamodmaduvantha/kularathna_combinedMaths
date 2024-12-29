<template>
    <div>
        <NavBar></NavBar>
        <v-container>
            <v-row align="center" justify="center" class="" style="flex-direction: column;">
                <v-col>
                    <h1 class="page-title center" data-aos="flip-left" data-aos-duration="2000" style="color: #272643;">
                        Papers
                    </h1>
                </v-col>

                <!-- Table for Lessons -->
                <v-col>
                    <v-data-table-server class="elevation-1 table-responsive">
                        <thead>
                            <tr>
                                <th class="table-header">No</th>
                                <th class="table-header">Lesson</th>
                                <th class="table-header">Paper</th>
                                <th class="table-header">Marking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(document, index) in documents" :key="index">
                                <td>{{ index + 1 }}</td> <!-- No column -->
                                <td>{{ document.name }}</td> <!-- Lesson column -->
                                <td>
                                    <v-btn color="green" :href="document.paperLink" target="_blank">
                                        <v-icon>mdi-download</v-icon> Download Paper
                                    </v-btn>
                                </td>
                                <td>
                                    <v-btn color="blue" :href="document.markingLink" target="_blank">
                                        <v-icon>mdi-download</v-icon> Download Marking
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-data-table-server>
                </v-col>
            </v-row>
        </v-container>
        <FooterPage></FooterPage>
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
import FooterPage from './FooterPage.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'PapersPage',
    components: {
        NavBar,
        FooterPage,
    },
    mounted() {
        AOS.init();
    },
    data() {
        return {
            documents: [
                {
                    name: '2022 AL - Test 01 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1EizU2w9whSPwPALD__VRPkga9pIWAg1V/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1o6XY_MylWko-eI7m8vea9JH2cpOznGkz/view?usp=drive_link', 
                },
                {
                    name: '2022 AL - Test 02 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1HD7KF_rRp5kUxbgrtS3N2aTdzFzeNoli/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Zk_iNUvJL24BUI8HNt0v6IDUHc4h0k9M/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 03 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1ZZTGRdUZ8nnglpK03LykEr-3IOcYXQH5/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1rbDQ08pt5GVgYePQR2hvy-GAyJ91KQdo/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 04 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 05 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 06 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 07 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 08 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 09 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 10 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 01 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 02 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 03 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 04 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 05 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 06 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 07 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 08 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 01 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 02 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 03 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 04 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 05 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 06 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 07 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 08 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 09 - Applied',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 10 - Applied',
                    paperLink: '',
                    markingLink: '',
                },

                // Pure ----------------------
                {
                    name: '2024 AL - Test 01 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 02 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 03 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 04 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 05 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 06 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 07 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 08 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 09 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2024 AL - Test 10 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 01 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 02 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 03 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 04 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 05 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 06 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 07 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2023 AL - Test 08 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 01 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 01 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 02 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 03 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 04 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 05 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 06 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 07 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                {
                    name: '2022 AL - Test 08 - Pure',
                    paperLink: '',
                    markingLink: '',
                },
                
            ],
        };
    },
};
</script>

<style>
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

.table-responsive {
    width: 100%;
    margin-top: 1rem;
    overflow-x: auto;
}

.table-header {
    text-align: left;
    padding: 12px;
    font-weight: bold;
}

.v-btn {
    padding: 8px 16px;
    font-size: 14px;
}
</style>