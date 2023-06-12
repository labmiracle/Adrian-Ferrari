export default function Link({ openInNewTab }: { openInNewTab: boolean }) {
  return (
    <a href="https://react.dev/" target={openInNewTab ? "_blank" : "_self"}>
      React Docs
    </a>
  );
}
