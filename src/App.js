import React from 'react'
import { stack as Menu } from 'react-burger-menu';
import './App.css';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsX, BsListNested } from "react-icons/bs";


export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <div>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          className="_menue"
          noOverlay
        >
          <BsX color="#b8b7ad" size="30" onClick={() => this.closeMenu()} className="_closeIcon" />
          <p className="_page">Home</p>
          <p className="_page">About</p>
          <p className="_page">Contact</p>
          <p className="_page">Settings</p>
        </Menu>
        <div className="_navBar">
          <div>
            <BsListNested onClick={() => this.toggleMenu()} size="40" color="white" />
          </div>
          <div>
            <p className="_logout">LOGOUT</p>
          </div>
        </div>
      </div>
    )
  }
}
