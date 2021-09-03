import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'el1',
      title:'Car Insurance',
      amount: 250,
      date:new Date(2021,2,12)
    },
    {
      id: 'el2',
      title:'24th Birthday',
      amount: 12000,
      date:new Date(2021,3,12)
    },
    {
      id: 'el3',
      title:'Vaccine',
      amount: 250,
      date:new Date(2021,6,12)
    },
    {
      id: 'el4',
      title:'Renovation',
      amount: 20000,
      date:new Date(2021,8,12)
    },

  ];




  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>
       <ExpenseItem 
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      ></ExpenseItem>
      
    </div>
  );
}

export default App;
