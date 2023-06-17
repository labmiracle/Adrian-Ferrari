import "./css/gridCell.scss";

export type GridCellType = {
  children: React.ReactNode | undefined;
  drop?: React.DragEventHandler<HTMLImageElement>;
  dropCellID?: string;
};

export default function GridCell({ children, drop, dropCellID }: GridCellType) {
  function allowDrag(event: React.DragEvent<HTMLImageElement>) {
    drop === undefined ? undefined : event.preventDefault();
  }

  function onDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const target = event.target as Element;
    if (target.classList.contains("dropzone")) {
      target.classList.remove("dragover");
    }
  }

  function onDragEnter(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const target = event.target as Element;
    if (target.classList.contains("dropzone")) {
      target.classList.add("dragover");
    }
  }

  return (
    <div
      className={dropCellID ? "grid-cell dropzone" : "grid-cell"}
      id={dropCellID ? dropCellID : undefined}
      onDragOver={allowDrag}
      onDrop={drop}
      onDragLeave={onDragLeave}
      onDragEnter={onDragEnter}
    >
      {children}
    </div>
  );
}
