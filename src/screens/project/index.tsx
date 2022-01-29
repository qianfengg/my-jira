import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from 'react-router'
import DashboardScreen from "screens/dashboard";
import EpicScreen from "screens/epic";

export default function ProjectScreen() {
  return (
    <div>
      <h1>Project Screen</h1>
      <Link to="dashboard">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="dashboard" element={<DashboardScreen/>}/>
        <Route path="epic" element={<EpicScreen/>}/>
        <Route path="" element={<Navigate to="dashboard"/>}/>
      </Routes>
    </div>
  );
}
