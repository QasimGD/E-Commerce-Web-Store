import { ChangeDetectorRef, Component,inject } from '@angular/core';
import { Config } from 'datatables.net';
import { IProduct } from '../../interfaces/IProduct';
import {Firestore,doc,setDoc,CollectionReference,collection,getDocs,deleteDoc,updateDoc} from '@angular/fire/firestore'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  firestore: Firestore = inject(Firestore);
  collectionRef : CollectionReference;
  product: IProduct = {
    name: '',
    category: '',
    price: 0,
    quantity: 0
  };
  products : IProduct[] = []
  //product: IProduct = {}
  selectedProduct:IProduct={}
  constructor() {
      this.collectionRef = collection(this.firestore, "products")
  }

  async AddProduct() {
    const productDocument = doc(this.collectionRef)
    await setDoc(productDocument, this.product)
    alert("Product Added")
    this.ReadProduct()
  }
  async ReadProduct(){
    this.products = (await getDocs(this.collectionRef)).docs.map(item=>{
        return {id : item.id, ... item.data()}
    })
  }
  async DeleteProduct(id : string = ''){
    await deleteDoc(doc(this.firestore,"products",id))
    this.ReadProduct()
  }
  SelectedProduct(p : IProduct){
    this.selectedProduct = p
  }
  async UpdateProduct(){
      const id = this.selectedProduct.id || ''
      await updateDoc(doc(this.firestore,'products',id),{ ... this.selectedProduct})
      alert("Product is updated")
      this.ReadProduct()
  }

  
// async UpdateProduct(){
//   const id = this.selectedProudct.id || ''
//   await updateDoc(doc(this.firestore,'products',id),{ ... this.selectedProudct})
//   alert("Product is updated")
//   this.ReadProduct()
// }


  ngOnInit(): void {
    this.ReadProduct()
  }
}
