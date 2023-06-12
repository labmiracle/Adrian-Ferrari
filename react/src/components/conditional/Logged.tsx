export default function Logged({ setLogged }: { setLogged: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="conditional-logged">
      <p>Esta página solo puedo verla por que estoy logueado</p>
      <button onClick={() => setLogged(() => false)}>Cerrar sesion</button>
    </div>
  );
}
