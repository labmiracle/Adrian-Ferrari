export default function LogIn({ setLogged }: { setLogged: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="conditional-login">
      <p>Inicia sesión para ver contenido privado</p>
      <button onClick={() => setLogged(() => true)}>Login</button>
    </div>
  );
}
