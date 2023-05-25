import React from "react";

export default function LeaderboardCard({ leaderboard }) {
    //Esto cuando sea un json debe ser cambiado en su semántica
    return (
        <div id="profile" className="Leader">
            {Item(leaderboard.sort((a, b) => b.score - a.score))}
        </div>
    )
};

function Item(data) {
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="main"  key={index}>
                        <div className="info">
                            <h3>{value.name}</h3>
                            <span>{value.score}</span>
                        </div>
                        <div className="fecha">
                            <span>{value.date}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}