import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import router from '@/router';
import '@/styles/main.scss';

import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';

import Footer from '@/components/layouts/Footer.vue';
import HeroImage from '@/components/HeroImage.vue';

import CurrencyIcon from '@/components/icons/CurrencyIcon.vue';
import WalletIcon from '@/components/icons/WalletIcon.vue';
import CardIcon from '@/components/icons/CardIcon.vue';
import CardEmployeeIcon from '@/components/icons/CardEmployeeIcon.vue';
import BadgeIcon from '@/components/icons/BadgeIcon.vue';
import ConversionIcon from '@/components/icons/ConversionIcon.vue';
import TransferIcon from '@/components/icons/TransferIcon.vue';
import PaymentIcon from '@/components/icons/PaymentIcon.vue';
import CodeIcon from '@/components/icons/CodeIcon.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue, { ripple: true });

app.component('Button', Button);
app.component('Card', Card);
app.component('Divider', Divider);

app.component('CurrencyIcon', CurrencyIcon);
app.component('WalletIcon', WalletIcon);
app.component('CardIcon', CardIcon);
app.component('CardEmployeeIcon', CardEmployeeIcon);
app.component('BadgeIcon', BadgeIcon);
app.component('ConversionIcon', ConversionIcon);
app.component('TransferIcon', TransferIcon);
app.component('PaymentIcon', PaymentIcon);
app.component('CodeIcon', CodeIcon);
app.component('LogoIcon', LogoIcon);

app.component('HeroImage', HeroImage);
app.component('Footer', Footer);

app.mount('#app');
