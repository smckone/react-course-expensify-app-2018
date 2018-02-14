import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {    
  const expensesCount = props.expenses.length;
  const formattedTotal = numeral(selectExpensesTotal(props.expenses) / 100).format('£0,0.00');
  const expenseWord = props.expenses.length === 1 ? "expense" : "expenses";
    if(expensesCount > 0) {
      return (      
        <div className='expenses-summary'>      
          <h1>Viewing {expensesCount} {expenseWord} totalling £{formattedTotal}</h1>
        </div>
      );
    } else {
      return (<div></div>);
    }
  };

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
