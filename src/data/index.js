
import arcade from '../assets/icons/icon-arcade.svg'
import pro from '../assets/icons/icon-pro.svg'
import advance from '../assets/icons/icon-advanced.svg'

export const steps = [
    {
        id: 1,
        step: "STEP 1",
        data: "YOUR INFO"
    },
    {
        id: 2,
        step: "STEP 2",
        data: "SELECT PLAN"
    },
    {
        id: 3,
        step: "STEP 3",
        data: "ADD-ONS"
    },
    {
        id: 4,
        step: "STEP 4",
        data: "SUMMARY"
    },
]

export const monthlyData = [
    {
        name: "Arcade",
        price: "$9/mo",
        img: arcade,
    },
    {
        name: "Advance",
        price: "$12/mo",
        img: advance,
    },
    {
        name: "Pro",
        price: "$15/mo",
        img: pro,
    },
]

export const yearlyData = [
    {
        name: "Arcade",
        price: "$90/yr",
        img: arcade,
    },
    {
        name: "Advance",
        price: "$120/yr",
        img: advance,
    },
    {
        name: "Pro",
        price: "$150/yr",
        img: pro,
    },
]

export const addOns = [
    {
        type: 'Online service',
        info: 'Access to multiplayer games',
        price: '+$1/mo',
    },
    {
        type: 'Larger storage',
        info: 'Extra 1TB of cloud save',
        price: '+$2/mo',
    },
    {
        type: 'Customizable profile',
        info: 'Custom theme on your profile',
        price: '+$2/mo',
    },
]

export const yearlyAddOns = [
    {
        type: 'Online service',
        info: 'Access to multiplayer games',
        price: '+$10/yr',
    },
    {
        type: 'Larger storage',
        info: 'Extra 1TB of cloud save',
        price: '+$20/yr',
    },
    {
        type: 'Customizable profile',
        info: 'Custom theme on your profile',
        price: '+$20/yr',
    },
]