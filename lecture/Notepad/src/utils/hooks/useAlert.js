import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { alertSelector, alertAction } from 'redux/alert';
const { confirmPendingAction } = alertAction;

function useAlert() {
  const dispatch = useDispatch();
  const alertState = useSelector(alertSelector.all);

  useEffect(() => {
    if (alertState.text) {
      Swal.fire({
        title: alertState.title,
        text: alertState.text,
        icon: alertState.icon,
        confirmButtonText: alertState.confirmButtonText,
        denyButtonText: alertState.type === 'confirm' && alertState.denyButtonText,
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(confirmPendingAction());
        } else if (alertState.type === 'alert' && result.dismiss === Swal.DismissReason.backdrop) {
          dispatch(confirmPendingAction());
        }
      });
    }
  }, [dispatch, alertState]);
}
export default useAlert;
