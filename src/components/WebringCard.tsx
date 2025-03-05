import GenericCard from "@/components/GenericCard";
import Link from "next/link";

const WebringCard = () => {
    return (
        <GenericCard className="text-center mx-auto w-fit px-6">
            <div className="flex items-center justify-center">
                <Link href={"https://ring.ssi.fyi/previous?host=devlencio.net"} className="mr-2">{""}</Link>
                <Link href={"https://ring.ssi.fyi"}>
                    <h2 className="text-2xl font-semibold mx-2">SSI Webring</h2>
                </Link>
                <Link href={"https://ring.ssi.fyi/next?host=devlencio.net"} className="ml-2">{""}</Link>
            </div>
        </GenericCard>
    )
}

export default WebringCard;
