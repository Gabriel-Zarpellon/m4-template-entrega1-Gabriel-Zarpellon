export interface iProduct {
  id: number;
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

type tProduct = Pick<iProduct, "name" | "price">;

type tProductUpdate = Partial<tProduct>;

type tMessage = {
  message: string;
};

export interface iCRUD {
  createProduct(data: tProduct): iProduct;

  getProducts(): iProduct[];

  getOneProduct(id: number): iProduct | null;

  updateProduct(id: number, data: tProductUpdate): iProduct;

  deleteProduct(id: number): tMessage;
}
