import { iCRUD, iProduct } from "./interfaces";

class ProductList implements iCRUD {
  private productList: iProduct[] = [];
  id = 1;
  date = new Date();

  createProduct(data: { name: string; price: number }): iProduct {
    const product: iProduct = {
      id: this.id,
      name: data.name,
      price: data.price,
      createdAt: this.date.toDateString(),
      updatedAt: this.date.toDateString(),
    };

    this.productList.push(product);
    this.id++;

    return product;
  }

  getProducts(): iProduct[] {
    return this.productList;
  }

  getOneProduct(id: number): iProduct | null {
    const index = this.productList.findIndex((product) => product.id == id);
    return this.productList[index];
  }

  updateProduct(
    id: number,
    data: Partial<{ name: string; price: number }>
  ): iProduct {
    const updateIndex = this.productList.findIndex(
      (product) => product.id == id
    );

    const updatedProduct = {
      id: id,
      name: data.name ? data.name : this.productList[updateIndex].name,
      price: data.price ? data.price : this.productList[updateIndex].price,
      createdAt: this.productList[updateIndex].createdAt,
      updatedAt: this.date.toDateString(),
    };

    this.productList.splice(updateIndex, 1, updatedProduct);

    return this.productList[updateIndex];
  }

  deleteProduct(id: number): { message: string } {
    const deleteIndex = this.productList.findIndex(
      (product) => product.id == id
    );

    this.productList.splice(deleteIndex, 1);

    return {
      message: "Product successfully deleted.",
    };
  }
}

export const productList = new ProductList();