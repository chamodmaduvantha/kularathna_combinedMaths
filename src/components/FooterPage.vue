<template>
    <v-footer class="text-center d-flex flex-column mt-5" color="#272643">
        <div class="footer">
            <div class="mt-2">
                <strong>Shaping the Future of Education</strong>
            </div>
            <div>
                <v-btn v-for="icon in icons" :key="icon.name" class="mx-4" variant="text" @click="navigate(icon.link)">
                    <v-icon>{{ icon.name }}</v-icon> <!-- Display the icon -->
                </v-btn>
            </div>
            <img width="100" height="100" class="ma-auto" :src="logo" @click="navigate(icons[0].link)" />
            <div class="pt-0">
                At Kularathna Education, we are committed to empowering students with the tools they need to succeed academically and beyond.
                <br>Copyright © 2024 Kularathna Education. All rights reserved.
            </div>
        </div>
    </v-footer>
</template>

<script>
export default {
    data() {
        return {
            logo: require('@/assets/logo_ke.png'),
            icons: [
                { name: 'mdi-instagram', link: 'https://www.instagram.com/kularathnajanith?utm_source=qr&igsh=djRiOWRycmdwNzV0 ' },
                { name: 'mdi-facebook', link: 'https://www.facebook.com/KularathnaJanith?mibextid=ZbWKwL' },
                { name: 'mdi-mail ru', link: 'https://www.threads.net/@kularathnajanith' }, // Update to a valid link
                { name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/janith-kularathna-508921228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }, // Update to a valid link
            ]
        };
    },
    methods: {
        navigate(link) {
            window.open(link, '_blank'); // Open the link in a new tab
        }
    }
}
</script>

<style>
.footer {
  justify-content: center;
}
</style>