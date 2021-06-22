import React from "react";

function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      style={{ backgroundColor: props.color, color: 'white' }}
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
