// Assets
import { Form, NavLink } from "react-router-dom";

import { TrashIcon } from "@heroicons/react/24/outline";

import logoMark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logoMark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {userName && (
        <Form
          method="POST"
          action="/logout"
          onSubmit={(e) => {
            if (!confirm("Are you sure you want to log out?"))
              e.preventDefault();
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
