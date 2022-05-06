import {getAllProducts} from '../../../services/Apis/products.service';
import {productsList, productsListLoading} from '../../actions/productActions';

export const getProductList = () => async dispatch => {
  // const dispatch = useDispatch();
  try {
    dispatch(productsListLoading(true));
    let resp = await getAllProducts();
    if (resp) {
      dispatch(productsList(resp));
      dispatch(productsListLoading(false));
    } else {
      dispatch(productsListLoading(false));
    }
  } catch (error) {
    dispatch(productsListLoading(false));
  }
};
