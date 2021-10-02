import React from "react";
import List from "./list";
import SearchPanel from "./search-panel";

export default function ProjectList() {
  return (
    <div>
      <SearchPanel />
      <List />
    </div>
  );
}
