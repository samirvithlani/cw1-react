import React from "react";
import { Link } from "react-router-dom";

export const Shows = () => {
  return (
    <div>
      <h1>ALL SHOWS LIST</h1>
      <ul>
        <li>
          <Link to="/movies">MOVIES</Link>
        </li>
        <li>
          <Link to="/shows/series">SERIES</Link>
        </li>
      </ul>
    </div>
  );
};
