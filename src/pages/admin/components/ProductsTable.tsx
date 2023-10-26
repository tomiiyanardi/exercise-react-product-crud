import Table from 'react-bootstrap/Table';

import Product from "../../../types/product";

type ProductsTableProps = {
  products: Product[];
};

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Category</th>
        <th>Price</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {
        products.map((p: Product) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>{p.description}</td>
            <td>{p.category}</td>
            <td>{p.price}</td>
            <td> <img alt={p.title} src={p.image} style={{ height: 30, width: 30 }} /></td>
          </tr>
        ))
      }
    </tbody>
  </Table>
);

export default ProductsTable;
