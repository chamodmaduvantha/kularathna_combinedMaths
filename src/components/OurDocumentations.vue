<template>
    <div>
        <NavBar></NavBar>
        <v-container>
            <v-row align="center" justify="center" class="" style="flex-direction: column;">
                <v-col>
                    <h1 class="page-title center" data-aos="flip-left" data-aos-duration="2000" style="color: #272643;">
                        Tutes and Notes
                    </h1>
                </v-col>

                <!-- Table for Lessons -->
                <v-col>
                    <v-data-table-server class="elevation-1 table-responsive">
                        <thead>
                            <tr>
                                <th class="table-header">No</th>
                                <th class="table-header">Lesson</th>
                                <th class="table-header">Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(document, index) in documents" :key="document.link">
                                <td>{{ index + 1 }}</td> <!-- No column -->
                                <td>{{ document.name }}</td> <!-- Lesson column -->
                                <td>
                                    <v-btn color="green" @click="downloadPdf(document.link)">
                                        <v-icon>mdi-download</v-icon> Download
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-data-table-server>
                </v-col>

                <!-- Display selected PDF -->
                <v-col v-if="selectedPdf" style="width: 100%; height: 80vh;">
                    <object :data="selectedPdf" type="application/pdf" style="width: 100%; height: 100%;">
                        <p>PDF cannot be displayed. <a :href="selectedPdf" target="_blank">Click here to download.</a>
                        </p>
                    </object>
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
    name: 'TutesAndNotes',
    components: {
        NavBar,
        FooterPage,
    },
    mounted() {
        AOS.init();
    },
    data() {
        return {
            selectedPdf: null, // Holds the currently selected PDF link
            documents: [
                { name: '01.Equilibrium', link: 'https://drive.google.com/file/d/1_E_gA0XDpMmJXzA5a39ZIaXu36Ox6CAo/view?usp=drive_link', icon: 'mdi-file' },
                { name: '02.Work, strength, ability Theory', link: 'https://drive.google.com/uc?export=download&id=your-file-id-2', icon: 'mdi-file' },
                // Add more documents as needed
            ],
        };
    },
    methods: {
        downloadPdf(link) {
            // Create a hidden <a> tag to trigger the download
            const a = document.createElement('a');
            a.href = link;
            a.download = link.substring(link.lastIndexOf('/') + 1); // Use the file name from the link
            a.click(); // Trigger the download
        },
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

object {
    border: none;
}

.table-responsive {
    width: 100%;
    max-width: 100%;
    margin-top: 1rem;
    padding: 1rem;
    overflow-x: auto;
    /* Ensures the table scrolls horizontally on smaller screens */
}

.table-header {
    text-align: left;
    padding: 12px;
    font-weight: bold;
}

.v-simple-table th,
.v-simple-table td {
    padding: 15px 20px;
    text-align: center;
}

.v-btn {
    padding: 8px 16px;
    font-size: 14px;
}

@media (max-width: 600px) {
    .v-simple-table {
        font-size: 14px;
    }

    .table-header {
        font-size: 12px;
    }
}
</style>
