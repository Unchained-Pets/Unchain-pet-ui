import Contact2 from "@/app/components/block/Contact2";
import Breadcrumb from "@/app/components/breadcrumb";
import { Metadata } from "next";

const item = {
    title: "Contact 2",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Contact",
            path: "/contact-2",
        },
        {
            name: "Contact 2",
        },
    ],
};

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace React/Next Js Template | Contact 2",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <Contact2 />
        </>
    );
}
