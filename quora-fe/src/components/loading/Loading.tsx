import React from "react";

function Loading() {
  return (
    <div>
      <div className="flex justify-center animate-ping my-8">
        <div className="w-2 h-2 mx-1 dark:bg-primaryLight bg-indigo rounded-full"></div>
        <div className="w-2 h-2 mx-1 dark:bg-primaryLight bg-indigo rounded-full"></div>
        <div className="w-2 h-2 mx-1 dark:bg-primaryLight bg-indigo rounded-full"></div>
        <div className="w-2 h-2 mx-1 dark:bg-primaryLight bg-indigo rounded-full"></div>
        <div className="w-2 h-2 mx-1 dark:bg-primaryLight bg-indigo rounded-full"></div>
      </div>
    </div>
  );
}

export default Loading;
