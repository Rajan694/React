import "../css/Custom.css"; //its dedicated css file
import style from "../css/custom.module.css"; //overall css file from which required classes will be imported

function Style() {
  return (
    <div>
      <h1 className="success">Success coming from dedicated style file</h1>
      {/*from dedicated style file */}
      <h1 className={style.danger}>Error coming from overall css file</h1>
      {/*from overall css file */}
      <h1 style={{ color: "aqua" }}>Information coming from inline css</h1>
      {/*inline css */}
      <h1 className="text-warning">Warning coming from bootstrap</h1>
      {/*from bootstrap class */}
    </div>
  );
}

export default Style;
