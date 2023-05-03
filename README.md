# About SeeMyTalent:
SeeMyTalent is a blockchain-based recruitment platform that aims to solve the challenge of connecting recruiters with blockchain experts efficiently and securely. It addresses the problem of time-consuming and cumbersome hiring processes by providing a streamlined platform for recruiters to access and review blockchain experts' resumes.

SeeMyTalent offers a unique approach to recruitment by creating a resume validation network. This network allows professionals to verify their experience and connect with recruiters who are genuinely interested in hiring them. By incorporating fully on-chain video conferences, SeeMyTalent enables direct and secure communication between recruiters and experts.

One of the key features of SeeMyTalent is its focus on protecting applicants with more expertise. Experts in web3 and other fields only receive requests from recruiters who are genuinely interested in hiring them. This ensures that applicants are not inundated with irrelevant job offers and allows them to focus on opportunities that align with their skills and career goals.

The platform enables web3 experts, for example..  such as smart contract auditors, to showcase their journey and expertise through a timeline that includes contact information and details of audited projects. This comprehensive view of their skills and experience enhances their chances of being noticed by recruiters seeking their specific expertise.

## Our solution includes the following key features:

 - Payment System: Recruiters need to pay a fee to view the resumes of blockchain experts. This ensures that only serious and interested recruiters gain access to the experts' profiles.

 - Profile Selection: Recruiters can select multiple profiles they wish to pay for reviewing, allowing them to tailor their search and target specific experts.

 - Resume Export: Recruiters can easily download and save the resumes of the selected blockchain experts, facilitating offline access and sharing with other team members.

 - Meeting Organization: Once a recruiter pays for viewing a blockchain expert's resume, the expert receives an invitation to organize a meeting. This feature simplifies the scheduling process and fosters direct communication between recruiters and experts.

The platform was built using a combination of tools and technologies. The frontend UI was designed to be intuitive and user-friendly, providing a seamless experience for recruiters and blockchain experts. The backend infrastructure was set up to handle user registrations, login, and profile management securely. A robust database was implemented to store user information, resumes, and payment data.

The payment system integration was a significant challenge during the development process. Ensuring the security and reliability of financial transactions required careful implementation and integration with a trusted payment gateway. Additionally, designing and implementing the communication features, such as messaging and meeting scheduling, required thoughtful consideration of user experience and system architecture.

## Technologies and tools used in the project include:

 - Next.js: Used for frontend development, creating responsive and visually appealing user interfaces.
 - Tailwind CSS: Used for styling the frontend UI, providing a consistent and modern look and feel.
 - Supabase: Utilized for backend development, handling user authentication, profile management, and database operations.
 - Huddle01: Handle conference user friendly between recruiters and experts.
 - FVM: Used for payment system integration onchain, allowing applicants receive payments directly for showing these resume.
 - Ethers.js: Integrated for interacting with the blockchain.


Overall, the recruitment platform offers an efficient and effective solution for recruiters to connect with blockchain experts. By streamlining the hiring process and providing essential features, we aim to simplify the recruitment journey and foster meaningful connections between recruiters and experts.

## 🎉🎉First Huddle01 meeting
[![IMAGE ALT TEXT HERE](/docs/Picture2.png)](/docs/Picture2.png)

## Sign in button
First you need to have a desktop wallet like Metamask or Coinbase wallet to enter to the most userfriendly web3 platform for recruitment process then click on the `Sign in button` to interact with the web3 space
[![IMAGE ALT TEXT HERE](/docs/signin.png)](/docs/signin.png)
If you don't have the Filecoin network configured, don't worries about that, the extension do the work for you only you need to confirm adding the network and switch to it


## Enter to the app
Then you need to click `Go to App` button to enter to the talents list
[![IMAGE ALT TEXT HERE](/docs/landing.png)](/docs/landing.png)

## Talents list
You can see the talents list and information of each one, years of experience skills and start date of their journey (This is some mock data, we are working in the real data)
[![IMAGE ALT TEXT HERE](/docs/talents.png)](/docs/talents.png)

## Choose your talents
You can select the talents and pay the applicants to see their resume
[![IMAGE ALT TEXT HERE](/docs/pay_button.png)](/docs/pay_button.png)

## Pay the applicants
Metamask window will appear to confirm the Onchain payment
[![IMAGE ALT TEXT HERE](/docs/metamask_tx.png)](/docs/metamask_tx.png)
The system is in charge of sending the payments to the applicants, they will receive a notification when this happens, which will allow them to generate a Huddle01 conference to continue with the process.

## Collection of talents
You can see the talents you have selected already, in the `Collection` button.
[![IMAGE ALT TEXT HERE](/docs/talent_collection.png)](/docs/talent_collection.png)

## Your talent discovery
and you can see your entire journey, personal and contact information, also we provide you a handler to export easily the resume to share with your teammates
[![IMAGE ALT TEXT HERE](/docs/discovery_talents.png)](/docs/discovery_talents.png)

[![IMAGE ALT TEXT HERE](/docs/detail_talent.png)](/docs/detail_talent.png)

## Huddle01 conference
First when the talent appear in the discovery view you can coordinate a meeting with them through the platform, click on `Meeting`

[![IMAGE ALT TEXT HERE](/docs/buttom_meeting.png)](/docs/buttom_meeting.png)

a new modal appear you can click on enter to the room to start the meeting

[![IMAGE ALT TEXT HERE](/docs/modal_meeting.png)](/docs/modal_meeting.png)

## Simple and easy to use
Now we let'ts start with the interview, both participants can share their screens, talk through the platform, we are using Huddle01 for this

[![IMAGE ALT TEXT HERE](/docs/meeting_main.png)](/docs/meeting_main.png)

When each other already connected you can see the screen of the other participant and start the interview

[![IMAGE ALT TEXT HERE](/docs/Meeting.png)](/docs/Meeting.png)

## Demo

You can see the website online in [https://seemytalent.xyz](https://seemytalent.xyz)
Also we provide a [demo](https://seemytalent.xyz) link how they works


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You need to add the enviaronment variables to run the project, you can see the example in the file .env.example
## See our journey

To read more about SeeMyTalent, take a look at the following documentation:

- [SeeMyTalent Documentation](https://docs.seemytalent.xyz/) - learn about SeeMyTalent features and Website.

## License

[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

