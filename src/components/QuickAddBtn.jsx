import React from "react";
import { Link } from "react-router-dom";

const QuickAddBtn = () => {
  return (
    <button>
      <Link to="/tracking/diary/quick_add">Quick Add</Link>
    </button>
  );
};

export default QuickAddBtn;