import { Starships } from "./Starships";
import { Characters } from "./Characters";
import { Planets } from "./Planets";

export const ContentLayout = () => {
  return (
    <div className="content-layout">
      <Planets />
      <Characters />
      <Starships />
    </div>
  );
};
