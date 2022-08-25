import { IItem } from "src/shared/components/sidenav/item.interface";

export const sidenavList: IItem[] = [
    {
        name: 'Reports',
        desc: 'Reports',
        icon: 'reports',
        path: '/reports'
    },
    {
        name: 'Posts',
        desc: 'Posts',
        icon: 'insert_drive_file',
        path: '/posts'
    }
];