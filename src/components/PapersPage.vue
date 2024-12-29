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
                                        <v-icon>mdi-download</v-icon>
                                    </v-btn>
                                </td>
                                <td>
                                    <v-btn color="blue" :href="document.markingLink" target="_blank">
                                        <v-icon>mdi-download</v-icon>
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
                    paperLink: 'https://drive.google.com/file/d/1b4e-XfgbBCNesv5pXOWunuihpkN-Fq40/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Y6AMOp4RmQwrO7k-fb7RQd231ZenS28q/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 05 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1jNtXHn7z7U0WLYrzYM9b9QcZ5tykjOJI/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1PgHA1v4XWDZ7JkRwADrUJFs5wKsBR6uc/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 06 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1Ih6KETlBK3Ee7A0YjMhc6bTZ25ZCNdtW/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1dyfQWYqPxB-hJuHw7vVsr_MEqBPD3uVG/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 07 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1Ukg3ZoW-jgmg0hTY2RNyOxrtxPZBv325/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/19bj0BfGmAE1zMsblAxBqbo1MKSHuvw4U/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 08 - Applied',
                    paperLink: 'https://drive.google.com/file/d/18s7aB4XigAonOIQR5RCS17SjhrVpGwG3/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1-ypc2rLWR_LpXPcEXWQChBQAbckM8JKV/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 09 - Applied',
                    paperLink: 'https://drive.google.com/file/d/17NgfHKUV0Gs_qpAb3zMkgGx3sqUJYCcy/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1uiNin1hJ40Z_1dPX6eStpZwvck9ddwsR/view?usp=drive_link',
                },
                {
                    name: '2022 AL - Test 10 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1S-mqxiAZJtv4Mg8MUKgouJSpNT2EadOf/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Lu-qk6wCm6F85OmIFlx5T6KPzeUxZn06/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 01 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1wfKrKLzp9Bl2KDsQNWhxoMKPbLjYULRd/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Yv-17f3G0espdNq2nAwW_nQ7hFjokVB_/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 02 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1vhezaULDyrIR7LDC2rBG3ElkpntYzitb/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1Q5uIcKagr2qLCyT3d840x1913Q8JiWiu/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 03 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1z_IWud7HkCWvJp9guHeNMIK7k1SbCzn4/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1AP3YA_QNgI1YNPQbXJWeWEmwto-xB4Zf/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 04 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1yiGCWom5Yl_dhPpKjq4htN2WH61k_TU1/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1cl_bB33fTImKvqWaikaWtBnafVczmDyR/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 05 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1eI1WWokFA6atbkSHfsDkjOoev1DFSpAD/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1cXTlCQFyQhPW5jdgKjA1J1SfZzg25sj_/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 06 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1wdsa2nM2oozVAnWVxG4SOJ__Abs8arfO/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1wDU-FtD3nM6YjDycgEic3r-Ysjy1tfVo/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 07 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1gsqpX_C6juGP4tqk8x39kk3ocmozxB3O/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1oFAx-TMHrQjfFj2YFIojCizD1lIO9Fj-/view?usp=drive_link',
                },
                {
                    name: '2023 AL - Test 08 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1Jn1W2_Z_q7ZLkDgDzdHvyWGIMsJyX71O/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/19fFn1_t-CsnhJ6duYs4ZS2yMC-BYdz1I/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 01 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1h9uNMj00xgMO8I_7kEzYZUsbNBIqgsKH/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1RI5zxSCS4x2hV9Xjv1l_7zSMeo3pjAvj/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 02 - Applied',
                    paperLink: 'https://drive.google.com/file/d/14xvS3KgPsP7B9KqoRX2jMvxMV0jVeWZv/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1NKG9Uneswoo-Ac1bcEaRTBIlr4jFhh8M/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 03 - Applied',
                    paperLink: 'https://drive.google.com/file/d/11KD24Cehr4cM8zJDlWBl00bM8q1Lfi0B/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/18MxSL4zOv1FRHrQPE8gdSLaAihh-fz9j/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 04 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1FeiI0pr2CrN62VZ4JFfmIZ9zN4PZUpJf/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1akP-w1bTfmxy6da_8HjXswTrrdL6t_SX/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 05 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1qEWSug8mWReFkYPGJf-sJrhaC3rmeJ48/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1s5FTggwseS9U4pY5K_O4EqImukUwC3Ru/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 06 - Applied',
                    paperLink: 'https://drive.google.com/file/d/17NIFZIUKN36HqtZJUY6OSesq17GM_vBH/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1ip5RM1qdhTzM7gkK9JYExoe6bVD1PnTg/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 07 - Applied',
                    paperLink: 'https://drive.google.com/file/d/16SE3IsQ7Ya3-Gh6ondyAXNqG-5UzQrWg/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1_Fa5QtYzkrDJcFgU71kgZ4d1vbF9aCf5/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 08 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1n47piSmHft_28czQA7ubDsC8cmrQkG-8/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1MS7Fs00U4apuZNwdJJUELC4jzBFTu-p6/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 09 - Applied',
                    paperLink: 'https://drive.google.com/file/d/1kVC4IdzUFL9p1IU4P0V-aA8OzP2urL2L/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/17NvQScH13SteIIVsRJSrDUFo49To9tio/view?usp=drive_link',
                },
                {
                    name: '2024 AL - Test 10 - Applied',
                    paperLink: 'https://drive.google.com/file/d/19FkVC7TO-iielmljViqzcXOAzlVFOa96/view?usp=drive_link',
                    markingLink: 'https://drive.google.com/file/d/1xqpz3VDayCKFs-LTweLSJpfmsDcksi_E/view?usp=drive_link',
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