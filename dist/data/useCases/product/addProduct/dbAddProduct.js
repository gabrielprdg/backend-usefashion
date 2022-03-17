"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddProduct = void 0;
/*
  my use case class, or my domain class,
  must not point to or implement a class linked to the infra,
  it's infra that must point to the domain classes
  AddProductRepository is a abstraction

  apontar = depender/dependência ou ate mesmo implementar
*/
class DbAddProduct {
    constructor(addProductRepository) {
        this.addProductRepository = addProductRepository;
    }
    async add(productData) {
        await this.addProductRepository.add(productData);
    }
}
exports.DbAddProduct = DbAddProduct;
//# sourceMappingURL=dbAddProduct.js.map