import { Metadata } from "next";
import Breadcrumb from "../components/breadcrumb";
import CreateItem from "../components/block/CreateItem";
import LiveAuctionModal from "../components/modal/LiveAuctionModal";

const item = {
    title: "Create Item",
    breadcrumb: [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Page",
            path: "/create-item",
        },
        {
            name: "Create Item",
        },
    ],
};

export const metadata: Metadata = {
    title: "Axies | NFT Marketplace React/Next Js Template | Create Item",
};

export default function page(): JSX.Element {
    return (
        <>
            <Breadcrumb data={item} />
            <CreateItem />

            {/* live auction product modal */}
            <LiveAuctionModal />
        </>
    );
}
