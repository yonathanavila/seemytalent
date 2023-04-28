// export interface IExperience { id: string; title: string; description: string; years: string; startDate: string; }
// export interface IProfileBasic { id: string; image: string; ens: string; address: string; experience: IExperience; isVerified: boolean; }

import { IProfileBasic } from "@/src/app/components/MainComponents/MyProfile/ProfileCard";

export const exampleData: Array<IProfileBasic> = [{
    id: '0x1234567890123456789012345678901234567890',
    image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
    ens: 'example.eth',
    address: '0x1234567890123456789012345678901234567812',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}, {
    id: '0x1234567890123456789012345678901234567832',
    image: 'https://metadata.ens.domains/mainnet/avatar/yonathancruz.eth',
    ens: 'yonathancruz.eth',
    address: '0x1234567890123456789012345678901234567890',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}, {
    id: '0x1234567890123456789012343278901234567890',
    image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
    ens: 'example.eth',
    address: '0x1234567890123456789012345678901234567890',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}, {
    id: '0x1234567893233456789012345678901234567890',
    image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
    ens: 'example.eth',
    address: '0x1234567890123456789012345678901234567890',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}, {
    id: '0x1234564390123456789012345678901234567890',
    image: 'https://metadata.ens.domains/mainnet/avatar/yonathancruz.eth',
    ens: 'example.eth',
    address: '0x1234567890123456789012345678901234567890',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}, {
    id: '0x1544567890123456789012345678901234567890',
    image: 'https://metadata.ens.domains/mainnet/avatar/yonathancruz.eth',
    ens: 'example.eth',
    address: '0x1234567890123456789012345678901234567890',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}, {
    id: '0x1654567890123456789012345678901234567890',
    image: 'data:image/svg+xml;base64,CiAgPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTAgMTEwIj4KICAgIDxkZWZzPgogICAgICA8bGluZWFyR3JhZGllbnQgaWQ9Imd6ciIgeDE9IjEwNi45NzUiIHkxPSIxMzYuMTU2IiB4Mj0iLTEyLjk4MTUiIHkyPSIxMy41MzQ3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgxMzEuNjM4IDEyOS44MzUpIHJvdGF0ZSgtMTQxLjE5NCkgc2NhbGUoMTg1LjU4MikiPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC4xNTYyIiBzdG9wLWNvbG9yPSJoc2woMjUsIDc2JSwgOTclKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjAuMzk1OCIgc3RvcC1jb2xvcj0iaHNsKDI2LCA4MCUsIDc3JSkiIC8+CiAgICAgICAgPHN0b3Agb2Zmc2V0PSIwLjcyOTIiIHN0b3AtY29sb3I9ImhzbCgzMiwgODQlLCA1NiUpIiAvPgogICAgICAgIDxzdG9wIG9mZnNldD0iMC45MDYzIiBzdG9wLWNvbG9yPSJoc2woMzQsIDg2JSwgNDglKSIgLz4KICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgzNSwgODYlLCA0OCUpIiAvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHBhdGgKICAgICAgZD0iTTExMCA1NUMxMTAgMjQuNjI0NCA4NS4zNzU2IDAgNTUgMEMyNC42MjQ0IDAgMCAyNC42MjQ0IDAgNTVDMCA4NS4zNzU2IDI0LjYyNDQgMTEwIDU1IDExMEM4NS4zNzU2IDExMCAxMTAgODUuMzc1NiAxMTAgNTVaIgogICAgICBmaWxsPSJ1cmwoI2d6cikiIC8+CiAgPC9zdmc+CiAgICA=',
    ens: 'example.eth',
    address: '0x1234567890123456789012345678901234567890',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}, {
    id: '0x1234567897523456789012345678901234567890',
    image: 'https://metadata.ens.domains/mainnet/avatar/yonathancruz.eth',
    ens: 'example.eth',
    address: '0x1234567890123456789012345678901234567890',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}, {
    id: '0x12345678901232156789012345678901234567890',
    image: 'https://metadata.ens.domains/mainnet/avatar/yonathancruz.eth',
    ens: 'example.eth',
    address: '0x1234567890123456789012345678901234567890',
    experience: {

        id: '0x1234567890123456789012345678901234567890',
        title: 'Senior Software Engineer',
        description: 'I am a senior software engineer with 10 years of experience.',
        years: '10',
        startDate: '2010-01-01'
    },
    isVerified: true
}];