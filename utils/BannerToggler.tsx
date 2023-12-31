// "use client";

// import React from "react";
// import { useReducer } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Banner from "@/components/Banner";
// import Bio from "@/components/Bio";
// import Work from "@/components/Work";
// import Contact from "@/components/Contact";
// // import AllProjects from "@/components/AllProjects";

// const initialState = {
//     showStates: [false, false, false, false],
// };

// interface bannersStatus {
//     showStates: boolean[];
// }

// interface actionObject {
//     type: string;
//     index: number;
// }

// const reducer = (state: bannersStatus, action: actionObject) => {
//     const { index } = action;
//     let updatedShowStates = null;
//     if (index === 3) {
//         updatedShowStates = [false, false, false, false];
//     } else {
//         const showStates = [...state.showStates];
//         updatedShowStates = showStates.map((_, idx) => {
//             return idx === index ? !showStates[index] : false;
//         });
//     }
//     return {
//         showStates: updatedShowStates,
//     };
// };

// const BannerToggler = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const handleToggle = (index: number) => {
//         dispatch({ type: "TOGGLE", index });
//     };

//     return (
//         <>
//             <Navbar handleToggleBanner={(index) => handleToggle(index)} />
//             <div className="mobileSpacer">
//                 <Banner
//                     bannerName="BIO"
//                     bannerSlug="cactus-banner"
//                     bannerSelected={state.showStates[0]}
//                     handleToggleBanner={() => handleToggle(0)}
//                     content={<Bio />}
//                 />
//                 <Banner
//                     bannerName="WORK"
//                     bannerSlug="straw-banner"
//                     bannerSelected={state.showStates[1]}
//                     handleToggleBanner={() => handleToggle(1)}
//                     content={<Work />}
//                 />
//                 <Banner
//                     bannerName="CONTACT"
//                     bannerSlug="tree-banner"
//                     bannerSelected={state.showStates[2]}
//                     handleToggleBanner={() => handleToggle(2)}
//                     content={<Contact />}
//                 />
//             </div>
//             <Footer handleToggleBanner={(index) => handleToggle(index)}/>
//         </>
//     );
// };

// export default BannerToggler;
