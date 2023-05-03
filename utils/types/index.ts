export interface ISkill { id: string; name: string; level: string; }
export interface IProject { id: string; name: string; description: string; }
export interface IExperience { id: string; title: string; description: string; years: string; startDate: string; }
export interface IEducation { id: string; degree: string; university: string; gpa: string; startDate: string; endDate: string; }
export interface IPersonalInformation { id: string; name: string; email: string; phone: string; address: string; dateOfBirth: string; nationality: string; }
export interface IProfileBasic { id: string; image: string; ens: string; address: string; experience: IExperience; isVerified: boolean; fee: number; detail: IDetail; }
export interface IWorkExperience { id: string; title: string; company: string; startDate: string; endDate: string; description: string; responsabilities: Array<string>; }
export interface IDetail { personalInformation: IPersonalInformation; education: Array<IEducation>; workExperience: Array<IWorkExperience>; skills: Array<ISkill>; projects: Array<IProject>; }
