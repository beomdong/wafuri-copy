import { createWebHistory, createRouter } from 'vue-router'
import characterView from '@/views/characterView'
import equiptView from '@/views/equiptView'
import formationView from '@/views/formationView'
import statsView from '@/views/statsView'
import followView from '@/views/followView'
import multiView from '@/views/multiView'
import gachaView from '@/views/gachaView'
import voteView from '@/views/voteView'
import guestbookView from '@/views/guestbookView'
import botView from '@/views/botView'



const routes = [
    {
        path: '/',
        redirect: '/character',
    },
    {
        path: '/character',
        name: 'character',
        component: characterView
    },
    {
        path: '/equipt',
        name: 'equipt',
        component: equiptView
    },
    {
        path: '/formation',
        name: 'formation',
        component: formationView
    },
    {
        path: '/stats',
        name: 'stats',
        component: statsView
    },
    {
        path: '/follow',
        name: 'follow',
        component: followView
    },
    {
        path: '/multi',
        name: 'multi',
        component: multiView
    },
    {
        path: '/gacha',
        name: 'gacha',
        component: gachaView
    },
    {
        path: '/vote',
        name: 'vote',
        component: voteView
    },
    {
        path: '/guestbook',
        name: 'guestbook',
        component: guestbookView
    },
    {
        path: '/bot',
        name: 'bot',
        component: botView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router