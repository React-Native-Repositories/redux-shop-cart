import {getSpecificCarts} from '../../../services/Apis/products.service';
import {cartList, cartListLoading} from '../../actions/productActions';

export const getCartListList = (id) => async dispatch => {
  // const dispatch = useDispatch();
  try {
    dispatch(cartListLoading(true));
    let resp = await getSpecificCarts(id);
    if (resp) {
      dispatch(cartList(resp));
      dispatch(cartListLoading(false));
    } else {
      dispatch(cartListLoading(false));
    }
  } catch (error) {
    dispatch(cartListLoading(false));
  }
};
