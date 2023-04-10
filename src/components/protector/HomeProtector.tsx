import React, { ReactElement } from "react";

export const HomeProtector: React.FC<{children: ReactElement}> = ({children}) => {
  return (
    <div className="HomeProtector">
      {children}
    </div>
  );
};
