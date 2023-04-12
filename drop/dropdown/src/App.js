import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App border bg-warning p-2">
      <label>
        How much has pain from your hip INTERFERED WITH YOUR USUAL WORK
        (including housework)? (Left)
      </label>
      <select class=" form-select">
        <option class value="5" title="None, or ignores it">
          None, or ignores it
        </option>
        <option
          value="4"
          title="Slight, occasional, no compromise in activity "
        >
          Slight, occasional, no compromise in activity{" "}
        </option>
        <option
          class="text-break"
          value="3"
          title="Mild pain, no effect on average activities, rarely moderate pain with unusual activity, may take aspirin "
        >
          Mild pain, no effect on average activities, rarely moderate pain with
          unusual activity, may take aspirin{" "}
        </option>
        <option
          class="text-break"
          value="2"
          title="Moderate pain, tolerable but makes concessions to pain. Some limitations of ordinary activity or work. May require occasional pain medication stronger than aspirin"
        >
          Moderate pain, tolerable but makes concessions to pain. Some
          limitations of ordinary activity or work. May require occasional pain
          medication stronger than aspirin
        </option>
        <option value="1" title="Marked pain, serious limitation of activities">
          Marked pain, serious limitation of activities
        </option>
        <option
          value="0"
          title="Totally disabled, crippled, pain in bed, bedridden"
        >
          Totally disabled, crippled, pain in bed, bedridden
        </option>
      </select>

      {/* second select */}
      <select className="select-top">
        <option>
          Moderate pain, tolerable but makes concessions to pain. Some
          limitations of ordinary activity or work. May require occasional pain
          medication stronger than aspirin
        </option>
      </select>
    </div>
  );
}

export default App;
