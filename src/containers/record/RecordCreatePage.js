import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { push as updatePath } from "react-router-redux";

import RecordCreate from "../../components/record/RecordCreate";
import * as CollectionActions from "../../actions/collection";
import * as NotificationsActions from "../../actions/notifications";


function mapStateToProps(state) {
  return {
    session: state.session,
    bucket: state.bucket,
    collection: state.collection,
    record: state.record,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...CollectionActions,
    ...NotificationsActions,
    updatePath
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordCreate);
