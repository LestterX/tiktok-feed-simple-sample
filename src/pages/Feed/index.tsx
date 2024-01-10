import Avatar from "../../components/Avatar";
import FeedGrid from "../../components/FeedGrid";

function FeedPage() {
    return (
        <>
            <div>
                <Avatar
                    realname="Lestter Gabriel"
                    nickname="LestterX"
                />
            </div>
            <div className="mt-10">
                <FeedGrid />
            </div>
        </>
    );
}

export default FeedPage;