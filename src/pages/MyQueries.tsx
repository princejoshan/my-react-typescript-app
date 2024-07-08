import React from "react";
import "../styles/MyQueries.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

const MyQueries = () => {
  const navigate = useNavigate();
  const entries = useSelector((state: RootState) => state.filteredEntries);
  

  const handleAskQueryClick = () => {
    navigate("/askquery");
  };

  return (
    <div className="my-queries-view">
      {entries.length === 0 ? (
        <p>No queries currently available. Ask a query below.</p>
      ) : (
        entries.map((entry) => (
          <div key={entry.id} className="my-queries-card">
            <div className="container">
              <div className="content-wrapper-column">
                <div className="query-value">{entry.queryType}</div>
                <div className="query-title">{entry.query}</div>
              </div>
              <button>Resolved</button>
            </div>
            <div className="dot-separator" />
            <div className="content-wrapper-row">
              <div className="content-wrapper-column">
                <div className="query-title">{"Case type"}</div>
                <div className="query-value">{entry.caseType}</div>
              </div>
              <div className="content-wrapper-column">
                <div className="query-title">{"Sub case type"}</div>
                <div className="query-value">{entry.subCaseType}</div>
              </div>
            </div>
            <div
              className="content-wrapper-row"
              style={{ '--custom-gap': `${10}px` } as React.CSSProperties}
            >
              <div className="query-title">Closure Remark</div>
              <div className="query-value">NA</div>
            </div>
          </div>
        ))
      )}
      <br />
      <Button text="Ask a Query" onClick={() => handleAskQueryClick()} />
    </div>
  );
};
export default MyQueries;
