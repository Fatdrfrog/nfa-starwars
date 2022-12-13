import { Outlet } from "react-router-dom";

export const ContentLayout = () => {
  return (
    <div className="content-layout">
      <Outlet />
    </div>
  );
};
