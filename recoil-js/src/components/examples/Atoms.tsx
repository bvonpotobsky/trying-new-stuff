import { atom, useRecoilState, useRecoilValue } from "recoil";

const darkModeAtom = atom({
  key: "darkMode",
  default: false,
});

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);

  return (
    <input
      type="checkbox"
      checked={darkMode}
      onChange={(e) => setDarkMode(e.currentTarget.checked)}
    />
  );
};

const Button = () => {
  const darkMode = useRecoilValue(darkModeAtom);

  return (
    <button
      style={{
        backgroundColor: darkMode ? "white" : "black",
        color: darkMode ? "black" : "white",
      }}
    >
      UI Button
    </button>
  );
};

const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};

export default Atoms;
