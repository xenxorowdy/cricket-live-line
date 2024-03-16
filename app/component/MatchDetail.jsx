import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TopTab from "./TopTab";
import Live from "./Live";
import Info from "./Info";
import Commentary from "./Commentary";
import HistoryComponet from "./History";
import ScoreBoard from "./ScoreBoard";
import PointsTable from "./PointsTable";
import {
  commentaryMatchById,
  fetchmatchInfo,
  liveMatchById,
  pointsTable,
  pointsTableBySeriesId,
  scorecardByMatchId,
} from "../api";
import Loading from "../Loading";

const matchDetail = [
  "Live",
  "Info",
  "Commentary",
  "ScoreBoard",
  "History",
  "Points Table",
];
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const MatchDetail = ({ matchId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeTab = (data, index) => {
    setCurrentIndex(index);
  };

  const [matchResult, setMatchResult] = useState([]);
  const [matchCommentry, setMatchCommentry] = useState([]);
  const [matchInfo, setMatchInfo] = useState([]);
  const [matchHistory, setMatchHistory] = useState([]);
  const [matchScoreBoard, setMatchScoreBoard] = useState([]);
  const [matchPointsTable, setMatchPointsTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchResult = async () => {

    console.log("match id", matchId);
    const data = await liveMatchById(matchId);
    console.log(data, "match result")
    setMatchResult(data);
    setLoading(false);
    fetchPointsTable(data.series_id);
  };
  const fetchCommentary = async () => {
    const data = await commentaryMatchById(matchId);

    setMatchCommentry(data ?? {});
  };
  const fetchInfo = async () => {
    const data = await fetchmatchInfo(matchId);
    console.log(data, "info");
    setMatchInfo(data ?? {});
  };
  const fetchScoreBoard = async () => {
    const data = await scorecardByMatchId(matchId);

    setMatchScoreBoard(data ?? {});
  };

  const fetchHistory = async () => {
    const data = await liveMatchById(matchId);

    setMatchHistory(data ?? {});
  };
  const fetchPointsTable = async (id) => {
    const data = await pointsTableBySeriesId(id);
    console.log("pointsTable", data ?? {});
    setMatchPointsTable(data ?? {});
  };
  const debouncedFetchData = debounce(fetchResult, 400);
  useEffect(() => {
    const timerId = setInterval(debouncedFetchData, 400); // Call debounced function

    return () => clearInterval(timerId); // Clean up on unmount
  }, []);
  useEffect(() => {
    setLoading(true)
    fetchResult();
    fetchCommentary();
    fetchInfo();
    fetchScoreBoard();
    fetchHistory();
  }, []);
  if (loading) return <Loading />;
  return (
    <View style={{}}>
      <TopTab
        option={matchDetail}
        currentIndex={currentIndex}
        handleChangeTab={handleChangeTab}
      />
      {currentIndex === 0 && <Live matchDetail={matchResult} />}
      {currentIndex === 1 && <Info matchId={matchId} matchInfo={matchInfo} />}
      {currentIndex === 2 && <Commentary matchCommentry={matchCommentry} />}
      {currentIndex === 3 && <ScoreBoard matchScoreBoard={matchScoreBoard} />}
      {currentIndex === 4 && <HistoryComponet matchHistory={matchHistory} />}
      {currentIndex === 5 && (
        <PointsTable matchPointsTable={matchPointsTable} />
      )}
    </View>
  );
};

export default MatchDetail;

const styles = StyleSheet.create({});
