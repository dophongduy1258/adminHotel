import Contents from "./contents";
import Entry from "./entrys";
import Header from "./header";
import TabControl from "./tabControl";

export default function MainLayout(props) {
  return (
    <div className="container">
      {/* <TabControl/> */}
      <div className="widget">
        <TabControl />
      </div>

      <div className="contents">
        <Header />
        {props.children}
      </div>
    </div>
  );
}
