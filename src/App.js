import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import RemainingMessage from "./components/RemainingMessage";
import "./App.css";
import { AppProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <div className="text-center">
          <img
            src={process.env.PUBLIC_URL + "/Piggy.png"}
            alt="piggy bank"
            width="300"
            height="300"
          />
          <h1 className="mt-3">My Piggy Bank</h1>
        </div>
        <div id="el">
          <span id="needle"></span>
        </div>
        <span id="remainingMessage">
          <strong>
            <RemainingMessage />
          </strong>
        </span>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Deposits</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Deposit</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
        <div class="bouncyBalls">
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>

          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
