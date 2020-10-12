import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from '../application/Home'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Consume from '../components/User/Consume'
import Item from '../components/User/Item'
import Person from '../application/Person'

export default [
    {
        path: "/",
        component: Home,
        routes: [
            // {
            //     path: "/",
            //     exact: true,
            //     render: () => (
            //         <Redirect to={"/signin"} />
            //     )
            // },
            {
                path: "/signin",
                component: Signin
            },
            {
                path: "/signup",
                component: Signup
            },
            {
                path: '/person',
                component: Person,
                routes: [
                    {
                        path: "/person",
                        exact: true,
                        render: () => (
                            <Redirect to={"/person/consume"} />
                        )
                    },
                    {
                        path: '/person/consume',
                        component: Consume,
                        routes: [
                            {
                                path: '/person/consume/:id',
                                component: Item
                            }
                        ]
                    },
                ]
            }
        ]
    },
]