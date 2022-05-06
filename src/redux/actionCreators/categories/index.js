import {getAllCategories} from '../../../services/Apis/products.service';
import {
  categoriesList,
  categoriesListLoading,
} from '../../actions/productActions';

export const getCategoryListList = () => async dispatch => {
  // const dispatch = useDispatch();
  try {
    dispatch(categoriesListLoading(true));
    let resp = await getAllCategories();
    if (resp) {
      dispatch(categoriesList(resp));
      dispatch(categoriesListLoading(false));
    } else {
      dispatch(categoriesListLoading(false));
    }
  } catch (error) {
    dispatch(categoriesListLoading(false));
  }
};
