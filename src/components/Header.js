import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {/* color nad text are props here which are then used in the Button component */}
      <Button
        color={`${!showAddTask ? "green" : "red"}`}
        text={`${!showAddTask ? "Add" : "Close"}`}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
