export default function Button({
  setString,
  action,
}: {
  setString: React.Dispatch<React.SetStateAction<string>>;
  action: string;
}) {
  function changeString() {
    if (action === "incrementar") return setString((str: string) => str.concat("a"));
    if (action === "decrementar") return setString((str: string) => str.slice(0, -1));
  }

  return (
    <button className="state-btn" onClick={changeString}>
      {action}
    </button>
  );
}
