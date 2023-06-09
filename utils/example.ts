import { IProfileBasic } from "./types";

export const exampleData: Array<IProfileBasic> = [
    {
        id: '0x1234567890123456789012345678901234567890',
        image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
        ens: 'example.eth',
        address: '0xF8Da9CCd8f3de76FC12EAc5E4B84869c7b618C9c',
        experience: {

            id: '0x1234567890123456789012345678901234567890',
            title: 'Senior Software Engineer',
            description: 'I am a senior software engineer with 10 years of experience.',
            years: '10',
            startDate: '2010-01-01'
        },
        fee: 0.1,
        detail: {
            personalInformation: {
                id: '0x1234567890123456789012345678901234567890',
                name: 'Yonathan Cruz',
                email: 'yonathancruz2015@gmail.com',
                phone: '+55 11 99999-9999',
                address: 'Rua dos Bobos, 0',
                dateOfBirth: '1990-01-01',
                nationality: 'Brazilian',
            },
            education: [{
                id: '0x1234567890123456789012345678901234567890',
                degree: 'Bachelor of Computer Science',
                university: 'University of São Paulo',
                gpa: '3.5',
                startDate: '2010-01-01',
                endDate: '2014-01-01',

            }],
            workExperience: [{
                id: '0x1234567890123456789012345678901234567890',
                title: 'Senior Software Engineer',
                company: 'Google',
                startDate: '2014-01-01',
                endDate: '2020-01-01',
                description: 'I am a senior software engineer with 10 years of experience.',
                responsabilities: [""]
            }],
            skills: [{
                id: '0x1234567890123456789012345678901234567890',
                name: 'JavaScript',
                level: 'Expert',
            }, {
                id: '0x1234567890123456789012345678901234567890',
                name: 'TypeScript',
                level: 'Expert',
            }, {
                id: '0x1234567890123456789012345678901234567890',
                name: 'React',
                level: 'Expert',
            }],
            projects: [{
                id: '0x1234567890123456789012345678901234567890',
                name: 'SIGMEPE',
                description: 'SIGMEPE is a project that aims to improve the management of the Brazilian public health system.'
            }]

        },
        isVerified: true
    }, {
        id: '0x1234567890123456789012345678901234567891',
        image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
        ens: 'example.eth',
        address: '0xF8Da9CCd8f3de76FC12EAc5E4B84869c7b618C9c',
        experience: {

            id: '0x1234567890123456789012345678901234567890',
            title: 'Senior Software Engineer',
            description: 'I am a senior software engineer with 10 years of experience.',
            years: '10',
            startDate: '2010-01-01'
        },
        fee: 0.1,
        detail: {
            personalInformation: {
                id: '0x1234567890123456789012345678901234567890',
                name: 'Yonathan Cruz',
                email: 'yonathancruz2015@gmail.com',
                phone: '+55 11 99999-9999',
                address: 'Rua dos Bobos, 0',
                dateOfBirth: '1990-01-01',
                nationality: 'Brazilian',
            },
            education: [{
                id: '0x1234567890123456789012345678901234567890',
                degree: 'Bachelor of Computer Science',
                university: 'University of São Paulo',
                gpa: '3.5',
                startDate: '2010-01-01',
                endDate: '2014-01-01',

            }],
            workExperience: [{
                id: '0x1234567890123456789012345678901234567890',
                title: 'Senior Software Engineer',
                company: 'Google',
                startDate: '2014-01-01',
                endDate: '2020-01-01',
                description: 'I am a senior software engineer with 10 years of experience.',
                responsabilities: [""]
            }],
            skills: [{
                id: '0x1234567890123456789012345678901234567890',
                name: 'JavaScript',
                level: 'Expert',
            }, {
                id: '0x1234567890123456789012345678901234567890',
                name: 'TypeScript',
                level: 'Expert',
            }, {
                id: '0x1234567890123456789012345678901234567890',
                name: 'React',
                level: 'Expert',
            }],
            projects: [{
                id: '0x1234567890123456789012345678901234567890',
                name: 'SIGMEPE',
                description: 'SIGMEPE is a project that aims to improve the management of the Brazilian public health system.'
            }]

        },
        isVerified: true
    }, {
        id: '0x1234567890123456789012345678901234567892',
        image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
        ens: 'example.eth',
        address: '0xF8Da9CCd8f3de76FC12EAc5E4B84869c7b618C9c',
        experience: {

            id: '0x1234567890123456789012345678901234567890',
            title: 'Senior Software Engineer',
            description: 'I am a senior software engineer with 10 years of experience.',
            years: '10',
            startDate: '2010-01-01'
        },
        fee: 0.1,
        detail: {
            personalInformation: {
                id: '0x1234567890123456789012345678901234567890',
                name: 'Yonathan Cruz',
                email: 'yonathancruz2015@gmail.com',
                phone: '+55 11 99999-9999',
                address: 'Rua dos Bobos, 0',
                dateOfBirth: '1990-01-01',
                nationality: 'Brazilian',
            },
            education: [{
                id: '0x1234567890123456789012345678901234567890',
                degree: 'Bachelor of Computer Science',
                university: 'University of São Paulo',
                gpa: '3.5',
                startDate: '2010-01-01',
                endDate: '2014-01-01',

            }],
            workExperience: [{
                id: '0x1234567890123456789012345678901234567890',
                title: 'Senior Software Engineer',
                company: 'Google',
                startDate: '2014-01-01',
                endDate: '2020-01-01',
                description: 'I am a senior software engineer with 10 years of experience.',
                responsabilities: [""]
            }],
            skills: [{
                id: '0x1234567890123456789012345678901234567890',
                name: 'JavaScript',
                level: 'Expert',
            }, {
                id: '0x1234567890123456789012345678901234567890',
                name: 'TypeScript',
                level: 'Expert',
            }, {
                id: '0x1234567890123456789012345678901234567890',
                name: 'React',
                level: 'Expert',
            }],
            projects: [{
                id: '0x1234567890123456789012345678901234567890',
                name: 'SIGMEPE',
                description: 'SIGMEPE is a project that aims to improve the management of the Brazilian public health system.'
            }]

        },
        isVerified: true
    }, {
        id: '0x1234567890123456789012345678901234567893',
        image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
        ens: 'example.eth',
        address: '0xF8Da9CCd8f3de76FC12EAc5E4B84869c7b618C9c',
        experience: {

            id: '0x1234567890123456789012345678901234567890',
            title: 'Senior Software Engineer',
            description: 'I am a senior software engineer with 10 years of experience.',
            years: '10',
            startDate: '2010-01-01'
        },
        fee: 0.1,
        detail: {
            personalInformation: {
                id: '0x1234567890123456789012345678901234567890',
                name: 'Yonathan Cruz',
                email: 'yonathancruz2015@gmail.com',
                phone: '+55 11 99999-9999',
                address: 'Rua dos Bobos, 0',
                dateOfBirth: '1990-01-01',
                nationality: 'Brazilian',
            },
            education: [{
                id: '0x1234567890123456789012345678901234567890',
                degree: 'Bachelor of Computer Science',
                university: 'University of São Paulo',
                gpa: '3.5',
                startDate: '2010-01-01',
                endDate: '2014-01-01',

            }],
            workExperience: [{
                id: '0x1234567890123456789012345678901234567890',
                title: 'Senior Software Engineer',
                company: 'Google',
                startDate: '2014-01-01',
                endDate: '2020-01-01',
                description: 'I am a senior software engineer with 10 years of experience.',
                responsabilities: [""]
            }],
            skills: [{
                id: '0x1234567890123456789012345678901234567890',
                name: 'JavaScript',
                level: 'Expert',
            }, {
                id: '0x1234567890123456789012345678901234567890',
                name: 'TypeScript',
                level: 'Expert',
            }, {
                id: '0x1234567890123456789012345678901234567890',
                name: 'React',
                level: 'Expert',
            }],
            projects: [{
                id: '0x1234567890123456789012345678901234567890',
                name: 'SIGMEPE',
                description: 'SIGMEPE is a project that aims to improve the management of the Brazilian public health system.'
            }]

        },
        isVerified: true
    }
];