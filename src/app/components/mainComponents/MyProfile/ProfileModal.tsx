import { data } from 'autoprefixer';
import React from 'react';
import CopyToClipboardButton from '../../CopyToClipboardButton';
import ProfileChackbox from './ProfileCheckbox';
import ProfileInput from './ProfileInput';
import ProfileSubtitles from './ProfileSubtitles';
import ProfileTextArea from './ProfileTextArea';

const ProfileModal: React.FC<{
    detail: any;
    ens: any;
    className?: string;
    disabled?: boolean;
}> = ({ detail, ens, className, disabled }) => {
    return (
        <>
            <div className="h-100 overflow-auto">
                <ProfileSubtitles>
                    Personal Information
                </ProfileSubtitles>
                <div className="flex flex-wrap justify-center">
                    <ProfileInput title="Full Name">
                        {ens || "Custom text"}
                    </ProfileInput>
                    <CopyToClipboardButton title="Email">
                        {detail?.personalInformation?.email || "Custom text"}
                    </CopyToClipboardButton>
                    <CopyToClipboardButton title="Phone Number">
                        {detail?.personalInformation?.phone || "Custom text"}
                    </CopyToClipboardButton>
                </div>
                <div className="flex flex-wrap justify-center">
                    <ProfileInput title="Address">
                        {detail?.personalInformation?.address || "Custom text"}
                    </ProfileInput>
                    <ProfileInput title="Date of Birth">
                        {detail?.personalInformation?.dateOfBird || "Custom text"}
                    </ProfileInput>
                    <ProfileInput title="Nationality">
                        {detail?.personalInformation?.nationality || "Custom text"}
                    </ProfileInput>
                </div>
                <ProfileSubtitles>
                    Education
                </ProfileSubtitles>

                {detail?.education?.map((item: any, index: number) => (
                    <div className="flex flex-wrap justify-center" key={index} >
                        <ProfileInput title="Degree/Qualification">
                            {item?.degree || "Custom text"}
                        </ProfileInput>
                        <ProfileInput title="University/Institution">
                            {item?.university || "Custom text"}
                        </ProfileInput>
                        <ProfileInput title="GPA/Percentage">
                            {item?.gpa || "Custom text"}
                        </ProfileInput>
                    </div>
                ))}

                <ProfileSubtitles>
                    Work Experience
                </ProfileSubtitles>
                <div className="max-w-lg mx-auto p-8">
                    <details className="open:bg-[#F5F6FC] dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg hover:cursor-pointer">
                        <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                            What do I like to do?
                        </summary>
                        <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {detail?.workExperience?.map((item: any, index: number) => (
                                <div className="flex flex-wrap justify-center" key={index} >
                                    <ProfileInput title="Job Title">
                                        {item?.jobTitle || "Custom text"}
                                    </ProfileInput>
                                    <ProfileInput title="Company">
                                        {item?.company || "Custom text"}
                                    </ProfileInput>
                                    <ProfileInput title="Employment Duration">
                                        {item?.startDate} - {item?.endDate}
                                    </ProfileInput>
                                    <div className="max-w-lg mx-auto p-8">
                                        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
                                            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                                                What did I do in this job?
                                            </summary>
                                            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                                <p> {item?.description} </p>
                                            </div>
                                        </details>
                                    </div>
                                    <div className="max-w-lg mx-auto p-8">
                                        <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg">
                                            <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                                                My responsibilities...
                                            </summary>
                                            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                                <p>{item?.responsibilities}</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </details>
                </div>


                <ProfileSubtitles>
                    Skills
                </ProfileSubtitles>
                <div className="flex flex-wrap justify-center" >
                    {detail?.skills?.map((item: any, index: number) => (
                        <ProfileChackbox
                            key={index}
                            option={item}
                            checked={true}
                        />

                    ))}
                </div>
                <ProfileSubtitles>
                    Projects
                </ProfileSubtitles>
                <div className="flex flex-wrap justify-center">
                    <ProfileInput
                        title="Proyect Title"
                        svg={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className="ml-2 block mt-1 w-3 h-3 text-gray-500" ><path fillRule="evenodd" clipRule="evenodd" d="M0 8.15217C0 5.52282 2.11999 3.3913 4.73514 3.3913H10.7676C11.6632 3.3913 12.3892 4.12127 12.3892 5.02174C12.3892 5.9222 11.6632 6.65217 10.7676 6.65217H4.73514C3.91119 6.65217 3.24324 7.32375 3.24324 8.15217V19.2391C3.24324 20.0676 3.91119 20.7391 4.73514 20.7391H15.7622C16.5861 20.7391 17.2541 20.0676 17.2541 19.2391V13.5652C17.2541 12.6648 17.9801 11.9348 18.8757 11.9348C19.7713 11.9348 20.4973 12.6648 20.4973 13.5652V19.2391C20.4973 21.8685 18.3773 24 15.7622 24H4.73514C2.11999 24 0 21.8685 0 19.2391V8.15217Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2324 1.63043C13.2324 0.729971 13.9585 0 14.8541 0H22.3784C23.274 0 24 0.729971 24 1.63043V8.93478C24 9.83525 23.274 10.5652 22.3784 10.5652C21.4828 10.5652 20.7568 9.83525 20.7568 8.93478V5.56665L11.8494 14.5225C11.2161 15.1592 10.1893 15.1592 9.55604 14.5225C8.92276 13.8857 8.92276 12.8534 9.55604 12.2167L18.4634 3.26087H14.8541C13.9585 3.26087 13.2324 2.5309 13.2324 1.63043Z" fill="currentColor"></path></svg>}
                    >
                        Onchain Events
                    </ProfileInput>
                    <ProfileInput
                        title="Proyect Title"
                        svg={<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className="ml-2 block mt-1 w-3 h-3 text-gray-500" ><path fillRule="evenodd" clipRule="evenodd" d="M0 8.15217C0 5.52282 2.11999 3.3913 4.73514 3.3913H10.7676C11.6632 3.3913 12.3892 4.12127 12.3892 5.02174C12.3892 5.9222 11.6632 6.65217 10.7676 6.65217H4.73514C3.91119 6.65217 3.24324 7.32375 3.24324 8.15217V19.2391C3.24324 20.0676 3.91119 20.7391 4.73514 20.7391H15.7622C16.5861 20.7391 17.2541 20.0676 17.2541 19.2391V13.5652C17.2541 12.6648 17.9801 11.9348 18.8757 11.9348C19.7713 11.9348 20.4973 12.6648 20.4973 13.5652V19.2391C20.4973 21.8685 18.3773 24 15.7622 24H4.73514C2.11999 24 0 21.8685 0 19.2391V8.15217Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.2324 1.63043C13.2324 0.729971 13.9585 0 14.8541 0H22.3784C23.274 0 24 0.729971 24 1.63043V8.93478C24 9.83525 23.274 10.5652 22.3784 10.5652C21.4828 10.5652 20.7568 9.83525 20.7568 8.93478V5.56665L11.8494 14.5225C11.2161 15.1592 10.1893 15.1592 9.55604 14.5225C8.92276 13.8857 8.92276 12.8534 9.55604 12.2167L18.4634 3.26087H14.8541C13.9585 3.26087 13.2324 2.5309 13.2324 1.63043Z" fill="currentColor"></path></svg>}
                    >
                        SIGMEPE
                    </ProfileInput>
                </div>
            </div >
        </ >
    );
};

export default ProfileModal;