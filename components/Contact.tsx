import DownloadResumeUtil from "@/utils/DownloadResumeUtil";
import PullImage from "@/utils/PullImage";
import useSWR from "swr";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Contact: React.FC = () => {
    // SWR
    // Create a function to fetch the logo data
    const fetchResume = async () => DownloadResumeUtil();
    // Use the useSWR hook to fetch the data and handle caching
    const {
        data: resume,
        error: error1,
        isLoading: isLoading1,
    } = useSWR("resume", fetchResume);

    if (error1) {
        return <>{`Error fetching resume from SWR: ", ${error1}`}</>;
    }

    // SWR
    // Create a function to fetch the logo data
    const fetchLogo = async () => PullImage("bm-logo-reverse-white");
    // Use the useSWR hook to fetch the data and handle caching
    const { data: logo, error: error2, isLoading: isLoading2 } = useSWR("bm-logo-reverse-white", fetchLogo);
    if (error2) {
        console.error("Error fetching BM logo: ", error2);
    } else if (!isLoading2) {
        console.log("logo: ", logo);
    }

    return (
        <>
            <div className="contactContainer">
                <div className="contactContactInfo">
                    <div className="contactAddress">
                        BAY AREA CALIFORNIA USA
                    </div>
                    <ul className="contactLinkItems">
                        {isLoading1 ? (
                            <li>LOADING RESUME</li>
                        ) : resume ? (
                            resume.map((item) => (
                                <li key={item._id}>
                                    <a
                                        className="contactLink"
                                        href={item.resumeURL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        RESUME
                                    </a>
                                    <HiMiniArrowUpRight />
                                </li>
                            ))
                        ) : (
                            <li>RESUME UNAVAILABLE</li>
                        )}
                        <li>
                            <a
                                className="contactLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:bmalberg2020@gmail.com?subject=contacting from bmalberg.com"
                            >
                                EMAIL
                            </a>
                            <HiMiniArrowUpRight />
                        </li>
                        <li>
                            <a
                                className="contactLink"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/benjamin-malberg/"
                            >
                                LINKEDIN
                            </a>
                            <HiMiniArrowUpRight />
                        </li>
                    </ul>
                </div>
                <div className="contactLogo">{logo}</div>
            </div>
        </>
    );
};

export default Contact;
