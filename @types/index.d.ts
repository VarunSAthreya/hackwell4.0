import { IconType } from 'react-icons/lib';

interface ISocialMedia {
    icon: IconType;
    url: string;
    label: string;
}

interface IMember {
    name: string;
    email: string;
    phone: string;
    year: number;
    address: string;
    language: string;
    project: string;
    hackathonprev: string;
}

interface ITeam {
    teamName: string;
    college: string;
    teamSize: number;
    paymentId: string;
    sendRegisterMail: boolean;
    createdAt: string;
    paidAmount: number;
    member1: IMember;
    member2?: IMember;
    member3?: IMember;
    member4?: IMember;
}
