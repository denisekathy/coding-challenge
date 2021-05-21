import react from "react";
import { Link } from "react-router-dom";
import InputForm from "../../Components/InputForm/InputForm";
import './HomePage.css'

export default function HomePage() {
  return (
    <>
    <h2>Pick two(one from each column) and we will recommend a store!</h2>
      <ul>
          <li>
      <form>
        <input type="radio" id="list" name="listone" value="Target" />
        <label for="shoes">Shoes</label>
        <br />
        <input type="radio" id="list" name="listone" value="Walmart" />
        <label for="pants">Pants</label>
        <br />
        <input type="radio" id="list" name="listone" value="Walmart" />
        <label for="groceries">Groceries</label>
        <br />
        <input type="radio" id="list" name="listone" value="Walmart" />
        <label for="ipad">Ipad</label>
        <br />
        <input type="radio" id="list" name="listone" value="Target" />
        <label for="candles">Candles</label>
        <br />
      </form>
      </li>
      </ul>
      <ul>

          <li>
      <form>
        <input type="radio" id="list" name="listtwo" value="Walmart" />
        <label for="fishinggear">Fishing Gear</label>
        <br />
        <input type="radio" id="list" name="listtwo" value="Walmart" />
        <label for="basketball">Basketball</label>
        <br />
        <input type="radio" id="list" name="listtwo" value="Target" />
        <label for="petsupplies">Pet Supplies</label>
        <br />
        <input type="radio" id="list" name="listtwo" value="Target" />
        <label for="toys">Toys</label>
        <br />
        <input type="radio" id="list" name="listtwo" value="Target" />
        <label for="bodywash">Body Wash</label>
        <br />
      </form>
      </li>
      </ul>
    </>
  );
}
