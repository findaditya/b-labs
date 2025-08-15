import { achievement2 } from "@/data/data";
import AchievementCard2 from "../cards/achievement-card-2";

export default function Achievement2() {
    return (
        <>
            <div className="blaise-counter-section3">
                <div className="container">
                    <div className="blaise-counter-wrap3">
                        {/* achievement card start */}
                        {achievement2?.map((item, i) => (
                            <AchievementCard2 key={i} data={item} index={i} />
                        ))}
                        {/* achievement card end */}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="blaise-divider" />
            </div>
        </>
    );
}
