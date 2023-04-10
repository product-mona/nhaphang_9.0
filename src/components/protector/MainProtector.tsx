import React, { ReactElement } from "react";

export const MainProtector: React.FC<{children: ReactElement}> = ({children}) => {
  console.log("MainProtector");
  
  return (
    <div className="MainProtector">
      {children}
    </div>
  );
};
