import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'

const QuickAddBtn = () => {
  return (
      <Link to="/tracking/diary/quick_add">
        <Button>Quick Add</Button>
      </Link>
  );
};

export default QuickAddBtn;