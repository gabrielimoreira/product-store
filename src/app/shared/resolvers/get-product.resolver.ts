import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductsService } from "../services/products.service";

export const getProduct = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const productsService = inject(ProductsService);
     return productsService.get(route.paramMap.get('id') as string);
 }