"use client";
import {
    Code2,
    Github,
    Instagram,
    Keyboard,
    Linkedin,
    Twitter,
    User2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Tooltip from "./Tooltip";
const Footer = () => {
    const router = useRouter();
    return (
        <div className="  flex flex-col  sm:flex-row sm:justify-between font-mono text-white px-20 py-4 ">
            <div className="flex justify-center my-4 sm:justify-between  gap-4">
                <Tooltip tooltipId='instagram'>
                    <Instagram
                        data-tooltip-content="Instagram"
                        data-tooltip-id="instagram"
                        size={30}
                        color="#99f6e4"
                        className="hover:cursor-pointer"
                        onClick={() => {
                            window.open("https://www.instagram.com/vinayselukar/", "_blank");
                        }}
                    />
                </Tooltip>
                <Tooltip tooltipId="github">
                    <Github
                        data-tooltip-content="GitHub"
                        data-tooltip-id="github"
                        size={30}
                        color="#99f6e4"
                        className="hover:cursor-pointer"
                        onClick={() => {
                            window.open("https://github.com/Vinayselukar21", "_blank");
                        }}
                    />
                </Tooltip>
                <Tooltip tooltipId="twitter">
                    <Twitter
                        data-tooltip-content="Twitter"
                        data-tooltip-id="twitter"
                        size={30}
                        color="#99f6e4"
                        className="hover:cursor-pointer"
                        onClick={() => {
                            window.open("https://twitter.com/Vinayselukar21", "_blank");
                        }}
                    />
                </Tooltip>
                <Tooltip tooltipId="linkedin">
                    <Linkedin
                        data-tooltip-content="LinkedIn"
                        data-tooltip-id="linkedin"
                        size={30}
                        color="#99f6e4"
                        className="hover:cursor-pointer"
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/vinayselukar/", "_blank");
                        }}
                    />
                </Tooltip>
                <Tooltip tooltipId="portfolio">
                    <User2
                        data-tooltip-content="Portfolio"
                        data-tooltip-id="portfolio"
                        size={30}
                        color="#99f6e4"
                        className="hover:cursor-pointer"
                        onClick={() => {
                            window.open(
                                "https://portfolio-five-virid-25.vercel.app/",
                                "_blank"
                            );
                        }}
                    />
                </Tooltip>
            </div>
            <div className="flex flex-no justify-center sm:justify-between gap-3 items-center text-teal-200">
                <Keyboard size={30} />
                <span>
                    Made by{" "}
                    <Link
                        href="https://portfolio-five-virid-25.vercel.app/"
                        target="_blank"
                    >
                        Vinay Selukar
                    </Link>
                </span>
            </div>
            <div className="flex items-center gap-2">
                <Code2 className="text-xl font-bold" />
                <Tooltip tooltipId="source-code">
                    <Link
                        href="https://github.com/Vinayselukar21/Typist"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xl hover:underline"
                        data-tooltip-content="Give me a star 😊"
                        data-tooltip-id="source-code"
                    >
                        Source Code ⭐
                    </Link>
                </Tooltip>
            </div>
        </div>
    );
};
export default Footer;
