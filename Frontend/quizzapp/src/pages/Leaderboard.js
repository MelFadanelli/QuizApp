import { Link } from "react-router-dom";
import LeaderboardCard from "../components/LeaderboardCard";
import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.askyquizzy.me/leaderboard");
      const data = await response.json();
      console.log(data);
      setLeaderboardData(data);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  return (
    <div className="m-1">
      <LeaderboardCard leaderboard={leaderboardData} />
    </div>
  );
}

export default Leaderboard;
