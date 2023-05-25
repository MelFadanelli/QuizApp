import { Link } from "react-router-dom";
import LeaderboardCard from "../components/LeaderboardCard";
import React from "react";
import { LeaderboardDB } from "../components/LeaderboardDB";

function Leaderboard() {
    return (
        <div className="m-1">
            <LeaderboardCard leaderboard = {LeaderboardDB}></LeaderboardCard>
        </div>
    )
};

export default Leaderboard;