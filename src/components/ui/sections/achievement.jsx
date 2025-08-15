import { achievement } from "@/data/data";
import AchievementCard from "../cards/achievement-card";

export default function Achievement() {
    return (
        <>
            <div className="section blaise-section-padding-bottom">
                <div className="container">
                    <div
                        className="blaise-counter-wrap"
                        style={{
                            backgroundImage:
                                'url("/assets/images/v2/counter-bg.png")',
                        }}
                    >
                        {/* achievment start */}
                        {achievement?.map((item, i) => (
                            <AchievementCard key={i} data={item} index={i} />
                        ))}
                        {/* achievment end */}
                    </div>
                </div>
            </div>
        </>
    );
}
