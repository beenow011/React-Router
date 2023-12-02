import React from "react";
import { useParams } from "react-router-dom";
export const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-gray-700 text-white text-3xl p-4 rounded-lg m-6">
      user: {userid}
    </div>
  );
};
