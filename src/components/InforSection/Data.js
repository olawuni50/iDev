import image1 from "../../Images/1.svg"
import image2 from "../../Images/2.svg";
import image3 from "../../Images/3.svg"

export const homeObjOne = {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Premium Bank",
    headline: "Unlimited Transaction with zero fees",
    description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any.",
    buttonLabel: "Get started",
    imgStart: false, 
    img: (`${image1}`),
    alt: "Car",
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: "discover",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "Unlimited Access",
    headline: "Unlimited Access to your money, anytime, anyday",
    description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any.",
    buttonLabel: "Learn More",
    imgStart: true, 
    img: (`${image2}`),
    alt: "PiggyBank",
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: "signup",
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: "Join our Team",
    headline: "Creating an account is extremely easy",
    description: "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any.",
    buttonLabel: "Start Now",
    imgStart: false, 
    img: (`${image3}`),
    alt: "Secured",
    dark: false,
    primary:false,
    darkText: true
};