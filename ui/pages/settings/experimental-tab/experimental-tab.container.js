import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setUseNftDetection,
  setOpenSeaEnabled,
  setTransactionSecurityCheckEnabled,
  setSecurityAlertBlockaidEnabled,
} from '../../../store/actions';
import {
  getUseNftDetection,
  getOpenSeaEnabled,
  getIsTransactionSecurityCheckEnabled,
  getIsSecurityAlertBlockaidEnabled,
} from '../../../selectors';
import ExperimentalTab from './experimental-tab.component';

const mapStateToProps = (state) => {
  return {
    useNftDetection: getUseNftDetection(state),
    openSeaEnabled: getOpenSeaEnabled(state),
    transactionSecurityCheckEnabled:
      getIsTransactionSecurityCheckEnabled(state),
    securityAlertBlockaidEnabled: getIsSecurityAlertBlockaidEnabled(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUseNftDetection: (val) => dispatch(setUseNftDetection(val)),
    setOpenSeaEnabled: (val) => dispatch(setOpenSeaEnabled(val)),
    setTransactionSecurityCheckEnabled: (val) =>
      dispatch(setTransactionSecurityCheckEnabled(val)),
    setSecurityAlertBlockaidEnabled: (val) =>
      dispatch(setSecurityAlertBlockaidEnabled(val)),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ExperimentalTab);
