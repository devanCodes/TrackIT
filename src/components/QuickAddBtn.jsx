import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'

const QuickAddBtn = () => {
  return (
    <Button>
      <Link to="/tracking/diary/quick_add">Quick Add</Link>
    </Button>
  );
};

export default QuickAddBtn;