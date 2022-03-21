import React from "react";

export class SearchResultItem extends React.Component<any, any> {
  render() {
    console.log(this.props);

    return (
      <div className="search-result-item">
        <img src={this.props.picture} width={"120px"} height={"120px"} />
        <div className="search-result-item__data">
          <h2 className="search-result-item__title">{this.props.title}</h2>
          <h4>Precio: ${this.props.price}</h4>
        </div>
      </div>
    );
  }
}
