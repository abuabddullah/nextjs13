
const Products = ({params}) => {
    const {id} = params
  return (<>
  
  <div>Products : {id}</div>
  <small>http://localhost:3000/products/randomId</small>
  </>
  )
}

export default Products