import React from "react";

export class SearchForm extends React.Component<any, any> {
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (this.props.onSearch) {
        const search = e.target.search.value;
        this.props.onSearch(search);
      }
    };
    return (
      <form
        className="search-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          ¿Qué estas buscando?
          <input type="text" name="search" />
        </label>
        <button>Buscar</button>
      </form>
    );
  }
}
