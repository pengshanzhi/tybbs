import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/Home'
import Supermacket from '@/Supermacket'
import Community from '@/Community'
// import Me from '@/Me'
import Message from '@/Message/message'
import payMain from '@/Pay/payMain'
import ActivityMain from '@/Activity/ActivityMain'
import LostMain from '@/Lost/LostMain'
import LoveMain from '@/LoveMain'
import Test from '@/Test'
import Test1 from '@/Test1'
import Detail from '@/Activity/Detail'
import LostDetail from '@/Lost/LostDetail'
import SendLost from '@/Lost/SendLost'
import Cost from '@/Pay/Cost'
import Me from '@/Login/Me'
import login from '@/Login/login'
import register from '@/Login/register'
import Star from '@/external/Star'
import express from '@/external/express'
import takeout from '@/external/takeout'
import bill from '@/Login/bill'


import pay_success from '@/Pay/pay_success'

import car from '@/Shop/car'
import pay from '@/Shop/pay'
import shop from '@/Shop/shop'
import ShopMain from '@/Shop/ShopMain'
import ShowMsg from '@/Message/ShowMsg'
import leave_message from '@/components/leave_message'
// import water from '@/Login/water'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Supermacket',
            name: 'Supermacket',
            component: Supermacket
        },
        {
            path: '/Community',
            name: 'Community',
            component: Community
        },
        {
            path: '/Me',
            name: 'Me',
            component: Me
        },
        {
            path: '/Message',
            name: 'Message',
            component: Message
        },
        {
            path: '/Home/payMain',
            name: 'payMain',
            component: payMain
        },
        {
            path: '/Home/ActivityMain',
            name: 'ActivityMain',
            component: ActivityMain
        }, ,
        {
            path: '/Home/LostMain',
            name: 'LostMain',
            component: LostMain
        },
        {
            path: '/Home/LoveMain',
            name: 'LoveMain',
            component: LoveMain
        },
        {
            path: '/Home/Test',
            name: 'Test',
            component: Test
        },
        {
            path: '/Home/Test1',
            name: 'Test1',
            component: Test1
        },
        {
            path: '/Home/ActivityMain/Detail',
            name: 'Detail',
            component: Detail
        },
        {
            path: '/Home/LostMain/LostDetail',
            name: 'LostDetail',
            component: LostDetail
        },
        {
            path: '/Home/LostMain/SendLost',
            name: 'SendLost',
            component: SendLost
        },
        {
            path: '/Home/payMain/Cost',
            name: 'Cost',
            component: Cost
        },
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/Home/Star',
            name: 'Star',
            component: Star
        },
        {
            path: '/Home/payMain/Cost/pay_success',
            name: 'pay_success',
            component: pay_success
        },
        {
            path: '/car',
            name: 'car',
            component: car
        },
        {
            path: '/pay',
            name: 'pay',
            component: pay
        },
        {
            path: '/shop',
            name: 'shop',
            component: shop
        },
        {
            path: '/ShopMain',
            name: 'ShopMain',
            component: ShopMain
        },
        {
            path: '/message/ShowMsg',
            name: 'ShowMsg',
            component: ShowMsg
        },
        {
            path: '/Home/express',
            name: 'express',
            component: express
        },

        {
            path: '/Home/takeout',
            name: 'takeout',
            component: takeout
        },

        {
            path: '/Home/ActivityMain/Detail/leave_message',
            name: 'leave_message',
            component: leave_message
        },
        {
            path: '/Home/Me/bill',
            name: 'bill',
            component: bill
        },
        // {
        //     path: '/Home/Me/water',
        //     name: 'water',
        //     component: water
        // },
    ]
})