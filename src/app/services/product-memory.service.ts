import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

export class ProductMemoryService {
  private products: Product[] = [];
  
  // Metodo que genrando el producto
  create (data: CreateProductDto): Product {
    const newProduct = {
    ...data,
    id: faker.datatype.number(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      image: faker.image.imageUrl(),
    }
  }
  return this.add(newProduct);
  }


  // Metodo que agrega el producto al array
  add (product: Product) {
    this.products.push
    return product;
  }

  update (id: Product['id'], changes: UpdateProductDto ): Product {
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  }

  findOne (id: Product['id']) {
    return this.products.find(item => item.id === id)
  }
}



