import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

import Product from "../../../types/product";
import DataLayer from '../../../lib/data-layer';

const DeleteProductModal = React.lazy(() => import('./DeleteProductModal'));

type ProductsTableProps = {
  products: Product[];
};

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  // State
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [showDeleteModal, setShowDeleteModal] = React.useState<boolean>(false);
  const [listedProducts, setListedProducts] = React.useState<Product[]>(products);
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  // Handlers
  const onShowDeleteModal = React.useCallback((p: Product) => {
    setSelectedProduct(p);
    setShowDeleteModal(true);
  }, [setSelectedProduct, setShowDeleteModal]);
  const onCloseDeleteModal = React.useCallback(() => setShowDeleteModal(false), [setShowDeleteModal]);
  const onDelete = React.useCallback(() => {
    if (selectedProduct) {
      setShowDeleteModal(false);
      setLoading(true);
      DataLayer.delete.product(selectedProduct.id)
        .then((deletedProduct: Product) => setListedProducts((prevState: Product[]) => prevState.filter((item: Product) => item.id !== deletedProduct.id)))
        .catch((error: any) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [selectedProduct, setShowDeleteModal, setListedProducts, setLoading]);

  // Render
  if (error) {
    return (
      <Alert variant="danger">
        {error?.message || 'Something went wrong while fetching products.'}
      </Alert>
    );
  }

  return (
    <React.Suspense fallback={<Spinner animation="border" />}>
      {
        loading
          ? (
            <div style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center', width: '100wh' }}>
              <Spinner animation="border" />
            </div>
          )
          : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  listedProducts.map((p: Product) => (
                    <tr key={p.id}>
                      <td width='2%'>{p.id}</td>
                      <td width='23%'>{p.title}</td>
                      <td width='45%'>{p.description}</td>
                      <td width='10%'>{p.category}</td>
                      <td width='5%'>{p.price}</td>
                      <td width='5%'><img alt={p.title} src={p.image} style={{ height: 30, width: 30 }} /></td>
                      <td width='10%'>
                        <Button variant="link">Edit</Button>
                        <Button onClick={() => onShowDeleteModal(p)} variant="link">Delete</Button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          )
      }
      <DeleteProductModal onDelete={onDelete} onHide={onCloseDeleteModal} product={selectedProduct} show={showDeleteModal} />
    </React.Suspense>
  );
};

export default ProductsTable;
