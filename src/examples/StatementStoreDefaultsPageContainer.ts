// import { connect } from "react-redux";
// import { Statement, Balance } from "../../../shared/types/Statement";

// import StatementsStoreDefaultsPage from "./StatementsStoreDefaultsPage";
// import StatementActions from "../actions/StatementActions";
// import ConfigurationActions from "../actions/ConfigurationActions";
// import { RootState } from "../reducers/RootReducer";

// interface StateProps {
//   statements: Statement[];
//   statementCount: number;
//   inTransitCount: number;
//   statementSum: number;
//   location: any;
//   match: any;
//   currentPage: number;
//   balances: Balance[];

//   isEditAllowed: boolean;
//   isModalOpen: boolean;
//   combineTransactionGroups: boolean;
//   depositPeriod: string;
//   holdUntilDelay: number;
// }

// interface DispatchProps {
//   getStatementList: (page: number) => void;
//   getStatementDetails: (id: string) => void;
//   changePage: (page: number) => void;
//   setAccountConfig: () => void;
//   showConfigModal: (modal: boolean) => void;
// }

// const mapStateToProps = (state: RootState, ownProps: any): StateProps => {
//   return {
//     statements: state.statement.statements,
//     match: ownProps.match,
//     location: ownProps.location,
//     currentPage: ownProps.match.params.pageNum || 1,
//     statementCount: state.statement.statementCount,
//     inTransitCount: state.statement.inTransitCount,
//     statementSum: state.statement.statementSum,
//     balances: state.initalState.balances,

//     isEditAllowed: state.initalState.isEditAllowed,
//     isModalOpen: state.configuration.isModalOpen,
//     combineTransactionGroups: state.configuration.combineTransactionGroups,
//     depositPeriod: state.configuration.depositPeriod,
//     holdUntilDelay: state.configuration.holdUntilDelay
//   };
// };

// function mapDispatchToProps(dispatch: any): DispatchProps {
//   return {
//     getStatementList(page) {
//       dispatch(StatementActions.listStatements(page));
//     },
//     getStatementDetails(id) {
//       dispatch(StatementActions.getStatementDetails(id));
//     },
//     changePage(page) {
//       dispatch(StatementActions.changeStatementPage(page));
//     },
//     setAccountConfig() {
//       dispatch(ConfigurationActions.getAccountConfig());
//     },
//     showConfigModal(modal: boolean) {
//       dispatch(ConfigurationActions.showConfigModal(modal));
//     }
//   };
// }

// export type StatementsStoreDefaultsPageProps = DispatchProps & StateProps;
// export default connect(mapStateToProps, mapDispatchToProps)(
//   StatementsStoreDefaultsPage
// ) as any;