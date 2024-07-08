import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addQueryEntry } from "../redux/query/actions";
import { QueryEntry } from "../redux/query/types";
import "../styles/AskQuery.css";
import Button from "../components/Button";
import { AskQueryConstants } from "../utility/Constants";

const AskQueryPage = () => {
  const dispatch = useDispatch();
  const [caseType, setCaseType] = useState("");
  const [subCaseType, setsubCaseType] = useState("");
  const [query, setQuery] = useState("");
  const [caseTypeError, setCaseTypeError] = useState("");
  const [subCaseTypeError, setsubCaseTypeError] = useState("");

  const handleClick = () => {
    if (!caseType) {
      setCaseTypeError("Please select a Case Type.");
      return;
    }
    if (!subCaseType) {
      setsubCaseTypeError("Please select a Sub Case Type.");
      return;
    }
    const newEntry: QueryEntry = {
      id: Date.now(),
      subCaseType,
      query,
      caseType,
    };
    dispatch(addQueryEntry(newEntry));
    setsubCaseType("");
    setQuery("");
    setCaseType("");
    alert("form submitted");
  };

  const handleCaseTypeChange = (value: string) => {
    setCaseType(value);
    if (caseTypeError && value !== "") {
      setCaseTypeError("");
    }
  };

  const handleSubCaseTypeChange = (value: string) => {
    setsubCaseType(value);
    if (subCaseTypeError && value !== "") {
      setsubCaseTypeError("");
    }
  };

  return (
    <div className="askquery-background">
      <div className="view">
        <h1>{AskQueryConstants.main_title}</h1>
        <div className="content">
          <form>
            <div className="form-row">
              <label>Case Type:</label>
              <select
                className="custom-select"
                onChange={(e) => handleCaseTypeChange(e.target.value)}
                required
              >
                <option value="">Select Case Type</option>
                {AskQueryConstants.case_type_list.map((option, index) => (
                  <option key={index} value={option.title}>
                    {option.title}
                  </option>
                ))}
              </select>
              {caseTypeError && (
                <p className="error-message">{caseTypeError}</p>
              )}
            </div>
            <div className="form-row">
              <label>Sub Case Type:</label>
              <select
                className="custom-select"
                onChange={(e) => handleSubCaseTypeChange(e.target.value)}
                required
              >
                <option value="">Select Sub Case Type</option>
                {AskQueryConstants.sub_case_type_list.map((option, index) => (
                  <option key={index} value={option.title}>
                    {option.title}
                  </option>
                ))}
              </select>
              {subCaseTypeError && (
                <p className="error-message">{subCaseTypeError}</p>
              )}
            </div>
            <div className="form-row">
              <label>Query:</label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
        <div className="sticky-buttons">
          <Button text="Back" onClick={handleClick} />
          <Button text="Submit" onClick={handleClick} />
        </div>
      </div>
      <div className="view1"></div>
    </div>
  );
};

export default AskQueryPage;
