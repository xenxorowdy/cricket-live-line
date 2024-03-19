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
import _ from "lodash";
import Loading from "../Loading";

const matchDetail = [
  "Live",
  "Info",
  "Commentary",
  "ScoreBoard",
  "History",
  "Points Table",
];


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
  let incre = 0;
  const fetchResult = async () => {


    const data = await liveMatchById(matchId);
    if (!data) return;
    const { batting_team, team_b_scores, team_a_scores, team_b_over, team_a_over, team_b_id, team_a_id, team_b_short, team_a_short } = data;

    if (batting_team == team_b_id) {
      data.battingTeam = team_b_short;
      data.battingScore = team_b_scores && `${team_b_scores || '-'} (${team_b_over || '-'})`;
    }
    if (batting_team == team_a_id) {
      data.battingTeam = team_a_short;
      data.battingScore = team_a_scores && `${team_a_scores || '-'} (${team_a_over || '-'})`;
    }
    if (batting_team != team_b_id) {
      data.secbattingTeam = team_b_short;
      data.secbattingScore = team_b_scores && `${team_b_scores || '-'} (${team_b_over || '-'})`;
    }
    if (batting_team != team_a_id) {
      data.secbattingTeam = team_a_short;
      data.secbattingScore = team_a_scores && `${team_a_scores || '-'} (${team_a_over || '-'})`;
    }

    setMatchResult(data);
    setLoading(false);

  };
  const fetchCommentary = async () => {
    const data = await commentaryMatchById(matchId);

    setMatchCommentry(data ?? {});
  };
  const fetchInfo = async () => {
    const data = await fetchmatchInfo(matchId);
    setLoading(false);

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
    setMatchPointsTable(data ?? {});
  };

  const debouncedRender = _.debounce(async () => {
    await fetchResult()
  }, 200);
  // Simulate an event triggering the render
  useEffect(() => {
    const timerId = setInterval(debouncedRender, 300);
    return () => clearInterval(timerId);
  }, []);
  useEffect(() => {
    setLoading(true)
    fetchResult();
    fetchCommentary();
    fetchInfo();
    fetchScoreBoard();
    fetchHistory();
    setLoading(true)
  }, []);
  if (loading && matchResult.length) return <Loading />;
  return (
    <View style={{}}>
      <TopTab
        option={matchDetail}
        currentIndex={currentIndex}
        handleChangeTab={handleChangeTab}
      />
      {currentIndex === 0 && <Live matchDetail={matchResult} />}
      {currentIndex === 1 && <Info matchId={matchId} matchInfo={matchInfo} />}
      {currentIndex === 2 && <Commentary matchCommentry={matchCommentry} matchInfo={matchInfo} />}
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
