// eslint-disable-next-line @typescript-eslint/no-unused-vars
function changeTheme(theme: string) {
  const body = document.getElementById("body");
  if (body) {
    body.className = `${theme}`;
  }
}
