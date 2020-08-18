import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={this.props.senators} />
      </div>
    )
  }
}

export class SenatorTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let senatorArray = this.props.senators.map((senatorObj) => {
      return (
        <SenatorRow key={this.props.id} senator={senatorObj} />
      )
    })

    return (
    <table className="table table-bordered">
      <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
      <tbody>
        {senatorArray}
      </tbody>
    </table>
    )
  }
}

export class TableHeader extends React.Component {
  render() {
    let colArray = this.props.cols.map((category) => {
      return <th key={category}>{category}</th>
    })
    
    return (
      <thead>
        <tr>
          {colArray}
        </tr>
      </thead>
    )
  }
}

export class SenatorRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let telLink = "tel:"+this.props.senator.phone;
    let twitterLink = "https://twitter.com/"+this.props.senator.twitter;

    return (
      <tr>
        <td key='name'>{this.props.senator.name}</td>
        <td key='partyAndState'>{this.props.senator.party.charAt(0)} - {this.props.senator.state}</td>
        <td key='phone'><a href={telLink}>{this.props.senator.phone}</a></td>
        <td key='twitter'><a href={twitterLink}>@{this.props.senator.twitter}</a></td>
      </tr>
    )
  }
}
