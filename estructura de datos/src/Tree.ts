class NodeB {
  value: number;
  left: NodeB | null = null;
  right: NodeB | null = null;
  constructor(data: number) {
    this.value = data;
  }
}

export class TreeB {
  private root: NodeB | null = null;
  public insert(data: number) {
    if (!this.root) {
      this.root = new NodeB(data);
      return;
    }
    const innerInsert = (node: NodeB = this.root!) => {
      let current = node;
      if (data < current.value) {
        if (!current.left) {
          current.left = new NodeB(data);
          return;
        }
        innerInsert(current.left);
      }
      if (data > current.value) {
        if (!current.right) {
          current.right = new NodeB(data);
          return;
        }
        innerInsert(current.right);
      }
    };
    innerInsert();
  }
  public inorder() {
    const treeStructure: number[] = [];
    const inner = (node: NodeB | null = this.root) => {
      if (node == null) {
        return [];
      }
      inner(node.left);
      treeStructure.push(node.value);
      inner(node.right);
      return treeStructure;
    };
    return inner();
  }

  public preorder() {
    const treeStructure: number[] = [];
    const inner = (node: NodeB | null = this.root) => {
      if (node == null) {
        return [];
      }
      treeStructure.push(node.value);
      inner(node.left);
      inner(node.right);
      return treeStructure;
    };
    return inner();
  }

  public postorder() {
    const treeStructure: number[] = [];
    const inner = (node: NodeB | null = this.root) => {
      if (node == null) {
        return [];
      }
      inner(node.left);
      inner(node.right);
      treeStructure.push(node.value);
      return treeStructure;
    };
    return inner();
  }

  public count() {
    return this.inorder().length;
  }

  public max() {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  public min() {
    if (!this.root) {
      return null;
    }
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }
}
