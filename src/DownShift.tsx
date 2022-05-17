import * as React from "react";
import Downshift, { DownshiftProps } from "downshift";

const items = ["apple", "pear", "orange", "grape", "banana"];

export default ({
  value,
  onChange
}: DownshiftProps<string> & { value: string }) => (
  <Downshift
    initialInputValue={value}
    onChange={onChange}
    itemToString={item => (item ? item : "")}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem
    }) => (
      <div>
        <label {...getLabelProps()} className="label">
          Downshift
        </label>
        <input
          {...getInputProps()}
          className="input"
          placeholder="Enter a fruit"
        />
        <ul {...getMenuProps()}>
          {isOpen
            ? items
                .filter(item => !inputValue || item.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item,
                      index,
                      item
                    })}
                  >
                    {item}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
);
