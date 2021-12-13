import { createApp } from 'vue'
import App from './App.vue';
import headerContainer from './components/header.vue';
import heroContainer from './components/hero.vue';
import projectsContainer from './components/projects.vue';
import aboutContainer from './components/about.vue';
import contactContainer from './components/contact.vue';
import footerContainer from './components/footer.vue';


const app = createApp(App);
app.component('header-container', headerContainer);
app.component('hero-container', heroContainer);
app.component('projects-container', projectsContainer);
app.component('about-container', aboutContainer);
app.component('contact-container', contactContainer);
app.component('footer-container', footerContainer);

app.mount('#app');